<template>
  <div :class="[name, variantClass, themeClass]">
    <div
      v-if="!vTriggerEl"
      :id="triggerId"
      :class="classComponentName('trigger')"
    >
      <slot name="trigger" />
    </div>
    <div :id="contentId" :class="classComponentName('popper')" role="tooltip">
      <Transition name="lb-tooltip-animation" appear>
        <div v-show="visible || active" :class="classComponentName('inner')">
          <div :class="classComponentName('arrow')" data-popper-arrow></div>
          <div :class="classComponentName('content')">
            <div><span v-if="vText" v-text="vText" /><slot v-else /></div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts">
import { LTooltipConfig } from '.';
import { defineComponent, nextTick, PropType, ref } from 'vue';
import { componentProps, useComponent } from '../../composables/use-component';
import { useLabox } from '../../composables/use-labox';
import { createPopper, Placement, Instance } from '@popperjs/core';
import { useVariant } from '../../composables/use-variant';

export default defineComponent({
  name: 'LTooltip',
  props: {
    ...componentProps,

    // Custom variant props!
    variant: {
      type: String,
      default: 'gray',
    },

    vTriggerEl: {
      type: Object as PropType<HTMLElement>,
    },
    vText: {
      type: String,
    },

    trigger: {
      type: String,
      default: 'hover',
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'top',
    },
    delay: {
      type: Number,
    },
    visible: {
      type: Boolean,
    },
  },
  setup(props, _context) {
    const component = useComponent<LTooltipConfig>();
    const { uuid } = useLabox();

    const { variantClass, themeClass } = useVariant();

    const triggerId = uuid();
    const contentId = uuid();

    const active = ref(false);

    let popper: Instance;
    nextTick(() => {
      popper = createPopper(
        props.vTriggerEl || document.getElementById(triggerId)!,
        document.getElementById(contentId)!,
        {
          placement: props.placement,
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

    const show = () => {
      const go = () => {
        active.value = true;
        popper.update();
      };
      if (props.delay) {
        setTimeout(() => {
          go();
        }, props.delay);
      } else {
        go();
      }
    };

    const hide = () => {
      active.value = false;
    };

    const createTriggers = () => {
      const trigger = props.trigger;
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
          (props.vTriggerEl as any) || document.getElementById(triggerId)!;
        trigger!.addEventListener(event, show);
      });

      hideEvents.forEach((event) => {
        const trigger =
          (props.vTriggerEl as any) || document.getElementById(triggerId)!;
        trigger!.addEventListener(event, hide);
      });
    };

    return {
      ...component,
      ...component.u,
      triggerId,
      contentId,
      active,
      variantClass,
      themeClass,
    };
  },
});
</script>
