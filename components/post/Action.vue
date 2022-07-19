<template>
  <ion-grid class="ion-no-padding ion-no-margin">
    <ion-row class="ion-justify-content-around">
      <ion-col size="3" class="ion-text-center">
        <!-- <ion-button fill="clear" color="medium" @click="openPopover($event)"> -->
        <ion-button
          fill="clear"
          color="medium"
          :id="`post-context-menu-trigger-${postId}`"
          @click="onLiked('LOVE_IT')"
        >
          <ion-icon slot="start" :icon="heartOutline"></ion-icon>
          <span class="wee-text-smaller text-muted app-text-weight-thin">{{
            $t('ssAction.loveIt')
          }}</span></ion-button
        >

        <!-- <ion-popover
          side="top"
          alignment="center"
          :is-open="popoverOpen"
          :event="event"
          @didDismiss="popoverOpen = false"
          trigger-action="context-menu"
        > -->
        <ion-popover
          side="top"
          alignment="center"
          :trigger="`post-context-menu-trigger-${postId}`"
          trigger-action="context-menu"
          :dismiss-on-select="true"
        >
          <transition
            appear
            enter-active-class="animate__animated animate__lightSpeedInLeft"
            leave-active-class="animate__animated animate__lightSpeedOutRight"
          >
            <ion-content :scroll-y="false">
              <ion-row
                class="ion-justify-content-around ion-align-items-center"
              >
                <ion-col
                  size="3"
                  class="ion-text-center ion-activatable ripple-parent text-pink"
                  @click="onLiked('LOVE_IT')"
                >
                  <ion-icon :icon="heart"></ion-icon>
                  <span style="display: block" class="wee-text-caption">{{
                    $t('ssAction.loveIt')
                  }}</span>
                  <ion-ripple-effect></ion-ripple-effect>
                </ion-col>
                <ion-col
                  size="3"
                  class="ion-text-center ion-activatable ripple-parent text-amber-8"
                  @click="onLiked('PRIZE_IT')"
                >
                  <ion-icon :icon="gift"></ion-icon>
                  <span style="display: block" class="wee-text-caption">{{
                    $t('ssAction.prizeIt')
                  }}</span>
                  <ion-ripple-effect></ion-ripple-effect>
                </ion-col>
                <ion-col
                  size="3"
                  class="ion-text-center ion-activatable ripple-parent text-green"
                  @click="onLiked('ADOPT_IT')"
                >
                  <ion-icon :icon="bagHandle"></ion-icon>
                  <span style="display: block" class="wee-text-caption">{{
                    $t('ssAction.adoptIt')
                  }}</span>
                  <ion-ripple-effect></ion-ripple-effect>
                </ion-col>
                <ion-col
                  size="3"
                  class="ion-text-center ion-activatable ripple-parent text-blue"
                  @click="onLiked('ACTION_IT')"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-hand-index-thumb-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716.075.09.141.175.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0z"
                    />
                  </svg>
                  <span style="display: block" class="wee-text-caption">{{
                    $t('ssAction.actionIt')
                  }}</span>
                  <ion-ripple-effect></ion-ripple-effect>
                </ion-col>

                <!-- <ion-button fill="clear" color="warning">
                  <ion-icon slot="icon-only" :icon="gift"></ion-icon
                ></ion-button>
                <ion-button fill="clear" color="success">
                  <ion-icon slot="icon-only" :icon="bagHandle"></ion-icon
                ></ion-button>
                <ion-button fill="clear">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-hand-index-thumb-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716.075.09.141.175.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0z"
                    />
                  </svg>
                </ion-button> -->
              </ion-row>
            </ion-content>
          </transition>
        </ion-popover>
      </ion-col>
      <ion-col size="3" class="ion-text-center">
        <ion-button fill="clear" color="medium"
          ><ion-icon slot="start" :icon="chatboxEllipsesOutline"></ion-icon
          ><span class="wee-text-smaller text-muted">{{
            $t('ssAction.comment')
          }}</span></ion-button
        >
      </ion-col>
      <ion-col size="3" class="ion-text-center">
        <ion-button fill="clear" color="medium"
          ><ion-icon slot="start" :icon="returnUpForwardOutline"></ion-icon
          ><span class="wee-text-smaller text-muted">{{
            $t('ssAction.shareIt')
          }}</span></ion-button
        >
      </ion-col>
    </ion-row>
  </ion-grid>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import { PostActionType } from '@/types/models';
import {
  heartOutline,
  heart,
  chatboxEllipsesOutline,
  returnUpForwardOutline,
  gift,
  bagHandle,
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
});
const actionType = ref<PostActionType>();
onMounted(() => {
  actionType.value = props.action;
});
const popoverOpen = ref(false);
const event = ref<Event>();
const openPopover = (e: Event) => {
  event.value = e;
  popoverOpen.value = true;
};
const onLiked = (like: PostActionType) => {
  actionType.value = like;
  console.log('onLiked', like);
  popoverOpen.value = false;
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
