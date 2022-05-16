import { LComponent } from '~/create-labox';
import type { Props as LModalProps } from './src/props';

export interface LModalOptions {
  closeIcon: string;
}

export type LModalComponent = LComponent<LModalOptions, LModalProps>;

export { default } from './src/modal.vue';
