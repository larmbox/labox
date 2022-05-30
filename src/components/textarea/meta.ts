import {
  MetaInputFieldEvents,
  MetaInputFieldProps,
  MetaInputFieldSlots,
} from '~/common/meta/input-field';
import { ComponentMeta } from '~/common/types';
import { LTextareaComponent } from '.';

const meta: ComponentMeta<LTextareaComponent> = {
  name: 'LTextarea',
  description:
    'The Textarea component represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text.',
  props: [...MetaInputFieldProps],
  slots: [...MetaInputFieldSlots],
  events: [
    ...MetaInputFieldEvents,
    {
      name: 'input',
      arguments: [
        {
          name: 'event',
          type: 'Event',
        },
      ],
      description: `Emitted when the value of the textarea element has been changed.`,
    },
  ],
};

export default meta;
