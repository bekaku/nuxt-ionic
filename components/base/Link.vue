<template>
  <a
    href="javascript:void(0)"
    class="ion-activatable base-link-ripple-parent app-text-link text-caption q-pa-xs"
    :class="color"
    >{{ label }}
    <ion-ripple-effect></ion-ripple-effect>
  </a>
</template>
<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'text-muted',
  },
});
</script>
<style scoped>
.base-link-ripple-parent {
  position: relative;
  overflow: hidden;
}
</style>
