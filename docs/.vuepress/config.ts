import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';
import { resolve } from 'path';

export default defineUserConfig<DefaultThemeOptions>({
  base: '/labox/',
  port: parseInt(process.env.PORT || '8123'),
  host: process.env.HOST || '0.0.0.0',
  alias: {
    '~': resolve(__dirname, '..', '..', 'src'),
  },
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Labox',
      description: 'Vue-powered Static Site Generator',
      head: [
        [
          'link',
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/labox/favicon-32.png',
          },
        ],
        [
          'link',
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/labox/favicon-16.png',
          },
        ],
      ],
    },
  },

  themeConfig: {
    logo: 'https://cdn.larmbox.com/assets/labox-logo.svg',
    sidebarDepth: 2,
    locales: {
      /**
       * English locale config
       */

      '/': {
        navbar: [
          // NavbarItem
          {
            text: 'Getting Started',
            children: [
              '/getting-started/introduction.md',
              '/getting-started/installation.md',
              '/getting-started/responsive-meta-tag.md',
              '/getting-started/nuxt.md',
              '/getting-started/use-labox-composable.md',
              '/getting-started/changelog.md',
            ],
          },
          // NavbarGroup
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
          {
            text: 'Directives',
            children: [
              '/directives/modal.md',
              '/directives/toast.md',
              '/directives/tooltip.md',
            ],
          },
          {
            text: 'Configuration',
            children: [
              '/configuration/global-configuration.md',
              '/configuration/theme-configuration.md',
            ],
          },
          {
            text: 'Links',
            children: [
              {
                text: 'Github',
                link: 'https://github.com/larmbox/labox',
              },
              {
                text: 'npm',
                link: 'https://npmjs.org/package/@larmbox/labox',
              },
              {
                text: 'Larmbox',
                link: 'https://larmbox.com',
              },
            ],
          },
        ],
        sidebar: {
          '/getting-started/': [
            {
              text: 'Getting Started',
              children: [
                '/getting-started/introduction.md',
                '/getting-started/installation.md',
                '/getting-started/responsive-meta-tag.md',
                '/getting-started/nuxt.md',
                '/getting-started/use-labox-composable.md',
                '/getting-started/changelog.md',
              ],
            },
          ],
          '/configuration/': [
            {
              text: 'Configuration',
              children: [
                '/configuration/global-configuration.md',
                '/configuration/theme-configuration.md',
              ],
            },
          ],
          '/components/': [
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
          '/directives/': [
            {
              text: 'Directives',
              children: [
                '/directives/modal.md',
                '/directives/toast.md',
                '/directives/tooltip.md',
              ],
            },
          ],
        },
      },
    },
  },
});
