<template>
  <LFormControl
    :class="[
      className(name),
      blockClass,
      feedbackClass,
      highlightClass,
      sizeClass,
      variantClass,
    ]"
    v-bind="{
      ...bindAttrs({
        exclude: ['blur', 'change', 'focus', 'focusin', 'focusout'],
      }),
    }"
  >
    <div :class="classComponentName('inner')">
      <div>
        <input
          :id="id"
          type="checkbox"
          :invalid="props.feedback && props.feedbackType === 'error'"
          :checked="modelValue || props.checked"
          :aria-labelledby="props.label ? ariaLabelledby : undefined"
          :aria-describedby="props.description ? ariaDescribedby : undefined"
          @input="onInput"
          v-bind="{
            ...bindProps({
              include: ['autofocus', 'disabled', 'name', 'value'],
            }),
            ...bindAttrs({
              include: ['blur', 'change', 'focus', 'focusin', 'focusout'],
            }),
          }"
        />
        <div :class="classComponentName('box')">
          <LIcon
            v-if="props.indeterminate"
            :icon="options.iconIndeterminate"
            :class="classComponentName('icon')"
          />
          <LIcon
            v-else
            :icon="options.iconChecked"
            :class="classComponentName('icon')"
          />
        </div>
        <LFormLabel
          :for="id"
          :label="props.label"
          :use-slot="hasSlot('label')"
          :aria="ariaLabelledby"
        >
          <slot name="label" :id="id" />
        </LFormLabel>
      </div>
      <div :class="classComponentName('context')">
        <LFormDescription
          :description="props.description"
          :use-slot="hasSlot('description')"
          :aria="ariaDescribedby"
        >
          <slot name="description" />
        </LFormDescription>
        <LFormFeedback
          :class="classComponentName('feedback')"
          :feedback="props.feedback"
          :feedback-type="props.feedbackType"
          :use-slot="hasSlot('feedback')"
        >
          <slot name="feedback" />
        </LFormFeedback>
      </div>
    </div>
  </LFormControl>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LCheckboxComponent } from '..';

import LIcon from '~/components/icon';
import LFormControl from '~/common/shared-components/form-control/form-control.vue';
import LFormLabel from '~/common/shared-components/form-control/form-label.vue';
import LFormDescription from '~/common/shared-components/form-control/form-description.vue';
import LFormFeedback from '~/common/shared-components/form-control/form-feedback.vue';

import { props } from './props';
import { LCheckboxCSSVariables } from './css-variables';

import {
  useBlock,
  useComponent,
  useInput,
  useSize,
  useContextUtil,
  useVariant,
} from '~/composables/component';
import { _useLabox } from '~/composables/use-labox/use-labox';

const name = 'LCheckbox';

export default defineComponent({
  name,
  props,
  emits: ['input', 'update:modelValue'],
  components: {
    LFormControl,
    LFormLabel,
    LFormDescription,
    LFormFeedback,
    LIcon,
  },
  inheritAttrs: false,
  setup(props, { emit }) {
    const component = useComponent<LCheckboxComponent>(name, props);

    const {
      theming: { registerComponentStyle },
    } = _useLabox();

    registerComponentStyle(component.name, LCheckboxCSSVariables);

    const { blockClass } = useBlock(component);
    const {
      ariaDescribedby,
      ariaLabelledby,
      feedbackClass,
      highlightClass,
      hasLabels,
    } = useInput(component);
    const { sizeClass } = useSize(component);
    const { variantClass } = useVariant(component);

    const onInput = (event: Event) => {
      emit('input', event);
      emit('update:modelValue', (event.target as HTMLInputElement).checked);
    };

    return {
      ...component,
      ...useContextUtil(component),

      blockClass,
      feedbackClass,
      highlightClass,
      sizeClass,
      variantClass,

      ariaDescribedby,
      ariaLabelledby,
      hasLabels,

      onInput,
    };
  },
});
</script>
