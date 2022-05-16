# useLabox Composable

Labox exposes some methods through a composable.

This can be used to interact with Labox within your component setup function, or in your own composables.

To import useLabox:

```ts
import { useLabox } from '@larmbox/labox';
```

You can then use it:

```vue
<script lang="ts">
import { useLabox } from '@larmbox/labox';

export default defineComponent({
  setup() {
    const { setTheme, modal } = useLabox();

    setTheme('dark');
  },
});
</script>
```

## Exports

:::warning
This section is incomplete.
:::

### config

The Labox config object.

### modal

Method to open a modal.

### uuid

Returns a random string.

### theme

The current Labox theme.

### setTheme

Sets the Labox theme.
