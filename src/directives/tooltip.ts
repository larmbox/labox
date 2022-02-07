import { DirectiveBinding, createApp, ref } from 'vue';
import { useLabox } from '../composables/use-labox';
import Tooltip, { LTooltipConfig } from '../components/tooltip';
import { getComponentMeta } from '../composables/use-component';

export interface TooltipOptions extends LTooltipConfig {
  text: string | null | undefined;
}

type BaseType = string | number | boolean;

const DATA_ATTRIBUTE_NAME = 'data-lx-tooltip';

const TooltipDirective = () => {
  const state: { [key: string]: any } = {};

  const create = (
    element: HTMLElement,
    binding: DirectiveBinding<TooltipOptions | BaseType>
  ): TooltipOptions | void => {
    if (typeof binding.value === 'undefined') {
      return console.warn('Tooltip directive missing binding value:', element);
    }

    const { config } = getComponentMeta<LTooltipConfig>('LTooltip');

    const options: TooltipOptions = {
      ...config,
      text: '',
    };
    if (typeof binding.value !== 'object') {
      options.text = binding.value.toString();
    } else {
      Object.assign(options, binding.value);
    }

    if (binding.arg) {
      // v-tooltip:abc == binding.arg = 'abc'
      const arg = binding.arg;
      if (arg.includes(':')) {
        options.trigger = arg.split(':')[0] as any;
        options.placement = addPlacementHyphens(arg.split(':')[1]) as any;
      } else {
        options.trigger = arg as any;
      }
    }

    return options;
  };

  return {
    name: 'tooltip',
    directive: {
      updated(
        element: HTMLElement,
        binding: DirectiveBinding<TooltipOptions | BaseType>,
        _vnode: any
      ) {
        const options = create(element, binding);
        if (options) {
          state[element.getAttribute(DATA_ATTRIBUTE_NAME)!].value = options;
        }
      },
      mounted(
        element: HTMLElement,
        binding: DirectiveBinding<TooltipOptions | BaseType>,
        _vnode: any
      ) {
        const options = create(element, binding);
        if (!options) return;

        const { uuid } = useLabox();
        const id = uuid();

        state[id] = ref(options);

        element.setAttribute(DATA_ATTRIBUTE_NAME, id);

        const div = document.createElement('div');
        element.appendChild(div);
        div.style.display = 'inline';

        createApp(Tooltip, {
          id,
          element,
          binding: state[id],
        }).mount(div);
      },
      unmounted(
        el: HTMLElement,
        _binding: DirectiveBinding<TooltipOptions | BaseType>,
        _vnode: any
      ) {
        const element = document.getElementById(
          el.getAttribute(DATA_ATTRIBUTE_NAME) as string
        );
        if (element) element.remove();
      },
    },
  };
};

const addPlacementHyphens = (placement: string): string => {
  for (const p of ['auto', 'top', 'bottom', 'right', 'left']) {
    if (placement.startsWith(p) && !placement.endsWith(p)) {
      placement = placement.replace(p, `${p}-`);
    }
  }
  return placement;
};

export { TooltipDirective };
