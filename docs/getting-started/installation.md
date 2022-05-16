# Installation

Labox is available as an [npm package](https://www.npmjs.com/package/@larmbox/labox).

<CodeGroup>
  <CodeGroupItem title="npm" active>

```bash:no-line-numbers
npm install @larmbox/labox
```

  </CodeGroupItem>
  <CodeGroupItem title="Yarn">
  
```bash:no-line-numbers
yarn add @larmbox/labox
```

  </CodeGroupItem>
</CodeGroup>

Add Labox to your entry file:

```ts
import { createApp } from 'vue';
import {
  createLabox,
  LButton /* Add all components you would like to use here. */,
} from '@larmbox/labox';

createApp(App)
  .use(
    createLabox({
      components: [
        LButton /* Add all components you would like to use here. */,
      ],
    })
  )
  .mount('#app');
```

## Stylesheet

Import the `labox.scss` file with Sass:

```scss
@import '@larmbox/labox/dist/theme/labox';
```

:::warning
You probably do not want to import the full stylesheet if you do not intend to use all components. See below how to import only the necessary stylesheets.
:::

To only import the required stylesheets:

```scss
// The 'labox-base' stylesheet is always required:
@import '@larmbox/labox/dist/theme/labox-base';

// Import any additional component styles:
// @import '@larmbox/labox/dist/components/[component-name]/[component-name]';
@import '@larmbox/labox/dist/components/button/button';
// ...
```
