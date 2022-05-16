import { LinkProps } from '~/composables/component';
import { LComponent } from '~/create-labox';
import { ComponentMeta } from '~/common/types';

const props: ComponentMeta<LComponent<unknown, LinkProps>>['props'] = [
  { name: 'activeClass', type: 'string', description: '' },
  { name: 'exactActiveClass', type: 'string', description: '' },
  { name: 'exact', type: 'boolean', default: false, description: '' },
  {
    name: 'replace',
    type: 'boolean',
    default: false,
    description:
      'Programmatically navigate to a new URL by replacing the current entry in the history stack.',
  },
  {
    name: 'to',
    type: 'string',
    description: 'Denotes the target route of the link.',
  },
  {
    name: 'prefetch',
    type: 'boolean',
    default: true,
    description: 'Enables link prefetching.',
    nuxt: true,
  },
  {
    name: 'noPrefetch',
    type: 'boolean',
    default: false,
    description: 'Disables link prefetching.',
    nuxt: true,
  },
  {
    name: 'href',
    type: 'string',
    description: `The [href](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href) attribute.`,
  },
  { name: 'target', type: 'string', description: 'The target attribute.' },
  { name: 'rel', type: 'string', description: 'The rel attribute.' },
];

export { props as MetaLinkProps };
