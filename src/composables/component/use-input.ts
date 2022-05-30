import { computed, ComputedRef, ExtractPropTypes, PropType } from 'vue';
import { LComponentInstance } from './use-component';
import { useLabox } from '~/composables/use-labox/use-labox';
import { LComponent } from '~/create-labox';
import { useContextUtil } from './use-context-util';

export function useInput(
  component: LComponentInstance<
    LComponent<unknown, InputProps | InputFieldProps>
  >
): {
  feedbackClass: ComputedRef<string | undefined>;
  highlightClass: ComputedRef<string | undefined>;
  hasLabels: ComputedRef<boolean>;
  ariaLabelledby: string;
  ariaDescribedby: string;
} {
  const { uuid } = useLabox();
  const { hasSlot, className, classComponentName } = useContextUtil(component);

  const feedbackClass = computed(() =>
    component.props.value.feedbackType && component.props.value.feedback
      ? className(`form-feedback-${component.props.value.feedbackType}`)
      : undefined
  );

  const highlightClass = computed(() => {
    if (component.props.value.highlight === false) {
      return undefined;
    }
    if (component.props.value.highlight || component.props.value.feedback) {
      return classComponentName('highlight');
    }
    return undefined;
  });

  const hasLabels = computed(() => {
    const { feedback, label, description } = component.props.value;
    return (
      !!feedback ||
      !!label ||
      !!description ||
      !!('help' in component.props.value && component.props.value.help) ||
      hasSlot('feedback') ||
      hasSlot('label') ||
      hasSlot('description') ||
      hasSlot('help')
    );
  });

  return {
    feedbackClass,
    highlightClass,
    hasLabels,
    ariaLabelledby: uuid(),
    ariaDescribedby: uuid(),
  };
}

export const inputProps = {
  label: {
    type: String,
  },
  autofocus: {
    type: Boolean,
    default: undefined,
  },
  description: {
    type: String,
  },
  name: {
    type: String,
  },
  feedback: {
    type: String,
  },
  feedbackType: {
    type: String,
    default: 'error',
  },
  value: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: undefined,
  },
  modelValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
  },
  highlight: {
    type: Boolean,
    required: false,
    default: undefined,
  },
};

export const inputFieldProps = {
  ...inputProps,
  placeholder: {
    type: String,
  },
  readonly: {
    type: Boolean,
    default: undefined,
  },
  help: {
    type: String,
  },
  autocomplete: {
    type: Boolean,
    default: undefined,
  },
  value: {
    type: [String, Number] as PropType<string | number>,
    default: undefined,
  },
  modelValue: {
    type: [String, Number] as PropType<string | number>,
  },
};

export type InputProps = ExtractPropTypes<typeof inputProps>;
export type InputFieldProps = ExtractPropTypes<typeof inputFieldProps>;
