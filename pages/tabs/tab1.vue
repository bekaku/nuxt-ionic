<template>
  <base-layout
    :page-title="$t('base.home')"
    fullscreen
    :show-back-link="false"
    :content-padding="false"
    :avatar="AvatarPlaceHolder128"
    avatar-width="36"
  >
    <template v-slot:actions-end>
      <ion-button color="dark" router-link="/settings/appearance">
        <ion-icon slot="icon-only" :icon="ellipsisVertical"></ion-icon>
      </ion-button>
    </template>
    <ion-refresher
      slot="fixed"
      :pull-factor="0.5"
      :pull-min="100"
      :pull-max="200"
      @ionRefresh="doRefresh($event)"
    >
      <ion-refresher-content
        :refreshing-text="$t('base.pleaseWait')"
      ></ion-refresher-content>
    </ion-refresher>
    <button @click="onReplaceUrl('/my/new/path')">test</button>

    <template v-for="(item, index) in posts" :key="index">
      <post-item :post="item" :index="index" />
    </template>
  </base-layout>
</template>
<script setup lang="ts">
import { ellipsisVertical, chevronDownCircleOutline } from 'ionicons/icons';
import { AvatarPlaceHolder128 } from '@/utils/constant';
import { PostData } from '@/types/models';

definePageMeta({
  // alias: ['/', '/tabs'],
  alias: ['/tabs'],
});
const { callAxios } = useAxios();
const { isAppPlatfrom } = useDevice();
const { getConfig } = useConfig();
const { onReplaceUrl } = useBase();
const logDeviceInfo = async () => {
  console.log('NODE_ENV', process.env.NODE_ENV);
  console.log('getConfig > apiBase : ' + getConfig('apiBase'));
  console.log('isIOS : ' + isAppPlatfrom('ios'));
};
onMounted(() => {
  logDeviceInfo();
  onLoadData();
});
const onLoadData = async () => {
  const res = await callAxios({
    API: '/posts',
    method: 'GET',
  });
  console.log('callAxios', res);
};
const initialPost: PostData[] = [
  {
    id: 1,
    pin: false,
    postDatetime: '2022-01-05 11:30:30',
    content:
      'Solo wild camping in the rain [ASMR] https://www.youtube.com/watch?v=2qeueW4YavM',
    gallery: [],
    hashtag: [
      { id: 1, name: 'DesperateHours' },
      { id: 2, name: 'FreeDocumentary' },
      { id: 3, name: 'Documentary' },
    ],
    reference: {
      name: 'Danial Wong',
      activity: 'likes this',
      activityIcon: 'bi-heart',
    },
  },
  {
    id: 2,
    pin: false,
    postDatetime: '2022-04-28 11:30:30',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    gallery: [
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
    ],
    hashtag: [],
  },
  {
    id: 3,
    pin: false,
    postDatetime: '2022-07-05 11:30:30',
    reference: {
      name: 'Vinayak Naik',
      activity: 'prize this',
      activityIcon: 'bi-gift',
    },
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    gallery: [
      {
        image: 'https://picsum.photos/800/600',
        thumbnail: 'https://picsum.photos/160',
      },
    ],
    hashtag: [{ id: 1, name: 'WeAreHearForBuil' }],
  },
  {
    id: 4,
    pin: false,
    postDatetime: '2022-01-05 11:30:30',
    reference: {
      name: 'Danial Wong',
      activity: 'share this',
      activityIcon: 'bi-share',
    },
    content:
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. https://pantip.com/topic/40388674',
    gallery: [],
    hashtag: [{ id: 1, name: 'WeAreHearForBuil' }],
  },
];
const posts = ref<PostData[]>(initialPost);
const doRefresh = (event: any) => {
  console.log('Begin async operation');

  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
  }, 2000);
};
</script>
<style scoped>
@import '~/assets/card.css';
</style>
