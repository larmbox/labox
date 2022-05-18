import { useSlots } from 'vue';
import { _useLabox } from '~/composables/use-labox/use-labox';
import { LComponent } from '~/create-labox';
import { LComponentInstance } from './use-component';

export function useContextUtil(
  component?: LComponentInstance<LComponent<unknown, Record<string, unknown>>>
) {
  const slots = useSlots();

  function first<R>(...args: R[]): R | undefined {
    return args.find(
      (arg) => !!arg || typeof arg === 'boolean' || typeof arg === 'number'
    );
  }

  function className(c: string): string {
    const { config } = _useLabox();
    return `${config.value.classPrefix}${c}`;
  }

  function classComponentName(name2: string | undefined): string {
    if (!component)
      throw new Error('Cannot use classComponentName without instance.');
    if (!name2) return '';
    return className(`${component.name}-${name2}`);
  }

  function hasSlot(slotName: string): boolean {
    return !!slots[slotName];
  }

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
