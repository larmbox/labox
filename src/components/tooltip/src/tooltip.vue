<template>
  <div
    v-if="!isDirective && hasSlot('trigger')"
    :id="el.trigger.id"
    v-bind="$attrs"
    :class="[classComponentName('trigger')]"
  >
    <slot name="trigger" />
  </div>
  <!-- Error not relevant for Teleport components! -->
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <Teleport :to="TELEPORT_TARGET">
    <div
      :id="id"
      :class="[className(name), classComponentName(options.variant)]"
    >
      <Transition name="lb-tooltip-animation" appear>
        <div
          v-show="active && !disabled && (hasText || !isDirective)"
          :id="el.content.id"
          :class="classComponentName('inner')"
        >
          <div :class="classComponentName('content')">
            <div :class="classComponentName('arrow')" data-popper-arrow />
            <span v-if="isDirective" v-text="options.text" />

            <slot v-else name="content" />
          </div>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { LTooltipComponent } from '..';
import {
  computed,
  ComputedRef,
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  PropType,
  Ref,
  ref,
  Teleport,
  watch,
} from 'vue';
import { getComponentMeta } from '~/composables/component/use-component';
import { _useLabox } from '~/composables/use-labox/use-labox';
import { createPopper, Instance } from '@popperjs/core';
import { useComponent, useVariant } from '~/composables/component';
import { TooltipOptions } from '~/directives/tooltip';
import { PartialBy } from '~/common/types';

import { props } from './props';
import { LTooltipCSSVariables } from './css-variables';
import { TeleportTarget } from '~/composables/use-labox/init';
import { useContextUtil } from '~/composables/component/use-context-util';

const name = 'LTooltip';

