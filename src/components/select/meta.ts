import { LSelectComponent } from '.';
import { ComponentMeta } from '~/common/types';
import {
  MetaInputFieldEvents,
  MetaInputFieldProps,
  MetaInputFieldSlots,
} from '~/common/meta/input-field';
import { InputFieldProps } from '~/composables/component/use-input';

const meta: ComponentMeta<LSelectComponent> = {
  name: 'LSelect',
  description:
    'The button component represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality.',
  props: [
    ...MetaInputFieldProps.filter(
      ({ name }) =>
        !(<(keyof InputFieldProps)[]>[
          'autocomplete',
          'placeholder', // Custom definition of placeholder for Select component. See below.
          'readonly',
        ]).includes(name)
    ),
    {
      name: 'placeholder',
      type: 'string',
      description:
        'If a placeholder is set, the first option element will be a disabled element with the placeholder text content. Unlike the Input component, placeholder is not inherited from the label.',
    },
    {
      name: 'options',
      type: 'Array<{ label: string, value: any }>',
      description: 'The available options.',
    },
  ],
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
      description: `Emitted when the value of the select element has been changed.`,
    },
  ],
};

export default meta;
