<template>
  <div :id="`lx-${id}-ref`" @open="onOpen" @close="onClose">
    <Teleport v-if="open" :to="teleportTarget">
      <div
        v-if="active"
        :id="id"
        :ref="id"
        :class="[
          className(name),
          sizeClass,
          { [classComponentName('visible')]: visible },
        ]"
        role="dialog"
        :aria-labelledby="headerId"
        :aria-describedby="bodyId"
      >
        <div :class="classComponentName('backdrop')" @click="onBackdropClick" />

        <div :class="classComponentName('inner')">
          <div :class="classComponentName('content')">
            <div
              :class="classComponentName('header')"
              ref="header"
              :id="headerId"
              tabindex="-1"
            >
              <div>
                <slot v-if="!title && hasSlot('title')" :data="data" />
                <h5
                  v-else-if="title"
                  v-text="title"
                  :class="classComponentName('title')"
                />
                <slot
                  v-if="!description && hasSlot('description')"
                  :data="data"
                />
                <span
                  v-else-if="description"
                  v-text="description"
                  :class="classComponentName('description')"
                />
              </div>

              <button
                v-if="closeable"
                :class="classComponentName('close')"
                aria-label="Close Modal"
                @click="modal.close()"
              >
                <svg viewBox="0 0 64 64">
                  <path
                    d="M53.1,17.2L17.2,53.1c-1.6,1.6-4.4,1.5-6.1-0.2l0,0c-1.8-1.8-1.9-4.5-0.2-6.1l35.9-35.9c1.6-1.6,4.4-1.5,6.1,0.2l0,0
	C54.7,12.9,54.8,15.6,53.1,17.2z"
                  />
                  <path
                    d="M46.8,53.1L10.9,17.2c-1.6-1.6-1.5-4.4,0.2-6.1l0,0c1.8-1.8,4.5-1.9,6.1-0.2l35.9,35.9c1.6,1.6,1.5,4.4-0.2,6.1l0,0
	C51.1,54.7,48.4,54.8,46.8,53.1z"
                  />
                </svg>
              </button>
            </div>
            <div
              v-if="hasSlot('body-raw')"
              :class="[
                classComponentName('body'),
                classComponentName('body-raw'),
              ]"
              ref="body"
              :id="bodyId"
            >
              <slot name="body-raw" :data="data" :close="modal.close" />
            </div>
            <div
              v-if="!noBody"
              :class="classComponentName('body')"
              ref="body"
              :id="bodyId"
            >
              <slot
                v-if="hasSlot('body')"
                name="body"
                :close="modal.close"
                :data="data"
              />
              <slot v-else :close="modal.close" :data="data" />
            </div>

            <div
              v-if="
                hasSlot('footer') ||
                hasSlot('footer-left') ||
                hasSlot('footer-right')
              "
              :class="classComponentName('footer')"
              ref="footer"
            >
              <slot
                v-if="hasSlot('footer')"
                name="footer"
                :close="modal.close"
                :data="data"
              />
              <slot
                v-else-if="hasSlot('footer-left')"
                name="footer-left"
                :close="modal.close"
                :data="data"
              />
              <div :class="classComponentName('footer-fill')" />
              <slot
                v-if="hasSlot('footer-right')"
                name="footer-right"
                :close="modal.close"
                :data="data"
              />
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts">
import { LModalConfig } from '.';
import { defineComponent, ref, nextTick, watch } from 'vue';
import { componentProps, useComponent } from '../../composables/use-component';
import { sizeProps, useSize } from '../../composables/use-size';
import {
  CloseModalDirective,
  OpenModalDirective,
} from '../../directives/modal';
import { useLabox } from '../../composables/use-labox';

const TELEPORT_TARGET = 'lbm-portal';

