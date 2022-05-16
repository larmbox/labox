# Radio <Tag text="<LRadio>" />

Radio inputs are normally presented in radio groups (a collection of radio buttons describing a set of related options). Only one radio button in a group can be selected at the same time.

<Snippet :code="example" />

## Size

The radio component allows a `size` prop. Labox provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" />

## Variant

Use the `variant` prop to change the input theming according to your configured [themes](/labox/configuration/themes/).

<Snippet :code="variants" />

### Highlight

Set the `highlight` prop to override the default border color with the variant color.

<Snippet :code="highlight" />

Highlight is automatically set to `true` if the [feedback](#feedback) prop is populated. Set highlight to `false` to override feedback highlighting.

## Labels

Use the `label`, and `description` props to describe your radio input.

<Snippet :code="labels" />

You can also use slots for more freedom on label content. Please see the [Slots](#slots) section for information on slot variables.

<Snippet :code="labelsSlots" />

## Block

By default the radio component is displayed as an inline element. By adding the `block` prop, the input container will span the whole container width.

<Snippet :code="block" />

## Disabled

A disabled radio cannot be interacted with.

<Snippet :code="disabled" />

## Feedback

Use the `feedback` slot to add validation or other form errors to your radio input. Labox provides variants for error and success feedback types.

<Snippet :code="feedback" />

## Component Reference

<ComponentMeta src="radio" />

<script lang="ts" setup>
const example = `
<LRadio name="fruit" value="apple" label="Apple" block />
<LRadio name="fruit" value="banana" label="Banana" block />`

const sizes = `
<LRadio name="size" value="small" size="sm" label="Small" block />
<LRadio name="size" value="default" size="md" label="Default" block />
<LRadio name="size" value="large" size="lg" label="Large" block />
`

const variants = `
<div class="grid-4">
  <LRadio variant="primary" label="primary" block />
  <LRadio variant="secondary" label="secondary" block />
  <LRadio variant="error" label="error" block />
  <LRadio variant="success" label="success" block />
</div>
`

const highlight = `
<div class="grid-4">
  <LRadio highlight variant="primary" label="primary" block />
  <LRadio highlight variant="secondary" label="secondary" block />
  <LRadio highlight variant="error" label="error" block />
  <LRadio highlight variant="success" label="success" block />
</div>
`

const labels = `
<LRadio 
  label="Label"
  description="Description"
/>
`

const labelsSlots = `
<LRadio>
  <template #label="{ id }">
    <label :for="id">Label</label>
  </template>
  <template #description>
    <span style="color: purple" v-text="'Description'" />
  </template>
</LRadio>
`

const block = `
<LRadio block label="Block" />
<LRadio block label="Block 2" />
`

const disabled = `
<LRadio disabled label="Disabled" block />
<LRadio disabled checked label="Disabled" block />`

const feedback = `
<LRadio label="Radio" block feedback="Error!" />
<LRadio label="Radio" block feedback="Success!" feedback-type="success" />
`
</script>
