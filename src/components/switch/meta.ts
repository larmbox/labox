import { LSwitchComponent } from '.';
import {
  MetaInputEvents,
  MetaInputProps,
  MetaInputSlots,
} from '~/common/meta/input';
import { ComponentMeta } from '~/common/types';

const meta: ComponentMeta<LSwitchComponent> = {
  name: 'LSwitch',
  description:
    'The button component represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality.',
  props: [...MetaInputProps],
  slots: [...MetaInputSlots],
  events: [
    ...MetaInputEvents,
    {
      name: 'input',
      arguments: [
        {
          name: 'event',
          type: 'Event',
        },
      ],
      description: `Emitted when the value of the checkbox has been changed.`,
    },
  ],
};

export default meta;
