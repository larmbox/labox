import {
  MetaInputEvents,
  MetaInputProps,
  MetaInputSlots,
} from '~/common/meta/input';
import { ComponentMeta } from '~/common/types';
import { LInputComponent } from '.';

const meta: ComponentMeta<LInputComponent> = {
  name: 'LInput',
  description:
    'The input is shown as a square box that is ticked (checked) when activated. Inputes are used to let a user select one or more options of a limited number of choices.',
  props: [...MetaInputProps],
  slots: [...MetaInputSlots],
  events: [
    ...MetaInputEvents,
    {
      name: 'input',
      arguments: [
        {
          name: 'event',
          type: 'InputEvent | Event',
        },
      ],
      description: `Emitted when the value of the input element has been changed.`,
    },
  ],
};

export default meta;
