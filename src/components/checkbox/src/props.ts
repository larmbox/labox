import {
  blockProps,
  componentProps,
  disabledProps,
  inputProps,
  sizeProps,
  variantProps,
} from '~/composables/component';
import { ExtractPropTypes } from 'vue';
import { RequiredBy } from '~/common/types';

export const props = {
  ...componentProps,
  ...disabledProps,
  ...blockProps,
  ...inputProps,
  ...sizeProps,
  ...variantProps,
  indeterminate: { type: Boolean, default: undefined },
  checked: { type: Boolean, default: undefined },
};

export type Props = RequiredBy<
  ExtractPropTypes<typeof props>,
  'feedbackType' | 'size' | 'variant'
>;
