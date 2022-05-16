import { computed, ComputedRef, ExtractPropTypes, PropType } from 'vue';
import { LComponentInstance } from './use-component';
import { useLabox } from '~/composables/use-labox/use-labox';
import { LComponent } from '~/create-labox';
import { useUtil } from './use-util';

export function useInput(
  component: LComponentInstance<LComponent<unknown, InputProps>>
): {
  feedbackClass: ComputedRef<string | undefined>;
  highlightClass: ComputedRef<string | undefined>;
  hasLabels: ComputedRef<boolean>;
  ariaLabelledby: string;
  ariaDescribedby: string;
} {
  const { uuid } = useLabox();
  const { hasSlot, classComponentName } = useUtil(component);

  const feedbackClass = computed(() =>
    component.props.value.feedbackType && component.props.value.feedback
      ? `form-feedback-${component.props.value.feedbackType}`
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
    const { feedback, label, description, help } = component.props.value;
    return (
      !!feedback ||
      !!label ||
      !!description ||
      !!help ||
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
  readonly: {
    type: Boolean,
    default: undefined,
  },
  autocomplete: {
    type: Boolean,
    default: undefined,
  },
  placeholder: {
    type: String,
  },
  description: {
    type: String,
  },
  help: {
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
    type: [String, Number, Boolean] as PropType<any>,
    default: undefined,
  },
  modelValue: {
    type: [String, Boolean, Number] as PropType<any>,
  },
  highlight: {
    type: Boolean,
    required: false,
    default: undefined,
  },
};

export type InputProps = ExtractPropTypes<typeof inputProps>;
