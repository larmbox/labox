import { LComponent } from '~/create-labox';
import type { Props as LIconProps } from './src/props';

export interface LIconOptions {}

export type LIconComponent = LComponent<LIconOptions, LIconProps>;

export { default } from './src/icon.vue';
