<template>
  <div class="ion-margin-vertical">
    <ion-chip
      v-for="(item, index) in items"
      :key="index"
      :color="langugeAndThemeStore.theme == 'dark' ? 'dark' : 'primary'"

    >
      <ion-label> {{ `#${item.name}` }}</ion-label>
    </ion-chip>
  </div>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import { Hashtag } from '@/types/models';
import { useLangugeAndThemeStore } from '@/stores/langugeAndThemeStore';
const langugeAndThemeStore = useLangugeAndThemeStore();
defineProps({
  items: {
    type: Array as PropType<Hashtag[]>,
    default: () => [],
  },
});
</script>
