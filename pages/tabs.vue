<script setup lang="ts">
import { useTabStore } from '~/stores/tabStore';
import { TabsName } from '@/utils/constant';
import {
  homeOutline,
  home,
  chatbubbleOutline,
  chatbubble,
  ellipsisHorizontal,
  addCircleOutline,
  pieChartOutline,
  pieChart,
} from 'ionicons/icons';
useHead({
  title: 'Super Synapse',
});
const tabStore = useTabStore();
const beforeTabChange = (ev: any) => {
  // do something before tab change
  console.log('beforeTabChange', ev);
};
const afterTabChange = (ev: any) => {
  // do something after tab change
  console.log('afterTabChange', ev);
  tabStore.setCurrentTab(ev.tab);
};
</script>

<template>
  <ion-page>
    <ion-tabs
      @ionTabsWillChange="beforeTabChange"
      @ionTabsDidChange="afterTabChange"
    >
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button :tab="TabsName.HOME" href="/tabs/tabHome">
          <ion-icon
            :icon="TabsName.HOME === tabStore.currentTab ? home : homeOutline"
          />
          <ion-label>{{ $t('base.home') }}</ion-label>
        </ion-tab-button>

        <ion-tab-button :tab="TabsName.REPORT" href="/tabs/tabReport">
          <ion-icon
            :icon="
              TabsName.REPORT === tabStore.currentTab
                ? pieChart
                : pieChartOutline
            "
          />
          <ion-label>{{ $t('myReport') }}</ion-label>
        </ion-tab-button>

        <ion-tab-button :tab="TabsName.POST">
          <ion-icon :icon="addCircleOutline" />
          <ion-label>{{ $t('ssAction.postIt') }}</ion-label>
        </ion-tab-button>

        <ion-tab-button :tab="TabsName.CHAT" href="/tabs/tabChat">
          <ion-icon
            :icon="
              TabsName.CHAT === tabStore.currentTab
                ? chatbubble
                : chatbubbleOutline
            "
          />
          <ion-label>{{ $t('nav.chats') }}</ion-label>
          <ion-badge color="danger">22</ion-badge>
        </ion-tab-button>

        <ion-tab-button :tab="TabsName.OTHER" href="/tabs/tabOther">
          <ion-icon :icon="ellipsisHorizontal" />
          <ion-label>{{ $t('base.other') }}</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
