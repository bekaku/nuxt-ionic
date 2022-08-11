<template>
  <base-separator />
  <ion-grid class="ion-no-padding ion-no-margin">
    <ion-row class="ion-justify-content-around ion-align-items-center">
      <ion-col
        class="ion-text-center ion-activatable ripple-parent q-py-xs"
        @click="loveIt ? onUnLiked('LOVE_IT') : onLiked('LOVE_IT')"
      >
        <transition
          appear
          enter-active-class="animate__animated animate__heartBeat"
        >
          <base-icon
            v-if="loveIt"
            :icon="heart"
            icon-set="ion"
            :color="loveIt ? 'text-pink' : 'text-muted'"
            :size="20"
          />
        </transition>
        <base-icon
          v-if="!loveIt"
          :icon="heartOutline"
          icon-set="ion"
          :color="loveIt ? 'text-pink' : 'text-muted'"
          :size="20"
        />

        <span
          style="display: block"
          class="q-text-smaller"
          :class="loveIt ? 'text-pink' : 'text-muted'"
          >{{ $t('ssAction.loveIt') }}</span
        >
        <ion-ripple-effect></ion-ripple-effect>
      </ion-col>
      <ion-col
        class="ion-text-center ion-activatable ripple-parent q-py-xs"
        @click="prizeIt ? onUnLiked('PRIZE_IT') : onLiked('PRIZE_IT')"
      >
        <transition
          appear
          enter-active-class="animate__animated animate__heartBeat"
        >
          <base-icon
            v-if="prizeIt"
            :icon="gift"
            icon-set="ion"
            :color="prizeIt ? 'text-amber-8' : 'text-muted'"
            :size="20"
          />
        </transition>
        <base-icon
          v-if="!prizeIt"
          :icon="giftOutline"
          icon-set="ion"
          :color="prizeIt ? 'text-amber-8' : 'text-muted'"
          :size="20"
        />

        <span
          style="display: block"
          class="q-text-smaller"
          :class="prizeIt ? 'text-amber-8' : 'text-muted'"
          >{{ $t('ssAction.prizeIt') }}</span
        >
        <ion-ripple-effect></ion-ripple-effect>
      </ion-col>
      <ion-col
        v-if="showActionComment"
        class="ion-text-center ion-activatable ripple-parent q-py-xs"
      >
        <base-icon
          :icon="chatboxEllipsesOutline"
          icon-set="ion"
          color="text-muted"
          :size="20"
        />

        <span style="display: block" class="q-text-smaller text-muted">{{
          $t('ssAction.comment')
        }}</span>
        <ion-ripple-effect></ion-ripple-effect>
      </ion-col>
      <ion-col
        v-if="showActionShare"
        class="ion-text-center ion-activatable ripple-parent q-py-xs"
      >
        <base-icon
          :icon="arrowRedoOutline"
          icon-set="ion"
          color="text-muted"
          :size="20"
        />

        <span style="display: block" class="q-text-smaller text-muted">{{
          $t('ssAction.shareIt')
        }}</span>
        <ion-ripple-effect></ion-ripple-effect>
      </ion-col>
      <ion-col class="ion-text-center ion-activatable ripple-parent q-py-xs">
        <base-icon
          :icon="hammerOutline"
          icon-set="ion"
          color="text-muted"
          :size="20"
        />

        <span style="display: block" class="q-text-smaller text-muted">{{
          $t('ssAction.actionNow')
        }}</span>
        <ion-ripple-effect></ion-ripple-effect>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import { PostActionType } from '@/types/models';
import { biArrow90degRight } from '@quasar/extras/bootstrap-icons';
import {
  heartOutline,
  heart,
  chatboxEllipsesOutline,
  returnUpForwardOutline,
  gift,
  giftOutline,
  arrowRedoOutline,
  hammerOutline,
} from 'ionicons/icons';
const props = defineProps({
  action: {
    type: String as PropType<PostActionType | undefined>,
    default: undefined,
  },
  postId: {
    type: Number,
    default: 0,
  },
  likeContextId: {
    type: String,
    default: '',
  },
  showActionComment: {
    type: Boolean,
    default: true,
  },
  showActionShare: {
    type: Boolean,
    default: true,
  },
});
const { WeeGoTo } = useBase();
const hoverTimeOut = ref<any>();
const actionType = ref<PostActionType>();
onMounted(() => {});
const popoverOpen = ref(false);
const event = ref<Event>();

const loveIt = ref(false);
const prizeIt = ref(false);
const adoptIt = ref(false);
const actionIt = ref(false);

const onLiked = (like: PostActionType) => {
  console.log('onLiked', like);
  actionType.value = like;
  likeProcess();
};
const onUnLiked = (unlike: PostActionType) => {
  console.log('onUnLiked', unlike);
  actionType.value = unlike;
  unLikeProcess();
};
const likeProcess = () => {
  if (actionType.value == 'LOVE_IT') {
    loveIt.value = true;
  } else if (actionType.value == 'PRIZE_IT') {
    prizeIt.value = true;
  } else if (actionType.value == 'ADOPT_IT') {
    adoptIt.value = true;
  } else if (actionType.value == 'ACTION_IT') {
    actionIt.value = true;
  }
};
const unLikeProcess = () => {
  if (actionType.value == 'LOVE_IT') {
    loveIt.value = false;
  } else if (actionType.value == 'PRIZE_IT') {
    prizeIt.value = false;
  } else if (actionType.value == 'ADOPT_IT') {
    adoptIt.value = false;
  } else if (actionType.value == 'ACTION_IT') {
    actionIt.value = false;
  }
};
</script>
<style scoped>
ion-popover {
  --width: 350px;
}
.ripple-parent {
  position: relative;
  overflow: hidden;
}
ion-icon {
  font-size: 26px;
}
</style>
