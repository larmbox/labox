<template>
  <div
    v-if="!isDirective && hasSlot('trigger')"
    :id="el.trigger.id"
    :class="classComponentName('trigger')"
  >
    <slot name="trigger" />
  </div>
  <Teleport :to="TELEPORT_TARGET">
    <div
      :id="id"
      :class="[name, variantClass, themeClass]"
    >
      <Transition name="lb-tooltip-animation" appear>
        <div :id="el.content.id" :class="classComponentName('inner')">
          {{ isDirective }}
          <div :class="classComponentName('content')">
            <div :class="classComponentName('arrow')" data-popper-arrow />
            <span v-if="isDirective" v-text="text" />

            <slot v-else name="content" />
          </div>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { LToastConfig } from '.';
import { defineComponent, ref, onMounted } from 'vue';
import { componentProps, useComponent } from '../../composables/use-component';
import { ToastDirective } from '../../directives/toast';
import { disabledProps } from '../../composables/use-disabled';
import { TeleportTarget, useLabox } from '../../composables/use-labox';
import { useVariant } from '../../composables/use-variant';

export default defineComponent({
  dependencies: { directives: [ToastDirective] },
  name: 'LToast',
  props: {
    ...componentProps,
    variant: {
      type: String,
      default: 'secondary',
    },
    ...disabledProps,

    placement: String,
    title: String,
    text: String,
    icon: String,
    directive: Boolean,
  },
  setup(props, _context) {
    const component = useComponent<LToastConfig>();
    const { variantClass, themeClass } = useVariant();
    const { uuid } = useLabox();

    const active = ref(false);

    type ElValue = { id: string };
    type El = { trigger: ElValue; content: ElValue };
    const el: El = {
      trigger: { id: uuid() },
      content: { id: uuid() },
    };

    const isDirective = !!props.directive;

    // const onClick = () => {

    // }

    onMounted(() => {
      // document.getElementById(el.trigger.id)?.addEventListener(onClick);
      // nextTick(() => {
      //   if (!el.trigger.element) {
      //     el.trigger.element = document.getElementById(el.trigger.id);
      //   }
      //   el.content.element = document.getElementById(el.content.id);
      // });
    });

    return {
      ...component,
      ...component.u,
      isDirective,
      TELEPORT_TARGET: `#${TeleportTarget.Toast}`,
      active,
      variantClass,
      themeClass,
      el,
    };
  },
});
</script>
