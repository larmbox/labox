const isObject = (item: any) =>
  typeof item === 'object' && !Array.isArray(item);

type A = Record<string, any>;
type B = A;

export const deepMerge = (target: A, source: B): A & B => {
  const isDeep = (prop: string) =>
    isObject(source[prop]) && target[prop] && isObject(target[prop]);
  const replaced = Object.getOwnPropertyNames(source)
    .map((prop) => ({
      [prop]: isDeep(prop)
        ? deepMerge(target[prop], source[prop])
        : source[prop],
    }))
    .reduce((a, b) => ({ ...a, ...b }), {});

  return {
    ...target,
    ...replaced,
  } as A & B;
};

export const camelToKebabCase = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

export const unwind = (
  styles: Record<string, any>,
  prefix?: string
): string[] => {
  return Object.entries(styles).map(([k, v]) => {
    if (typeof v === 'object') {
      return unwind(v, k).join('');
    } else {
      return (prefix ? `--lx-${prefix}-${k}` : `--lx-${k}`) + `: ${v};`;
    }
  });
};
