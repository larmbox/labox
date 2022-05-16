# Textarea <Tag text="<LTextarea>" />

The Textarea component represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text.

<Snippet :code="example" />

## Size

The Textarea component allows a `size` prop. Labox provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" />

## Variant

Use the `variant` prop to change the input theming according to your configured [themes](/labox/configuration/themes/).

<Snippet :code="variants" />

### Highlight

Set the `highlight` prop to override the default border color with the variant color.

<Snippet :code="highlight" />

Highlight is automatically set to `true` if the [feedback](#feedback) prop is populated. Set highlight to `false` to override feedback highlighting.

<Snippet :code="highlightFeedback" />

## Labels

Use the `label`, `description` and `help` props to describe your input fields.

<Snippet :code="labels" />

You can also use slots for more freedom on label content. Please see the [Slots](#slots) section for information on slot variables.

<Snippet :code="labelsSlots" />

## Block

By default the textarea component is displayed as an inline element. By adding the `block` prop, the input will span the whole container width.

<Snippet :code="block" />

## Disabled

A disabled textarea field cannot be interacted with.

<Snippet :code="disabled" />

## Readonly

Readonly differs from [Disabled](#disabled) by still allowing selecting the text already present in the input field.

<Snippet :code="readonly" />

## Resize

Use the `resize` prop to allow or disallow resizing the textarea. Allowed values are `horizontal`, `vertical`, `none` or `both`. The default value is `both`.

<Snippet :code="resize" />

## Feedback

Use the `feedback` slot to add validation or other form errors to your textarea field. Labox provides variants for error and success feedback types.

<Snippet :code="feedback" />

## Component Reference

<ComponentMeta src="textarea" />

<script lang="ts" setup>
const example = `<LTextarea label="Textarea" help="Please enter something here." />`

const sizes = `
<div class="grid-3">
  <LTextarea size="sm" placeholder="Small" />
  <LTextarea size="md" placeholder="Default" />
  <LTextarea size="lg" placeholder="Large" />
</div>
`

const variants = `
<div class="grid-4">
  <LTextarea variant="primary" placeholder="primary" />
  <LTextarea variant="secondary" placeholder="secondary" />
  <LTextarea variant="error" placeholder="error" />
  <LTextarea variant="success" placeholder="success"/>
</div>
`

const highlight = `
<div class="grid-4">
  <LTextarea highlight variant="primary" placeholder="primary" />
  <LTextarea highlight variant="secondary" placeholder="secondary" />
  <LTextarea highlight variant="error" placeholder="error" />
  <LTextarea highlight variant="success" placeholder="success"/>
</div>
`

const highlightFeedback = `
<div class="grid-3">
  <LTextarea feedback="Error!" placeholder="Feedback"/>
  <LTextarea :highlight="false" feedback="Error!" placeholder="Override"/>
</div>
`

const labels = `
<LTextarea 
  label="Label"
  description="Description"
  help="Help"
  placeholder="Placeholder"
/>
`

const labelsSlots = `
<LTextarea placeholder="Placeholder">
  <template #label="{ id }">
    <label :for="id">Label</label>
  </template>
  <template #description>
    <span style="color: purple" v-text="'Description'" />
  </template>
  <template #help>
    <span style="color: purple" v-text="'Help'" />
  </template>
</LTextarea>
`

const block = `
<LTextarea block label="Block" />
`

const disabled = `
<LTextarea disabled placeholder="Disabled" />`

const readonly = `
<template>
  <LTextarea v-model="text" readonly />
</template>

<script>
export default {
  data() {
    return {
      text: "Value"
    }
  }
}
<\/script>
`

const resize = `
<LTextarea resize="none" placeholder="Not resizeable!" />
`

const feedback = `
<div class="grid-2">
  <LTextarea label="Textarea" block feedback="Bad!" />
  <LTextarea label="Textarea" block feedback="Good!" feedback-type="success" />
</div>
`
</script>
