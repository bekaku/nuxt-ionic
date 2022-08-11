<template>
  <base-layout
    :page-title="'Team Report'"
    fullscreen
    :content-padding="false"
    show-back-link
  >
    <div class="q-text-h6 q-pa-sm">Software development</div>

    <report-statistic />
    <report-current-statistic type="team-member" />

    <ion-card class="no-shadow ion-no-margin q-my-md">
      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <div class="q-text-body2 text-muted">
              With self in the last 30 days
            </div>
          </ion-col>
          <ion-col
            class="ion-text-center"
            v-for="(item, index) in self30Days"
            :key="`report-team-report-self-thirty-days-col${index}`"
          >
            <chart-radial
              :chart-id="`report-team-report-self-thirty-days-chart-${index}`"
              height="50"
              :series="[item.percentage]"
              :categories="[item.name]"
              :colors="[item.color]"
              :track-backgroud="item.trackColor"
              :hollow-bg="false"
              hollow-size="45"
              stoke-line-cap="butt"
              semi
              fill-type="fill"
              :start-angle="-90"
              :end-angle="90"
              data-labels-size="11"
              :show-legend="false"
              :show-data-labels="false"
              :show-data-labels-name="true"
              :show-data-labels-value="false"
            />
            <div class="q-text-caption" :class="item.textColor">
              {{ item.name }}
            </div>
            <div class="q-text-h6">{{ item.val }}</div>
          </ion-col>
        </ion-row>
        <base-separator />
        <ion-row>
          <ion-col size="12">
            <div class="q-text-body2 text-muted">With peers avarage</div>
          </ion-col>
          <ion-col
            class="ion-text-center"
            v-for="(item, index) in self30Days"
            :key="`report-team-report-with-peer-col${index}`"
          >
            <chart-radial
              :chart-id="`report-team-report-with-peer-chart-${index}`"
              height="50"
              fill-type="fill"
              :series="[item.percentage]"
              :categories="[item.name]"
              :colors="[item.color]"
              :track-backgroud="item.trackColor"
              :hollow-bg="false"
              hollow-size="45"
              stoke-line-cap="butt"
              semi
              :start-angle="-90"
              :end-angle="90"
              data-labels-size="11"
              :show-legend="false"
              :show-data-labels="false"
              :show-data-labels-name="true"
              :show-data-labels-value="false"
            />
            <div class="q-text-caption" :class="item.textColor">
              {{ item.name }}
            </div>
            <div class="q-text-h6">{{ item.val }}</div>
          </ion-col>
        </ion-row>
        <base-separator />
        <ion-row>
          <ion-col size="12">
            <div class="q-text-body2 text-muted">With team avarage</div>
          </ion-col>
          <ion-col
            class="ion-text-center"
            v-for="(item, index) in self30Days"
            :key="`report-team-report-with-team-col${index}`"
          >
            <chart-radial
              :chart-id="`report-team-report-with-team-chart-${index}`"
              height="50"
              fill-type="fill"
              :series="[item.percentage]"
              :categories="[item.name]"
              :colors="[item.color]"
              :track-backgroud="item.trackColor"
              :hollow-bg="false"
              hollow-size="45"
              stoke-line-cap="butt"
              semi
              :start-angle="-90"
              :end-angle="90"
              data-labels-size="11"
              :show-legend="false"
              :show-data-labels="false"
              :show-data-labels-name="true"
              :show-data-labels-value="false"
            />
            <div class="q-text-caption" :class="item.textColor">
              {{ item.name }}
            </div>
            <div class="q-text-h6">{{ item.val }}</div>
          </ion-col>
        </ion-row>
        <base-separator />
        <ion-row>
          <ion-col size="12">
            <div class="q-text-body2 text-muted">With campany avarage</div>
          </ion-col>
          <ion-col
            class="ion-text-center"
            v-for="(item, index) in self30Days"
            :key="`report-team-report-with-campany-col${index}`"
          >
            <chart-radial
              :chart-id="`report-team-report-with-campany-chart-${index}`"
              height="50"
              fill-type="fill"
              :series="[item.percentage]"
              :categories="[item.name]"
              :colors="[item.color]"
              :track-backgroud="item.trackColor"
              :hollow-bg="false"
              hollow-size="45"
              stoke-line-cap="butt"
              semi
              :start-angle="-90"
              :end-angle="90"
              data-labels-size="11"
              :show-legend="false"
              :show-data-labels="false"
              :show-data-labels-name="true"
              :show-data-labels-value="false"
            />
            <div class="q-text-caption" :class="item.textColor">
              {{ item.name }}
            </div>
            <div class="q-text-h6">{{ item.val }}</div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card>
    <ion-card class="no-shadow ion-no-margin q-my-md">
      <ion-row>
        <ion-col size="12" class="ion-no-padding ion-no-margin">
          <div class="q-text-h6 q-pa-sm">Your team dialogue</div>

          <chart-column
            class="q-my-sm"
            chart-id="report-team-report-dialogue"
            height="350"
            type="bar"
            :colors="['#ff8a06', '#607d8b']"
            :series="seriesDialogue"
            :categories="categoriesDialogue"
            strokestyle="smooth"
            :stroke-width="1"
            :label-rotate="-45"
          >
          </chart-column>
        </ion-col>
      </ion-row>
    </ion-card>

    <ion-card class="no-shadow ion-no-margin q-my-md">
      <div class="q-text-h6 q-pa-sm">Team medal chart</div>
      <report-medal-chart
        height="300"
        chart-id="report-team-report-medal-team-chart"
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
    <ion-card class="no-shadow ion-no-margin q-my-md">
      <div class="q-text-h6 q-pa-sm">Special data</div>
      <ion-list>
        <ion-item button :detail="true">
          <div slot="start">
            <base-icon :icon="biPencil" :size="20" />
          </div>
          <ion-label>
            <p>Most popular post</p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
            <p>9.9k Love, 99 Gifts, 1.1 Comments, 55 Shares</p>
          </ion-label>
        </ion-item>
        <ion-item button :detail="true">
          <div slot="start">
            <base-icon :icon="biMagic" :size="20" />
          </div>
          <ion-label>
            <p>Most popular theme</p>
            <h2>Green office</h2>
            <p>9.9k posts</p>
          </ion-label>
        </ion-item>
        <ion-item button :detail="true">
          <div slot="start">
            <base-icon :icon="biHash" :size="20" />
          </div>
          <ion-label>
            <p>Most popular hashtag</p>
            <h2>Green office</h2>
            <p>9.9k posts</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-card>
    <ion-card
      class="no-shadow ion-no-margin q-my-md text-white"
      color="success"
    >
      <div class="q-text-h6 q-pa-sm">
        <base-icon
          :icon="podium"
          icon-set="ion"
          color="text-white"
          :size="20"
          class="q-mr-xs"
        />Top performance
      </div>
      <ion-list lines="none">
        <ion-item
          button
          v-for="(item, index) in self30Days"
          :key="index"
          color="success"
        >
          <ion-avatar slot="start">
            <img
              :src="`https://i.pravatar.cc/128?img=${index + 1}`"
              alt="avatar"
            />
          </ion-avatar>
          <ion-label class="text-white">
            <h2 class="q-text-weight-bold">{{ item.name }}</h2>
            <h3>Chanavee Bekaku</h3>
            <p>Software Engineer</p>
          </ion-label>
          <div slot="end">
            <base-icon :icon="biAwardFill" color="text-yellow" :size="20" />
          </div>
        </ion-item>
      </ion-list>
    </ion-card>

    <ion-card
      class="no-shadow ion-no-margin q-my-md text-amber-10"
      color="warning"
    >
      <div class="q-text-h6 q-pa-sm">
        <base-icon
          :icon="eyeOutline"
          icon-set="ion"
          color="text-amber-10"
          :size="20"
          class="q-mr-xs"
        />Top watcher
      </div>
      <ion-list lines="none">
        <ion-item
          button
          v-for="(item, index) in self30Days"
          :key="index"
          color="warning"
        >
          <ion-avatar slot="start">
            <img
              :src="`https://i.pravatar.cc/128?img=${index + 7 + 1}`"
              alt="avatar"
            />
          </ion-avatar>
          <ion-label>
            <h2 class="q-text-weight-bold text-amber-10">{{ item.name }}</h2>
            <h3 class="text-amber-10">Chanavee Bekaku</h3>
            <p class="text-amber-8">Software Engineer</p>
          </ion-label>
          <div slot="end">
            <base-icon :icon="biEmojiFrown" color="text-amber-10" :size="20" />
          </div>
        </ion-item>
      </ion-list>
    </ion-card>
  </base-layout>
</template>
<script setup lang="ts">
import { podium, eyeOutline } from 'ionicons/icons';
import {
  biPencil,
  biHash,
  biMagic,
  biAwardFill,
  biEmojiFrown,
} from '@quasar/extras/bootstrap-icons';

const self30Days = ref([
  {
    id: 1,
    name: 'E',
    val: 20,
    percentage: 20,
    textColor: 'text-danger',
    color: '#ff3860',
    trackColor: '#ffebee',
  },
  {
    id: 2,
    name: 'D-Get',
    val: 35,
    percentage: 60,
    textColor: 'text-amber',
    color: '#ff8a06',
    trackColor: '#fff8e1',
  },
  {
    id: 3,
    name: 'D-Give',
    val: 25,
    percentage: 15,
    textColor: 'text-danger',
    color: '#ff3860',
    trackColor: '#ffebee',
  },
  {
    id: 4,
    name: 'DE1',
    val: 2.5,
    percentage: 80,
    textColor: 'text-green',
    color: '#2dd36f',
    trackColor: '#e8f5e9',
  },
  {
    id: 5,
    name: 'DE2',
    val: 3.5,
    percentage: 28,
    textColor: 'text-danger',
    color: '#ff3860',
    trackColor: '#ffebee',
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
</script>
