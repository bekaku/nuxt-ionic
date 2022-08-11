<template>
  <base-layout
    :page-title="'History'"
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
      <template v-if="formularId">
        <div class="q-text-h6 q-pa-sm">DE1</div>
        <chart-area
          :chart-id="`report-history-type-${formularId}`"
          :colors="['#2196f3']"
          strokestyle="smooth"
          :series="series"
          :categories="categories"
          :show-legend="false"
          :xaxis-tickamount="5"
          :annotations-yaxis="chartAnotationY"
          :stroke-width="2"
        />
      </template>

      <ion-grid>
        <ion-row class="ion-justify-content-around ion-align-items-center">
          <ion-col class="ion-text-center">
            <div class="text-green q-text-cation">Max</div>
            <div class="q-text-h5 q-text-weight-bold">78</div>
            <div class="q-text-cation q-pa-sm text-muted">
              <base-icon
                :icon="caretUpOutline"
                icon-set="ion"
                color="text-green"
                :size="20"
              />
              April
            </div>
          </ion-col>
          <ion-col class="ion-text-center">
            <div class="text-muted q-text-cation">Avarage</div>
            <div class="q-text-h5 q-text-weight-bold">1.2k</div>
            <div class="q-text-cation q-pa-sm text-muted">
              <base-icon
                :icon="podiumOutline"
                icon-set="ion"
                color="text-muted"
                :size="20"
              />
            </div>
          </ion-col>
          <ion-col class="ion-text-center">
            <div class="text-red q-text-cation">Min</div>
            <div class="q-text-h5 q-text-weight-bold">7.5k</div>
            <div class="q-text-cation q-pa-sm text-muted">
              <base-icon
                :icon="caretDownOutline"
                icon-set="ion"
                color="text-red"
                :size="20"
              />
              October
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-card>
  </base-layout>
</template>
<script setup lang="ts">
import {
  ellipsisVertical,
  caretDownOutline,
  caretUpOutline,
  podiumOutline,
} from 'ionicons/icons';
const { getParamNumber } = useBase();
const formularId = ref<number>(getParamNumber('fomular'));
const year = ref<string>('2022');
const series = ref([
  // {
  //   name: 'Net Profit',
  //   type: 'line',
  //   data: [54, 27, 65, 51, 46, 27, 39, 56, 19, 62],
  // },
  {
    name: 'Social Media',
    // type: 'area',
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
const chartAnotationY = ref([
  {
    y: 65,
    borderColor: '#ff3860',
    label: {
      borderColor: '#ff3860',
      style: {
        color: '#fff',
        background: '#ff3860',
      },
      text: 'Max :65',
    },
  },
  {
    y: 35,
    borderColor: '#00E396',
    label: {
      borderColor: '#00E396',
      style: {
        color: '#fff',
        background: '#00E396',
      },
      text: 'Avg :25',
    },
  },
]);
</script>
