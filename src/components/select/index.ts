import { LComponent } from '~/create-labox';
import type { Props as LSelectProps } from './src/props';

export interface LSelectOptions {
  icon: string;
}

export type LSelectComponent = LComponent<LSelectOptions, LSelectProps>;

export { default } from './src/select.vue';
