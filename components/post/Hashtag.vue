<template>
  <div class="q-mt-sm">
    <!-- <ion-chip
      v-for="(item, index) in items"
      :key="index"
      :color="langugeAndThemeStore.theme == 'dark' ? 'dark' : 'primary'"
    >
      <ion-label> {{ `#${item.name}` }}</ion-label>
    </ion-chip> -->
    <base-link
      v-for="(item, index) in items"
      :key="index"
      :color="
        langugeAndThemeStore.theme == 'dark' ? 'text-muted' : 'text-primary'
      "
      class="wee-text-weight-light q-mt-lg"
      :label="`#${item.name}`"
      @click="WeeGoTo(`/hashtag/${item.id}`)"
    />
  </div>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import { Hashtag } from '@/types/models';
import { useLangugeAndThemeStore } from '@/stores/langugeAndThemeStore';
const langugeAndThemeStore = useLangugeAndThemeStore();
const { WeeGoTo } = useBase();
defineProps({
  items: {
    type: Array as PropType<Hashtag[]>,
    default: () => [],
  },
});
</script>
