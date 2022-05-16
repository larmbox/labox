import { LComponent } from '~/create-labox';
import type { Props as LCheckboxProps } from './src/props';

export interface LCheckboxOptions {
  iconChecked: string;
  iconIndeterminate: string;
}

export type LCheckboxComponent = LComponent<LCheckboxOptions, LCheckboxProps>;

export { default } from './src/checkbox.vue';
