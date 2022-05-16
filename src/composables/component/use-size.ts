import { computed, ComputedRef, ExtractPropTypes } from 'vue';
import { useUtil } from './use-util';
import { RequiredBy } from '~/common/types';
import { LComponentInstance } from './use-component';
import { LComponent } from '~/create-labox';

export function useSize(
  component: LComponentInstance<LComponent<unknown, SizeProps>>
): { sizeClass: ComputedRef<string> } {
  return {
    sizeClass: computed(() =>
      useUtil(component).classComponentName(component.props.value.size)
    ),
  };
}

export const sizeProps = {
  size: {
    type: String,
  },
};

export type SizeProps = RequiredBy<ExtractPropTypes<typeof sizeProps>, 'size'>;
