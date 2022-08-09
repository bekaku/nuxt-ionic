<template>
  <base-layout
    :page-title="'Full reports'"
    fullscreen
    :content-padding="false"
    show-back-link
  >
    <template v-slot:actions-end>
      <ion-button>
        <ion-icon slot="icon-only" :icon="ellipsisVertical"></ion-icon>
      </ion-button>
    </template>

    <ion-card class="no-shadow ion-no-margin q-my-md">
      <div class="q-pa-sm">
        <div class="q-text-h6 q-pa-sm">Year</div>
        <ion-segment scrollable :value="year">
          <ion-segment-button value="2022">
            <ion-label>2022</ion-label>
          </ion-segment-button>
          <ion-segment-button value="2021">
            <ion-label>2021</ion-label>
          </ion-segment-button>
        </ion-segment>
      </div>

      <chart-column
        class="q-my-sm"
        chart-id="report-history-stats"
        height="350"
        type="line"
        :colors="['#23D160', '#795548', '#FF3860', '#3f51b5', '#FF9F43']"
        :series="series"
        :categories="categories"
        strokestyle="smooth"
        :xaxis-tickamount="5"
        :yaxis-show="false"
        :stroke-width="2"
      >
      </chart-column>
    </ion-card>
  </base-layout>
</template>
<script setup lang="ts">
import { ellipsisVertical } from 'ionicons/icons';
const year = ref<string>('2022');
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
]);
const series = ref([
  {
    name: 'E',
    data: [44, 55, 57, 20, 61, 58, 63, 60, 66],
  },
  {
    name: 'D-Get',
    data: [76, 85, 101, 98, 45, 105, 91, 114, 94],
  },
  {
    name: 'D-Give',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
  },
  {
    name: 'DE1',
    data: [2.5, 3, 1.5, 3.8, 4, 2.0, 3.6, 1.1, 1.3],
  },
  {
    name: 'DE2',
    data: [2.9, 1.0, 1.9, 4.8, 6, 1.0, 6.6, 2.1, 3.3],
  },
]);
</script>
