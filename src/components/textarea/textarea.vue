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
    <LFormLabel
      :id="id"
      :label="label"
      :use-slot="hasSlot('label')"
      :aria="ariaLabelledby"
    >
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
      <textarea
        :id="id"
        :invalid="feedback && feedbackType === 'error'"
        :value="modelValue || value"
        :placeholder="first(placeholder, label)"
        :aria-labelledby="label ? ariaLabelledby : undefined"
        :aria-describedby="description || help ? ariaDescribedby : undefined"
        @input="$emit('update:modelValue', $event.target?.value)"
        v-bind="
          autoBind(
            'autofocus',
            'autocomplete',
            'disabled',
            'name',
            'readonly',
            'rows',
            'cols'
          )
        "
        :style="`resize: ${resize}`"
      />

      <!-- <LFormFeedbackIcon :feedback="feedback" :feedback-type="feedbackType" /> -->
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
      :aria="!description ?? ariaDescribedby"
    >
      <slot name="help" />
    </LFormHelp>
  </LFormControl>
</template>

<script lang="ts">
import { LTextareaConfig } from '.';
import { defineComponent, PropType } from 'vue';
import { variantProps, useVariant } from '../../composables/use-variant';
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
  name: 'LTextarea',
  props: {
    ...componentProps,
    ...inputProps,
    ...disabledProps,
    ...sizeProps,
    ...variantProps,
    ...blockProps,

    rows: {
      type: Number,
    },
    cols: {
      type: Number,
    },
    resize: {
      type: String as PropType<'both' | 'none' | 'horizontal' | 'vertical'>,
      default: 'both',
    },
  },
  setup(_props, _context) {
    const component = useComponent<LTextareaConfig>();
    const { sizeClass } = useSize();
    const { variantClass, themeClass } = useVariant();
    const { blockClass } = useBlock();
    const { feedbackClass, ariaLabelledby, ariaDescribedby } = useInput();

    return {
      ...component,
      ...component.u,
      variantClass,
      themeClass,
      sizeClass,
      blockClass,
      feedbackClass,
      ariaLabelledby,
      ariaDescribedby,
    };
  },
});
</script>
