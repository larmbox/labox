<template>
  <div v-if="!label && useSlot" :class="className('form-label')"><slot /></div>
  <label
    v-else-if="label"
    :id="aria"
    :for="id"
    :class="className('form-label')"
    v-text="label"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { inputProps } from '../../composables/use-input';
import { componentProps } from '../../composables/use-component';
import * as u from '../../composables/use-utils';

export default defineComponent({
  name: 'LFormLabel',
  props: {
    useSlot: {
      type: Boolean,
    },
    id: componentProps.id,
    label: inputProps.label,
    aria: {
      type: String,
    },
  },
  setup(_props, _context) {
    return { ...u };
  },
});
</script>
