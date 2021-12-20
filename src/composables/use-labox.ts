import { Ref, ref } from 'vue';
import { LCreateOptions } from '../create-labox';
import { deepMerge } from '../utils/deep-merge';
import defaultConfig from '../utils/default-config';

type LConfig = typeof defaultConfig;

class Labox {
  constructor(options: LCreateOptions) {
    this.config = ref(
      deepMerge(defaultConfig, options.config || {}) as LConfig
    );
    this.theme = ref(null);
  }
  readonly config: Ref<LConfig>;

  /**
   * Returns the current theme.
   */
  theme: Ref<string | null>;

  /**
   * Sets the page theme.
   */
  setTheme(theme: string): void {
    this.theme.value = theme;

    // if (!this.isServer) {
    //   document
    //     .getElementsByTagName('html')[0]
    //     .setAttribute('data-theme', theme);
    // }
  }

  get isServer() {
    return typeof document === 'undefined';
  }

  uuid(): string {
    return 'L' + (Math.random().toString(36) + '00000000000000000').slice(2, 9);
  }

  openModal(name: string, data?: Record<string, any>) {
    const event = new CustomEvent('open', {
      detail: data,
      bubbles: true,
    });
    const modalRef = document.getElementById(name + 'ref');
    if (!modalRef) {
      return console.error(`Unknown modal '${name}'.`);
    }
    modalRef.dispatchEvent(event);
    this.modal = name;
  }

  modal: string | undefined;

  closeModal(name?: string) {
    const event = new CustomEvent('close', {
      bubbles: true,
    });
    const modalRef = document.getElementById((name || this.modal) + 'ref');
    if (!modalRef) {
      return console.error(`Unknown modal '${name}'.`);
    }
    modalRef.dispatchEvent(event);
    this.modal = undefined;
  }

  toast(name: string) {
    const event = new CustomEvent('create', {
      bubbles: true,
    });
    const modalRef = document.getElementById(name + 'ref')!;
    modalRef.dispatchEvent(event);
    document.body.style.overflowY = '';
  }
}

let labox: Labox;
export function createGlobalLaboxClass(options: LCreateOptions): void {
  labox = new Labox(options);
}
/**
 * Returns the $labox prototype instance.
 */
export function useLabox() {
  const l = labox;
  return {
    theme: l.theme,
    uuid: l.uuid,
    config: l.config,
    setTheme: (theme: string) => l.setTheme(theme),
    openModal: (name: string, data?: Record<string, any>) =>
      l.openModal(name, data),
    closeModal: (name: string) => l.closeModal(name),
    // toast: (_name: string) => {},
  };
}
