<template>
  <div v-if="!label && useSlot" :class="className('form-label')"><slot /></div>
  <label
    v-else-if="label"
    :id="aria"
    :for="$props.for"
    :class="className('form-label')"
    v-text="label"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { inputProps } from '~/composables/component/use-input';
import { componentProps } from '~/composables/component/use-component';
import { useContextUtil } from '~/composables/component/use-context-util';

export default defineComponent({
  name: 'LFormLabel',
  props: {
    useSlot: {
      type: Boolean,
    },
    for: componentProps.id,
    label: inputProps.label,
    aria: {
      type: String,
    },
  },
  setup() {
    return { ...useContextUtil() };
  },
});
</script>
