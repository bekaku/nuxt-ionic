<script setup lang="ts">
import {
  homeOutline,
  chatbubbleOutline,
  ellipsisHorizontal,
} from 'ionicons/icons';
useHead({
  title: 'Super Synapse',
});
const {WeeGoTo} = useBase();
const beforeTabChange = () => {
  // do something before tab change
  console.log('beforeTabChange');
};
const afterTabChange = () => {
  // do something after tab change
  console.log('afterTabChange');
};
</script>

<template>
  <ion-page>
    <ion-tabs
      @ionTabsWillChange="beforeTabChange()"
      @ionTabsDidChange="afterTabChange"
    >
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="homeOutline" />
          <!-- <ion-label>{{ $t('base.home') }}</ion-label> -->
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="chatbubbleOutline" />
          <!-- <ion-label>{{ $t('nav.chats') }}</ion-label> -->
          <ion-badge color="danger">22</ion-badge>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="ellipsisHorizontal" />
          <!-- <ion-label>{{ $t('base.other') }}</ion-label> -->
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
