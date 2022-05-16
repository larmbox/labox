import { LComponent } from '~/create-labox';
import type { Props as LButtonProps } from './src/props';

export interface LButtonOptions {}

export type LButtonComponent = LComponent<LButtonOptions, LButtonProps>;

export { default } from './src/button.vue';