export default defineComponent({
  dependencies: { directives: [OpenModalDirective, CloseModalDirective] },
  name: 'LModal',
  props: {
    ...componentProps,
    ...sizeProps,

    title: {
      type: String,
    },
    description: {
      type: String,
    },
    closeable: {
      type: Boolean,
      default: true,
    },
    closeOnBackdrop: Boolean,
    noBody: Boolean,
  },
  setup(props, _context) {
    const component = useComponent<LModalConfig>();
    const { uuid, modal } = useLabox();

    const modalId = props.id || uuid();
    const bodyId = uuid();
    const headerId = uuid();

    const { enable: enableTrapFocus, disable: disableTrapFocus } =
      useTrapFocus();

    const open = ref(false);
    const data = ref(undefined);
    const active = ref(false);
    const visible = ref(false);

    let previousFocusedElement: HTMLElement | null = null; // Contains the element that was focused when the modal was opened.

    const { sizeClass } = useSize();
    if (typeof document !== 'undefined') {
      nextTick(() => {
        if (document.getElementById(TELEPORT_TARGET)) {
          return;
        }
        const teleportTarget = document.createElement('div');
        teleportTarget.setAttribute('id', TELEPORT_TARGET);
        document.body.appendChild(teleportTarget);
      });
    }

    const header = ref(null);
    const body = ref(null);
    const footer = ref(null);

    watch(
      () => [props.title],
      () => {
        nextTick(() => {
          updateContentOverflowHeight();
        });
      }
    );

    const updateContentOverflowHeight = () => {
      const footerElement: HTMLElement = footer.value as unknown as HTMLElement;
      const titleElement: HTMLElement = header.value as unknown as HTMLElement;
      if (footerElement && titleElement) {
        const bodyElement: HTMLElement = body.value as unknown as HTMLElement;
        bodyElement.style.maxHeight = `calc(100vh - ${
          footerElement.clientHeight + titleElement.clientHeight + 2
        }px - 3.5rem)`;
      }
    };

    const onOpen = (event: any) => {
      open.value = true;
      data.value = event.detail;
      setTimeout(() => {
        active.value = true;
        nextTick(() => {
          enableTrapFocus(modalId);
        });
        setTimeout(() => {
          visible.value = true;
          updateContentOverflowHeight();
          window.addEventListener('resize', updateContentOverflowHeight);
        }, 5);
      }, 10);

      window.addEventListener('keydown', onKeyDown);

      previousFocusedElement = document.activeElement as HTMLElement | null;
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (!props.closeable) {
        return shake();
      }
      if (event.key === 'Escape') {
        modal.close();
      }
    };

    const shake = () => {
      const LX_SHAKE_CLASS = 'lx-shake';
      const ref = document.getElementById(modalId);
      if (!ref || ref?.classList.contains(LX_SHAKE_CLASS)) {
        return;
      }

      ref.classList.add(LX_SHAKE_CLASS);
      setTimeout(() => {
        ref.classList.remove(LX_SHAKE_CLASS);
      }, 500);
    };

    const onClose = () => {
      visible.value = false;
      window.removeEventListener('resize', updateContentOverflowHeight);
      window.removeEventListener('keydown', onKeyDown);
      disableTrapFocus();
      if (previousFocusedElement) {
        // Return focus to previous focused element.
        previousFocusedElement.focus();
      }
      setTimeout(() => {
        active.value = false;
        nextTick(() => {
          open.value = false;
        });
      }, 250);
    };

    const onBackdropClick = () => {
      if (props.closeOnBackdrop && props.closeable) {
        modal.close();
      } else {
        return shake();
      }
    };

    return {
      ...component,
      ...component.u,
      sizeClass,
      teleportTarget: `#${TELEPORT_TARGET}`,
      open,
      active,
      visible,
      onOpen,
      onClose,
      header,
      body,
      footer,
      headerId,
      bodyId,
      data,
      onBackdropClick,
      modal,
    };
  },
});

const useTrapFocus = () => {
  let firstFocusableElement: HTMLElement;
  let lastFocusableElement: HTMLElement;

  const enable = (id: string) => {
    // add all the elements inside modal which you want to make focusable
    const focusableElements =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modal = document.getElementById(id);

    if (!modal) {
      return;
    }

    firstFocusableElement = modal.querySelectorAll(
      focusableElements
    )[0] as HTMLElement; // First element that can be focused.

    const focusableContent = modal.querySelectorAll(focusableElements);
    lastFocusableElement = focusableContent[
      focusableContent.length - 1
    ] as HTMLElement; // Last element that can be focused.

    document.addEventListener('keydown', onKeydown);

    // Find any heading inside the modal.
    const headings = modal.querySelectorAll('h1, h2, h3, h4, h5, h6');

    // Use the first one.
    const heading = headings[0];
    if (heading) {
      // Set attribute tabindex -1: this will allow browsers to focus on the element.
      heading.setAttribute('tabindex', '-10');

      // Focus the element
      (heading as any).focus();
    } else {
      // If no headings were found, focus on first focusable element.
      firstFocusableElement.focus();
    }
  };

  const onKeydown = (e: KeyboardEvent) => {
    let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      // For Shift + Tab combination:
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else {
      // Tab only:
      if (document.activeElement === lastFocusableElement) {
        // If has reached the last focusable element, return to the first focusable element.
        firstFocusableElement.focus();
        e.preventDefault();
      }
    }
  };

  const disable = () => {
    document.removeEventListener('keydown', onKeydown);
  };

  return { enable, disable };
};
</script>
