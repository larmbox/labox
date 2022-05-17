<template>
  <div
    :class="[className('form-control'), { [className('form-field')]: field }]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useContextUtil } from '~/composables/component/use-context-util';

export default defineComponent({
  name: 'LFormControl',
  props: {
    field: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return { ...useContextUtil() };
  },
});
</script>
