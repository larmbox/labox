import { defineClientAppEnhance } from '@vuepress/client';

import {
  createLabox,
  LButton,
  LCheckbox,
  LInput,
  LModal,
  LSelect,
  LTextarea,
  LTooltip,
  LRadio,
  LSwitch,
  LToast,
  useLabox,
  LIcon,
  LLoading,
} from '../../src';

import Snippet from './components/Snippet.vue';
import ComponentMeta from './components/ComponentMeta.vue';
import Playground from './components/Playground.vue';
import Tag from './components/Tag.vue';

import { createVuelr, Vuelr } from 'vuelr/dist/vuelr.es';

export default defineClientAppEnhance(({ app }) => {
  app
    .use(
      createLabox({
        components: [
          LButton,
          LInput,
          LSelect,
          LTooltip,
          LIcon,
          LLoading,
          LModal,
          LTextarea,
          LCheckbox,
          LRadio,
          LSwitch,
          LToast,
        ],
        config: {
          components: {
            LButton: {
              props: {},
            },
            LCheckbox: {
              props: {},
            },
            LIcon: {
              props: {
                tag: 'i',
                type: 'class',
                prefix: 'bi-',
                className: 'icon',
              },
            },
          },
        },
      })
    )
    .use(createVuelr({ components: [Vuelr] }));
  const {
    theming: { registerTheme, createPalette },
  } = useLabox();

  // addTheme({ name: 'light', vars: {} });
  registerTheme({
    name: 'dark',
    vars: {
      'border-color': '#262c34',
      'background-color': '#181b20',
      'background-color--disabled': '#1f2228',
      'text-color': '#adbac7',
      'text-color--light': '#93a7bb',
      'placeholder-color': '#93a7bb',
      'border-width': '2px',
      ...createPalette('secondary', '#2b6286'),
    },
  });

  app.component('Snippet', Snippet);
  app.component('ComponentMeta', ComponentMeta);
  app.component('Playground', Playground);
  app.component('Tag', Tag);
});

if (typeof document !== 'undefined') {
  const h = document.getElementsByTagName('html')[0];
  var observer = new MutationObserver(function (event) {
    const {
      theming: { setTheme },
    } = useLabox();
    const target = event[0].target as HTMLElement;
    const className = target.className;
    if (className.includes('dark')) {
      setTheme('dark');
      target.setAttribute('data-theme', 'dark');
    } else {
      setTheme('light');
      target.setAttribute('data-theme', 'light');
    }
  });

  observer.observe(h, {
    attributes: true,
    attributeFilter: ['class'],
    childList: false,
    characterData: false,
  });
}

import './plugins/container';
