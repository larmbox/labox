<template>
  <div :id="id + 'ref'" @open="onOpen" @close="onClose">
    <Teleport v-if="open" :to="teleportTarget">
      <div
        v-if="open2"
        :id="id"
        :ref="id"
        :class="[className(name), sizeClass, { abcd: porp }]"
        role="dialog"
      >
        <div :class="classComponentName('backdrop')" />

        <div :class="classComponentName('inner')">
          <div :class="classComponentName('content')">
            <div :class="classComponentName('header')">
              <div>Header</div>
              <div @click="onClose">close</div>
            </div>
            <div><slot /></div>

            <div :class="classComponentName('footer')">
              <div>Footer</div>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts">
import { LToastConfig } from '.';
import { defineComponent, ref, nextTick } from 'vue';
import { componentProps, useComponent } from '../../composables/use-component';
import { sizeProps, useSize } from '../../composables/use-size';
import { ToastDirective } from '../../directives/toast';

const TELEPORT_TARGET = 'lbm-portal';

export default defineComponent({
  dependencies: { directives: [ToastDirective] },
  name: 'LToast',
  props: {
    ...componentProps,
    ...sizeProps,
  },
  setup(_props, _context) {
    const component = useComponent<LToastConfig>();
    const ready = ref(false);
    const open = ref(false);
    const open2 = ref(false);
    const porp = ref(false);

    const { sizeClass } = useSize();
    if (typeof document !== 'undefined') {
      nextTick(() => {
        if (document.getElementById(TELEPORT_TARGET)) {
          return;
        }
        const teleportTarget = document.createElement('div');
        teleportTarget.setAttribute('id', TELEPORT_TARGET);
        document.body.appendChild(teleportTarget);
        ready.value = true;
      });
    }

    const onOpen = () => {
      open.value = true;
      nextTick(() => {
        open2.value = true;
        setTimeout(() => {
          porp.value = true;
        }, 5);
      });
    };

    const onClose = () => {
      porp.value = false;
      setTimeout(() => {
        open2.value = false;
        nextTick(() => {
          open.value = false;
        });
      }, 500);
    };

    return {
      ...component,
      ...component.u,
      sizeClass,
      ready,
      open,
      open2,
      teleportTarget: `#${TELEPORT_TARGET}`,
      onOpen,
      porp,
      onClose,
    };
  },
});
</script>
