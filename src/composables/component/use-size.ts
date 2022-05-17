import { computed, ComputedRef, ExtractPropTypes } from 'vue';
import { useContextUtil } from './use-context-util';
import { RequiredBy } from '~/common/types';
import { LComponentInstance } from './use-component';
import { LComponent } from '~/create-labox';

export function useSize(
  component: LComponentInstance<LComponent<unknown, SizeProps>>
): { sizeClass: ComputedRef<string> } {
  return {
    sizeClass: computed(() =>
      useContextUtil(component).classComponentName(component.props.value.size)
    ),
  };
}

export const sizeProps = {
  size: {
    type: String,
  },
};

export type SizeProps = RequiredBy<ExtractPropTypes<typeof sizeProps>, 'size'>;
