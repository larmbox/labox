import { ExtractPropTypes, PropType } from 'vue';
import {
  blockProps,
  componentProps,
  disabledProps,
  inputFieldProps,
  sizeProps,
  variantProps,
} from '~/composables/component';
import { RequiredBy } from '~/common/types';

export const props = {
  ...componentProps,
  ...inputFieldProps,
  ...disabledProps,
  ...sizeProps,
  ...variantProps,
  ...blockProps,

  options: {
    type: Array as PropType<{ label: string; value: unknown }[]>,
    default: undefined,
  },
};

export type Props = RequiredBy<
  ExtractPropTypes<typeof props>,
  'size' | 'variant'
>;
