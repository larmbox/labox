import { LComponent } from '~/create-labox';
import type { Props as LThemeProviderProps } from './src/props';

export interface LThemeProviderOptions {}

export type LThemeProviderComponent = LComponent<
  LThemeProviderOptions,
  LThemeProviderProps
>;

export { default } from './src/theme-provider.vue';
