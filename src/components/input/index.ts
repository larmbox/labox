import { LComponent } from '~/create-labox';
import type { Props as LInputProps } from './src/props';

export interface LInputOptions {}

export type LInputComponent = LComponent<LInputOptions, LInputProps>;

export { default } from './src/input.vue';
