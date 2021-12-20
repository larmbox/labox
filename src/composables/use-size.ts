import { computed, ComputedRef } from 'vue';
import { getComponentInstance } from './use-component';
import { classComponentName } from './use-utils';

/**
 * Returns the $labox prototype instance.
 */
export function useSize(): { sizeClass: ComputedRef<string> } {
  const { instance } = getComponentInstance();
  return {
    sizeClass: computed(() =>
      classComponentName(instance.props.size as string)
    ),
  };
}

export const sizeProps = {
  size: {
    type: String,
    default: 'md',
  },
};
