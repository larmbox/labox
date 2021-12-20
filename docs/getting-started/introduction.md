# Introduction

Labox is a Vue 3 component library.

## Installation

<CodeGroup>
  <CodeGroupItem title="npm" active>

```bash:no-line-numbers
npm install labox
```

  </CodeGroupItem>
  <CodeGroupItem title="Yarn">
  
```bash:no-line-numbers
yarn add labox
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
You probably don't want to import the full stylesheet if you don't intend to use all components. See below for how to import only the necessary stylesheets.
:::

To only import the required stylesheets:

```scss
// The 'labox-base' stylesheet is always required:
@import '@larmbox/labox/dist/theme/labox-base';

@import '@larmbox/labox/dist/components/button';
@import '@larmbox/labox/dist/modal/modal';
// ...
```
