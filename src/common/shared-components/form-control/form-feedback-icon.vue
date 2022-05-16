<template>
  <div v-if="feedback" class="form-feedback-icon">
    <svg viewBox="0 0 64 64">
      <path
        v-if="feedbackType === 'success'"
        d="M55.7,56.8H8.3c-3.2,0-5.9-2.6-5.9-5.9V16.1c0-3.2,2.6-5.9,5.9-5.9h47.4c3.2,0,5.9,2.6,5.9,5.9v34.8
	C61.6,54.1,58.9,56.8,55.7,56.8z"
      />
      <path
        v-else-if="feedbackType === 'error'"
        d="M60.3,12.4L60.3,12.4c-0.9-0.9-2-1.4-3.2-1.4s-2.3,0.5-3.2,1.3L23.6,42.6c-0.2,0.2-0.8,0.2-1,0L10.2,30.2
	c-0.9-0.9-2-1.3-3.2-1.3s-2.3,0.5-3.2,1.3C2,32,2,34.8,3.8,36.6L18,50.9c1.3,1.3,3.1,2,5,2c1.9,0,3.7-0.8,5-2l32.2-32.2
	C61.9,17,61.9,14.2,60.3,12.4z"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { inputProps } from '~/composables/component/use-input';
import * as u from '~/composables/component/use-util';

export default defineComponent({
  name: 'LFormFeedbackIcon',
  props: {
    feedback: inputProps.feedback,
    feedbackType: inputProps.feedbackType,
  },
  setup(_props, _context) {
    return { ...u };
  },
});
</script>
