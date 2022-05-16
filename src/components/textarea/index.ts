import { LComponent } from '~/create-labox';
import type { Props as LTextareaProps } from './src/props';

export interface LTextareaOptions {}

export type LTextareaComponent = LComponent<LTextareaOptions, LTextareaProps>;

export { default } from './src/textarea.vue';
