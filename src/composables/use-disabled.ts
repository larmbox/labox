/**
 * Returns the $labox prototype instance.
 */
export function useDisabled(): Record<never, never> {
  return {};
}

export const disabledProps = {
  disabled: {
    type: Boolean,
    default: false,
  },
};
