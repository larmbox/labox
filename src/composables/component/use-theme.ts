import { ref, watch } from 'vue';
import { deepMerge } from '~/common/utility';
import { LCreateOptions } from '~/create-labox';

const components = ref<Record<string, any>>({});

const unwind = (styles: Record<string, any>, prefix?: string): string[] => {
  return Object.entries(styles).map(([k, v]) => {
    if (typeof v === 'object') {
      return unwind(v, k).join('');
    } else {
      return (prefix ? `--lx-${prefix}-${k}` : `--lx-${k}`) + `: ${v};`;
    }
  });
};

export interface Theme {
  name: string;
  vars: Record<string, string>;
}

const theme = ref<string | null>('default');
const themes = ref<Theme[]>([]);
const styles = ref<{ id: string; content: string }[]>([]);

export const useTheme = (_options?: LCreateOptions) => {
  const init = () => {
    theme.value = 'default';
    styles.value = [];
    components.value = [];
    themes.value = [];
  };

  /**
   * Sets the current Labox theme.
   *
   * @param _theme Name of theme.
   */
  const setTheme = (_theme: string) => {
    theme.value = _theme;
    render();
  };

  /**
   * Registers a new component style.
   *
   * @param name Name of the component.
   * @param style Style object.
   */
  const registerComponentStyle = (name: string, style: Record<string, any>) => {
    if (!components.value[name]) {
      components.value[name] = style;
      render();
    }
  };

  const render = (id = 'global') => {
    const themea = themes.value.find(({ name }) => name === theme.value);

    const defaults: Record<string, string | number> = {};
    // eslint-disable-next-line prefer-const
    for (let [k, v] of Object.entries(common)) {
      if (typeof v === 'string' && v.startsWith('var(--')) {
        v = v.replace('var(--', 'var(--lx-');
      }
      defaults[k] = v;
    }

    const variables = deepMerge(
      {
        ...defaults,
        ...components.value,
      },
      themea?.vars || {}
    );

    const asstring =
      (id === 'global' ? `:root` : `#${id}`) +
      `{${unwind(variables).join('')}}`;

    const index = styles.value.findIndex(({ id: _id }) => id === _id);
    if (index !== -1) {
      styles.value[index].content = asstring;
    } else {
      styles.value.push({ id, content: asstring });
    }
  };

  watch(
    () => styles.value,
    () => {
      if (typeof document !== 'undefined') {
        for (const { id, content } of styles.value) {
          const STYLE_ID_ATTRIBUTE = `lx-theme-provider-${id}`;
          let style = document.getElementById(STYLE_ID_ATTRIBUTE);
          const head = document.getElementsByTagName('head')[0];

          if (!style) {
            style = document.createElement('style');
            style.id = STYLE_ID_ATTRIBUTE;
            head.appendChild(style);
          }

          style.innerHTML = content;
        }
      }
    },
    { deep: true }
  );

  const destroy = (id = 'global') => {
    const STYLE_ID_ATTRIBUTE = `lx-theme-provider-${id}`;
    const style = document.getElementById(STYLE_ID_ATTRIBUTE);
    if (style) style.remove();
  };

  /**
   * Registers a new Labox theme.
   *
   * @param _theme The theme to register.
   */
  const registerTheme = (_theme: Theme) => {
    themes.value.push(_theme);
  };

  return {
    registerComponentStyle,
    components,
    render,
    destroy,
    theme,
    registerTheme,
    setTheme,
    styles,
    init,
    createPalette,
  };
};

function createPalette(name: string, color: string) {
  return {
    [name]: color,
    [`${name}-1`]: lighten(color, 0.7),
    [`${name}-2`]: lighten(color, 0.6),
    [`${name}-3`]: lighten(color, 0.5),
    [`${name}-4`]: lighten(color, 0.4),
    [`${name}-5`]: lighten(color, 0.3),
    [`${name}-6`]: lighten(color, 0.2),
    [`${name}-7`]: lighten(color, 0.1),
    [`${name}-8`]: color,
    [`${name}-9`]: darken(color, 0.1),
    [`${name}-10`]: darken(color, 0.2),
    [`${name}-11`]: darken(color, 0.3),
    [`${name}-12`]: darken(color, 0.4),
    [`${name}-13`]: darken(color, 0.5),
    [`${name}-14`]: darken(color, 0.6),
    [`${name}-15`]: darken(color, 0.7),
    [`${name}-T10`]: color + decimalToHex(128 - 25 * 4),
    [`${name}-T20`]: color + decimalToHex(128 - 25 * 3),
    [`${name}-T30`]: color + decimalToHex(128 - 25 * 2),
    [`${name}-T40`]: color + decimalToHex(128 - 25),
    [`${name}-T50`]: color + decimalToHex(128 - 1),
    [`${name}-T60`]: color + decimalToHex(128 + 25),
    [`${name}-T70`]: color + decimalToHex(128 + 25 * 2),
    [`${name}-T80`]: color + decimalToHex(128 + 25 * 3),
    [`${name}-T90`]: color + decimalToHex(128 + 25 * 4),
  };
}

