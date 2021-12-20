<template>
  <LFormControl
    :class="[
      className(name),
      sizeClass,
      variantClass,
      themeClass,
      blockClass,
      feedbackClass,
      classNameList({
        prepend: !!prepend || hasSlot('prepend'),
        append: !!append || hasSlot('append'),
      }),
    ]"
  >
    <LFormLabel
      :id="id"
      :aria="ariaLabelledby"
      :label="label"
      :use-slot="hasSlot('label')"
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
      <div
        v-if="hasSlot('prepend') || prepend"
        :class="classComponentName('prepend-inner')"
      >
        <slot v-if="hasSlot('prepend')" name="prepend" />
        <span v-else-if="prepend" v-text="prepend" />
      </div>

      <div :class="classComponentName('element')">
        <input
          :id="id"
          :invalid="feedback && feedbackType === 'error'"
          :value="modelValue || value"
          :placeholder="first(placeholder, label)"
          :aria-labelledby="label ? ariaLabelledby : undefined"
          :aria-describedby="description || help ? ariaDescribedby : undefined"
          @input="$emit('update:modelValue', $event.target?.value)"
          v-bind="
            autoBind(
              'min',
              'max',
              'step',
              'autofocus',
              'autocomplete',
              'type',
              'name',
              'disabled',
              'readonly'
            )
          "
        />

        <!-- <LFormFeedbackIcon :feedback="feedback" :feedback-type="feedbackType" /> -->
      </div>

      <div
        v-if="hasSlot('append') || append"
        :class="classComponentName('append-inner')"
      >
        <slot v-if="hasSlot('append')" name="append" />
        <span v-else-if="append" v-text="append" />
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
import { LInputConfig } from '.';
import { defineComponent } from 'vue';
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
  name: 'LInput',
  props: {
    ...componentProps,
    ...inputProps,
    ...disabledProps,
    ...sizeProps,
    ...variantProps,
    ...blockProps,

    type: {
      type: String,
      default: 'text',
    },
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
    step: {
      type: Number,
    },
    append: {
      type: String,
    },
    prepend: {
      type: String,
    },
  },
  setup(_props, _context) {
    const component = useComponent<LInputConfig>();
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
