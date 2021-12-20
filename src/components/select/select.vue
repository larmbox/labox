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
          @input="$emit('update:modelValue', $event.target?.value)"
          v-bind="autoBind('autofocus', 'autocomplete', 'disabled', 'name')"
        >
          <option
            v-for="({ value, label }, i) in options"
            :key="i"
            :value="value"
            v-text="label"
          />
        </select>
        <div :class="classComponentName('icon')">
          <svg viewBox="0 0 64 64">
            <path
              d="M11.9,10c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4L9,15.7c-0.4,0.4-1,0.4-1.4,0l-4.3-4.3c-0.4-0.4-0.4-1,0-1.4
s1-0.4,1.4,0l3.6,3.6C8.3,13.6,11.9,10,11.9,10z M11.9,6L8.3,2.4L4.7,6c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l4.3-4.3
c0.4-0.4,1-0.4,1.4,0l4.3,4.3c0.4,0.4,0.4,1,0,1.4C12.9,6.4,12.3,6.4,11.9,6z"
            />
          </svg>
        </div>
        <!-- <LFormFeedbackIcon :feedback="feedback" :feedback-type="feedbackType" /> -->
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

export default defineComponent({
  dependencies: {
    components: [
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

    return {
      ...component,
      ...component.u,
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
