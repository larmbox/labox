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
    const { setTheme, openModal } = useLabox();

    // setTheme('dark');
    // openModal('modal-id', { abc: 1 })
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

### openModal

Method to open a modal.

### closeModal

Method to close a modal.

### uuid

Returns a random string.

### theme

The current Labox theme.

### setTheme

Sets the Labox theme.
