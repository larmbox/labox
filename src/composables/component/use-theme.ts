import { ref, watch } from 'vue';
import { LConfig } from '~/create-labox';
import { createPalette } from '~/common/utility/palette';
import { useUtil } from './use-util';

export interface LTheme {
  name: string;
  variables: Record<string, string | number>;
}

const GLOBAL_THEME_ID = 'global';

export const useTheme = (config: LConfig) => {
  const { isClient } = useUtil();

  const globalName = config.globalName;
  const PROVIDER_PREFIX = `${globalName}-theme-provider-`;

  /**
   * Adds the globalName prefix to variables. If componentName is defined,
   * variables are additionally prefixed with the component name.
   *
   * @param variables Object of variables to prefix.
   * @param componentName Optional component name prefix.
   */
  const prefix = (variables: LTheme['variables'], componentName?: string) => {
    const defaults: LTheme['variables'] = {};

    // eslint-disable-next-line prefer-const
    for (let [_key, value] of Object.entries(variables)) {
      let key = '--';
      if (globalName) key += `${globalName}-`;
      if (componentName) key += `${componentName}-`;
      key += _key;
      if (globalName && typeof value === 'string' && value.includes('var(--')) {
        value = value.replaceAll('var(--', `var(--${globalName}-`);
      }
      defaults[key] = value;
    }

    return defaults;
  };

  /**
   * Contains names of registered component styles.
   * Used to prevent registration of components multiple times.
   */
  const components = ref<Record<string, LTheme['variables']>>({});

  /**
   * The currently active theme.
   */
  const theme = ref<string>('default');

  /**
   * Array of registered themes.
   */
  const themes = ref<LTheme[]>([]);

  const providers = ref<{ id: string; content: string }[]>([
    { id: GLOBAL_THEME_ID, content: '' },
  ]);

  /**
   * Sets the active Labox theme.
   *
   * @param name Name of theme.
   */
  const setTheme = (name: string) => {
    theme.value = name;
    render();
  };

  /**
   * Registers a new Labox theme.
   *
   * @param theme The theme to register.
   */
  const registerTheme = ({ name, variables }: LTheme) => {
    variables = prefix(variables);
    themes.value.push({ name, variables });
  };

  /**
   * Fires on theme change.
   */
  if (isClient()) {
    watch(
      () => theme.value,
      () => {
        // Update the html data-theme attribute.
        const html = document.getElementsByTagName('html')[0];
        if (html) {
          html.setAttribute('data-theme', theme.value);
        }
      }
    );
  }

  /**
   * Registers a new component style.
   *
   * @param name Name of the component.
   * @param variables Variables to set.
   */
  const registerComponentStyle = (
    name: string,
    variables: Record<string, string>
  ) => {
    if (!components.value[name]) {
      components.value[name] = prefix(variables, name);
      render();
    }
  };

  const render = (id = GLOBAL_THEME_ID) => {
    const currentTheme = themes.value.find(({ name }) => name === theme.value);
    const defaultTheme = themes.value.find(
      ({ name }) => name === config.defaultTheme
    );

    // Apply the default theme variables. These include the Labox predefined
    // common variables.
    let variables = defaultTheme?.variables || {};

    // Iterate each registered component's variables.
    for (const component of Object.values(components.value)) {
      variables = { ...variables, ...component };
    }

    // Add user defined variables.
    variables = { ...variables, ...currentTheme?.variables };

    const variablesAsString = () => {
      const selector = id === GLOBAL_THEME_ID ? `:root` : `#${id}`;
      const str = Object.entries(variables)
        .map(([key, value]) => {
          return `${key}:${value}`;
        })
        .join(';');
      return `${selector}{${str}}`;
    };

    const index = providers.value.findIndex((provider) => provider.id === id);
    if (index !== -1) providers.value[index].content = variablesAsString();
    else providers.value.push({ id, content: variablesAsString() });
  };

  /**
   * Removes a theme provider from DOM. This function only works on the client.
   *
   * @param id Provider id to destroy.
   */
  const destroy = (id = GLOBAL_THEME_ID) => {
    if (isClient()) {
      const element = document.getElementById(`${PROVIDER_PREFIX}${id}`);
      if (element) element.remove();
    }
  };

  /**
   * Fires after changes have been made to the provider.
   */
  if (isClient()) {
    watch(
      () => providers.value,
      () => {
        for (const { id, content } of providers.value) {
          let style = document.getElementById(`${PROVIDER_PREFIX}${id}`);
          const head = document.getElementsByTagName('head')[0];

          if (!style) {
            style = document.createElement('style');
            style.id = `${PROVIDER_PREFIX}${id}`;
            head.appendChild(style);
          }

          style.innerHTML = content;
        }
      },
      { deep: true }
    );
  }

  // Initially register the Labox predefined common variables.
  registerTheme({ name: config.defaultTheme, variables: common });

  return {
    theme,
    providers,

    createPalette,
    destroy,
    registerComponentStyle,
    registerTheme,
    setTheme,
  };
};

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
