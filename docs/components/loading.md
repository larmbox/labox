# Loading

The loading component is used to show users that an activity is happening in the background.

<Snippet :code="example" />

## Size

The loading component allows a `size` prop. Labox provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" />

## Mode

Labox provides two loading animation modes, `spinner` and `dots`.

<Snippet :code="modes" />

## Variant

Use the `variant` prop to change the button theming according to your configured [themes](/labox/configuration/themes/).

<Snippet :code="variants" />

<script lang="ts" setup>
import {ref} from 'vue';

const example = `
<LLoading />
`

const sizes = `
<div class="icon-display">
  <LLoading size="sm" />
  <LLoading size="md" />
  <LLoading size="lg" />
</div>
`

const modes = `
<div class="loading-display">
  <LLoading mode="spinner" />
  <LLoading mode="dots" />
</div>
`

const variants = `
<div class="loading-display">
  <LLoading variant="primary" mode="spinner" />
  <LLoading variant="secondary" mode="spinner" />
  <LLoading variant="error" mode="spinner" />
  <LLoading variant="success" mode="spinner" />
  <LLoading variant="primary" mode="dots" />
  <LLoading variant="secondary" mode="dots" />
  <LLoading variant="error" mode="dots" />
  <LLoading variant="success" mode="dots" />
</div>
`

</script>
