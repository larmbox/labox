<template>
  <LFormControl
    field
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
    <LFormLabel
      :for="id"
      :label="props.label"
      :use-slot="hasSlot('label')"
      :aria="ariaLabelledby"
    >
      <slot name="label" :id="id" />
    </LFormLabel>

    <LFormDescription
      :description="props.description"
      :use-slot="hasSlot('description')"
      :aria="ariaDescribedby"
    >
      <slot name="description" />
    </LFormDescription>

    <div :class="classComponentName('inner')">
      <textarea
        :id="id"
        :invalid="props.feedback && props.feedbackType === 'error'"
        :value="modelValue || props.value"
        :placeholder="first(props.placeholder, props.label)"
        :aria-labelledby="props.label ? ariaLabelledby : undefined"
        :aria-describedby="
          props.description || props.help ? ariaDescribedby : undefined
        "
        :style="`resize: ${props.resize}`"
        @input="onInput"
        v-bind="{
          ...bindProps({
            include: [
              'autofocus',
              'autocomplete',
              'disabled',
              'name',
              'readonly',
              'rows',
              'cols',
            ],
          }),
          ...bindAttrs({
            include: ['blur', 'change', 'focus', 'focusin', 'focusout'],
          }),
        }"
      />
    </div>

    <LFormFeedback
      :feedback="props.feedback"
      :feedback-type="props.feedbackType"
      :use-slot="hasSlot('feedback')"
    >
      <slot name="feedback" />
    </LFormFeedback>

    <LFormHelp
      :help="props.help"
      :use-slot="hasSlot('help')"
      :aria="!props.description ? ariaDescribedby : undefined"
    >
      <slot name="help" />
    </LFormHelp>
  </LFormControl>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LTextareaComponent } from '..';

import LFormLabel from '~/common/shared-components/form-control/form-label.vue';
import LFormControl from '~/common/shared-components/form-control/form-control.vue';
import LFormDescription from '~/common/shared-components/form-control/form-description.vue';
import LFormHelp from '~/common/shared-components/form-control/form-help.vue';
import LFormFeedback from '~/common/shared-components/form-control/form-feedback.vue';

import { props } from './props';
import { LTextareaCSSVariables } from './css-variables';

import {
  useBlock,
  useComponent,
  useInput,
  useSize,
  useContextUtil,
  useVariant,
} from '~/composables/component';
import { _useLabox } from '~/composables/use-labox/use-labox';

const name = 'LTextarea';
export default defineComponent({
  name,
  props,
  emits: ['update:modelValue', 'input'],
  components: {
    LFormControl,
    LFormLabel,
    LFormHelp,
    LFormDescription,
    LFormFeedback,
  },
  inheritAttrs: false,
  setup(props, { emit }) {
    const component = useComponent<LTextareaComponent>(name, props);

    const {
      theming: { registerComponentStyle },
    } = _useLabox();

    registerComponentStyle(component.name, LTextareaCSSVariables);

    const { blockClass } = useBlock(component);
    const { feedbackClass, ariaLabelledby, ariaDescribedby, highlightClass } =
      useInput(component);
    const { sizeClass } = useSize(component);
    const { variantClass } = useVariant(component);

    const onInput = (event: Event) => {
      emit('input', event);
      emit('update:modelValue', (event.target as HTMLTextAreaElement).value);
    };

    return {
      ...component,
      ...useContextUtil(component),

      blockClass,
      feedbackClass,
      highlightClass,
      sizeClass,
      variantClass,

      ariaLabelledby,
      ariaDescribedby,

      onInput,
    };
  },
});
</script>
