/**
 * Returns the $labox prototype instance.
 */
export function useLink(): string {
  return '';
}

export const linkProps = {
  activeClass: {
    type: String,
  },
  exactActiveClass: {
    type: String,
  },
  append: {
    type: Boolean,
    default: false,
  },
  exact: {
    type: Boolean,
    default: false,
  },
  replace: {
    type: Boolean,
    default: false,
  },
  to: {
    type: [String, Object],
  },
  prefetch: {
    type: Boolean,
    default: true,
  },
  noPrefetch: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
  },
  target: {
    type: String,
  },
  rel: {
    type: String,
  },
};
