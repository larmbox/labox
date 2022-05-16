# Checkbox <Tag text="<LCheckbox>" />

The checkbox is shown as a square box that is ticked (checked) when activated. Checkboxes are used to let a user select one or more options of a limited number of choices.

<Snippet :code="example" />

## Size

The checkbox component allows a `size` prop. Labox provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" />

## Variant

Use the `variant` prop to change the checkbox theming according to your configured [themes](/labox/configuration/themes/).

<Snippet :code="variants" />

### Highlight

Set the `highlight` prop to override the default border color with the variant color.

<Snippet :code="highlight" />

Highlight is automatically set to `true` if the [feedback](#feedback) prop is populated. Set highlight to `false` to override feedback highlighting.

<Snippet :code="highlightFeedback" />

## Labels

Use the `label`, and `description` props to describe your checkbox.

<Snippet :code="labels" />

You can also use slots for more freedom on label content. Please see the [Slots](#slots) section for information on slot variables.

<Snippet :code="labelsSlots" />

## Block

By default the switch component is displayed as an inline element. By adding the `block` prop, the input container will span the whole container width.

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

## Component Reference

<ComponentMeta src="checkbox" />

<script lang="ts" setup>
const example = `<LCheckbox label="Checkbox" />`

const sizes = `
<div class="grid-3">
  <LCheckbox size="sm" label="Small" block />
  <LCheckbox size="md" label="Default" block />
  <LCheckbox size="lg" label="Large" block />
</div>
`

const variants = `
<div class="grid-4">
  <LCheckbox variant="primary" label="primary" />
  <LCheckbox variant="secondary" label="secondary" />
  <LCheckbox variant="error" label="error" />
  <LCheckbox variant="success" label="success" />
</div>
`

const highlight = `
<div class="grid-4">
  <LCheckbox highlight variant="primary" label="primary" />
  <LCheckbox highlight variant="secondary" label="secondary" />
  <LCheckbox highlight variant="error" label="error" />
  <LCheckbox highlight variant="success" label="success" />
</div>
`

const highlightFeedback = `
<div class="grid-3">
  <LCheckbox feedback="Error!" label="Feedback" />
  <LCheckbox :highlight="false" feedback="Error!" label="Override" />
</div>
`

const labels = `
<LCheckbox 
  label="Label"
  description="Description"
/>
`

const labelsSlots = `
<LCheckbox>
  <template #label="{ id }">
    <label :for="id">Label</label>
  </template>
  <template #description>
    <span style="color: purple" v-text="'Description'" />
  </template>
</LCheckbox>
`

const block = `
<LCheckbox block label="Block" />
<LCheckbox block label="Block 2" />
`

const disabled = `
<LCheckbox disabled label="Disabled" block />
<LCheckbox disabled checked label="Disabled" block />`

const indeterminate = `
<LCheckbox indeterminate label="Indeterminate" />`

const feedback = `
<LCheckbox label="Checkbox" block feedback="Bad!" />
<LCheckbox label="Checkbox" block feedback="Good!" feedback-type="success" />
`
</script>
