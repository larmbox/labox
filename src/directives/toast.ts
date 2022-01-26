import { DirectiveBinding, createApp } from 'vue';
import { useLabox } from '../composables/use-labox';
import Toast, { LToastConfig } from '../components/toast';
import { getComponentMeta } from '../composables/use-component';

export interface ToastOptions extends LToastConfig {
  title: string | null | undefined;
  text: string | null | undefined;
  icon: string | null | undefined;
}

type BaseType = string | number | boolean;

const DATA_ATTRIBUTE_NAME = 'data-lx-tooltip';

const ToastDirective = () => {
  return {
    name: 'toast',
    directive: {
      mounted(
        element: HTMLElement,
        binding: DirectiveBinding<ToastOptions | BaseType>,
        _vnode: any
      ) {
        if (typeof binding.value === 'undefined') {
          return console.warn(
            'Toast directive missing binding value:',
            element
          );
        }

        const { config } = getComponentMeta<LToastConfig>('LToast');

        const options: ToastOptions = {
          ...config,
          text: null,
          title: null,
          icon: null,
        };
        if (typeof binding.value !== 'object') {
          options.text = binding.value.toString();
        } else {
          Object.assign(options, binding.value);
        }

        const { uuid } = useLabox();
        const id = uuid();

        element.setAttribute(DATA_ATTRIBUTE_NAME, id);

        const div = document.createElement('div');
        element.appendChild(div);

        createApp(Toast, {
          id,
          ...options,
          directive: true
        }).mount(div);
      },
      unmounted(
        el: HTMLElement,
        _binding: DirectiveBinding<ToastOptions | BaseType>,
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

export { ToastDirective };
