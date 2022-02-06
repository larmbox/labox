import { useLabox } from './use-labox';
import { getComponentInstance } from './use-component';

export interface Binds {
  props?: string[];
  events?: string[];
}

function toCamel(s: string): string {
  return s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
}

export function first<R>(...args: R[]): R | undefined {
  return args.find((arg) => typeof arg !== 'undefined') || undefined;
}

export function className(c: string): string {
  const { config } = useLabox();
  return `${config.value.stylePrefix}${c}`;
}

export function classComponentName(name2: string | undefined): string {
  if (!name2) return '';
  const { instance } = getComponentInstance();
  const { config } = useLabox();
  const name = instance.type.name as string;
  const component = (config.value.components as any)[name];
  return className(`${component.name}-${name2}`);
}

export function omit(events?: string[]) {
  const { instance } = getComponentInstance();
  const attrs = Object.assign({}, instance.attrs);

  if (events) {
    events.forEach((event) => {
      const e = event.charAt(0).toUpperCase() + event.slice(1);
      delete attrs['on' + e];
    });
  }

  return attrs;
}

export function bind(binds: Binds): Record<string, any> {
  const { instance } = getComponentInstance();
  const obj: Record<string, any> = {};

  const attrs = instance.attrs;
  if (binds.events) {
    Object.entries(attrs).forEach(([key, value]) => {
      if (!key.startsWith('on')) return;
      const orgkey = key;
      key = toCamel(key.substring(2)).toLowerCase();
      if (binds.events!.find((event) => event === key)) {
        obj[orgkey] = value;
      }
    });
  }

  const props = instance.props;
  if (binds.props) {
    if (typeof binds !== 'undefined') {
      binds.props.forEach((bind) => {
        obj[bind] = props[toCamel(bind)];
      });
    }
  }

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
