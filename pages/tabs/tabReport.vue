<template>
  <base-layout
    :page-title="$t('myReport')"
    fullscreen
    :content-padding="true"
    :show-back-link="false"
  >
    <p v-for="(item, index) in 100" :key="index">Tab Report</p>
  </base-layout>
</template>
<script setup lang="ts"></script>
