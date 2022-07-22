<template>
  <base-layout
    :page-title="'Photos'"
    fullscreen
    :content-padding="false"
    :show-back-link="false"
    dark
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
    <slide-gallery :items="items" :selected-index="1" />
  </base-layout>
</template>
<script setup lang="ts">
import { ImageDto } from '@/types/models';
import { AvatarPlaceHolder128 } from '@/utils/constant';
import { closeOutline } from 'ionicons/icons';
const { onBack } = useBase();
const items = ref<ImageDto[]>([
  {
    image: 'https://placeimg.com/500/300/nature',
    thumbnail: 'https://placeimg.com/160/160/nature',
  },
  {
    image: 'https://placeimg.com/500/300/arch',
    thumbnail: 'https://placeimg.com/160/160/arch',
  },
  {
    image: 'https://placeimg.com/500/300/animals',
    thumbnail: 'https://placeimg.com/160/160/animals',
  },
  {
    image: 'https://placeimg.com/500/300/people',
    thumbnail: 'https://placeimg.com/160/160/people',
  },
  {
    image: 'https://placeimg.com/500/300/tech',
    thumbnail: 'https://placeimg.com/160/160/tech',
  },
  {
    image: 'https://picsum.photos/500/300',
    thumbnail: 'https://picsum.photos/160',
  },
  {
    image: 'https://placeimg.com/500/300/sepia',
    thumbnail: 'https://placeimg.com/160/160/sepia',
  },
]);
</script>
