# Modal

A modal is a dialog box/popup window that is displayed on top of the current page.

<Snippet :code="example" />

## Size

The modal component allows a `size` prop. Labox provides CSS rules for the small, default and large size options.

<Snippet :code="sizes" />

## Data

Additional data can be passed to the modal:

<Snippet :code="data" />

Or `openModal('modal-with-data', { hello: 'world' })` if you use the [useLabox](/labox/getting-started/useLabox) composable.

## Accessibility

Opening a modal automatically traps the tab focus inside the modal. When the modal is closed, Labox tries to restore focus to the element focused prior to opening the modal.

The `aria-labelledby` attribute is automatically set to the modal header element and `aria-describedby` attribute to the modal body element.

<script lang="ts" setup>
import {ref} from 'vue';

const example = `<LButton v-open-modal="'Hello'">Open Modal</LButton>

<LModal id="Hello" title="Hello world!" description="A modal is a dialog box/popup window that is displayed on top of the current page.">
  <p><b>Example modal:</b> This modal has a title and description, and also a footer with a button.</p>
  <template #footer-right="{ close }">
    <LButton @click="close">Close me!</LButton>
  </template>
</LModal>`

const sizes = `
<div class="size-display">
  <LButton v-open-modal="'Hello-sm'">Small</LButton>
  <LButton v-open-modal="'Hello-md'">Default</LButton>
  <LButton v-open-modal="'Hello-lg'">Large</LButton>
</div>

<LModal v-for="size in ['sm', 'md', 'lg']" :size="size" :key="size" :id="\`Hello-\${size}\`" title="Hello world!">
  <p>This modal is size {{ size }}!</p>
</LModal>`


const data = `<LButton v-open-modal="{ name: 'modal-with-data', data: { hello: 'world' } }">Open Modal</LButton>

<LModal id="modal-with-data" title="Modal with data" v-slot="{ data }">
  {{ data }}
</LModal>`

</script>
