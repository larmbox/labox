<template>
  <component
    :is="u.first(tag, config.tag)"
    v-if="u.first(type, config.type) === 'inline'"
    :class="[u.className(name), u.first(className, config.className)]"
    aria-hidden="true"
  >
    {{ u.first(icon, i) }}
  </component>
  <component
    :is="u.first(tag, config.tag)"
    v-else
    :class="[
      u.className(name),
      u.first(className, config.className),
      `${u.first(prefix, config.prefix)}${u.first(icon, i)}`,
    ]"
    aria-hidden="true"
  />
</template>

<script lang="ts">
import { LIconConfig } from '.';
import { defineComponent } from 'vue';
import { componentProps, useComponent } from '../../composables/use-component';

export const props = {
  className: {
    type: String,
  },
  prefix: {
    type: String,
  },
  type: {
    type: String,
  },
  tag: {
    type: String,
  },
  i: {
    type: String,
  },
  icon: {
    type: String,
  },
};

export default defineComponent({
  name: 'LIcon',
  props: {
    ...componentProps,
    ...props,
  },
  setup(_props, _context) {
    const component = useComponent<LIconConfig>();

    return {
      ...component,
    };
  },
});
</script>
