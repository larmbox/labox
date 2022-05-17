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
      classNameList({
        append: !!props.append || hasSlot('append'),
        prepend: !!props.prepend || hasSlot('prepend'),
      }),
    ]"
    v-bind="{
      ...bindAttrs({
        exclude: ['blur', 'change', 'focus', 'focusin', 'focusout'],
      }),
    }"
  >
    <LFormLabel
      :for="id"
      :aria="ariaLabelledby"
      :label="props.label"
      :use-slot="hasSlot('label')"
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
      <div
        v-if="hasSlot('prepend') || props.prepend"
        :class="classComponentName('prepend-inner')"
      >
        <slot v-if="hasSlot('prepend')" name="prepend" />
        <span v-else-if="props.prepend" v-text="props.prepend" />
      </div>

      <div :class="classComponentName('element')">
        <input
          :id="id"
          :invalid="props.feedback && props.feedbackType === 'error'"
          :value="modelValue || props.value"
          :placeholder="first(props.placeholder, props.label)"
          :aria-labelledby="props.label ? ariaLabelledby : undefined"
          :aria-describedby="
            props.description || props.help ? ariaDescribedby : undefined
          "
          @input="onInput"
          v-bind="{
            ...bindProps({
              include: [
                'min',
                'max',
                'step',
                'autofocus',
                'autocomplete',
                'type',
                'name',
                'disabled',
                'readonly',
              ],
            }),
            ...bindAttrs({
              include: ['blur', 'change', 'focus', 'focusin', 'focusout'],
            }),
          }"
        />
      </div>

      <div
        v-if="hasSlot('append') || props.append"
        :class="classComponentName('append-inner')"
      >
        <slot v-if="hasSlot('append')" name="append" />
        <span v-else-if="props.append" v-text="props.append" />
      </div>
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
import { LInputComponent } from '..';

import LFormLabel from '~/common/shared-components/form-control/form-label.vue';
import LFormControl from '~/common/shared-components/form-control/form-control.vue';
import LFormDescription from '~/common/shared-components/form-control/form-description.vue';
import LFormHelp from '~/common/shared-components/form-control/form-help.vue';
import LFormFeedback from '~/common/shared-components/form-control/form-feedback.vue';

import { props } from './props';
import { LInputCSSVariables } from './css-variables';

import {
  useBlock,
  useComponent,
  useInput,
  useSize,
  useContextUtil,
  useVariantWithOutline,
} from '~/composables/component';
import { _useLabox } from '~/composables/use-labox/use-labox';

const name = 'LInput';

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
    const component = useComponent<LInputComponent>(name, props);

    const {
      theming: { registerComponentStyle },
    } = _useLabox();

    registerComponentStyle(component.name, LInputCSSVariables);

    const { blockClass } = useBlock(component);
    const { feedbackClass, highlightClass, ariaDescribedby, ariaLabelledby } =
      useInput(component);
    const { sizeClass } = useSize(component);
    const { variantClass } = useVariantWithOutline(component);

    const onInput = (event: InputEvent | Event) => {
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

      onInput,
    };
  },
});
</script>
