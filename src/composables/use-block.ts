import { computed, ComputedRef } from 'vue';
import { getComponentInstance } from './use-component';
import { classComponentName } from './use-utils';

/**
 * Returns the $labox prototype instance.
 */
export function useBlock(): { blockClass: ComputedRef<string | undefined> } {
  const { instance } = getComponentInstance();
  const blockClass = computed(() =>
    instance.props.block ? classComponentName('block') : undefined
  );
  return { blockClass };
}

export const blockProps = {
  block: {
    type: Boolean,
    default: false,
  },
};
