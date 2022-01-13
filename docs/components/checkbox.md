# Checkbox

The checkbox is shown as a square box that is ticked (checked) when activated. Checkboxes are used to let a user select one or more options of a limited number of choices.

<Snippet :code="example" />

## Size

The checkbox component allows a `size` prop. Labox provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" />

## Descriptors

Use the `label`, and `description` props to describe your checkbox.

<Snippet :code="descriptors" />

You can also use slots for more freedom on descriptor content. Please see the [Slots](#slots) section for information on slot variables.

<Snippet :code="descriptorsslots" />

## Block

By default the checkbox component is displayed as an inline element. By adding the `block` prop, the input container will span the whole container width.

<Snippet :code="block" />

## Disabled

A disabled checkbox cannot be interacted with.

<Snippet :code="disabled" />

## Indeterminate

Set the indeterminate prop to render a checkbox in a indeterminate state. This only affects the element visually and the checkbox works like usual.

<Snippet :code="indeterminate" />

## Feedback

Use the `feedback` slot to add validation or other form errors to your checkbox input. Labox provides variants for error and success feedback types.

<Snippet :code="feedback" />

<script lang="ts" setup>
const example = `<LCheckbox label="Check me!" />`

const sizes = `
<LCheckbox size="sm" label="Small" block />
<LCheckbox size="md" label="Default" block />
<LCheckbox size="lg" label="Large" block />
`

const descriptors = `
<LCheckbox 
  label="Label"
  description="Description"
/>
`

const descriptorsslots = `
<LCheckbox placeholder="Placeholder">
  <template #label="{ id }">
    <label :for="id">Label</label>
  </template>
  <template #description>
    <span style="color: purple" v-text="'Description'" />
  </template>
</LCheckbox>
`

const block = `
<LCheckbox block label="I'm wide!" />
<LCheckbox block label="Me too!" />
`

const disabled = `
<LCheckbox disabled label="Can't check me!" block />
<LCheckbox disabled checked label="Can't uncheck me!" block />`

const indeterminate = `
<LCheckbox indeterminate label="Indeterminate" />`

const feedback = `
<LCheckbox label="Checkbox" block feedback="Bad!" />
<LCheckbox label="Checkbox" block feedback="Good!" feedback-type="success" />
`
</script>
