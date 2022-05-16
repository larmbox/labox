import { ComponentMeta } from '~/common/types';
import { LLoadingComponent } from '.';
import config from '~/common/utility/default-config';

const meta: ComponentMeta<LLoadingComponent> = {
  name: 'LLoading',
  description:
    'The input is shown as a square box that is ticked (checked) when activated. Inputes are used to let a user select one or more options of a limited number of choices.',
  props: [
    {
      name: 'mode',
      type: 'string',
      default: config.components.LLoading.props.mode,
      description: `*spinner* and *dots* styles included.`,
    },
    {
      name: 'label',
      type: 'string',
      default: config.components.LLoading.props.label,
      description: `Label shown to assistive technologies such as screenreaders.`,
    },
    {
      name: 'role',
      type: 'string',
      default: config.components.LLoading.props.role,
      description: `The role attribute on the loading element.`,
    },
    {
      name: 'variant',
      type: 'string',
      default: config.components.LLoading.props.variant,
      description:
        'Sets the loading variant according to the theme configuration',
    },
    {
      name: 'size',
      type: 'string',
      default: config.components.LLoading.props.size,
      description:
        'Sets the button size. Included sizes are `sm`, `md` or `lg`.',
    },
  ],
  slots: [],
  events: [],
};

export default meta;
