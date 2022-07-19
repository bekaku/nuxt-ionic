<template>
  <ion-grid class="ion-no-padding ion-no-margin test-border">
    <ion-row class="ion-justify-content-around">
      <ion-col size="3" class="test-border ion-text-center ">
        <ion-button fill="clear" color="dark" class="ion-no-padding ion-no-margin"
          ><ion-icon slot="icon-only" :icon="heartOutline"></ion-icon
        ></ion-button>
      </ion-col>
      <!-- <ion-col size="3" class="test-border ion-text-center">
        <ion-button fill="clear" color="dark"
          ><ion-icon slot="icon-only" :icon="chatboxEllipsesOutline"></ion-icon
        ></ion-button>
      </ion-col>
      <ion-col size="3" class="test-border ion-text-center">
        <ion-button fill="clear" color="dark"
          ><ion-icon slot="icon-only" :icon="bookmarkOutline"></ion-icon
        ></ion-button>
      </ion-col>
      <ion-col size="3" class="test-border ion-text-center">
        <ion-button fill="clear" color="dark"
          ><ion-icon slot="icon-only" :icon="shareSocialOutline"></ion-icon
        ></ion-button>
      </ion-col> -->
    </ion-row>
  </ion-grid>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import { PostActionType } from '@/types/models';
import { heartOutline, chatboxEllipsesOutline, bookmarkOutline, shareSocialOutline } from 'ionicons/icons';
const props = defineProps({
  action: {
    type: String as PropType<PostActionType | undefined>,
    default: undefined,
  },
});
const actionType = ref<PostActionType>();
onMounted(() => {
  actionType.value = props.action;
});
</script>
