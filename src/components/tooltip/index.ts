export { default } from './tooltip.vue';
import { Placement } from '@popperjs/core';

export interface LTooltipConfig {
  variant: string;
  placement: Placement;
  delay: number;
  trigger: 'click' | 'hover';
  offset: [number, number];
  arrow: {
    padding: number;
  };
  disableTouch: boolean;
}
