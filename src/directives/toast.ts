// import { useLabox } from '../composables/use-labox';
import { DirectiveBinding } from 'vue';

const ToastDirective = {
  name: 'toast',
  directive: {
    mounted(el: HTMLElement, _binding: DirectiveBinding, _vnode: any) {
      el.addEventListener('click', () => {
        // const { toast } = useLabox();
        // toast(binding.value);
      });
    },
  },
};

export { ToastDirective };
