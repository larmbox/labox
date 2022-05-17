import { computed, ComputedRef, ExtractPropTypes, Ref, useAttrs } from 'vue';
import { LComponent, LComponents, LGenericProps } from '~/create-labox';
import { useLabox } from '~/composables/use-labox/use-labox';

export const componentProps = {
  id: {
    type: String,
  },
};

export type ComponentProps = ExtractPropTypes<typeof componentProps>;

export type BindOptions<T> =
  | {
      include: T[];
      exclude?: never;
    }
  | {
      include?: never;
      exclude: T[];
    };

export interface LComponentInstance<
  T extends LComponent<T['options'], T['props']>
> {
  id: ComputedRef<string>;
  props: Ref<T['props']>;
  globalName: keyof LComponents;
  name: T['name'];
  options: T['options'];
  bindProps: (options?: BindOptions<keyof T['props']>) => LGenericProps;
  bindAttrs: (options?: BindOptions<string>) => LGenericProps;
}

export interface Binds<T extends LComponent<T['options'], T['props']>> {
  props?: (keyof T['props'])[];
  events?: string[];
}
export function useComponent<T extends LComponent<T['options'], T['props']>>(
  name: keyof LComponents,
  props: LGenericProps
): LComponentInstance<T> {
  return getComponentInstance<T>(name, props);
}

/**
 * Returns the current component instance and merged props.
 */
export function getComponentInstance<
  T extends LComponent<T['options'], T['props']>
>(name: keyof LComponents, props: LGenericProps): LComponentInstance<T> {
  const { uuid } = useLabox();
  const attrs = useAttrs();

  const merge = (a: LGenericProps, b: LGenericProps) =>
    Object.assign(
      {},
      a,
      ...Object.entries(b).map(([k, v]) => (v === undefined ? {} : { [k]: v }))
    );

  const meta = getComponentMeta<T>(name);

  const mergedProps = computed(() => merge(meta.props, props));

  const bind = (
    bindings: LGenericProps,
    options?: BindOptions<any>
  ): LGenericProps => {
    bindings = Object.assign({}, bindings);
    if (!options || (!options.include && !options.exclude)) {
      return bindings;
    }

    const isIncluded = (key: keyof typeof bindings, arr: string[]) => {
      if (typeof bindings[key] === 'function') {
        if (key.startsWith('on')) {
          key = key.substring(2);
          key = key.charAt(0).toLowerCase() + key.slice(1);
        }
      }

      if (arr.includes(key)) return true;
      return false;
    };

    if (options.include) {
      for (const key of Object.keys(bindings)) {
        if (!isIncluded(key, options.include)) delete bindings[key];
      }
    }

    if (options.exclude) {
      for (const key of Object.keys(bindings)) {
        if (isIncluded(key, options.exclude)) delete bindings[key];
      }
    }

    return bindings;
  };

  const bindProps = (options?: BindOptions<keyof T['props']>) => {
    return bind(mergedProps.value, options);
  };

  const bindAttrs = (options?: BindOptions<string>) => {
    return bind(attrs, options);
  };

  return {
    props: mergedProps,
    id: computed(() => props.id || uuid()),
    globalName: name,
    name: meta.name,
    options: meta.options,
    bindProps,
    bindAttrs,
  };
}

/**
 * Returns component global configuration.
 *
 * @param name
 */
export function getComponentMeta<T = LComponent<unknown, LGenericProps>>(
  name: keyof LComponents
): T & { props: ComputedRef<LGenericProps> } {
  const { config } = useLabox();

  const component = config.value.components[name] as unknown as T & {
    props: ComputedRef<LGenericProps>;
  };

  if (!component) {
    throw new Error(`Component '${name}' does not exist in configuration.`);
  }

  return component;
}
