import { LComponent } from '~/create-labox';
import { ComponentMeta } from '~/common/types';
import { InputFieldProps } from '~/composables/component/use-input';
import { MetaInputProps, MetaInputSlots, MetaInputEvents } from './input';

const props: ComponentMeta<LComponent<unknown, InputFieldProps>>['props'] = [
  ...MetaInputProps,
  {
    name: 'autocomplete',
    type: 'boolean',
    description: 'Sets the autocomplete attribute value.',
  },
  {
    name: 'placeholder',
    type: 'string',
    description: 'If no placeholder is set, the label will be used instead.',
  },
  {
    name: 'help',
    type: 'string',
    description: 'The help text to display.',
  },
  {
    name: 'value',
    type: 'string | number | boolean',
    description: 'The value attribute.',
  },
  { name: 'modelValue', type: 'string | number | boolean', description: '' },
  {
    name: 'readonly',
    type: 'boolean',
    default: 'false',
    description: 'Sets the input to readonly.',
  },
];

const slots: ComponentMeta<LComponent<unknown, InputFieldProps>>['slots'] = [
  ...MetaInputSlots,
  {
    name: 'help',
    description: 'A secondary description describing the input element.',
  },
];

const events: ComponentMeta<LComponent<unknown, InputFieldProps>>['events'] =
  MetaInputEvents;

export {
  props as MetaInputFieldProps,
  slots as MetaInputFieldSlots,
  events as MetaInputFieldEvents,
};
