<template>
  <base-layout
    page-title="Animations"
    fullscreen
    :content-padding="true"
    show-back-link
  >
  <p class="text-red">Animation page</p>
    <transition
      appear
      enter-active-class="animate__animated animate__backInDown"
      leave-active-class="animate__animated animate__backOutLeft"
    >
      <ion-button v-if="show" color="danger">Default</ion-button>
    </transition>
    <ion-button @click="show = !show">Toggle</ion-button>
  </base-layout>
</template>
<script setup lang="ts">
const show = ref(false);
</script>
