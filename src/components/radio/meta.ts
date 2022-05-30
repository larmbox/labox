import { LRadioComponent } from '.';
import { ComponentMeta } from '~/common/types';
import {
  MetaInputEvents,
  MetaInputProps,
  MetaInputSlots,
} from '~/common/meta/input';

const meta: ComponentMeta<LRadioComponent> = {
  name: 'LRadio',
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
      description: `Emitted when the value of the radio input has been changed.`,
    },
  ],
};

export default meta;
