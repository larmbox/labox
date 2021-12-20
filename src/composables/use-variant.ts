import { computed, ComputedRef } from 'vue';
import { useLabox } from './use-labox';
import { getComponentInstance } from './use-component';
import { classComponentName } from './use-utils';

/**
 * Returns the $labox prototype instance.
 */
export function useVariant(): {
  variantClass: ComputedRef<string>;
  themeClass: ComputedRef<string>;
} {
  const { theme } = useLabox();
  const { instance } = getComponentInstance();

  const variantClass = computed(() =>
    classComponentName(`${instance.props.variant}`)
  );

  const themeClass = computed(() => `theme-${theme.value}`);

  return {
    variantClass,
    themeClass,
  };
}

/**
 * Returns the $labox prototype instance.
 */
export function useVariantWithOutline(): {
  outlineClass: ComputedRef<string | null>;
  variantClass: ComputedRef<string>;
  themeClass: ComputedRef<string>;
} {
  const { instance } = getComponentInstance();
  const outlineClass = computed(() =>
    instance.props.outline ? classComponentName(`outline`) : null
  );
  return { outlineClass, ...useVariant() };
}

export const variantProps = {
  variant: {
    type: String,
    default: 'primary',
  },
};

export const variantWithOutlineProps = {
  ...variantProps,
  outline: {
    type: Boolean,
    default: false,
  },
};
