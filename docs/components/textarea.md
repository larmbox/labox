# Textarea

The Textarea element is used to create interactive controls for web-based forms in order to accept data from the user.

<Snippet :code="example" />

## Size

The Textarea component allows a `size` prop. Labox provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" />

## Descriptors

Use the `label`, `description` and `help` props to describe your input fields.

<Snippet :code="descriptors" />

You can also use slots for more freedom on descriptor content. Please see the [Slots](#slots) section for information on slot variables.

<Snippet :code="descriptorsslots" />

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

<script lang="ts" setup>
const example = `<LTextarea label="Textarea" help="Please enter something here." />`

const sizes = `<div class="textarea-display">
  <LTextarea size="sm" placeholder="Small" />
  <LTextarea size="md" placeholder="Default" />
  <LTextarea size="lg" placeholder="Large" />
</div>`

const descriptors = `
<LTextarea 
  label="Label"
  description="Description"
  help="Help"
  placeholder="Placeholder"
/>
`

const descriptorsslots = `
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
<LTextarea block label="I'm wide!" />
`

const disabled = `
<LTextarea disabled placeholder="Can't type here!" />`

const readonly = `
<template>
  <LTextarea v-model="text" readonly />
</template>

<script>
export default {
  data() {
    return {
      text: "Can't type here!"
    }
  }
}
<\/script>
`

const resize = `
<LTextarea resize="none" placeholder="Can't resize me!" />
`

const feedback = `
<LTextarea label="Textarea" block feedback="Bad!" />
<LTextarea label="Textarea" block feedback="Good!" feedback-type="success" />
`
</script>
