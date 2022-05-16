# Input <Tag text="<LInput>" />

The input element is used to create interactive controls for web-based forms in order to accept data from the user.

<Snippet :code="example" />

## Size

The input component allows a `size` prop. Labox provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" />

## Variant

Use the `variant` prop to change the input theming according to your configured [themes](/labox/configuration/themes/).

<Snippet :code="variants" />

### Highlight

Set the `highlight` prop to override the default border color with the variant color.

<Snippet :code="highlight" />

Highlight is automatically set to `true` if the [feedback](#feedback) prop is populated. Set highlight to `false` to override feedback highlighting.

<Snippet :code="highlightFeedback" />

## Label

Use the `label`, `description` and `help` props to describe your input field.

<Snippet :code="label" />

You can also use slots for more freedom on label content. Please see the [Slots](#slots) section for information on slot variables.

<Snippet :code="labelsSlots" />

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

## Type

You can use all native browser HTML5 input types. Default is `text`.

<Snippet :code="type" />

## Component Reference

<ComponentMeta src="input" />

<script lang="ts" setup>
const example = `<LInput label="Input" help="Please enter something here." />`

const sizes = `<div class="grid-3">
  <LInput size="sm" placeholder="Small" />
  <LInput size="md" placeholder="Default" />
  <LInput size="lg" placeholder="Large" />
</div>`

const variants = `
<div class="grid-4">
  <LInput variant="primary" placeholder="primary" />
  <LInput variant="secondary" placeholder="secondary" />
  <LInput variant="error" placeholder="error" />
  <LInput variant="success" placeholder="success"/>
</div>
`

const highlight = `
<div class="grid-4">
  <LInput highlight variant="primary" placeholder="primary" />
  <LInput highlight variant="secondary" placeholder="secondary" />
  <LInput highlight variant="error" placeholder="error" />
  <LInput highlight variant="success" placeholder="success"/>
</div>
`

const highlightFeedback = `
<div class="grid-3">
  <LInput feedback="Error!" placeholder="Feedback"/>
  <LInput :highlight="false" feedback="Error!" placeholder="Override"/>
</div>
`

const label = `
<LInput 
  label="Label"
  description="Description"
  help="Help"
  placeholder="Placeholder"
/>
`

const labelsSlots = `
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
<LInput block label="Block" />
`

const disabled = `
<div class="grid-3">
  <LInput disabled placeholder="Placeholder" />
  <LInput disabled value="Value" placeholder="Placeholder" />
</div>
`

const readonly = `
<template>
  <LInput v-model="text" readonly />
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

const type = `
<div class="grid-3">
  <LInput block label="text" type="text" />
  <LInput block label="number" type="number" />
  <LInput block label="email" type="email" />
  <LInput block label="tel" type="tel" />
  <LInput block label="password" type="password" />
  <LInput block label="search" type="search" />
  <LInput block label="url" type="url" />
  <LInput block label="date" type="date" />
  <LInput block label="time" type="time" />
  <LInput block label="range" type="range" />
  <LInput block label="color" type="color" />
</div>`
</script>
