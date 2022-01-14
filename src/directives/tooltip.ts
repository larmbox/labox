import { useLabox } from '../composables/use-labox';
import { DirectiveBinding, createApp } from 'vue';
import Tooltip from '../components/tooltip';

const TooltipDirective = {
  name: 'tooltip',
  directive: {
    updated(el: HTMLElement, binding: DirectiveBinding, vnode: any) {
      TooltipDirective.directive.unMounted(el, binding, vnode);
      TooltipDirective.directive.mounted(el, binding, vnode);
    },
    mounted(el: HTMLElement, binding: DirectiveBinding, _vnode: any) {
      if (!binding.value) {
        return;
      }

      const arg = binding.arg;
      let text = binding.value;
      let variant: string | undefined,
        delay: number | undefined,
        placement: string | undefined,
        trigger: string | undefined;

      if (arg) {
        if (arg.includes(':')) {
          trigger = arg.split(':')[0];
          placement = arg.split(':')[1];
          placement = addPlacementHyphens(placement);
        } else {
          trigger = arg;
        }
      }

      if (typeof binding.value !== 'string') {
        placement = binding.value.placement ?? placement;
        text = binding.value.text;
        delay = binding.value.delay;
        variant = binding.value.variant;
        trigger = binding.value.trigger ?? trigger;
      }

      const { uuid } = useLabox();
      const div = document.createElement('div');
      div.id = uuid();
      div.style.height = '0';
      el.setAttribute('v-lb-tooltip', div.id);
      el.parentNode!.insertBefore(div, el.nextSibling);

      createApp(Tooltip, {
        vTriggerEl: el,
        vText: text,
        delay,
        placement,
        variant,
        trigger,
      }).mount(div);
    },
    unMounted(el: HTMLElement, _binding: DirectiveBinding, _vnode: any) {
      document
        .getElementById(el.getAttribute('v-lb-tooltip') as string)!
        .remove();
    },
  },
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
