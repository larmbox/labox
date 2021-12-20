# Select

The select component represents an input control that provides a menu of options.

<Snippet :code="example" />

## Size

The select component allows a `size` prop. Labox provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" />

## Descriptors

Use the `label`, `description` and `help` props to describe your select fields.

<Snippet :code="descriptors" />

You can also use slots for more freedom on descriptor content. Please see the [Slots](#slots) section for information on slot variables.

<Snippet :code="descriptorsslots" />

## Block

By default the select component is displayed as an inline element. By adding the `block` prop, the select element will span the whole container width.

<Snippet :code="block" />

## Disabled

A disabled select field cannot be interacted with.

<Snippet :code="disabled" />

## Feedback

Use the `feedback` slot to add validation or other form errors to your select field. Labox provides variants for error and success feedback types.

<Snippet :code="feedback" />

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
    block
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
  <div class="select-display">
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

const descriptors = `
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

const descriptorsslots = `
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
  label="I'm wide!" 
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
<LSelect label="Select" block feedback="Bad!" />
<LSelect label="Select" block feedback="Good!" feedback-type="success" />
`
</script>
