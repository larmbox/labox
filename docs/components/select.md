# Select <Tag text="<LSelect>" />

The select component represents an input control that provides a menu of options.

<Snippet :code="example" />

## Size

The select component allows a `size` prop. Labox provides CSS rules for the small, default and large size options.

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

Use the `label`, `description` and `help` props to describe your select fields.

<Snippet :code="labels" />

You can also use slots for more freedom on label content. Please see the [Slots](#slots) section for information on slot variables.

<Snippet :code="labelsSlots" />

## Block

By default the select component is displayed as an inline element. By adding the `block` prop, the select element will span the whole container width.

<Snippet :code="block" />

## Disabled

A disabled select field cannot be interacted with.

<Snippet :code="disabled" />

## Feedback

Use the `feedback` slot to add validation or other form errors to your select field. Labox provides variants for error and success feedback types.

<Snippet :code="feedback" />

## Component Reference

<ComponentMeta src="select" />

<script lang="ts" setup>
const example = `<template>
  <LSelect
    v-model="selected"
    label="Select"
    :options="[
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cranberry', value: 'cranberry' }
    ]"
    :help="selected ? \`You selected \${selected}.\` : \`Please select something.\`"
  />
</template>

<script>
export default {
  data() {
    return {
      selected: null
    }
  }
}
<\/script>
`

const sizes = `<template>
  <div class="grid-3">
    <LSelect size="sm" :options="options" label="Small" />
    <LSelect size="md" :options="options" label="Default" />
    <LSelect size="lg" :options="options" label="Large" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Cranberry', value: 'cranberry' }
      ]
    }
  }
}
<\/script>
`

const variants = `
<div class="grid-4">
  <LSelect variant="primary" placeholder="primary" />
  <LSelect variant="secondary" placeholder="secondary" />
  <LSelect variant="error" placeholder="error" />
  <LSelect variant="success" placeholder="success"/>
</div>
`

const highlight = `
<div class="grid-4">
  <LSelect highlight variant="primary" placeholder="primary" />
  <LSelect highlight variant="secondary" placeholder="secondary" />
  <LSelect highlight variant="error" placeholder="error" />
  <LSelect highlight variant="success" placeholder="success"/>
</div>
`

const highlightFeedback = `
<div class="grid-3">
  <LSelect feedback="Error!" placeholder="Feedback"/>
  <LSelect :highlight="false" feedback="Error!" placeholder="Override"/>
</div>
`

const labels = `
<LSelect 
  label="Label"
  description="Description"
  help="Help"
  :options="[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cranberry', value: 'cranberry' }
  ]"
/>
`

const labelsSlots = `
<LSelect 
  :options="[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cranberry', value: 'cranberry' }
  ]">
  <template #label="{ id }">
    <label :for="id">Label</label>
  </template>
  <template #description>
    <span style="color: purple" v-text="'Description'" />
  </template>
  <template #help>
    <span style="color: purple" v-text="'Help'" />
  </template>
</LSelect>
`

const block = `
<LSelect 
  block
  label="Block" 
  :options="[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cranberry', value: 'cranberry' }
  ]"
/>
`

const disabled = `
<template>
<LSelect 
  v-model="selected" 
  :options="[
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cranberry', value: 'cranberry' }
  ]"
  disabled
/>
</template>

<script>
export default {
  data() {
    return {
      selected: "cranberry"
    }
  }
}
<\/script>
`

const feedback = `
<div class="grid-2">
  <LSelect label="Select" block feedback="Error!" />
  <LSelect label="Select" block feedback="Success!" feedback-type="success" />
</div>
`
</script>
