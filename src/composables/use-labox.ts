import { ref } from 'vue';
import { LCreateOptions } from '../create-labox';
import { deepMerge } from '../utils/deep-merge';
import defaultConfig from '../utils/default-config';

type LConfig = typeof defaultConfig;

let GLC: ReturnType<typeof Labox>;

const Modal = (_options: LCreateOptions) => {
  const stack = ref<{ id: string; data: any }[]>([]);
  const TELEPORT_TARGET = 'lxm-portal';

  const open = (id: string, data?: any, restore = false): void => {
    const event = new CustomEvent('open', {
      detail: data,
      bubbles: true,
    });

    const ref = document.getElementById(`lx-${id}-ref`);
    if (!ref) {
      return console.error(`Unknown modal '${id}'.`);
    }

    // TODO: Return if modal id already exists in stack.

    if (stack.value.length && !restore) {
      // Close previous modal if exists in stack.
      close(stack.value[stack.value.length - 1].id, true);
    }

    // Trigger open on target modal.
    ref.dispatchEvent(event);

    if (!stack.value.find((t) => t.id === id)) {
      // Add modal to stack.
      stack.value.push({ id, data });
      document
        .getElementById(TELEPORT_TARGET)
        ?.setAttribute('data-lx-active', 'true');
      if (stack.value.length === 1) {
        // Only change padding if this is the first modal.
        // Otherwise for subsequent modals the padding will be changed to 0, as overflow and scrollbar is hidden.
        document.body.style.paddingRight = scrollBarWidth() + 'px';
      }
      document.body.style.overflowY = 'hidden';
    }
  };

  const close = (id?: string, keep = false): void => {
    const event = new CustomEvent('close', {
      bubbles: true,
    });

    if (!id && stack.value.length) {
      // Pick the last modal in stack if exists.
      id = stack.value[stack.value.length - 1].id;
    }

    const ref = document.getElementById(`lx-${id}-ref`);
    if (!ref) return;

    ref.dispatchEvent(event);

    // If keep is true, the modal will remain in the stack.
    if (!keep) {
      // Remove from stack.
      stack.value = stack.value.filter((t) => t.id !== id);
      if (!stack.value.length) {
        // No more modals in stack, restore overflow on body.
        document
          .getElementById(TELEPORT_TARGET)
          ?.removeAttribute('data-lx-active');
        setTimeout(() => {
          document.body.style.paddingRight = '0';
          document.body.style.overflowY = '';
        }, 250);
      } else {
        // Restore (open) previous modal in stack.
        const mod = stack.value[stack.value.length - 1];
        open(mod.id, mod.data, true);
      }
    }
  };

  const closeAll = (): void => {
    stack.value = stack.value.slice(-1);
    close();
  };

  const scrollBarWidth = (element?: HTMLElement) => {
    if (!element) {
      // Return the body scrollbar width, when no element was specified.
      return window.innerWidth - document.body.clientWidth;
    } else {
      // When an element is specified, return its specific scrollbar width.
      return element.offsetWidth - element.clientWidth;
    }
  };

  return {
    modal: {
      /**
       * Closes a modal.
       *
       * @param id Modal id to close. If omitted, the last modal in the stack will be closed.
       */
      close: (id?: string) => close(id),
      /**
       * Closes all modals in stack.
       */
      closeAll: () => closeAll(),
      /**
       * Opens a modal.
       *
       * @param id Modal id.
       * @param data Data to pass to modal.
       */
      open: (id: string, data?: any) => open(id, data),
    },
  };
};

const Toast = (_options: LCreateOptions) => {
  const toast = (name: string) => {
    const event = new CustomEvent('create', {
      bubbles: true,
    });
    const modalRef = document.getElementById(name + 'ref')!;
    modalRef.dispatchEvent(event);
    document.body.style.overflowY = '';
  };

  return { toast };
};

const Labox = (options: LCreateOptions) => {
  const config = ref<LConfig>(
    deepMerge(defaultConfig, options.config || {}) as LConfig
  );

  const _theme = ref<string | null>(null);

  const uuid = () => {
    return 'L' + (Math.random().toString(36) + '00000000000000000').slice(2, 9);
  };

  const setTheme = (theme: string) => {
    _theme.value = theme;
  };

  const { modal } = Modal(options);
  const { toast } = Toast(options);

  return { config, uuid, theme: _theme, setTheme, modal, toast };
};

export function createGlobalLaboxClass(options: LCreateOptions): void {
  GLC = Labox(options);
}
/**
 * Returns the $labox prototype instance.
 */
export function useLabox() {
  return GLC;
}
