<template>
  <base-separator />
  <ion-grid class="ion-no-padding ion-no-margin">
    <ion-row class="ion-justify-content-around">
      <ion-col size="3" class="ion-text-center">
        <!-- <ion-button fill="clear" color="medium" @click="openPopover($event)"> -->

        <ion-button
          v-show="!actionType"
          fill="clear"
          color="medium"
          :id="`post-context-menu-trigger-${postId}`"
          @click="onLiked('LOVE_IT')"
        >
          <!-- <ion-button
          v-show="!actionType"
          fill="clear"
          color="medium"
          @click="openPopover($event)"
        >-->
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
            enter-active-class="animate__animated animate__fadeInLeft"
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
                  <icon-bi-hand-index-thumb-fill :size="23" />
                  <span style="display: block" class="wee-text-caption">{{
                    $t('ssAction.actionIt')
                  }}</span>
                  <ion-ripple-effect></ion-ripple-effect>
                </ion-col>
              </ion-row>
            </ion-content>
          </transition>
        </ion-popover>

        <transition
          appear
          enter-active-class="animate__animated animate__heartBeat"
        >
          <ion-button v-if="actionType" fill="clear" @click="onUnLiked">
            <ion-icon
              v-if="actionType != 'ACTION_IT'"
              :class="actionColor"
              slot="start"
              :icon="actionIcon"
            ></ion-icon>
            <icon-bi-hand-index-thumb-fill
              class="q-mr-xs"
              color="#2196f3"
              v-else
              :size="23"
            />

            <span
              class="wee-text-smaller app-text-weight-thin"
              :class="actionColor"
              >{{ actionText }}</span
            ></ion-button
          >
        </transition>
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
const hoverTimeOut = ref<any>();
const actionType = ref<PostActionType>();
onMounted(() => {
  actionType.value = props.action;
});
onBeforeUnmount(() => {
  if (hoverTimeOut.value) {
    clearTimeout(hoverTimeOut.value);
    hoverTimeOut.value = null;
  }
});
const popoverOpen = ref(false);
const event = ref<Event>();
const openPopover = (e: Event) => {
  event.value = e;
  popoverOpen.value = true;
};
const closePopover = () => {
  event.value = undefined;
  popoverOpen.value = false;
};
const onLiked = (like: PostActionType) => {
  console.log('onLiked', like);
  closePopover();
  actionType.value = like;
};
const onUnLiked = () => {
  hoverTimeOut.value = setTimeout(() => {
    actionType.value = undefined;
  }, 300);
};
const actionIcon = computed(() => {
  if (!actionType.value) {
    return '';
  }
  if (actionType.value == 'LOVE_IT') {
    return heart;
  } else if (actionType.value == 'PRIZE_IT') {
    return gift;
  } else if (actionType.value == 'ADOPT_IT') {
    return bagHandle;
  } else {
    return heart;
  }
});
const actionText = computed(() => {
  if (!actionType.value) {
    return '';
  }
  if (actionType.value == 'LOVE_IT') {
    return 'I loved it';
  } else if (actionType.value == 'PRIZE_IT') {
    return 'I prized it';
  } else if (actionType.value == 'ADOPT_IT') {
    return 'I adopted it';
  } else {
    return 'I actioned it';
  }
});
const actionColor = computed(() => {
  if (!actionType.value) {
    return '';
  }
  if (actionType.value == 'LOVE_IT') {
    return 'text-pink';
  } else if (actionType.value == 'PRIZE_IT') {
    return 'text-amber-8';
  } else if (actionType.value == 'ADOPT_IT') {
    return 'text-green';
  } else {
    return 'text-blue';
  }
});
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
