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
import { inputProps } from '~/composables/component/use-input';
import { useUtil } from '~/composables/component/use-util';

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
  setup() {
    return { ...useUtil() };
  },
});
</script>
