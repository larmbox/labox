import { defineClientAppEnhance } from '@vuepress/client';

import {
  createLabox,
  useLabox,
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
  LIcon,
  LLoading,
} from '../../src';

import { createVuelr, Vuelr } from 'vuelr/dist/vuelr.es';

import Snippet from './components/Snippet.vue';
import ComponentMeta from './components/ComponentMeta.vue';
import Playground from './components/Playground.vue';
import Tag from './components/Tag.vue';

export default defineClientAppEnhance(({ app }) => {
  app.use(createVuelr({ components: [Vuelr] } as any)).use(
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
  );

  const {
    theming: { registerTheme, createPalette },
  } = useLabox();

  registerTheme({
    name: 'dark',
    variables: {
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
  const element = document.getElementsByTagName('html')[0];

  const observer = new MutationObserver(function (event) {
    const {
      theming: { setTheme },
    } = useLabox();

    const target = event[0].target as HTMLElement;
    setTheme(target.classList.contains('dark') ? 'dark' : 'light');
  });

  observer.observe(element, {
    attributes: true,
    attributeFilter: ['class'],
    childList: false,
    characterData: false,
  });
}

import './plugins/container';
