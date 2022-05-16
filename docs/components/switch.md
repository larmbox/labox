# Switch <Tag text="<LSwitch>" />

The switch works just like a [checkbox](/labox/components/checkbox) but has a different appearance.

<Snippet :code="example" />

## Size

The switch component allows a `size` prop. Labox provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" />

## Variant

Use the `variant` prop to change the switch theming according to your configured [themes](/labox/configuration/themes/).

<Snippet :code="variants" />

### Highlight

Set the `highlight` prop to override the default border color with the variant color.

<Snippet :code="highlight" />

Highlight is automatically set to `true` if the [feedback](#feedback) prop is populated. Set highlight to `false` to override feedback highlighting.

<Snippet :code="highlightFeedback" />

## Labels

Use the `label`, and `description` props to describe your switch.

<Snippet :code="labels" />

You can also use slots for more freedom on label content. Please see the [Slots](#slots) section for information on slot variables.

<Snippet :code="labelsSlots" />

## Block

By default the checkbox component is displayed as an inline element. By adding the `block` prop, the input container will span the whole container width.

<Snippet :code="block" />

## Disabled

A disabled switch cannot be interacted with.

<Snippet :code="disabled" />

## Feedback

Use the `feedback` slot to add validation or other form errors to your switch input. Labox provides variants for error and success feedback types.

<Snippet :code="feedback" />

## Component Reference

<ComponentMeta src="switch" />

<script lang="ts" setup>
const example = `<LSwitch label="Switch" />`

const sizes = `
<div class="grid-3">
  <LSwitch size="sm" label="Small" block />
  <LSwitch size="md" label="Default" block />
  <LSwitch size="lg" label="Large" block />
</div>
`

const variants = `
<div class="grid-4">
  <LSwitch variant="primary" label="primary" />
  <LSwitch variant="secondary" label="secondary" />
  <LSwitch variant="error" label="error" />
  <LSwitch variant="success" label="success" />
</div>
`

const highlight = `
<div class="grid-4">
  <LSwitch highlight variant="primary" label="primary" />
  <LSwitch highlight variant="secondary" label="secondary" />
  <LSwitch highlight variant="error" label="error" />
  <LSwitch highlight variant="success" label="success" />
</div>
`

const highlightFeedback = `
<div class="grid-3">
  <LSwitch feedback="Error!" label="Feedback" />
  <LSwitch :highlight="false" feedback="Error!" label="Override" />
</div>
`

const labels = `
<LSwitch 
  label="Label"
  description="Description"
/>
`

const labelsSlots = `
<LSwitch placeholder="Placeholder">
  <template #label="{ id }">
    <label :for="id">Label</label>
  </template>
  <template #description>
    <span style="color: purple" v-text="'Description'" />
  </template>
</LSwitch>
`

const block = `
<LSwitch block label="Block" />
<LSwitch block label="Block 2" />
`

const disabled = `
<LSwitch disabled label="Disabled" block />
<LSwitch checked disabled label="Disabled" block />`

const feedback = `
<LSwitch label="Switch" block feedback="Error!" description="Hello world!" />
<LSwitch label="Switch" block feedback="Success!" feedback-type="success" />
`
</script>
