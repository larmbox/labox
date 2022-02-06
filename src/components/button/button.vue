<template>
  <component
    :is="tag"
    :class="[
      className(name),
      sizeClass,
      variantClass,
      outlineClass,
      themeClass,
      blockClass,
      classNameList({
        block: block,
        loading: loading,
        'icon-left': !!iconLeft,
        'icon-right': !!iconRight,
      }),
    ]"
    :id="id"
    v-bind="{ ...omit(binds.events), ...bind(binds) }"
    :type="first(type, config.type)"
    :active-class="
      tag.toLowerCase().includes('link')
        ? first(activeClass, config.activeClass)
        : undefined
    "
    :to="to"
    @click="onClick"
  >
    <LLoading v-if="loading" :size="size" />
    <div :class="classComponentName('content')">
      <LIcon v-if="icon" :icon="icon" :size="size" />
      <LIcon v-if="iconLeft" :icon="iconLeft" :size="size" />
      <slot v-if="$slots['default']" :class="`${name}__slot`" />
      <LIcon v-if="iconRight" :icon="iconRight" :size="size" />
    </div>
  </component>
</template>

<script lang="ts">
import { LButtonConfig } from '.';
import { defineComponent } from 'vue';
import { componentProps, useComponent } from '../../composables/use-component';
import {
  useVariantWithOutline,
  variantWithOutlineProps,
} from '../../composables/use-variant';
import { blockProps, useBlock } from '../../composables/use-block';
import { disabledProps } from '../../composables/use-disabled';
import { useSize, sizeProps } from '../../composables/use-size';
import { linkProps } from '../../composables/use-link';
import LIcon from '../../components/icon';
import LLoading from '../../components/loading';
import { Binds } from '../../composables/use-utils';

export default defineComponent({
  inheritAttrs: false,
  name: 'LButton',
  dependencies: { components: [LIcon, LLoading] },
  emits: ['click'],
  props: {
    ...componentProps,
    ...blockProps,
    ...disabledProps,
    ...sizeProps,
    ...linkProps,
    ...variantWithOutlineProps,

    tag: {
      type: String,
      default: 'button',
    },
    type: {
      type: String,
    },
    icon: {
      type: String,
    },
    iconLeft: {
      type: String,
    },
    iconRight: {
      type: String,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const component = useComponent<LButtonConfig>();
    const { sizeClass } = useSize();
    const { variantClass, outlineClass, themeClass } = useVariantWithOutline();
    const { blockClass } = useBlock();

    const onClick = (_e: any) => {
      if (!props.disabled) {
        context.emit('click');
      }
    };

    const binds: Binds = { props: ['disabled'], events: [] };

    return {
      ...component,
      ...component.u,
      binds,
      onClick,
      variantClass,
      outlineClass,
      themeClass,
      sizeClass,
      blockClass,
    };
  },
});
</script>
