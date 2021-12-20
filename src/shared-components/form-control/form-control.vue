<template>
  <div :class="className('form-control')">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as u from '../../composables/use-utils';

export default defineComponent({
  name: 'LFormControl',
  setup(_props, _context) {
    return { ...u };
  },
});
</script>
