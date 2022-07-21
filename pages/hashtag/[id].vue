<template>
  <base-layout
    :page-title="'Hashtag'"
    fullscreen
    :content-padding="false"
    show-back-link
  >
    <p>Hashtag page id: {{ hashTagId }}</p>
  </base-layout>
</template>
<script setup lang="ts">
const { getParamNumber } = useBase();
const hashTagId = ref<number>(getParamNumber('id'));
</script>
