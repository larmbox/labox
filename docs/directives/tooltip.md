# Tooltip <Tag text="v-tooltip" />

::: tip
This page covers the Tooltip directive. For advanced tooltips with support for slots or interaction, consider using the [Tooltip Component](/labox/components/tooltip).

The component page also contains additional examples.
:::

Tooltips display informative text when users hover over, focus on, or tap an element. Labox uses [Popper](https://npmjs.org/package/@popperjs/core) for tooltips.

<Snippet :code="example" />

## Syntax

<Snippet no-render no-edit :code="syntax" />

## Reactivity

All directive arguments are reactive.

<Snippet :code="reactive" />

This also works when using the object approach:

<Snippet :code="reactive2" />

<script lang="ts" setup>
const example = `
<LButton v-tooltip="'Hey there!'">Hover me!</LButton>
`

const syntax = `
<template>
  <LButton v-tooltip:[trigger]:[position]="[text | options]">Button</LButton>
</template>`

const reactive = `
<template>
  <LButton :variant="variant" v-tooltip="n">Hover me!</LButton>
  {{variant}}
</template>

<script>
export default {
  data() {
    return {
      n: 1,
      variant: 'primary'
    }
  },
  mounted() {
    setInterval(() => {
      this.n++;
      this.variant = this.variant === 'primary' ? 'secondary' : 'primary'
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

</script>
