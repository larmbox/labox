# Switch

The switch works just like a [checkbox](/labox/components/checkbox) but has a different appearance.

<Snippet :code="example" />

## Size

The switch component allows a `size` prop. Labox provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" />

## Descriptors

Use the `label`, and `description` props to describe your switch.

<Snippet :code="descriptors" />

You can also use slots for more freedom on descriptor content. Please see the [Slots](#slots) section for information on slot variables.

<Snippet :code="descriptorsslots" />

## Block

By default the switch component is displayed as an inline element. By adding the `block` prop, the input container will span the whole container width.

<Snippet :code="block" />

## Disabled

A disabled switch cannot be interacted with.

<Snippet :code="disabled" />

## Feedback

Use the `feedback` slot to add validation or other form errors to your switch input. Labox provides variants for error and success feedback types.

<Snippet :code="feedback" />

<script lang="ts" setup>
const example = `<LSwitch label="Check me!" />`

const sizes = `
<LSwitch size="sm" label="Small" block />
<LSwitch size="md" label="Default" block />
<LSwitch size="lg" label="Large" block />
`

const descriptors = `
<LSwitch 
  label="Label"
  description="Description"
/>
`

const descriptorsslots = `
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
<LSwitch block label="I'm wide!" />
<LSwitch block label="Me too!" />
`

const disabled = `
<LSwitch disabled label="Can't check me!" />`

const feedback = `
<LSwitch label="Input" block feedback="Bad!" />
<LSwitch label="Input" block feedback="Good!" feedback-type="success" />
`
</script>
