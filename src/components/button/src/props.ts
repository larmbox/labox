import { ExtractPropTypes } from 'vue';
import {
  blockProps,
  componentProps,
  disabledProps,
  sizeProps,
  linkProps,
  variantWithOutlineProps,
} from '~/composables/component';
import { RequiredBy } from '~/common/types';

export const props = {
  ...componentProps,
  ...blockProps,
  ...disabledProps,
  ...sizeProps,
  ...linkProps,
  ...variantWithOutlineProps,

  tag: {
    type: String,
    inherit: true,
  },
  type: {
    type: String,
  },
  icon: {
    type: String,
  },
  iconLeft: {
    type: String,
  },
  iconRight: {
    type: String,
  },
  loading: {
    type: Boolean,
    default: undefined,
  },
};

export type Props = RequiredBy<
  ExtractPropTypes<typeof props>,
  'tag' | 'size' | 'variant'
>;
