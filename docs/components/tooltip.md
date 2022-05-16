# Tooltip <Tag text="<LTooltip>" />

::: tip
This page covers the Tooltip component. For simple tooltips, you might want to use the [Tooltip Directive](/labox/directives/tooltip).
:::

Tooltips display informative text when users hover over, focus on, or tap an element. Labox uses [Popper](https://npmjs.org/package/@popperjs/core) for tooltips.

<Snippet :code="example" />

## Reactivity

All directive arguments are reactive.

<Snippet :code="reactive" />

This also works when using the object approach:

<Snippet :code="reactive2" />

## Placement

Below are the possible tooltip placements.

<Snippet :code="placements" />

## Trigger types

You can use `hover` or `click` to trigger the tooltip. The default is `hover`.

If you use `hover`, touch users must tap and hold the trigger element to show the tooltip.

<Snippet :code="triggers" />

## Slots

Use the `trigger` and `content` slots to use elements in the content displayed in the tooltip.

<Snippet :code="template" />

## Interactive

Set prop `interactive` on the tooltip to allow users to interact with the content without it being closed automatically.

<Snippet :code="interactive" />

## Component Reference

<ComponentMeta src="tooltip" />

<script lang="ts" setup>
const example = `
<LButton v-tooltip="'Hey there!'">Hover me!</LButton>
`

const reactive = `
<template>
  <LButton v-tooltip="n">Hover me!</LButton>
</template>

<script>
export default {
  data() {
    return {
      n: 1
    }
  },
  mounted() {
    setInterval(() => {
      this.n++;
    }, 500)
  }
}
<\/script>
`

const reactive2 = `
<template>
  <LButton v-tooltip="{ text: variant, variant }">Hover me!</LButton>
</template>

<script>
export default {
  data() {
    return {
      variant: 'primary',
    }
  },
  mounted() {
    setInterval(() => {
      this.variant = this.variant === 'primary' ? 'error' : 'primary';
    }, 500)
  }
}
<\/script>
`

const placements = `
<template>
  <div style="display: grid; max-width: 300px; gap: 4px">
    <LButton v-tooltip="{ text: 'top-start', placement: 'top-start' }" style="grid-area: 1 / 1 / 2 / 2;">top-start</LButton>
    <LButton v-tooltip="{ text: 'top', placement: 'top' }" style="grid-area: 1 / 2 / 2 / 3;">top</LButton>
    <LButton v-tooltip="{ text: 'top-end', placement: 'top-end' }" style="grid-area: 1 / 3 / 2 / 4;">top-end</LButton>
    <LButton v-tooltip="{ text: 'left-start', placement: 'left-start' }" style="grid-area: 2 / 1 / 3 / 2;">left-start</LButton>
    <LButton v-tooltip="{ text: 'left', placement: 'left' }" style="grid-area: 3 / 1 / 4 / 2;">left</LButton>
    <LButton v-tooltip="{ text: 'left-end', placement: 'left-end' }" style="grid-area: 4 / 1 / 5 / 2;">left-end</LButton>
    <LButton v-tooltip="{ text: 'right-start', placement: 'right-start' }" style="grid-area: 2 / 3 / 3 / 4;">right-start</LButton>
    <LButton v-tooltip="{ text: 'right', placement: 'right' }" style="grid-area: 3 / 3 / 4 / 4;">right</LButton>
    <LButton v-tooltip="{ text: 'right-end', placement: 'right-end' }" style="grid-area: 4 / 3 / 5 / 4;">right-end</LButton>
    <LButton v-tooltip="{ text: 'bottom-start', placement: 'bottom-start' }" style="grid-area: 5 / 1 / 6 / 2;">bottom-start</LButton>
    <LButton v-tooltip="{ text: 'bottom', placement: 'bottom' }" style="grid-area: 5 / 2 / 6 / 3;">bottom</LButton>
    <LButton v-tooltip="{ text: 'bottom-end', placement: 'bottom-end' }" style="grid-area: 5 / 3 / 6 / 4;">bottom-end</LButton>
  </div>
</template>
`

const triggers = `
<div class="button-display">
  <LButton v-tooltip="{ text: 'Hover!', trigger: 'hover' }">Hover</LButton>
  <LButton v-tooltip="{ text: 'Click!', trigger: 'click' }">Click</LButton>
</div>
`

const template = `
<LTooltip>
  <template #trigger="{id}">
    <LButton :id="id">Hover me!</LButton>
  </template>
  <template #content>
    <p style="margin: 0"><b>bold</b> <a href="#">link</a> 🦙</p>
  </template>
</LTooltip>
`

const interactive = `
<LTooltip interactive>
  <template #trigger="{id}">
    <LButton :id="id">Hover me!</LButton>
  </template>
  <template #content>
    <p style="margin: 0">You can now click this <a href="#">link</a>.</p>
  </template>
</LTooltip>
`
</script>
