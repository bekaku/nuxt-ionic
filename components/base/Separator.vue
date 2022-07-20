<template>
  <div
    class="app-border-light-bottom"
    :class="inset ? 'q-mx-md' : ''"
    style="height: 1px"
  ></div>
</template>
<script setup lang="ts">
defineProps({
  inset: {
    type: Boolean,
    default: false,
  },
});
</script>