const spacing = 1;

const common = {
  spacing: `${spacing}rem`,
  'spacing-xs': `${spacing * 0.5}rem`,
  'spacing-sm': `${spacing * 0.75}rem`,
  'spacing-md': `${spacing}rem`,
  'spacing-lg': `${spacing * 1.25}rem`,
  'spacing-xl': `${spacing * 1.5}rem`,

  'font-weight-light': 300,
  'font-weight-normal': 400,
  'font-weight-medium': 500,
  'font-weight-semibold': 600,
  'font-weight-bold': 700,

  'border-radius': '6px',
  'border-width': '1px',

  text: '1rem',
  'text-sm': '0.875rem',
  'text-md': '1rem',
  'text-lg': '1.125rem',

  'line-height': 1.25,
  'line-height-sm': 1.25,
  'line-height-md': 1.25,
  'line-height-lg': 1.25,

  'focus-shadow-size': '4px',
  'transition-time': '.1s',
  'transition-type': 'linear',
  'border-color': '#dadada',
  'border-color--disabled': 'var(--border-color)',

  'z-index-base': 400,
  'z-index-modal': 401,
  'z-index-toast': 402,
  'z-index-tooltip': 403,

  'placeholder-color': 'gray',
  'placeholder-color--hover': 'var(--placeholder-color)',
  'placeholder-color--focus': 'var(--placeholder-color)',
  'placeholder-color--disabled': 'var(--placeholder-color)',
  'text-color': '#2c3e50',
  'text-color--hover': 'var(--text-color)',
  'text-color--focus': 'var(--text-color)',
  'text-color--disabled': 'var(--text-color)',
  'text-color--light': '#6c7782',
  'contrast-color': '#fff',
  'contrast-color--hover': 'var(--contrast-color)',
  'contrast-color--focus': 'var(--contrast-color)',
  'contrast-color--disabled': 'var(--contrast-color)',
  'background-color': '#fff',
  'background-color--hover': 'var(--background-color)',
  'background-color--focus': 'var(--background-color)',
  'background-color--disabled': '#f4f4f4',

  ...createPalette('primary', '#0969da'),
  ...createPalette('secondary', '#1f2225'),
  ...createPalette('success', '#1d9e64'),
  ...createPalette('error', '#cb2960'),
};

function normalizeColor(originalColor: string): string {
  const color = originalColor.replace(/^#/, '');
  if (color.length === 3) {
    return color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
  }
  return color;
}

function decimalToHex(decimal: number): string {
  return decimal.toString(16);
}

function hexToDecimal(hex: string): number {
  return parseInt(hex, 16);
}

function mix(baseColor: string, color: string, weight = 1): string {
  if (weight > 1 || weight < 0) {
    throw new Error('Weight must be between 0 and 1.');
  }

  const result = [];

  baseColor = normalizeColor(baseColor);
  color = normalizeColor(color);

  const characters = color.length - 1;

  for (let i = 0; i <= characters; i += 2) {
    const bColorDecimal = hexToDecimal(baseColor.slice(i, i + 2));
    const colorDecimal = hexToDecimal(color.slice(i, i + 2));

    const value = decimalToHex(
      Math.round(
        colorDecimal + (bColorDecimal - colorDecimal) * ((weight * 100) / 100)
      )
    ).padStart(2, '0');

    result.push(value);
  }
  return `#${result.join('')}`;
}

function lighten(color: string, weight: number) {
  return mix('#fff', color, weight);
}

function darken(color: string, weight: number) {
  return mix('#000', color, weight);
}
