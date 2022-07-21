<template>
  <svg
    v-if="!ionicIcon"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    fill="currentColor"
    viewBox="0 0 16 16"
    :class="color"
  >
    <path :d="icon.replace('|0 0 16 16', '')" />
  </svg>
  <ion-icon
    v-else
    :class="color"
    :icon="icon"
    :style="{ fontSize: size + 'px' }"
  />
</template>
<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    default: '',
  },
  ionicIcon: {
    type: Boolean,
    default: false,
  },
  size: {
    type: Number,
    default: 20,
  },
  color: {
    type: String,
    default: 'text-primary', //#2196f3
  },
});
</script>
