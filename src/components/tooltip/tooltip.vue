<template>
  <div :class="[name, classComponentName(options.value.variant), themeClass]">
    <div v-if="!element" :id="triggerId" :class="classComponentName('trigger')">
      <slot name="trigger" />
    </div>
    <div :id="contentId" :class="classComponentName('popper')" role="tooltip">
      <Transition name="lb-tooltip-animation" appear>
        <div
          v-show="active && (options.value.text || hasSlot('default'))"
          :class="classComponentName('inner')"
        >
          <div :class="classComponentName('arrow')" data-popper-arrow></div>
          <div :class="classComponentName('content')">
            <div>
              <span
                v-if="options.value.text"
                v-text="options.value.text"
              /><slot v-else />
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts">
import { LTooltipConfig } from '.';
import {
  defineComponent,
  nextTick,
  onMounted,
  PropType,
  ref,
  Ref,
  watch,
} from 'vue';
import { componentProps, useComponent } from '../../composables/use-component';
import { useLabox } from '../../composables/use-labox';
import { createPopper, Instance } from '@popperjs/core';
import { useVariant } from '../../composables/use-variant';
import { TooltipOptions } from '../../directives/tooltip';

export default defineComponent({
  name: 'LTooltip',
  props: {
    ...componentProps,
    element: {
      type: Object as PropType<HTMLElement>,
      required: true,
    },
    options: {
      type: Object as PropType<Ref<TooltipOptions>>,
      required: true,
    },
  },
  setup(props, _context) {
    const component = useComponent<LTooltipConfig>();
    const { uuid } = useLabox();

    const { themeClass } = useVariant();

    const triggerId = uuid();
    const contentId = uuid();

    const active = ref(false);

    let delayTimeout: NodeJS.Timeout | null = null;

    let popper: Instance;
    onMounted(() => {
      popper = createPopper(
        props.element || document.getElementById(triggerId)!,
        document.getElementById(contentId)!,
        {
          placement: props.options.value.placement,
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 8],
              },
            },
          ],
        }
      );

      createTriggers();
    });

    watch(
      () => [props.options.value],
      () => {
        nextTick(() => {
          popper.forceUpdate();
        });
      }
    );

    const show = () => {
      const go = () => {
        active.value = true;
        popper.update();
      };
      if (props.options.value.delay) {
        delayTimeout = setTimeout(() => {
          go();
        }, props.options.value.delay);
      } else {
        go();
      }
    };

    const hide = () => {
      active.value = false;
      if (delayTimeout) {
        clearTimeout(delayTimeout);
      }
    };

    const createTriggers = () => {
      const trigger = props.options.value.trigger;
      let showEvents: string[] = [],
        hideEvents: string[] = [];

      if (trigger === 'hover') {
        showEvents = ['mouseenter'];
        hideEvents = ['mouseleave'];
      }

      if (trigger === 'click') {
        showEvents = ['focus'];
        hideEvents = ['blur'];
      }

      showEvents.forEach((event) => {
        const trigger =
          (props.element as any) || document.getElementById(triggerId)!;
        trigger!.addEventListener(event, show);
      });

      hideEvents.forEach((event) => {
        const trigger =
          (props.element as any) || document.getElementById(triggerId)!;
        trigger!.addEventListener(event, hide);
      });
    };

    return {
      ...component,
      ...component.u,
      triggerId,
      contentId,
      active,
      themeClass,
    };
  },
});
</script>
