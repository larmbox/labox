# Tooltip

Tooltips display informative text when users hover over, focus on, or tap an element. Labox uses [Popper](https://npmjs.org/package/@popperjs/core) for tooltips.

<Snippet :code="example" />

## Reactivity

All directive arguments are reactive.

<Snippet :code="reactive" />

This also works when using the object approach:

<Snippet :code="reactive2" />

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
</script>

:::warning
This section is incomplete.
:::
