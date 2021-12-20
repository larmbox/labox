<template>
  <div
    v-if="!feedback && useSlot"
    :class="[className('form-feedback'), className('feedback-' + feedbackType)]"
  >
    <slot />
  </div>
  <span
    v-else-if="feedback"
    :class="[className('form-feedback'), className('feedback-' + feedbackType)]"
    v-text="feedback"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { inputProps } from '../../composables/use-input';
import * as u from '../../composables/use-utils';

export default defineComponent({
  name: 'LFormFeedback',
  props: {
    useSlot: {
      type: Boolean,
    },
    feedback: inputProps.feedback,
    feedbackType: inputProps.feedbackType,
  },
  setup(_props, _context) {
    return { ...u };
  },
});
</script>
