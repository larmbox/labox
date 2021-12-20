import { useLabox } from '../composables/use-labox';
import { DirectiveBinding } from 'vue';

const OpenModalDirective = {
  name: 'open-modal',
  directive: {
    mounted(el: HTMLElement, binding: DirectiveBinding, _vnode: any) {
      el.addEventListener('click', () => {
        let name: string, data: Record<string, any> | undefined;

        if (typeof binding.value !== 'string') {
          name = binding.value.name;
          data = binding.value.data;
        } else {
          name = binding.value;
        }

        const { openModal } = useLabox();
        openModal(name, data);
      });
    },
  },
};

const CloseModalDirective = {
  name: 'close-modal',
  directive: {
    mounted(el: HTMLElement, binding: DirectiveBinding, _vnode: any) {
      el.addEventListener('click', () => {
        const { closeModal } = useLabox();
        closeModal(binding.value);
      });
    },
  },
};

export { OpenModalDirective, CloseModalDirective };
