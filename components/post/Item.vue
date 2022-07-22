<template>
  <ion-card
    class="ion-no-margin no-border-radius q-mb-md no-shadow app-border-light-top-bottom"
  >
    <ion-card-header class="ion-no-padding">
      <ion-item lines="none">
        <ion-avatar @click="WeeGoTo('/profile')" slot="start">
          <ion-img :src="AvatarPlaceHolder128" />
        </ion-avatar>
        <ion-label>
          <h2 @click="WeeGoTo('/profile')" class="wee-text-weight-bold">
            Chanavee Bekaku
          </h2>
          <p>{{ AppFormatDate(post.postDatetime, FORMAT_DATE12) }}</p>
        </ion-label>

        <post-menu
          v-if="showMenu"
          slot="end"
          :id="post.id"
          :key="`feed-post-menu-trigger-${post.id}`"
          :context-id="`feed-post-menu-trigger-${post.id}`"
        />
        <ion-button
          v-if="showFollowPost"
          @click="following = !following"
          slot="end"
          fill="clear"
        >
          <base-icon
            slot="icon-only"
            :icon="following ? biDashCircle : biPlusSquare"
            :color="following ? 'text-muted' : 'text-primary'"
            :size="18"
          />
        </ion-button>
      </ion-item>
    </ion-card-header>

    <ion-card-content>
      <slot name="description">
        <post-content
          :wrap-text="wrapContentText"
          :content="post.content"
          :post-id="post.id"
        />
      </slot>
      <slot name="hashtag">
        <post-hashtag v-if="post.hashtag.length > 0" :items="post.hashtag" />
      </slot>
    </ion-card-content>

    <slot name="photos">
      <post-gallerry v-if="post.gallery.length > 0" :items="post.gallery" />
    </slot>

    <slot name="engaging">
      <post-engaging :post-id="post.id" />
    </slot>
    <slot name="action">
      <post-action
        :post-id="post.id"
        :show-action-comment="showActionComment"
        :like-context-id="likeContextId"
      />
    </slot>
  </ion-card>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import { catchUrlFromText } from '@/utils/appUtil';
import { FORMAT_DATE12 } from '@/utils/dateUtil';
import { AvatarPlaceHolder128 } from '@/utils/constant';
import { PostData } from '@/types/models';
import { biPlusSquare, biDashCircle } from '@quasar/extras/bootstrap-icons';
const props = defineProps({
  post: {
    type: Object as PropType<PostData>,
    default: () => null,
    required: true,
  },
  index: {
    type: Number,
    default: 0,
  },
  showMenu: {
    type: Boolean,
    default: true,
  },
  showFollowPost: {
    type: Boolean,
    default: false,
  },
  showActionComment: {
    type: Boolean,
    default: true,
  },
  likeContextId: {
    type: String,
    default: '',
  },
  wrapContentText: {
    type: Boolean,
    default: true,
  },
});
const { AppFormatDate, WeeGoTo } = useBase();
onMounted(() => {
  checkOgLink();
});
const following = ref(false);
const checkOgLink = async () => {
  const matches = catchUrlFromText(props.post.content);
  console.log('checkOgLink', matches);
};
const onOpenProfile = () => {
  console.log('onOpenProfile');
};
</script>
