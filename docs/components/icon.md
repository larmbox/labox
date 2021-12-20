# Icon

The icon component provides an easy way to use various **font-based** icon libraries.

<Snippet :code="example" />

## Size

The icons automatically inherit the font size of the parent container.

<Snippet :code="sizes" />

<script lang="ts" setup>
import {ref} from 'vue';

const example = `
<LIcon icon="mailbox" />
`

const sizes = `
<div class="icon-display">
  <LIcon icon=\"mailbox\" />

  <div style="font-size: 2rem">
    <LIcon icon=\"mailbox\" />
  </div>

  <LIcon style="font-size: 4rem" icon=\"mailbox\" />
</div>
`

</script>
