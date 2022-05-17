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
      <div :class="classComponentName('element')">
        <select
          :id="id"
          :invalid="props.feedback && props.feedbackType === 'error'"
          :value="modelValue || props.value"
          :aria-labelledby="props.label ? ariaLabelledby : undefined"
          :aria-describedby="
            props.description || props.help ? ariaDescribedby : undefined
          "
          @input="onInput"
          v-bind="{
            ...bindProps({
              include: ['autofocus', 'disabled', 'name'],
            }),
            ...bindAttrs({
              include: ['blur', 'change', 'focus', 'focusin', 'focusout'],
            }),
          }"
        >
          <option
            v-if="props.placeholder"
            :selected="true"
            disabled
            :value="''"
            v-text="props.placeholder"
          />
          <option
            v-for="({ value, label }, i) in props.options || []"
            :key="i"
            :value="value || ''"
            v-text="label"
          />
        </select>
        <LIcon :icon="options.icon" :class="classComponentName('icon')" />
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
import { LSelectComponent } from '..';

import LIcon from '~/components/icon';
import LFormLabel from '~/common/shared-components/form-control/form-label.vue';
import LFormControl from '~/common/shared-components/form-control/form-control.vue';
import LFormDescription from '~/common/shared-components/form-control/form-description.vue';
import LFormHelp from '~/common/shared-components/form-control/form-help.vue';
import LFormFeedback from '~/common/shared-components/form-control/form-feedback.vue';

import { props } from './props';
import { LSelectCSSVariables } from './css-variables';

import {
  useBlock,
  useComponent,
  useInput,
  useSize,
  useContextUtil,
  useVariant,
} from '~/composables/component';
import { _useLabox } from '~/composables/use-labox/use-labox';

const name = 'LSelect';

export default defineComponent({
  name,
  props,
  emits: ['input', 'update:modelValue'],
  components: {
    LIcon,
    LFormControl,
    LFormLabel,
    LFormHelp,
    LFormDescription,
    LFormFeedback,
  },
  inheritAttrs: false,
  setup(props, { emit }) {
    const component = useComponent<LSelectComponent>(name, props);

    const {
      theming: { registerComponentStyle },
    } = _useLabox();

    registerComponentStyle(component.name, LSelectCSSVariables);

    const { blockClass } = useBlock(component);
    const { feedbackClass, highlightClass, ariaDescribedby, ariaLabelledby } =
      useInput(component);
    const { sizeClass } = useSize(component);
    const { variantClass } = useVariant(component);

    const onInput = (event: Event) => {
      emit('input', event);
      emit('update:modelValue', (event.target as HTMLSelectElement).value);
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
