import { computed, ComputedRef, ExtractPropTypes } from 'vue';
import { LComponent } from '~/create-labox';
import { LComponentInstance } from './use-component';
import { useUtil } from './use-util';

export function useVariant(
  component: LComponentInstance<LComponent<unknown, VariantProps>>
): {
  variantClass: ComputedRef<string>;
} {
  const variantClass = computed(() =>
    useUtil(component).classComponentName(`${component.props.value.variant}`)
  );

  return {
    variantClass,
  };
}

export function useVariantWithOutline(
  component: LComponentInstance<LComponent<unknown, VariantWithOutlineProps>>
): {
  outlineClass: ComputedRef<string | null>;
  variantClass: ComputedRef<string>;
} {
  const outlineClass = computed(() =>
    component.props.value.outline
      ? useUtil(component).classComponentName(`outline`)
      : null
  );

  return { outlineClass, ...useVariant(component) };
}

export const variantProps = {
  variant: {
    type: String,
  },
};

export const variantWithOutlineProps = {
  ...variantProps,
  outline: {
    type: Boolean,
    default: undefined,
  },
};

export type VariantProps = ExtractPropTypes<typeof variantProps>;
export type VariantWithOutlineProps = ExtractPropTypes<
  typeof variantWithOutlineProps
>;
