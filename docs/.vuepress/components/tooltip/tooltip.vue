<template>
  <Snippet :code="code" />
</template>

<script lang="ts" setup>
const code = `
<LTooltip trigger="hover">
  <template #trigger>
    <LButton>Tooltip</LButton>
  </template>
  <div>
    hasd
  </div>
</LTooltip>
`;
</script>
