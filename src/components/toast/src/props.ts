import {
  componentProps,
  disabledProps,
  variantProps,
} from '~/composables/component';
import { ExtractPropTypes } from 'vue';

export const props = {
  ...componentProps,
  ...variantProps,
  ...disabledProps,

  placement: String,
  title: String,
  text: String,
  icon: String,
  directive: { type: Boolean, default: undefined },
};

export type Props = ExtractPropTypes<typeof props>;