export default defineComponent({
  name,
  props: {
    ...props,
    element: { type: Object as PropType<HTMLElement>, default: null },
    binding: {
      type: Object as PropType<Ref<TooltipOptions>>,
      default: undefined,
    },
  },
  setup(props, _context) {
    const component = useComponent<LTooltipComponent>(name, props);
    const {
      theming: { registerComponentStyle },
    } = _useLabox();

    registerComponentStyle(component.name, LTooltipCSSVariables);

    const { variantClass } = useVariant(component);
    const { uuid } = _useLabox();

    const active = ref(false);
    const isTouch = ref(false);

    type ElValue = { id: string; element: HTMLElement | null };
    type El = { trigger: ElValue; content: ElValue };
    const el: El = {
      trigger: { id: uuid(), element: props.element },
      content: { id: uuid(), element: null },
    };

    let popper: Instance, listener: { onUnmounted: any };
    const isDirective = !!props.binding?.value;
    const options: ComputedRef<PartialBy<TooltipOptions, 'text'>> = computed(
      () => {
        // Use default component configuration as base.
        let base = {
          ...getComponentMeta<LTooltipComponent>('LTooltip').props,
        };
        if (isDirective) {
          // If directive, assign binding values to reactive options.
          base = { ...base, ...props.binding!.value };
        } else {
          // Is component, use top level props.
          const { delay, trigger, placement, variant } = props;
          if (variant) base.variant = variant;
          if (delay) base.delay = delay;
          if (trigger) base.trigger = trigger;
          if (placement) base.placement = placement;
        }
        return base;
      }
    );

    onMounted(() => {
      nextTick(() => {
        if (window.matchMedia('(pointer: coarse)').matches) {
          isTouch.value = true;
        }

        if (!el.trigger.element) {
          el.trigger.element = document.getElementById(el.trigger.id);
        }
        el.content.element = document.getElementById(el.content.id);

        popper = createPopper(el.trigger.element!, el.content.element!, {
          placement: options.value.placement,
          modifiers: [
            {
              name: 'arrow',
              options: {
                padding: options.value.arrow?.padding,
              },
            },
            {
              name: 'offset',
              options: {
                offset: options.value.offset,
              },
            },
          ],
        });
        createTriggers();
      });
    });

    onUnmounted(() => {
      if (listener) {
        listener.onUnmounted();
      }
    });

    const createTriggers = () => {
      if (!el.trigger.element) return;
      if (options.value.trigger === 'click') {
        listener = useClickListener()!;
      } else {
        if (isTouch.value) {
          if (!props.disableTouch) {
            listener = useTouchListener()!;
          }
        } else {
          listener = useHoverListener()!;
        }
      }
    };

    const setActive = () => {
      active.value = true;
      nextTick(() => {
        popper.forceUpdate();
      });
    };

    const setInactive = () => {
      active.value = false;
    };

    watch(
      // Watch for options change.
      () => [options.value],
      async () => {
        nextTick(() => {
          if (active.value) {
            popper.forceUpdate();
          }
        });
      }
    );

    const useTouchListener = () => {
      const element = el.trigger.element;
      const content = el.content.element;
      if (!element || !content) return;

      let timeout: NodeJS.Timeout | null = null;
      let locked = false;

      const onTouchStart = () => {
        element.style.userSelect = 'none';
        timeout = setTimeout(() => {
          setActive();
          if (props.interactive) {
            locked = true;
          }
        }, 750);
      };

      const onTouchEnd = () => {
        if (locked) {
          useOnClickOutside(content);
          return;
        }
        element.style.userSelect = '';
        if (timeout) clearTimeout(timeout);
        setInactive();
      };

      element.addEventListener('touchstart', onTouchStart);
      element.addEventListener('touchend', onTouchEnd);

      const onUnmounted = () => {
        element.removeEventListener('touchstart', onTouchStart);
        element.removeEventListener('touchend', onTouchEnd);
      };
      return { onUnmounted };
    };

    const useClickListener = () => {
      const element = el.trigger.element;
      const content = el.content.element;
      if (!element || !content) return;

      let timeout: NodeJS.Timeout | null = null;
      let interactiveTimeout: NodeJS.Timeout | null = null;
      let locked = false;

      const onClick = () => {
        if (interactiveTimeout) clearTimeout(interactiveTimeout);
        if (props.interactive) {
          useOnClickOutside(content);
        } else {
          useOnClickOutside(element);
        }
        if (active.value) {
          return setInactive();
        }
        timeout = setTimeout(() => {
          setActive();
        }, options.value.delay);
      };

      const onBlur = () => {
        if (locked) {
          useOnClickOutside(content);
          return;
        }
        if (timeout) clearTimeout(timeout);
        setInactive();
      };

      element.addEventListener('click', onClick);
      if (!props.interactive) {
        element.addEventListener('blur', onBlur);
      }

      const onUnmounted = () => {
        element.removeEventListener('focus', onClick);
        element.removeEventListener('blur', onBlur);
      };
      return { onUnmounted };
    };

    const useHoverListener = () => {
      const element = el.trigger.element;
      const content = el.content.element;
      if (!element || !content) return;

      let timeout: NodeJS.Timeout | null = null;
      let interactiveTimeout: NodeJS.Timeout | null = null;

      const onMouseOver = () => {
        if (interactiveTimeout) clearTimeout(interactiveTimeout);
        timeout = setTimeout(() => {
          setActive();
        }, options.value.delay);
      };

      const onMouseLeave = () => {
        if (timeout) clearTimeout(timeout);
        if (props.interactive) {
          interactiveTimeout = setTimeout(() => setInactive(), 333);
        } else {
          setInactive();
        }
      };

      const onContentMouseEnter = () => {
        if (interactiveTimeout) clearTimeout(interactiveTimeout);
      };

      const onContentMouseLeave = () => {
        if (timeout) clearTimeout(timeout);
        setInactive();
      };

      element.addEventListener('mouseenter', onMouseOver);
      element.addEventListener('mouseleave', onMouseLeave);

      if (props.interactive) {
        content.addEventListener('mouseenter', onContentMouseEnter);
        content.addEventListener('mouseleave', onContentMouseLeave);
      }

      const onUnmounted = () => {
        element.removeEventListener('mouseenter', onMouseOver);
        element.removeEventListener('mouseleave', onMouseLeave);
        if (props.interactive) {
          content.removeEventListener('mouseenter', onContentMouseEnter);
          content.removeEventListener('mouseenter', onContentMouseLeave);
        }
      };
      return { onUnmounted };
    };

    const useOnClickOutside = (element: any) => {
      const isVisible = (elem: HTMLElement) =>
        !!elem &&
        !!(
          elem.offsetWidth ||
          elem.offsetHeight ||
          elem.getClientRects().length
        );

      const onOutsideClick = (event: MouseEvent) => {
        if (!element.contains(event.target) && isVisible(element)) {
          // or use: event.target.closest(selector) === null
          setInactive();
          removeClickListener();
        }
      };

      const removeClickListener = () => {
        document.removeEventListener('click', onOutsideClick);
      };

      document.addEventListener('click', onOutsideClick);
    };

    return {
      ...component,
      ...useContextUtil(component),
      variantClass,
      options,
      el,
      TELEPORT_TARGET: `#${TeleportTarget.Tooltip}`,
      Teleport,
      active,
      isDirective,
      isTouch,
      hasText: computed(() => {
        return (
          options.value.text !== null &&
          typeof options.value.text !== 'undefined'
        );
      }),
    };
  },
});
</script>
