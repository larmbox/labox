<template>
  <component
    :is="props.tag"
    v-if="props.type === 'inline'"
    :class="[name, props.className]"
    aria-hidden="true"
    v-bind="bindAttrs()"
    v-text="`${props.prefix}${props.icon || props.i}`"
  />
  <component
    :is="props.tag"
    v-else
    :class="[name, props.className, `${props.prefix}${props.icon || props.i}`]"
    aria-hidden="true"
    v-bind="bindAttrs()"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LIconComponent } from '..';

import { props } from './props';
import { LInputCSSVariables } from './css-variables';

import { useComponent, useUtil } from '~/composables/component';
import { _useLabox } from '~/composables/use-labox/use-labox';

const name = 'LIcon';

export default defineComponent({
  name,
  props,
  inheritAttrs: false,
  setup(props) {
    const component = useComponent<LIconComponent>(name, props);

    const {
      theming: { registerComponentStyle },
    } = _useLabox();

    registerComponentStyle(component.name, LInputCSSVariables);

    return {
      ...component,
      ...useUtil(component),
    };
  },
});
</script>
