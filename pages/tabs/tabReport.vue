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

      <ion-card class="no-shadow ion-no-margin q-my-md">
        <div class="q-text-h6 q-pa-sm">Current stats</div>
        <ion-grid>
          <!-- <ion-row class="ion-justify-content-around ion-align-items-center"> -->
          <ion-row>
            <ion-col
              size="4"
              v-for="(item, index) in formulars"
              class="ion-text-center"
            >
              <div>
                <base-icon
                  :icon="item.changed > 0 ? caretUpOutline : caretDownOutline"
                  icon-set="ion"
                  slot="end"
                  :size="16"
                  :class="
                    item.changed > 0
                      ? 'text-green'
                      : item.changed == 0
                      ? ''
                      : 'text-red'
                  "
                />
                <span class="q-text-h6 q-text-weight-bold">{{ item.val }}</span>
                <span
                  :class="
                    item.changed > 0
                      ? 'text-green'
                      : item.changed == 0
                      ? ''
                      : 'text-red'
                  "
                  class="text-caption-smaller q-ml-xs"
                  >{{ `(${item.changed > 0 ? '+' : ''}${item.changed})` }}</span
                >
              </div>
              <div class="text-muted text-caption">{{ item.name }}</div>

              <chart-sparklines
                :chart-id="`g-chart-current-spark${index}`"
                height="25"
                type="area"
                :colors="['#b0c7d4']"
                :series="seriesSparklines"
                strokestyle="straight"
                :categories="categories"
              />
              <ion-button
                fill="clear"
                size="small"
                @click="WeeGoTo(`/report/history/${item.id}`)"
                >{{ $t('base.seeMore') }}</ion-button
              >
            </ion-col>
            <ion-col size="4" class="ion-align-self-center">
              <ion-button
                fill="clear"
                size="small"
                @click="WeeGoTo(`/report/history/stats`)"
                color="dark"
              >
                <ion-icon
                  slot="start"
                  :icon="returnUpForwardOutline"
                ></ion-icon>
                Full report</ion-button
              >
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card>
      <ion-card class="no-shadow ion-no-margin q-my-md">
        <ion-row>
          <ion-col size="12" class="ion-no-padding ion-no-margin">
            <div class="q-text-h6 q-pa-sm">Your dialogue</div>

            <chart-column
              class="q-my-sm"
              chart-id="report-history-my-dialogue"
              height="350"
              type="bar"
              :colors="['#23D160', '#607d8b']"
              :series="seriesDialogue"
              :categories="categoriesDialogue"
              strokestyle="smooth"
              :stroke-width="1"
              :label-rotate="-90"
            >
            </chart-column>
          </ion-col>
        </ion-row>
      </ion-card>
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
} from 'ionicons/icons';
import { AvatarPlaceHolder128 } from '@/utils/constant';
const { WeeGoTo } = useBase();
const tabStore = useTabStore();
tabStore.setCurrentTab(TabsName.REPORT);
const formulars = ref([
  {
    id: 1,
    name: 'E',
    val: 20,
    changed: -1.5,
    color: 'text-brown',
  },
  {
    id: 2,
    name: 'D-Get',
    val: 35,
    changed: +1.5,
    color: 'text-amber',
  },
  {
    id: 3,
    name: 'D-Give',
    val: 25,
    changed: -1.5,
    color: 'text-blue',
  },
  {
    id: 4,
    name: 'DE1',
    val: 2.5,
    changed: -0.5,
    color: 'text-purple',
  },
  {
    id: 5,
    name: 'DE2',
    val: 3.5,
    changed: 0.5,
    color: 'text-cyan',
  },
]);

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
const seriesDialogue = ref([
  {
    name: 'Current',
    data: [44, 55, 41, 67, 22, 43],
  },
  {
    name: 'Avg last 30 days',
    data: [13, 23, 20, 8, 13, 27],
  },
]);
const categoriesDialogue = ref([
  'Login',
  'Share it',
  'Comment it',
  'Love it',
  'Adopt it',
  'Prize it',
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
