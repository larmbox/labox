<template>
  <div>
    <LTextarea
      label="Test"
      description="Description"
      help="Test"
      :rows="5"
      :cols="50"
      resize="none"
      test="a"
      @mouseenter="onInput"
    />
    {{ a }}
    <LRadio v-model="a" block label="A" value="b" />
    <LRadio v-model="a" block label="A" value="a" />
    <LRadio v-model="a" block label="A" value="b" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup(props, contxt) {
    const a = ref(null);
    const onInput = (event) => {
      console.log(event);
    };

    return { onInput, a };
  },
});
</script>

<style lang="scss"></style>
