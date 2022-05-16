import { LComponent } from '~/create-labox';
import type { Props as LRadioProps } from './src/props';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LRadioOptions {}

export type LRadioComponent = LComponent<LRadioOptions, LRadioProps>;

export { default } from './src/radio.vue';
