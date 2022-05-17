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
          type="radio"
          :checked="modelValue === value || checked"
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
          <div :class="classComponentName('inner-box')" />
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
import { LRadioComponent } from '..';

import LFormControl from '~/common/shared-components/form-control/form-control.vue';
import LFormLabel from '~/common/shared-components/form-control/form-label.vue';
import LFormDescription from '~/common/shared-components/form-control/form-description.vue';
import LFormFeedback from '~/common/shared-components/form-control/form-feedback.vue';

import { props } from './props';
import { LRadioCSSVariables } from './css-variables';

import {
  useBlock,
  useComponent,
  useInput,
  useSize,
  useContextUtil,
  useVariant,
} from '~/composables/component';
import { _useLabox } from '~/composables/use-labox/use-labox';

const name = 'LRadio';

export default defineComponent({
  name,
  props,
  emits: ['input', 'update:modelValue'],
  components: {
    LFormControl,
    LFormLabel,
    LFormDescription,
    LFormFeedback,
  },
  inheritAttrs: false,
  setup(props, { emit }) {
    const component = useComponent<LRadioComponent>(name, props);

    const {
      theming: { registerComponentStyle },
    } = _useLabox();

    registerComponentStyle(component.name, LRadioCSSVariables);

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
      emit('update:modelValue', (event.target as HTMLInputElement).value);
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
