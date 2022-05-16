import { LComponent } from '~/create-labox';
import type { Props as LSwitchProps } from './src/props';

export interface LSwitchOptions {
  uncheckedIcon: string;
  checkedIcon: string;
}

export type LSwitchComponent = LComponent<LSwitchOptions, LSwitchProps>;

export { default } from './src/switch.vue';
