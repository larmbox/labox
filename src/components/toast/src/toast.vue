<template>
  <div
    v-if="!isDirective && hasSlot('trigger')"
    :id="el.trigger.id"
    :class="classComponentName('trigger')"
  >
    <slot name="trigger" />
  </div>
  <!--eslint-disable-next-line vue/no-multiple-template-root -->
  <Teleport :to="TELEPORT_TARGET">
    <div :id="id" :class="[name, variantClass]">
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
import { LToastComponent } from '..';
import { defineComponent, ref, onMounted } from 'vue';
import { useComponent } from '~/composables/component';
import { ToastDirective } from '~/directives/toast';
import { useLabox } from '~/composables/use-labox/use-labox';
import { useVariant } from '~/composables/component/use-variant';

import { props } from './props';
import { TeleportTarget } from '~/composables/use-labox/init';
import { useUtil } from '~/composables/component/use-util';

const name = 'LToast';

export default defineComponent({
  name,
  props,
  directives: { ToastDirective },
  setup(props, _context) {
    const component = useComponent<LToastComponent>(name, props);
    const { variantClass } = useVariant(component);
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
      ...useUtil(component),
      isDirective,
      TELEPORT_TARGET: `#${TeleportTarget.Toast}`,
      active,
      variantClass,
      el,
    };
  },
});
</script>
