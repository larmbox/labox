import { computed, ComputedRef, PropType } from 'vue';
import { getComponentInstance } from './use-component';
import { useLabox } from './use-labox';

/**
 * Returns the $labox prototype instance.
 */
export function useInput(): {
  feedbackClass: ComputedRef<string | undefined>;
  ariaLabelledby: string;
  ariaDescribedby: string;
} {
  const { uuid } = useLabox();
  const { instance } = getComponentInstance();
  const feedbackClass = computed(() =>
    instance.props.feedbackType && instance.props.feedback
      ? `form-feedback-${instance.props.feedbackType}`
      : undefined
  );

  return { feedbackClass, ariaLabelledby: uuid(), ariaDescribedby: uuid() };
}

export const inputProps = {
  label: {
    type: String,
  },
  autofocus: {
    type: Boolean,
  },
  readonly: {
    type: Boolean,
  },
  autocomplete: {
    type: Boolean,
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
};
