import {
  componentProps,
  disabledProps,
  variantProps,
} from '~/composables/component';
import { ExtractPropTypes, PropType } from 'vue';
import { Placement } from '@popperjs/core';

export const props = {
  ...componentProps,
  ...variantProps,
  ...disabledProps,

  placement: String as PropType<Placement>,
  delay: Number,
  trigger: String as PropType<'click' | 'hover'>,
  offset: Array as unknown as PropType<[number, number]>,
  arrow: Object as PropType<{ padding: number }>,
  disableTouch: { type: Boolean, default: undefined },
  interactive: { type: Boolean, default: undefined },
};

export type Props = ExtractPropTypes<typeof props>;
