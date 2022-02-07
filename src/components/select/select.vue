<template>
  <LFormControl
    :class="[
      className(name),
      sizeClass,
      variantClass,
      themeClass,
      blockClass,
      feedbackClass,
    ]"
    v-bind="omit(binds.events)"
  >
    <LFormLabel :id="id" :label="label" :use-slot="hasSlot('label')">
      <slot name="label" :id="id" />
    </LFormLabel>

    <LFormDescription
      :description="description"
      :use-slot="hasSlot('description')"
      :aria="ariaDescribedby"
    >
      <slot name="description" />
    </LFormDescription>

    <div :class="classComponentName('inner')">
      <div :class="classComponentName('element')">
        <select
          :id="id"
          :invalid="feedback && feedbackType === 'error'"
          :value="modelValue || value"
          :placeholder="first(placeholder, label)"
          @input="$emit('update:modelValue', $event.target?.value || null)"
          v-bind="bind(binds)"
        >
          <option
            v-for="({ value, label }, i) in options"
            :key="i"
            :value="value || ''"
            v-text="label"
          />
        </select>
        <LIcon :icon="config.icon" :class="classComponentName('icon')" />
      </div>
    </div>

    <LFormFeedback
      :feedback="feedback"
      :feedback-type="feedbackType"
      :use-slot="hasSlot('feedback')"
    >
      <slot name="feedback" />
    </LFormFeedback>

    <LFormHelp
      :help="help"
      :use-slot="hasSlot('help')"
      :aria="!description ? ariaDescribedby : undefined"
    >
      <slot name="help" />
    </LFormHelp>
  </LFormControl>
</template>

<script lang="ts">
import { LSelectConfig } from '.';
import { defineComponent, PropType } from 'vue';
import { Binds } from '../../composables/use-utils';
import {
  useVariantWithOutline,
  variantProps,
} from '../../composables/use-variant';
import { inputProps, useInput } from '../../composables/use-input';
import { componentProps, useComponent } from '../../composables/use-component';
import { disabledProps } from '../../composables/use-disabled';
import { sizeProps, useSize } from '../../composables/use-size';
import { blockProps, useBlock } from '../../composables/use-block';
import LFormLabel from '../../shared-components/form-control/form-label.vue';
import LFormControl from '../../shared-components/form-control/form-control.vue';
import LFormDescription from '../../shared-components/form-control/form-description.vue';
import LFormHelp from '../../shared-components/form-control/form-help.vue';
import LFormFeedback from '../../shared-components/form-control/form-feedback.vue';
import LFormFeedbackIcon from '../../shared-components/form-control/form-feedback-icon.vue';
import { LIcon } from '..';

export default defineComponent({
  dependencies: {
    components: [
      LIcon,
      LFormControl,
      LFormLabel,
      LFormHelp,
      LFormDescription,
      LFormFeedback,
      LFormFeedbackIcon,
    ],
  },
  name: 'LSelect',
  props: {
    ...componentProps,
    ...inputProps,
    ...disabledProps,
    ...sizeProps,
    ...variantProps,
    ...blockProps,
    options: {
      type: Array as PropType<{ label: string; value: any }[]>,
      required: true,
    },
  },
  setup(_props, _context) {
    const component = useComponent<LSelectConfig>();
    const { sizeClass } = useSize();
    const { variantClass, themeClass } = useVariantWithOutline();
    const { blockClass } = useBlock();
    const { feedbackClass, ariaDescribedby, ariaLabelledby } = useInput();

    const binds: Binds = {
      props: ['autofocus', 'disabled', 'name'],
      events: ['focus', 'blur', 'change'],
    };

    return {
      ...component,
      ...component.u,
      binds,
      variantClass,
      themeClass,
      sizeClass,
      blockClass,
      feedbackClass,
      ariaDescribedby,
      ariaLabelledby,
    };
  },
});
</script>
