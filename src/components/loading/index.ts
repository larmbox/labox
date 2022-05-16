import { LComponent } from '~/create-labox';
import type { Props as LLoadingProps } from './src/props';

export interface LLoadingOptions {}

export type LLoadingComponent = LComponent<LLoadingOptions, LLoadingProps>;

export { default } from './src/loading.vue';
