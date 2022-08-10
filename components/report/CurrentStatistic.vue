<template>
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
            <ion-icon slot="start" :icon="returnUpForwardOutline"></ion-icon>
            Full report</ion-button
          >
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-card>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import { Hashtag } from '@/types/models';
import {
  caretDownOutline,
  caretUpOutline,
  returnUpForwardOutline,
} from 'ionicons/icons';
defineProps({
  items: {
    type: Array as PropType<Hashtag[]>,
    default: () => [],
  },
});
const { WeeGoTo } = useBase();
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
