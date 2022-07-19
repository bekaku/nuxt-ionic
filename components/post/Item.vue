<template>
  <ion-card
    class="ion-no-margin no-border-radius ion-margin-vertical no-shadow app-border-light-top-bottom"
  >
    <ion-card-header class="ion-no-padding">
      <ion-item lines="none">
        <ion-avatar slot="start">
          <ion-img :src="AvatarPlaceHolder128" />
        </ion-avatar>
        <ion-label>
          <h2 class="wee-text-weight-bold">Chanavee Bekaku</h2>
          <p>{{ AppFormatDate(post.postDatetime, FORMAT_DATE12) }}</p>
        </ion-label>

        <post-menu slot="end" :id="post.id" />
      </ion-item>
    </ion-card-header>

    <ion-card-content>
      <slot name="description">
        <post-content :content="post.content" :post-id="post.id" />
      </slot>
      <slot name="hashtag">
        <post-hashtag v-if="post.hashtag.length > 0" :items="post.hashtag" />
      </slot>
    </ion-card-content>
    <slot name="action">
      <post-action :post-id="post.id" />
    </slot>
  </ion-card>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import { catchUrlFromText } from '@/utils/appUtil';
import { FORMAT_DATE12 } from '@/utils/dateUtil';
import { AvatarPlaceHolder128 } from '@/utils/constant';
import { PostData } from '@/types/models';
import { ellipsisHorizontal } from 'ionicons/icons';
const props = defineProps({
  post: {
    type: Object as PropType<PostData>,
    default: () => null,
    required: true,
  },
  index: {
    type: Number,
  },
});
const { AppFormatDate } = useBase();
onMounted(() => {
  checkOgLink();
});
const checkOgLink = async () => {
  const matches = catchUrlFromText(props.post.content);
  console.log('checkOgLink', matches);
};
</script>
