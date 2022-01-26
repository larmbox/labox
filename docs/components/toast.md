# Toast

Tooltips display informative text when users hover over, focus on, or tap an element. Labox uses [Popper](https://npmjs.org/package/@popperjs/core) for tooltips.

<Snippet :code="example" />

<script lang="ts" setup>
const example = `
<LButton v-toast="'Hey there!'">Hover me!</LButton>
`
</script>
