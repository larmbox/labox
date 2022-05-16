import { ComponentMeta } from '~/common/types';
import { LCheckboxComponent } from '.';
import {
  MetaInputEvents,
  MetaInputProps,
  MetaInputSlots,
} from '~/common/meta/input';
import { InputProps } from '~/composables/component';

const meta: ComponentMeta<LCheckboxComponent> = {
  name: 'LCheckbox',
  description:
    'The checkbox is shown as a square box that is ticked (checked) when activated. Checkboxes are used to let a user select one or more options of a limited number of choices.',
  props: [
    ...MetaInputProps.filter(
      ({ name }) =>
        !(<(keyof InputProps)[]>[
          'placeholder',
          'help',
          'autocomplete',
          'readonly',
        ]).includes(name)
    ),
  ],
  slots: [...MetaInputSlots.filter(({ name }) => name !== 'help')],
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
