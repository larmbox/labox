# Button

The button component represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality.

<Snippet code="<LButton>Button</LButton>" />

## Size

The button component allows a `size` prop. Labox provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" />

## Variant

Use the `variant` prop to change the button theming according to your configured [themes](/labox/configuration/themes/).

<Snippet :code="variants" />

### Outline

Add the `outline` prop to change the button to a outline variant.

<Snippet :code="outline" />

## Block

By default the button component is displayed as an inline element. By adding the `block` prop, the button will span the whole container width.

<Snippet code="<LButton block>I'm wide!</LButton>" />

## Disabled

Set the `disabled` prop to disable button default functionality.

<Snippet code="<LButton disabled>Can't click me!</LButton>" />

## Icons

Use the `icon-left` and `icon-right` props to add an icon according to your [LIcon](/labox/components/icon) settings. If your button has no text, use the `icon` prop instead.

<Snippet :code="icon" />

Icons are automatically scaled to button size.

## Loading

Add the `loading` prop to show the [Loading](/labox/components/loading) component inside the button.

<Snippet :code="loadingSnippet" />

The button will maintain its width when changed from non-loading to loading:

<Snippet :code="loadingSnippet2" />

<script lang="ts" setup>
import {ref} from 'vue';

const sizes = `
<div class="button-display">
  <LButton size="sm">Small Button</LButton>
  <LButton size="md">Default Button</LButton>
  <LButton size="lg">Large Button</LButton>
</div>
`

const variants = `
<div class="button-display">
  <LButton variant="primary">Primary</LButton>
  <LButton variant="secondary">Secondary</LButton>
  <LButton variant="error">Error</LButton>
  <LButton variant="success">Success</LButton>
</div>
`
const outline = `
<div class="button-display">
  <LButton variant="primary" outline>Primary</LButton>
  <LButton variant="secondary" outline>Secondary</LButton>
  <LButton variant="error" outline>Error</LButton>
  <LButton variant="success" outline>Success</LButton>
</div>
`

const icon = `
<div class="button-display">
  <LButton icon-left="box">Text</LButton>
  <LButton icon-right="mailbox">Text</LButton>
  <LButton icon="bounding-box-circles"></LButton>
</div>
`

const loadingSnippet = `
<template>
  <LButton :loading="loading">Loading</LButton>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    }
  }
}
<\/script>
`

const loadingSnippet2 = `
<template>
  <LButton :loading="loading" @click="loading = !loading">Click me to toggle loading state!</LButton>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  }
}
<\/script>
`
</script>
