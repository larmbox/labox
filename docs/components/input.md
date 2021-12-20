# Input

The input element is used to create interactive controls for web-based forms in order to accept data from the user.

<Snippet :code="example" />

## Size

The input component allows a `size` prop. Labox provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" />

## Descriptors

Use the `label`, `description` and `help` props to describe your input field.

<Snippet :code="descriptors" />

You can also use slots for more freedom on descriptor content. Please see the [Slots](#slots) section for information on slot variables.

<Snippet :code="descriptorsslots" />

## Block

By default the input component is displayed as an inline element. By adding the `block` prop, the input field will span the whole container width.

<Snippet :code="block" />

## Disabled

A disabled input field cannot be interacted with.

<Snippet :code="disabled" />

## Readonly

Readonly differs from [Disabled](#disabled) by still allowing selecting the text already present in the input field.

<Snippet :code="readonly" />

## Prepend & Append

Use the `prepend` and `append` props to add text before or after the input field.

<Snippet :code="prepend" />

You can also use slots for more freedom on prepend or append content:

<Snippet :code="prependslots" />

## Feedback

Use the `feedback` slot to add validation or other form errors to your input field. Labox provides variants for error and success feedback types.

<Snippet :code="feedback" />

<script lang="ts" setup>
const example = `<LInput label="Input" help="Please enter something here." />`

const sizes = `<div class="input-display">
  <LInput size="sm" placeholder="Small" />
  <LInput size="md" placeholder="Default" />
  <LInput size="lg" placeholder="Large" />
</div>`

const descriptors = `
<LInput 
  label="Label"
  description="Description"
  help="Help"
  placeholder="Placeholder"
/>
`

const descriptorsslots = `
<LInput placeholder="Placeholder">
  <template #label="{ id }">
    <label :for="id">Label</label>
  </template>
  <template #description>
    <span style="color: purple" v-text="'Description'" />
  </template>
  <template #help>
    <span style="color: purple" v-text="'Help'" />
  </template>
</LInput>
`

const block = `
<LInput block label="I'm wide!" />
`

const disabled = `
<LInput disabled placeholder="Can't type here!" />`

const readonly = `
<template>
  <LInput v-model="text" readonly />
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

const prepend = `
<LInput block prepend="Prepended" placeholder="Placeholder" />
<LInput block append="Appended" placeholder="Placeholder" />
<LInput block prepend="$" append="€" placeholder="Placeholder" />`

const prependslots = `
<LInput block placeholder="Placeholder">
  <template v-slot:prepend>
    <LButton>Button</LButton>
    <LButton variant="success">Button</LButton>
  </template>
  <template v-slot:append>
    <LButton>Button</LButton>
    <LButton variant="success">Button</LButton>
  </template>
</LInput>
`

const feedback = `
<LInput label="Input" block feedback="Bad!" />
<LInput label="Input" block feedback="Good!" feedback-type="success" />
`
</script>
