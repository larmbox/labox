import { LComponent } from '~/create-labox';
import type { Props as LTooltipProps } from './src/props';

export interface LTooltipOptions {}

export type LTooltipComponent = LComponent<LTooltipOptions, LTooltipProps>;

export { default } from './src/tooltip.vue';
