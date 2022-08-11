<template>
  <base-layout
    :page-title="'Photos'"
    fullscreen
    :content-padding="false"
    :show-back-link="false"
  >
    <template #avatar>
      <ion-avatar style="width: 32px; height: 32px">
        <ion-img :src="AvatarPlaceHolder128" />
      </ion-avatar>
    </template>
    <template #actions-end>
      <ion-button @click="onBack"
        ><ion-icon slot="icon-only" :icon="closeOutline"
      /></ion-button>
    </template>
    <slide-gallery :items="items" :selected-index="0" />
  </base-layout>
</template>
<script setup lang="ts">
import { ImageDto } from '@/types/models';
import { AvatarPlaceHolder128 } from '@/utils/constant';
import { closeOutline } from 'ionicons/icons';
import { useLangugeAndThemeStore } from '@/stores/langugeAndThemeStore';
const langugeAndThemeStore = useLangugeAndThemeStore();
const { onBack } = useBase();

const currentThemeSetting = ref<string>('');
const items = ref<ImageDto[]>([
  {
    image: 'https://placeimg.com/800/600/nature',
    thumbnail: 'https://placeimg.com/160/160/nature',
  },
  {
    image: 'https://placeimg.com/800/600/arch',
    thumbnail: 'https://placeimg.com/160/160/arch',
  },
  {
    image: 'https://placeimg.com/800/600/animals',
    thumbnail: 'https://placeimg.com/160/160/animals',
  },
  {
    image: 'https://placeimg.com/800/600/people',
    thumbnail: 'https://placeimg.com/160/160/people',
  },
  {
    image: 'https://placeimg.com/800/600/tech',
    thumbnail: 'https://placeimg.com/160/160/tech',
  },
  {
    image: 'https://picsum.photos/800/600',
    thumbnail: 'https://picsum.photos/160',
  },
  {
    image: 'https://placeimg.com/800/600/sepia',
    thumbnail: 'https://placeimg.com/160/160/sepia',
  },
]);
onMounted(() => {
  currentThemeSetting.value = langugeAndThemeStore.theme;
  langugeAndThemeStore.setThemeSetting('dark');
});
onBeforeUnmount(() => {
  if (currentThemeSetting.value) {
    langugeAndThemeStore.setThemeSetting(currentThemeSetting.value);
  }
});
</script>
