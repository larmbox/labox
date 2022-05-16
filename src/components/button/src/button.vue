<template>
  <component
    :is="props.tag"
    :id="id"
    :class="[
      className(name),
      blockClass,
      outlineClass,
      sizeClass,
      variantClass,
      classNameList({
        block: !!props.block,
        loading: !!props.loading,
        'icon-left': !!props.iconLeft,
        'icon-right': !!props.iconRight,
      }),
    ]"
    :active-class="
      props.tag.toLowerCase().includes('link') ? props.activeClass : undefined
    "
    v-bind="{
      ...bindProps({
        exclude: ['size', 'tag', 'variant'],
      }),
      ...bindAttrs(),
    }"
  >
    <LLoading v-if="props.loading" :size="props.size" variant="inherit" />
    <div :class="classComponentName('content')">
      <LIcon v-if="props.icon" :icon="props.icon" />
      <LIcon v-if="props.iconLeft" :icon="props.iconLeft" />
      <slot v-if="hasSlot('default')" :class="className(`${name}-slot`)" />
      <LIcon v-if="props.iconRight" :icon="props.iconRight" />
    </div>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LButtonComponent } from '..';

import LIcon from '~/components/icon';
import LLoading from '~/components/loading';

import { props } from './props';
import { LButtonCSSVariables } from './css-variables';

import {
  useBlock,
  useComponent,
  useSize,
  useUtil,
  useVariantWithOutline,
} from '~/composables/component';
import { _useLabox } from '~/composables/use-labox/use-labox';

const name = 'LButton';

export default defineComponent({
  name,
  props,
  // emits: ['click'], // By defining 'click' in emits, the native click listener is inherited automatically on the root element.
  components: { LIcon, LLoading },
  inheritAttrs: false,
  setup(props) {
    const component = useComponent<LButtonComponent>(name, props);

    const {
      theming: { registerComponentStyle },
    } = _useLabox();

    registerComponentStyle(component.name, LButtonCSSVariables);

    const { blockClass } = useBlock(component);
    const { sizeClass } = useSize(component);
    const { variantClass, outlineClass } = useVariantWithOutline(component);

    return {
      ...component,
      ...useUtil(component),
      blockClass,
      outlineClass,
      sizeClass,
      variantClass,
    };
  },
});
</script>
