import { ExtractPropTypes } from 'vue';
import { componentProps, sizeProps } from '~/composables/component';
import { PartialBy, RequiredBy } from '~/common/types';

export const props = {
  ...componentProps,
  ...sizeProps,

  title: {
    type: String,
  },
  description: {
    type: String,
  },
  closeable: {
    type: Boolean,
    default: true,
  },
  closeOnBackdrop: { type: Boolean, default: undefined },
  closeOnRouteChange: { type: Boolean, default: true },
};

export type Props = PartialBy<
  RequiredBy<ExtractPropTypes<typeof props>, 'size'>,
  'closeOnRouteChange' | 'closeable'
>;
