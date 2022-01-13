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
          <LIcon
            :icon="config.checkedIcon"
            :class="classComponentName('icon')"
          />
          <LIcon
            :icon="config.uncheckedIcon"
            :class="classComponentName('icon')"
          />
        </div>
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
import { LIcon } from '..';

export default defineComponent({
  dependencies: {
    components: [
      LFormControl,
      LFormLabel,
      LFormDescription,
      LFormFeedback,
      LIcon,
    ],
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
    const { feedbackClass, ariaDescribedby, ariaLabelledby, hasDescriptors } =
      useInput();
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
      hasDescriptors,
    };
  },
});
</script>
