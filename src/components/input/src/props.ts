import { ExtractPropTypes } from 'vue';
import {
  componentProps,
  inputFieldProps,
  disabledProps,
  sizeProps,
  variantProps,
  blockProps,
} from '~/composables/component';
import { RequiredBy } from '~/common/types';

export const props = {
  ...componentProps,
  ...inputFieldProps,
  ...disabledProps,
  ...sizeProps,
  ...variantProps,
  ...blockProps,

  type: {
    type: String,
  },
  min: {
    type: Number,
  },
  max: {
    type: Number,
  },
  step: {
    type: Number,
  },
  append: {
    type: String,
  },
  prepend: {
    type: String,
  },
};

export type Props = RequiredBy<
  ExtractPropTypes<typeof props>,
  'type' | 'feedbackType' | 'size' | 'variant'
>;
