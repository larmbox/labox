import { LComponent } from '~/create-labox';
import type { Props as LToastProps } from './src/props';

export interface LToastOptions {}

export type LToastComponent = LComponent<LToastOptions, LToastProps>;

export { default } from './src/toast.vue';
