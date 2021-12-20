<template>
  <div
    :class="[
      component.u.className(component.name),
      component.u.classComponentName(
        component.u.first(mode, component.config.mode)
      ),
      variantClass,
      themeClass,
      sizeClass,
    ]"
    aria-busy="true"
    :role="role"
  >
    <div v-if="isDots" role="presentation" />
    <div v-if="isDots" role="presentation" />
    <div v-if="isDots" role="presentation" />
    <span v-if="label" :class="screenReaderClass" v-text="label" />
  </div>
</template>

<script lang="ts">
import { LLoadingConfig } from '.';
import { computed, defineComponent } from 'vue';
import { useComponent } from '../../composables/use-component';
import { useSize, sizeProps } from '../../composables/use-size';
import { useVariant, variantProps } from '../../composables/use-variant';
import { useAria } from '../../composables/use-aria';

export default defineComponent({
  name: 'LLoading',
  props: {
    ...sizeProps,
    ...variantProps,
    mode: {
      type: String,
    },
    role: {
      type: String,
    },
    label: {
      type: String,
    },
  },
  setup(props) {
    const component = useComponent<LLoadingConfig>();
    const { variantClass, themeClass } = useVariant();
    const { sizeClass } = useSize();
    const { screenReaderClass } = useAria();

    const isDots = computed(
      () => component.u.first(props.mode, component.config.mode) === 'dots'
    );

    return {
      component,
      sizeClass,
      variantClass,
      themeClass,
      screenReaderClass,

      isDots,
    };
  },
});
</script>
