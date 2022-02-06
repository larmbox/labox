<template>
  <component
    :is="first(tag, config.tag)"
    v-if="first(type, config.type) === 'inline'"
    :class="[className(name), u.first(className, config.className)]"
    aria-hidden="true"
    v-bind="$attrs"
  >
    {{ first(icon, i) }}
  </component>
  <component
    :is="first(tag, config.tag)"
    v-else
    :class="[
      className(name),
      first(className, config.className),
      `${first(prefix, config.prefix)}${first(icon, i)}`,
    ]"
    aria-hidden="true"
    v-bind="$attrs"
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
  inheritAttrs: false,
  name: 'LIcon',
  props: {
    ...componentProps,
    ...props,
  },
  setup(_props, _context) {
    const component = useComponent<LIconConfig>();

    return {
      ...component,
      ...component.u,
    };
  },
});
</script>
