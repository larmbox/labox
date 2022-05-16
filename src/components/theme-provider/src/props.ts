import { ExtractPropTypes, PropType } from 'vue';

interface Theme {
  name: string;
  variables: Record<string, any>;
}

export const props = {
  theme: {
    type: Object as PropType<Theme>,
  },
  global: {
    type: Boolean,
    default: undefined,
  },
  destroyDelay: {
    type: Number,
  },
};

export type Props = ExtractPropTypes<typeof props>;
