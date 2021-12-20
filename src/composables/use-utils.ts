import { useLabox } from './use-labox';
import { getComponentInstance } from './use-component';

export function first<R>(...args: R[]): R | undefined {
  return args.find((arg) => typeof arg !== 'undefined') || undefined;
}

export function className(c: string): string {
  const { config } = useLabox();
  return `${config.value.stylePrefix}${c}`;
}

export function classComponentName(name2: string): string {
  const { instance } = getComponentInstance();
  const { config } = useLabox();
  const name = instance.type.name as string;
  const component = (config.value.components as any)[name];
  return className(`${component.name}-${name2}`);
}

export function autoBind(...binds: string[]): Record<string, any> {
  const { instance } = getComponentInstance();
  const toCamel = (s: string): string => {
    return s.replace(/([-_][a-z])/gi, ($1) => {
      return $1.toUpperCase().replace('-', '').replace('_', '');
    });
  };
  const obj: Record<string, any> = {};
  if (typeof binds !== 'undefined') {
    binds.forEach((bind) => {
      obj[bind] = instance.props[toCamel(bind)];
    });
  }
  return obj;
}

export function autoListen(
  binds: string[],
  listeners: Record<string, any>
): Record<string, any> {
  const obj: Record<string, any> = {};
  Object.entries(listeners).forEach(([key, value]) => {
    if (!binds.includes(key)) {
      obj[key] = value;
    }
  });
  return obj;
}

export function hasSlot(slotName: string): boolean {
  const { instance } = getComponentInstance();
  return !!instance.slots[slotName];
}

export function classNameList(
  obj: Record<string, boolean>
): Record<string, boolean> {
  const obj2: Record<string, boolean> = {};
  Object.entries(obj).forEach(([key, value]) => {
    obj2[classComponentName(key)] = value;
  });
  return obj2;
}
