# Labox

Labox is a component library.

- [Documentation](https://jonataw.github.io/labox)

## Installation

```sh
# npm
npm i @larmbox/labox

# Yarn
yarn add @larmbox/labox
```

Import Labox in your Vue entry file:

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

## License

[MIT](https://opensource.org/licenses/MIT)
