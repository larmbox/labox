<template>
  <div
    :id="id"
    :class="[
      className(name),
      classComponentName(props.mode),
      sizeClass,
      variantClass,
    ]"
    aria-busy="true"
    v-bind="{ ...bindProps({ include: ['role'] }), ...bindAttrs() }"
  >
    <div>
      <div v-if="isDots" role="presentation" />
      <div v-if="isDots" role="presentation" />
      <div v-if="isDots" role="presentation" />
    </div>
    <span v-if="props.label" :class="screenReaderClass" v-text="props.label" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { LLoadingComponent } from '..';

import { props } from './props';
import { LLoadingCSSVariables } from './css-variables';

import {
  useAria,
  useComponent,
  useSize,
  useVariant,
} from '../../../composables/component';
import { useUtil } from '~/composables/component/use-util';
import { _useLabox } from '~/composables/use-labox/use-labox';

const name = 'LLoading';

export default defineComponent({
  name,
  props,
  inheritAttrs: false,
  setup(props) {
    const component = useComponent<LLoadingComponent>(name, props);

    const {
      theming: { registerComponentStyle },
    } = _useLabox();

    registerComponentStyle(component.name, LLoadingCSSVariables);

    const { screenReaderClass } = useAria();
    const { sizeClass } = useSize(component);
    const { variantClass } = useVariant(component);

    const isDots = computed(() => component.props.value.mode === 'dots');

    return {
      ...component,
      ...useUtil(component),

      screenReaderClass,
      sizeClass,
      variantClass,

      isDots,
    };
  },
});
</script>
