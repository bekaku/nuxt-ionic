<template>
  <ion-card
    class="ion-no-margin no-border-radius q-mb-md no-shadow app-border-light-top-bottom"
  >
    <ion-card-header class="ion-no-padding">
      <ion-item lines="none" class="align-items-start">
        <ion-avatar @click="WeeGoTo('/profile')" slot="start" class="q-mt-md">
          <!-- <ion-img :src="AvatarPlaceHolder128" /> -->
          <base-image
            class="profile-avata"
            :src="AvatarPlaceHolder128"
            ratio="4/3"
          />
        </ion-avatar>
        <ion-label>
          <h2 @click="WeeGoTo('/profile')" class="q-text-weight-bold">
            Chanavee Bekaku
          </h2>
          <p class="q-text-smaller">Software Engineer</p>
          <p class="q-text-smaller">
            {{ AppFormatDate(post.postDatetime, FORMAT_DATE12) }}
          </p>
        </ion-label>

        <post-menu
          v-if="showMenu"
          class="q-mt-md"
          slot="end"
          :id="post.id"
          :key="`feed-post-menu-trigger-${post.id}`"
          :context-id="`feed-post-menu-trigger-${post.id}`"
        />
        <ion-button
          v-if="showFollowPost"
          @click="following = !following"
          class="q-mt-sm"
          slot="end"
          fill="clear"
        >
          <!-- <base-icon
            slot="start"
            :icon="following ? biDashCircle : biPlusSquare"
            :color="following ? 'text-muted' : 'text-primary'"
            :size="18"
          /> -->
          <span :class="following ? 'text-muted' : 'text-primary'">{{
            following ? 'Unfollow' : 'Follow'
          }}</span>
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
      <post-gallerry
        v-if="post.gallery.length > 0"
        :items="post.gallery"
        :post-id="post.id"
      />
    </slot>

    <slot name="engaging">
      <post-engaging :post-id="post.id" />
    </slot>
    <slot name="action">
      <post-action
        :post-id="post.id"
        :show-action-comment="showActionComment"
        :show-action-share="showActionShare"
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
  showActionShare: {
    type: Boolean,
    default: false,
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
  // checkOgLink();
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
<style scoped>
.align-items-start {
  align-items: start;
}
.profile-avata {
  height: 35px;
  width: 35px;
  border-radius: 50px;
}
</style>
