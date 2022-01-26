import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';

export default defineUserConfig<DefaultThemeOptions>({
  base: '/labox/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Labox',
      description: 'Vue-powered Static Site Generator',
    },
  },

  themeConfig: {
    sidebarDepth: 2,
    locales: {
      /**
       * English locale config
       */
      '/': {
        sidebar: [
          {
            text: 'Getting Started',
            children: [
              '/getting-started/introduction.md',
              '/getting-started/responsive-meta-tag.md',
              '/getting-started/nuxt.md',
              '/getting-started/use-labox-composable.md',
            ],
          },
          {
            text: 'Configuration',
            children: [
              '/configuration/global-configuration.md',
              '/configuration/themes.md',
            ],
          },
          {
            text: 'Components',
            children: [
              '/components/button.md',
              '/components/checkbox.md',
              '/components/icon.md',
              '/components/input.md',
              '/components/loading.md',
              '/components/modal.md',
              '/components/radio.md',
              '/components/select.md',
              '/components/switch.md',
              '/components/textarea.md',
              '/components/toast.md',
              '/components/tooltip.md',
            ],
          },
        ],
      },
    },
  },
});
