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
} from '../../src';

import Snippet from './components/Snippet.vue';

import { createVuelr, Vuelr } from 'vuelr/dist/vuelr.es';

export default defineClientAppEnhance(({ app, router }) => {
  router.addRoute({
    path: '/',
    redirect: '/getting-started/introduction',
  });

  app
    .use(
      createLabox({
        components: [
          LButton,
          LInput,
          LSelect,
          LTooltip,
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
              config: { prefix: 'bi-', className: '', type: 'class', tag: 'i' },
            },
          },
        },
      })
    )
    .use(createVuelr({ components: [Vuelr] }));
  const { setTheme } = useLabox();

  app.component('Snippet', Snippet);
  setTheme('default');
});
