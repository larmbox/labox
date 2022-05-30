import { ExtractPropTypes, PropType } from 'vue';
import {
  blockProps,
  componentProps,
  disabledProps,
  sizeProps,
  inputFieldProps,
  variantProps,
} from '~/composables/component';
import { PartialBy, RequiredBy } from '~/common/types';

export const props = {
  ...componentProps,
  ...inputFieldProps,
  ...disabledProps,
  ...sizeProps,
  ...variantProps,
  ...blockProps,

  rows: {
    type: Number,
  },
  cols: {
    type: Number,
  },
  resize: {
    type: String as PropType<'both' | 'none' | 'horizontal' | 'vertical'>,
    default: 'both',
    required: false,
  },
};

export type Props = PartialBy<
  RequiredBy<ExtractPropTypes<typeof props>, 'size' | 'variant'>,
  'resize'
>;
