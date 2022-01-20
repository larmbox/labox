import { useLabox } from '../composables/use-labox';
import { DirectiveBinding } from 'vue';
import { LModalConfig } from '../components';

export interface ModalOptions extends LModalConfig {
  name: string;
  data?: any;
}

const OpenModalDirective = () => {
  return {
    name: 'open-modal',
    directive: {
      mounted(
        element: HTMLElement,
        binding: DirectiveBinding<ModalOptions | string>,
        _vnode: any
      ) {
        element.addEventListener('click', () => {
          let name: string, data: Record<string, any> | undefined;

          if (typeof binding.value === 'object') {
            name = binding.value.name;
            data = binding.value.data;
          } else if (binding.value) {
            name = binding.value;
          } else {
            return console.warn(
              'Modal directive missing binding value:',
              element
            );
          }

          const { modal } = useLabox();
          modal.open(name, data);
        });
      },
    },
  };
};

const CloseModalDirective = () => {
  return {
    name: 'close-modal',
    directive: {
      mounted(element: HTMLElement, binding: DirectiveBinding, _vnode: any) {
        element.addEventListener('click', () => {
          const { modal } = useLabox();
          modal.close(binding.value);
        });
      },
    },
  };
};

export { OpenModalDirective, CloseModalDirective };
