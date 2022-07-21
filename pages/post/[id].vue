<template>
  <base-layout
    :page-title="'Post'"
    fullscreen
    :content-padding="false"
    show-back-link
  >
    <template v-slot:actions-end>
      <ion-button>
        <ion-icon slot="icon-only" :icon="ellipsisVertical"></ion-icon>
      </ion-button>
    </template>

    <template v-if="post">
      <lazy-post-item
        :post="post"
        :show-menu="false"
        show-follow-post
        :show-action-comment="false"
        :like-context-id="`page-post-context-menu-trigger-${post.id}`"
        :wrap-content-text="false"
      />
    </template>
  </base-layout>
</template>
<script setup lang="ts">
import { PostData } from '@/types/models';
import { ellipsisVertical } from 'ionicons/icons';
const { getParamNumber } = useBase();
const postId = ref<number>(getParamNumber('id'));
const post = ref<PostData>({
  id: postId.value,
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
  hashtag: [
    { id: 1, name: 'DesperateHours' },
    { id: 2, name: 'FreeDocumentary' },
    { id: 3, name: 'Documentary' },
  ],
});
</script>
