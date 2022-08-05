<template>
  <ion-grid class="ion-no-margin q-px-sm">
    <ion-row>
      <ion-col class="ion-no-margin ion-no-padding">
        <base-icon :icon="biBarChart" color="text-muted" :size="16" />
        <span class="text-muted text-caption-smaller q-ml-xs"
          >{{ $t('userEngagement') }} 21.8k</span
        >
        <!-- <span class="text-muted q-mx-xs q-text-weight-thin">|</span>
        <base-link
          :label="`1.9k ${$t('views')}`"
          class="text-caption-smaller"
        />
        <span class="text-muted q-mx-xs q-text-weight-thin">|</span>
        <base-link :label="`9k Following post`" class="text-caption-smaller" /> -->
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
          <span class="q-ml-xs text-caption">10.9k</span>
        </ion-button>
      </ion-col>
      <ion-col size="8">
        <div class="ion-float-right">
          <base-link
            @click="onOpenComment"
            :label="`9k ${$t('comments')}`"
            class="q-text-caption"
          />
          <base-link
            @click="onOpenSharer"
            :label="`1.9k ${$t('shares')}`"
            class="q-text-caption"
          />
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
  <base-dialog
    :model-value="dialog"
    @on-close="dialog = false"
    title="Reaction"
    :icon="happyOutline"
    ionic-icon
  >
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum
      quidem recusandae ducimus quos reprehenderit. Veniam, molestias quos,
      dolorum consequuntur nisi deserunt omnis id illo sit cum qui. Eaque,
      dicta.
    </p>
  </base-dialog>
</template>
<script setup lang="ts">
import {
  heart,
  gift,
  bagHandle,
  happyOutline,
  eyeOutline,
} from 'ionicons/icons';
import { biBarChart } from '@quasar/extras/bootstrap-icons';
const props = defineProps({
  postId: {
    type: Number,
    default: 0,
  },
});
const dialog = ref(false);
const onOpenReacts = () => {
  dialog.value = true;
  console.log('onOpenReacts > ' + props.postId);
};
const onOpenComment = () => {
  console.log('onOpenComment > ' + props.postId);
};
const onOpenSharer = () => {
  console.log('onOpenSharer > ' + props.postId);
};
</script>
