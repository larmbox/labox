<template>
  <LFormControl
    :class="[
      className(name),
      sizeClass,
      blockClass,
      feedbackClass,
      variantClass,
      themeClass,
    ]"
    v-bind="omit(binds.events)"
  >
    <div :class="classComponentName('inner')">
      <input
        :id="id"
        type="radio"
        :checked="modelValue === value || checked"
        :aria-labelledby="label ? ariaLabelledby : undefined"
        :aria-describedby="description ? ariaDescribedby : undefined"
        @input="$emit('update:modelValue', value)"
        v-bind="bind(binds)"
      />
      <div :class="classComponentName('box')">
        <div :class="classComponentName('box2')" />
      </div>
      <div v-if="hasDescriptors" :class="classComponentName('descriptors')">
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
        <LFormFeedback
          :class="classComponentName('feedback')"
          :feedback="feedback"
          :feedback-type="feedbackType"
          :use-slot="hasSlot('feedback')"
        >
          <slot name="feedback" />
        </LFormFeedback>
      </div>
    </div>
  </LFormControl>
</template>

<script lang="ts">
import { LRadioConfig } from '.';
import { defineComponent } from 'vue';
import { inputProps, useInput } from '../../composables/use-input';
import { componentProps, useComponent } from '../../composables/use-component';
import { disabledProps } from '../../composables/use-disabled';
import { sizeProps, useSize } from '../../composables/use-size';
import { blockProps, useBlock } from '../../composables/use-block';
import LFormControl from '../../shared-components/form-control/form-control.vue';
import LFormLabel from '../../shared-components/form-control/form-label.vue';
import LFormDescription from '../../shared-components/form-control/form-description.vue';
import LFormFeedback from '../../shared-components/form-control/form-feedback.vue';
import { useVariant, variantProps } from '../../composables/use-variant';
import { Binds } from '../../composables/use-utils';

export default defineComponent({
  inheritAttrs: false,
  dependencies: {
    components: [LFormControl, LFormLabel, LFormDescription, LFormFeedback],
  },
  name: 'LRadio',
  props: {
    ...componentProps,
    ...inputProps,
    ...disabledProps,
    ...sizeProps,
    ...blockProps,
    ...variantProps,

    checked: {
      type: Boolean,
    },
  },
  setup(_props, _context) {
    const component = useComponent<LRadioConfig>();
    const { sizeClass } = useSize();
    const { blockClass } = useBlock();
    const { feedbackClass, ariaDescribedby, ariaLabelledby, hasDescriptors } =
      useInput();
    const { variantClass, themeClass } = useVariant();

    const binds: Binds = {
      props: ['autofocus', 'disabled', 'name', 'value'],
      events: ['focus', 'blur', 'change'],
    };

    return {
      ...component,
      ...component.u,
      binds,
      sizeClass,
      blockClass,
      feedbackClass,
      variantClass,
      themeClass,
      ariaDescribedby,
      ariaLabelledby,
      hasDescriptors,
    };
  },
});
</script>
