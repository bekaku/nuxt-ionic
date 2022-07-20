<template>
  <ion-grid class="ion-no-margin q-px-sm">
    <ion-row>
      <ion-col class="ion-no-margin ion-no-padding">
        <ion-icon :icon="heart" class="text-pink" />
        <span class="text-muted wee-text-caption q-ml-xs"
          >{{ $t('userEngagement') }} 21.8k</span
        >
      </ion-col>
    </ion-row>
    <ion-row class="ion-align-items-center">
      <ion-col size="4">
        <ion-button
          fill="clear"
          class="text-muted ion-text-capitalize ion-no-margin ion-no-padding"
          size="small"
          @click="onOpenReacts"
        >
          <span slot="start">
            <ion-icon :icon="heart" class="text-pink" />
            <ion-icon :icon="gift" class="text-amber-8" />
            <ion-icon :icon="bagHandle" class="text-green" />
          </span>
          <span class="q-ml-xs">10.9k</span>
        </ion-button>
      </ion-col>
      <ion-col size="8">
        <div class="q-gutter-x-md ion-float-right">
          <base-link
            @click="onOpenComment"
            :label="`9k ${$t('comments')}`"
            class="wee-text-caption"
          />
          <base-link
            @click="onOpenSharer"
            :label="`1.9k ${$t('shares')}`"
            class="wee-text-caption"
          />
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>
<script setup lang="ts">
import { heart, gift, bagHandle } from 'ionicons/icons';
const props = defineProps({
  postId: {
    type: Number,
    default: 0,
  },
});
const onOpenReacts = () => {
  console.log('onOpenReacts > ' + props.postId);
};
const onOpenComment = () => {
  console.log('onOpenComment > ' + props.postId);
};
const onOpenSharer = () => {
  console.log('onOpenSharer > ' + props.postId);
};
</script>
