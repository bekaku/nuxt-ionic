<template>
  <base-layout
    page-title="Chart"
    fullscreen
    :content-padding="true"
    show-back-link
  >
    <div>
      <div class="q-text-h6">Radialbar</div>
      <ion-row>
        <ion-col size="6"
          ><chart-radial
            chart-id="g-chart-radial1"
            type="radialBar"
            height="250"
            :series="[44]"
            :categories="['Apples']"
            :show-legend="false"
          />
        </ion-col>
        <ion-col size="6">
          <chart-radial
            chart-id="g-chart-radial2"
            height="250"
            stoke-line-cap="butt"
            :series="[80]"
            :categories="['Apples']"
            :colors="['#ff9800']"
            track-backgroud="#fff3e0"
            :show-legend="false"
          />
        </ion-col>
        <ion-col size="6">
          <chart-radial
            chart-id="g-chart-radial3"
            type="radialBar"
            height="250"
            stoke-line-cap="butt"
            :series="[45]"
            :categories="['Apples']"
            :colors="['#3f51b5']"
            track-backgroud="#e8eaf6"
            :show-legend="false"
          />
        </ion-col>
        <ion-col size="6">
          <chart-radial
            chart-id="g-chart-radial4"
            height="250"
            stoke-line-cap="butt"
            semi
            :start-angle="-90"
            :end-angle="90"
            :series="[80]"
            :categories="['Apples']"
            :colors="['#ff9800']"
            track-backgroud="#fff3e0"
            :show-legend="false"
          />
        </ion-col>
      </ion-row>

      <chart-radial
        chart-id="g-chart-radial"
        height="300"
        :hollow-bg="false"
        :end-angle="270"
        :colors="['#23D160', '#FF9F43', '#FF3860']"
        :series="[44, 55, 67]"
        :categories="['Apples', 'Oranges', 'Bananas']"
        legend-position="left"
        :legend-floating="true"
      />
      <div class="q-text-h6">Sparklines</div>
      <ion-row>
        <ion-col size="6">
          <chart-sparklines
            chart-id="g-chart-spark"
            height="100"
            type="area"
            :colors="['#ffafbf']"
            :series="seriesSparklines"
            strokestyle="straight"
            :categories="categories"
          />
        </ion-col>
        <ion-col size="6">
          <chart-sparklines
            chart-id="g-chart-spark2"
            height="100"
            type="area"
            :colors="['#0a66c2']"
            :series="seriesSparklines"
            strokestyle="smooth"
          />
        </ion-col>
        <ion-col size="6">
          <chart-sparklines
            chart-id="g-chart-spark3"
            height="100"
            type="line"
            :colors="['#b0c7d4']"
            :series="seriesSparklines"
            strokestyle="smooth"
          />
        </ion-col>
        <ion-col size="6">
          <chart-sparklines
            chart-id="g-chart-spark4"
            height="100"
            type="bar"
            :colors="['#fdbe9f']"
            :series="seriesSparklines"
          />
        </ion-col>
      </ion-row>

      <div class="q-text-h6">Donut & Pie</div>
      <chart-pie
        chart-id="statistic-donut"
        type="donut"
        :series="series"
        :labels="['Feb', 'Mar', 'Apr', 'May']"
        height="250"
        :colors="['#95A5A6', '#23D160', '#FF9F43', '#FF3860']"
      />
      <chart-pie
        chart-id="statistic-ewon-2"
        type="pie"
        :series="series"
        :labels="['Feb', 'Mar', 'Apr', 'May']"
        height="250"
        :colors="['#95A5A6', '#23D160', '#FF9F43', '#FF3860']"
      />
      <ion-button fill="clear" @click="series = [1, 11, 8, 10]"
        >Test change</ion-button
      >

      <div class="q-text-h6">Column</div>
      <chart-column
        class="q-my-sm"
        chart-id="g-chart-col"
        type="bar"
        palette="palette3"
        :yaxis-show="false"
        :series="seriesColoumn"
        :categories="categories"
      />
      <chart-column
        class="q-my-sm"
        chart-id="g-chart-col-horizontal"
        type="bar"
        horizontal
        height="550"
        palette="palette5"
        :yaxis-show="true"
        :series="seriesColoumn"
        :categories="categories"
      />
      <div class="q-text-h6">Line</div>
      <chart-column
        class="q-my-sm"
        chart-id="g-chart-line"
        type="line"
        :colors="['#23D160', '#FF9F43', '#FF3860']"
        :series="seriesColoumn"
        :categories="categories"
      >
      </chart-column>

      <div class="q-text-h6">Area</div>
      <chart-area
        chart-id="g-chart-area"
        :colors="['#23D160', '#FF9F43', '#FF3860']"
        strokestyle="smooth"
        :series="seriesColoumn"
        :categories="categories"
      />

      <div class="q-text-h6">Radar</div>
      <chart-radar
        class="q-my-sm"
        chart-id="g-chart-radar"
        type="radar"
        height="350"
        :series="seriesColoumn"
        :colors="['#23D160', '#FF9F43', '#FF3860']"
        :categories="categories"
      />
    </div>
  </base-layout>
</template>
<script setup lang="ts">
const series = ref<number[]>([10, 8, 25, 1]);
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
const seriesColoumn = ref([
  {
    name: 'Net Profit',
    data: [44, 55, 57, 20, 61, 58, 63, 60, 66],
  },
  {
    name: 'Revenue',
    data: [76, 85, 101, 98, 10, 105, 91, 114, 94],
  },
  {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
  },
]);
const seriesSparklines = ref([
  {
    name: 'Net Profit',
    data: [
      54, 27, 65, 51, 46, 27, 39, 56, 19, 62, 45, 61, 43, 53, 39, 31, 24, 93,
      35, 47,
    ],
  },
]);
</script>
