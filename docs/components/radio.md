# Radio

Radio inputs are normally presented in radio groups (a collection of radio buttons describing a set of related options). Only one radio button in a group can be selected at the same time.

<Snippet :code="example" />

## Size

The radio component allows a `size` prop. Labox provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" />

## Descriptors

Use the `label`, and `description` props to describe your radio input.

<Snippet :code="descriptors" />

You can also use slots for more freedom on descriptor content. Please see the [Slots](#slots) section for information on slot variables.

<Snippet :code="descriptorsslots" />

## Block

By default the radio component is displayed as an inline element. By adding the `block` prop, the input container will span the whole container width.

<Snippet :code="block" />

## Disabled

A disabled radio cannot be interacted with.

<Snippet :code="disabled" />

## Feedback

Use the `feedback` slot to add validation or other form errors to your radio input. Labox provides variants for error and success feedback types.

<Snippet :code="feedback" />

<script lang="ts" setup>
const example = `
<LRadio name="fruit" value="apple" label="Apple" block />
<LRadio name="fruit" value="banana" label="Banana" block />`

const sizes = `
<LRadio name="size" value="small" size="sm" label="Small" block />
<LRadio name="size" value="default" size="md" label="Default" block />
<LRadio name="size" value="large" size="lg" label="Large" block />
`

const descriptors = `
<LRadio 
  label="Label"
  description="Description"
/>
`

const descriptorsslots = `
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
<LRadio block label="I'm wide!" />
<LRadio block label="Me too!" />
`

const disabled = `
<LRadio disabled label="Can't click me!" />`

const feedback = `
<LRadio label="Radio" block feedback="Bad!" />
<LRadio label="Radio" block feedback="Good!" feedback-type="success" />
`
</script>
