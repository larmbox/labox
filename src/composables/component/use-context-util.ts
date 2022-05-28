import { useSlots } from 'vue';
import { _useLabox } from '~/composables/use-labox/use-labox';
import { LComponent } from '~/create-labox';
import { LComponentInstance } from './use-component';

export function useContextUtil(
  component?: LComponentInstance<LComponent<unknown, Record<string, unknown>>>
) {
  const slots = useSlots();

  /**
   * Returns the first non-null or non-undefined argument.
   *
   * @param args
   */
  const first = <R>(...args: R[]): R | undefined => {
    return args.find(
      (arg) => !!arg || typeof arg === 'boolean' || typeof arg === 'number'
    );
  };

  /**
   * Returns name prefixed with the global class prefix.
   *
   * @param name
   */
  const className = (name: string): string => {
    const { config } = _useLabox();
    return `${config.value.classPrefix}${name}`;
  };

  /**
   * Returns name prefixed with the global class prefix + component name.
   *
   * @param name
   */
  const classComponentName = (name: string | undefined): string => {
    if (!component)
      throw new Error('Cannot use classComponentName without instance.');
    if (!name) return '';
    return className(`${component.name}-${name}`);
  };

  /**
   * Returns true if the component has been provided a slot with name.
   *
   * @param name Name of slot to search for.
   */
  const hasSlot = (name: string): boolean => {
    return !!slots[name];
  };

  /**
   * Same as classComponentName, but accepts an object with multiple names.
   * @see classComponentName
   *
   * @param obj
   */
  function classNameList(
    obj: Record<string, boolean | undefined>
  ): Record<string, boolean> {
    const obj2: Record<string, boolean> = {};
    Object.entries(obj).forEach(([key, value]) => {
      obj2[classComponentName(key)] = value || false;
    });
    return obj2;
  }

  return {
    classComponentName,
    classNameList,
    className,
    hasSlot,
    first,
  };
}
