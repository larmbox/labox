import { ref } from 'vue';
import { LCreateOptions } from '../create-labox';
import { deepMerge } from '../utils/deep-merge';
import defaultConfig from '../utils/default-config';

type LConfig = typeof defaultConfig;

let GLC: ReturnType<typeof Labox>;

const Modal = (_options: LCreateOptions) => {
  const tree = ref<string[]>([]);

  const open = (id: string, data?: any): void => {
    const event = new CustomEvent('open', {
      detail: data,
      bubbles: true,
    });

    const ref = document.getElementById(`lx-${id}-ref`);
    if (!ref) {
      return console.error(`Unknown modal '${id}'.`);
    }

    if (tree.value.length && !tree.value.includes(id)) {
      close(tree.value[tree.value.length - 1], true);
    }

    ref.dispatchEvent(event);
    if (!tree.value.includes(id)) {
      tree.value.push(id);
    }

    document.body.style.overflowY = 'hidden';
  };

  const close = (id?: string, stack = false): void => {
    const event = new CustomEvent('close', {
      bubbles: true,
    });

    if (!id) {
      id = tree.value[tree.value.length - 1];
    }

    const ref = document.getElementById(`lx-${id}-ref`);
    if (!ref) return;

    ref.dispatchEvent(event);

    // Remove from tree.
    if (!stack) {
      tree.value = tree.value.filter((t) => t !== id);
      if (!tree.value.length) {
        document.body.style.overflowY = '';
      } else {
        open(tree.value[tree.value.length - 1]);
      }
    }
  };

  return { modal: { close: (id?: string) => close(id), open, tree } };
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
