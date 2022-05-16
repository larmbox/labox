import { ExtractPropTypes } from 'vue';
import { RequiredBy } from '~/common/types';
import {
  variantProps,
  sizeProps,
  componentProps,
} from '~/composables/component';

export const props = {
  ...componentProps,
  ...sizeProps,
  ...variantProps,
  mode: {
    type: String,
  },
  role: {
    type: String,
  },
  label: {
    type: String,
  },
  loading: {
    type: Boolean,
    default: undefined,
  },
};

export type Props = RequiredBy<
  ExtractPropTypes<typeof props>,
  'size' | 'variant'
>;
