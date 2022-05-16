<template>
  <div :id="global ? undefined : id" :global="global ? '1' : undefined">
    <slot />
  </div>
</template>

<script lang="ts">
import { _useLabox } from '~/composables/use-labox/use-labox';
import { defineComponent, onMounted, onUnmounted, onUpdated, watch } from 'vue';
import { props } from './props';

export default defineComponent({
  name: 'LThemeProvider',
  props,
  setup(props, _context) {
    const { uuid, render, destroy, components } = _useLabox();

    const id = props.global ? 'global' : uuid();

    const create = () => {
      render(id);
    };

    onMounted(create);
    onUpdated(create);
    watch(() => [components], create, { deep: true });

    onUnmounted(() => setTimeout(() => destroy(id), props.destroyDelay));

    return { id };
  },
});
</script>
