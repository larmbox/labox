import { DirectiveBinding, createApp } from 'vue';
import { useLabox } from '~/composables/use-labox/use-labox';
import Toast, { LToastComponent } from '../components/toast';
import { getComponentMeta } from '~/composables/component/use-component';

import { Props } from '../components/toast/src/props';

export interface ToastOptions extends Props {}

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

        const { options: o } = getComponentMeta<LToastComponent>('LToast');

        const options: ToastOptions = {
          ...o,
          text: undefined,
          title: undefined,
          icon: undefined,
          directive: true,
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
          directive: true,
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
