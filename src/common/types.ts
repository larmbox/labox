import { LComponent } from '~/create-labox';

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type RequiredBy<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

export interface ComponentMeta<T extends LComponent<T['options'], T['props']>> {
  name: string;
  description: string;
  props: {
    name: keyof T['props'];
    type: string;
    default?: any;
    description: string;
    since?: string;
    deprecated?: true;
    nuxt?: true;
    gc?: true;
  }[];
  slots: {
    name: string;
    description: string;
    properties?: {
      name: string;
      type: string;
      description?: string;
    }[];
    since?: string;
    deprecated?: true;
    nuxt?: true;
  }[];
  events: {
    name: string;
    description: string;
    arguments?: {
      name: string;
      type: string;
      description?: string;
    }[];
    since?: string;
    deprecated?: true;
  }[];
}
