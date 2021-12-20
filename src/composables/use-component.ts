import {
  ComponentInternalInstance,
  computed,
  ComputedRef,
  getCurrentInstance,
} from 'vue';
import { LComponent } from '../create-labox';
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

  // Overwrite
  // for (const [key] of Object.entries(component.config)) {
  //   if (instance.props[key]) {
  //     component.config[key as keyof TConfig] = instance.props[key] as any;
  //   }
  // }

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
  const { config } = useLabox();

  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error(`getCurrentInstance() is null.`);
  }

  const name = instance.type.name as keyof typeof config.value.components;
  const component = config.value.components[name];
  if (!component) {
    throw new Error(`Component '${name}' does not exist in configuration.`);
  }

  return { instance, component: component as LComponent<T> };
}
