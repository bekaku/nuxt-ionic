<template>
  <ion-card class="no-shadow ion-no-margin q-my-md">
    <div class="q-text-h6 q-pa-sm">Individual Report</div>
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
          :key="`report-individual-self-thirty-days-col${index}`"
        >
          <chart-radial
            :chart-id="`report-individual-self-thirty-days-chart-${index}`"
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
          :key="`report-individual-with-peer-col${index}`"
        >
          <chart-radial
            :chart-id="`report-individual-with-peer-chart-${index}`"
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
          :key="`report-individual-with-team-col${index}`"
        >
          <chart-radial
            :chart-id="`report-individual-with-team-chart-${index}`"
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
          :key="`report-individual-with-campany-col${index}`"
        >
          <chart-radial
            :chart-id="`report-individual-with-campany-chart-${index}`"
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

      <ion-row>
        <ion-col>
          <ion-list>
            <ion-item :detail="false" lines="inset">
              <ion-label>
                <p>Other reports</p>
              </ion-label>
            </ion-item>
            <ion-item
              button
              router-link="/report/team-report"
              :detail="true"
              lines="none"
            >
              <div slot="start">
                <base-icon :icon="peopleCircleOutline" icon-set="ion" />
              </div>
              <ion-label> Team member report </ion-label>
            </ion-item>
            <ion-item
              button
              router-link="/settings/appearance"
              :detail="true"
              lines="none"
            >
              <div slot="start">
                <base-icon
                  :icon="biDiagram3"
                  additional-replce="@@fill-rule:evenodd;"
                  :size="20"
                />
              </div>

              <ion-label> Team leader report </ion-label>
            </ion-item>
            <ion-item
              button
              router-link="/settings/appearance"
              :detail="true"
              lines="none"
            >
              <base-icon
                :icon="businessOutline"
                icon-set="ion"
                :size="20"
                slot="start"
              />
              <ion-label> Company report </ion-label>
            </ion-item>
          </ion-list>
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
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import { Hashtag } from '@/types/models';
import { businessOutline, peopleCircleOutline } from 'ionicons/icons';
import { biDiagram3, biDiagram2 } from '@quasar/extras/bootstrap-icons';
defineProps({
  items: {
    type: Array as PropType<Hashtag[]>,
    default: () => [],
  },
});

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
</script>
