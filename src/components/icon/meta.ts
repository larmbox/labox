import { LIconComponent } from '.';
import { ComponentMeta } from '~/common/types';
import config from '~/common/utility/default-config';

const meta: ComponentMeta<LIconComponent> = {
  name: 'LIcon',
  description:
    'The icon component provides an easy way to use various font-based icon libraries.',
  props: [
    {
      name: 'i',
      type: 'string',
      default: config.components.LIcon.props.i,
      description: 'Alias for the **icon** prop.',
    },
    {
      name: 'icon',
      type: 'string',
      default: config.components.LIcon.props.icon,
      description: 'The icon to show.',
    },
    {
      name: 'prefix',
      type: 'string',
      default: config.components.LIcon.props.prefix,
      description: 'Prefix added to the **icon** prop.',
    },
    {
      name: 'type',
      type: 'string',
      default: config.components.LIcon.props.type,
      description: 'Possible values are **"class"** or **"inline"**.',
    },
    {
      name: 'tag',
      type: 'string',
      default: config.components.LIcon.props.tag,
      description: 'The tag type to render the icon in.',
    },
  ],
  slots: [],
  events: [],
};

export default meta;
