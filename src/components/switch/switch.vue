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
  >
    <div :class="classComponentName('inner')">
      <input
        :id="id"
        type="checkbox"
        :checked="modelValue === value || checked"
        :aria-labelledby="label ? ariaLabelledby : undefined"
        :aria-describedby="description ? ariaDescribedby : undefined"
        @input="$emit('update:modelValue', value)"
        v-bind="autoBind('autofocus', 'disabled', 'name', 'value')"
      />
      <div :class="classComponentName('box')">
        <div :class="classComponentName('box2')">
          <svg viewBox="0 0 64 64">
            <path
              d="M60.3,12.4L60.3,12.4c-0.9-0.9-2-1.4-3.2-1.4s-2.3,0.5-3.2,1.3L23.6,42.6c-0.2,0.2-0.8,0.2-1,0L10.2,30.2
	c-0.9-0.9-2-1.3-3.2-1.3s-2.3,0.5-3.2,1.3C2,32,2,34.8,3.8,36.6L18,50.9c1.3,1.3,3.1,2,5,2c1.9,0,3.7-0.8,5-2l32.2-32.2
	C61.9,17,61.9,14.2,60.3,12.4z"
            />
          </svg>
          <svg viewBox="0 0 64 64">
            <path
              d="M57.4,36.5H6.6c-2.3,0-4.2-2-4.2-4.5l0,0c0-2.5,1.8-4.5,4.2-4.5h50.8c2.3,0,4.2,2,4.2,4.5l0,0
	C61.5,34.5,59.7,36.5,57.4,36.5z"
            />
          </svg>
        </div>
      </div>
      <div :class="classComponentName('descriptors')">
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
import { LSwitchConfig } from '.';
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

export default defineComponent({
  dependencies: {
    components: [LFormControl, LFormLabel, LFormDescription, LFormFeedback],
  },
  name: 'LSwitch',
  props: {
    ...componentProps,
    ...inputProps,
    ...disabledProps,
    ...sizeProps,
    ...blockProps,
    ...variantProps,

    checked: { type: Boolean },
  },
  setup(_props, _context) {
    const component = useComponent<LSwitchConfig>();
    const { sizeClass } = useSize();
    const { blockClass } = useBlock();
    const { feedbackClass, ariaDescribedby, ariaLabelledby } = useInput();
    const { variantClass, themeClass } = useVariant();

    return {
      ...component,
      ...component.u,
      sizeClass,
      blockClass,
      feedbackClass,
      variantClass,
      themeClass,
      ariaDescribedby,
      ariaLabelledby,
    };
  },
});
</script>
