<template>
  <div v-if="!help && useSlot" :class="className('form-help')">
    <slot />
  </div>
  <span
    v-else-if="help"
    :id="aria"
    :class="className('form-help')"
    v-text="help"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { inputProps } from '../../composables/use-input';
import * as u from '../../composables/use-utils';

export default defineComponent({
  name: 'LFormHelp',
  props: {
    useSlot: {
      type: Boolean,
    },
    help: inputProps.help,
    aria: {
      type: String,
    },
  },
  setup(_props, _context) {
    return { ...u };
  },
});
</script>
