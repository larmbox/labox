import { computed, ComputedRef, ExtractPropTypes } from 'vue';
import { LComponent } from '~/create-labox';
import { LComponentInstance } from './use-component';
import { useUtil } from './use-util';

export function useBlock(
  component: LComponentInstance<LComponent<unknown, BlockProps>>
): { blockClass: ComputedRef<string | undefined> } {
  const blockClass = computed(() =>
    component.props.value.block
      ? useUtil(component).classComponentName('block')
      : undefined
  );
  return { blockClass };
}

export const blockProps = {
  block: {
    type: Boolean,
    default: undefined,
  },
};

export type BlockProps = ExtractPropTypes<typeof blockProps>;
