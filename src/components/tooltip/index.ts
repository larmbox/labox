import { LComponent } from '~/create-labox';
import type { Props as LTooltipProps } from './src/props';

interface LTooltipOptions {}

export interface LTooltipComponent
  extends LComponent<LTooltipOptions, LTooltipProps> {}

export { default } from './src/tooltip.vue';
