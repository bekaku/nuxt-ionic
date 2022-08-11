<template>
  <ion-page>
    <ion-header mode="ios" collapse="fade">
      <ion-toolbar>
        <ion-title>Report</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" :scroll-y="true">
      <ion-header mode="ios" collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Report</ion-title>
        </ion-toolbar>

        <div class="q-pl-md">
          <ion-avatar style="width: 45px; height: 45px">
            <ion-img :src="AvatarPlaceHolder128" />
          </ion-avatar>
        </div>
      </ion-header>

      <report-statistic />

      <report-current-statistic type="individual" />

      <report-individual />

      <ion-card class="no-shadow ion-no-margin q-my-md">
        <div class="q-text-h6 q-pa-sm">Individual medal chart</div>
        <report-medal-chart
          height="300"
          chart-id="report-medal-chart"
          :markers-sizes="[20, 20, 20]"
          :fill-types="['image', 'image', 'image']"
          :fill-images="[
            '/icons/gold-medal.png',
            '/icons/silver-medal.png',
            '/icons/bronze-medal.png',
          ]"
          :series="medalSeries"
          :colors="['transparent', 'transparent', 'transparent']"
        />
      </ion-card>

      <ion-card class="no-shadow ion-no-margin q-my-md">
        <div class="q-text-h6 q-pa-sm">Team medal chart</div>
        <report-medal-chart
          height="300"
          chart-id="report-medal-team-chart"
          :markers-sizes="[20, 20, 20]"
          :fill-types="['image', 'image', 'image']"
          :fill-images="[
            'https://i.pravatar.cc/128?img=1',
            'https://i.pravatar.cc/128?img=2',
            'https://i.pravatar.cc/128?img=3',
          ]"
          :series="teamMedalSeries"
          :colors="['transparent', 'transparent', 'transparent']"
        />
      </ion-card>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { TabsName } from '@/utils/constant';
import { useTabStore } from '~/stores/tabStore';
import {
  caretDownOutline,
  caretUpOutline,
  returnUpForwardOutline,
  giftOutline,
  chatboxOutline,
} from 'ionicons/icons';
import { biPencil } from '@quasar/extras/bootstrap-icons';
import { AvatarPlaceHolder128 } from '@/utils/constant';
const tabStore = useTabStore();
tabStore.setCurrentTab(TabsName.REPORT);

const medalSeries = ref([
  {
    name: 'Gold',
    type: 'scatter',
    data: [
      {
        y: 3.5,
        x: 3.5,
      },
      {
        y: 2.5,
        x: 3.5,
      },
      {
        y: 2.5,
        x: 2.5,
      },
      {
        y: 3.5,
        x: 2.5,
      },
    ],
  },
  {
    name: 'Silver',
    type: 'scatter',
    data: [
      {
        y: 2.44,
        x: 1.5,
      },
      {
        y: 3.5,
        x: 1.5,
      },
      {
        y: 1.5,
        x: 2.5,
      },
      {
        y: 1.5,
        x: 3.5,
      },
    ],
  },
  {
    name: 'Bronze',
    type: 'scatter',
    data: [
      {
        y: 3.44,
        x: 0.5,
      },
      {
        y: 2.44,
        x: 0.5,
      },
      {
        y: 1.44,
        x: 1.5,
      },
      {
        y: 0.5,
        x: 2.5,
      },
      {
        y: 0.5,
        x: 3.5,
      },
    ],
  },
]);
const teamMedalSeries = ref([
  {
    name: 'B',
    type: 'scatter',
    data: [
      {
        y: 3.14,
        x: 3.5,
      },
    ],
  },
  {
    name: 'A',
    type: 'scatter',
    data: [
      {
        y: 2.44,
        x: 1.5,
      },
    ],
  },
  {
    name: 'C',
    type: 'scatter',
    data: [
      {
        y: 1.44,
        x: 1.5,
      },
    ],
  },
]);
const seriesSparklines = ref([
  {
    name: 'Net Profit',
    data: [54, 27, 65, 51, 46, 27, 39, 56, 19, 62],
  },
]);
const categories = ref<string[]>([
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
]);
</script>
