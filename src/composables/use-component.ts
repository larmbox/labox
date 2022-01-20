import {
  ComponentInternalInstance,
  computed,
  ComputedRef,
  getCurrentInstance,
} from 'vue';
import { LComponent, LComponents } from '../create-labox';
import { useLabox } from './use-labox';
import * as u from './use-utils';

export const componentProps = {
  id: {
    type: String,
  },
};

/**
 *
 */
export function useComponent<TConfig>(): {
  config: TConfig;
  name: string;
  id: ComputedRef<string>;
  u: typeof u;
} {
  const { uuid } = useLabox();
  const { instance, component } = getComponentInstance<TConfig>();

  return {
    config: component.config,
    name: component.name,
    id: computed(() => (instance.props.id as string | undefined) || uuid()),
    u,
  };
}

/**
 * Returns the current component instance and global configuration.
 */
export function getComponentInstance<T>(): {
  instance: ComponentInternalInstance;
  component: LComponent<T>;
} {
  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error(`getCurrentInstance() is null.`);
  }

  const name = instance.type.name as keyof LComponents;
  return { instance, component: getComponentMeta(name) as LComponent<T> };
}

export function getComponentMeta<T>(name: keyof LComponents): LComponent<T> {
  const { config } = useLabox();

  const component = config.value.components[name];
  if (!component) {
    throw new Error(`Component '${name}' does not exist in configuration.`);
  }

  return component as LComponent<T>;
}
