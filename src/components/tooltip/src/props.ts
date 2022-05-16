import {
  componentProps,
  disabledProps,
  variantProps,
} from '~/composables/component';
import { ExtractPropTypes, PropType, Ref } from 'vue';
import { Placement } from '@popperjs/core';
import { TooltipOptions } from '~/directives/tooltip';
import { PartialBy } from '~/common/types';

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
  element: { type: Object as PropType<HTMLElement>, default: null },
  binding: Object as PropType<Ref<TooltipOptions>>,
};

export type Props = PartialBy<ExtractPropTypes<typeof props>, 'element'>;
