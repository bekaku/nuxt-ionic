<template>
  <base-separator />
  <ion-grid class="ion-no-padding ion-no-margin">
    <ion-row class="ion-justify-content-around">
      <ion-col size="3" class="ion-text-center">
        <!-- <ion-button
          v-show="!actionType"
          fill="clear"
          color="medium"
          :id="likeContextId"
          @click="onLiked('LOVE_IT')"
          class="ion-text-capitalize"
        > -->
        <ion-button
          v-show="!actionType"
          fill="clear"
          color="medium"
          @click="openPopover($event)"
        >
          <ion-icon slot="icon-only" :icon="heartOutline"></ion-icon>
          <span class="q-text-smaller text-muted app-text-weight-thin">{{
            $t('ssAction.loveIt')
          }}</span></ion-button
        >
        <ion-popover
          side="top"
          alignment="center"
          :is-open="popoverOpen"
          :event="event"
          @didDismiss="closePopover"
        >
          <!-- <ion-popover
          side="top"
          alignment="center"
          :trigger="likeContextId"
          trigger-action="context-menu"
          :dismiss-on-select="true"
        > -->

          <ion-content :scroll-y="false">
            <ion-row class="ion-justify-content-around ion-align-items-center">
              <ion-col
                size="3"
                class="ion-text-center ion-activatable ripple-parent text-pink"
                @click="onLiked('LOVE_IT')"
                ><transition
                  appear
                  enter-active-class="animate__animated animate__heartBeat"
                >
                  <div v-if="loveBtnShow">
                    <ion-icon :icon="heart"></ion-icon>
                    <span style="display: block" class="q-text-caption">{{
                      $t('ssAction.loveIt')
                    }}</span>
                  </div>
                </transition>
                <ion-ripple-effect></ion-ripple-effect>
              </ion-col>

              <ion-col
                size="3"
                class="ion-text-center ion-activatable ripple-parent text-amber-8"
                @click="onLiked('PRIZE_IT')"
              >
                <transition
                  appear
                  enter-active-class="animate__animated animate__heartBeat"
                >
                  <div v-if="giftBtnShow">
                    <ion-icon :icon="gift"></ion-icon>
                    <span style="display: block" class="q-text-caption">{{
                      $t('ssAction.prizeIt')
                    }}</span>
                  </div>
                </transition>
                <ion-ripple-effect></ion-ripple-effect>
              </ion-col>

              <ion-col
                size="3"
                class="ion-text-center ion-activatable ripple-parent text-green"
                @click="onLiked('ADOPT_IT')"
              >
                <transition
                  appear
                  enter-active-class="animate__animated animate__heartBeat"
                >
                  <div v-if="adoptBtnShow">
                    <ion-icon :icon="bagHandle"></ion-icon>
                    <span style="display: block" class="q-text-caption">{{
                      $t('ssAction.adoptIt')
                    }}</span>
                  </div>
                </transition>
                <ion-ripple-effect></ion-ripple-effect>
              </ion-col>

              <ion-col
                size="3"
                class="ion-text-center ion-activatable ripple-parent text-blue"
                @click="onLiked('ACTION_IT')"
              >
                <transition
                  appear
                  enter-active-class="animate__animated animate__heartBeat"
                >
                  <div v-if="actionBtnShow">
                    <base-icon
                      :icon="biHandIndexThumbFill"
                      color="text-blue"
                      :size="23"
                    />
                    <span style="display: block" class="q-text-caption">{{
                      $t('ssAction.actionIt')
                    }}</span>
                  </div>
                </transition>
                <ion-ripple-effect></ion-ripple-effect>
              </ion-col>
            </ion-row>
          </ion-content>
        </ion-popover>

        <ion-button
          class="ion-text-capitalize"
          v-if="actionType"
          fill="clear"
          @click="onUnLiked"
        >
          <transition
            appear
            enter-active-class="animate__animated animate__heartBeat"
          >
            <base-icon
              class="q-mr-xs"
              :icon="
                actionType != 'ACTION_IT' ? actionIcon : biHandIndexThumbFill
              "
              :color="actionType != 'ACTION_IT' ? actionColor : 'text-blue'"
              :icon-set="actionType != 'ACTION_IT' ? 'ion' : 'bootstrap-icons'"
              :size="23"
            />
          </transition>
          <span
            class="q-text-smaller app-text-weight-thin"
            :class="actionColor"
            >{{ actionText }}</span
          ></ion-button
        >
      </ion-col>
      <ion-col v-if="showActionComment" size="3" class="ion-text-center">
        <ion-button
          fill="clear"
          color="medium"
          class="ion-text-capitalize"
          @click="WeeGoTo(`/post/${postId}`)"
          ><ion-icon slot="start" :icon="chatboxEllipsesOutline"></ion-icon
          ><span class="q-text-smaller text-muted">{{
            $t('ssAction.comment')
          }}</span></ion-button
        >
      </ion-col>
      <ion-col size="3" class="ion-text-center">
        <ion-button class="ion-text-capitalize" fill="clear" color="medium"
          ><ion-icon slot="start" :icon="returnUpForwardOutline"></ion-icon
          ><span class="q-text-smaller text-muted">{{
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
import { biHandIndexThumbFill } from '@quasar/extras/bootstrap-icons';
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
  likeContextId: {
    type: String,
    default: '',
  },
  showActionComment: {
    type: Boolean,
    default: true,
  },
});
const { WeeGoTo } = useBase();
const hoverTimeOut = ref<any>();
const showBtnTimeOut = ref<any>();
const actionType = ref<PostActionType>();
const showReacted = ref(false);
onMounted(() => {
  actionType.value = props.action;
});
onBeforeUnmount(() => {
  if (hoverTimeOut.value) {
    clearTimeout(hoverTimeOut.value);
    hoverTimeOut.value = null;
  }
  if (showBtnTimeOut.value) {
    clearTimeout(showBtnTimeOut.value);
    showBtnTimeOut.value = null;
  }
});
const popoverOpen = ref(false);
const event = ref<Event>();
const loveBtnShow = ref(false);
const giftBtnShow = ref(false);
const adoptBtnShow = ref(false);
const actionBtnShow = ref(false);
const openPopover = (e: Event) => {
  event.value = e;
  popoverOpen.value = true;
  setShowHideBtn(true);
};
const setShowHideBtn = (show: boolean) => {
  return new Promise((resolve) => {
    loveBtnShow.value = show;
    showBtnTimeOut.value = setTimeout(() => {
      giftBtnShow.value = show;
    }, 50);
    showBtnTimeOut.value = setTimeout(() => {
      adoptBtnShow.value = show;
    }, 100);
    showBtnTimeOut.value = setTimeout(() => {
      actionBtnShow.value = show;
    }, 150);
    resolve(true);
  });
};
const closePopover = async () => {
  await setShowHideBtn(false);
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
