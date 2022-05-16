<template>
  <div v-if="!description && useSlot" :class="className('form-description')">
    <slot />
  </div>
  <span
    v-else-if="description"
    :id="aria"
    :class="className('form-description')"
    v-text="description"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { inputProps } from '~/composables/component/use-input';
import { componentProps } from '~/composables/component/use-component';
import { useUtil } from '~/composables/component/use-util';

export default defineComponent({
  name: 'LFormDescription',
  props: {
    useSlot: {
      type: Boolean,
    },
    id: componentProps.id,
    description: inputProps.description,
    aria: {
      type: String,
    },
  },
  setup() {
    return { ...useUtil() };
  },
});
</script>
