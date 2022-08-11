<template>
  <ion-slides :pager="false" :scrollbar="false" :options="slideOpts">
    <ion-slide>
      <ion-card class="no-shadow">
        <ion-item>
          <ion-label>Individual</ion-label>
          <base-icon :icon="biPerson" slot="end" :size="20" />
        </ion-item>

        <ion-row>
          <ion-col size="12" class="ion-no-padding ion-no-margin">
            <chart-radial
              :chart-id="'feed-individual-chart-watcher'"
              height="120"
              :series="[45]"
              :categories="['E-own']"
              :colors="['#ff8a06']"
              :track-backgroud="'#fff8e1'"
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
            <div class="q-text-caption text-amber">E-Own</div>
            <div class="q-text-h6 text-amber">1.1</div>

            <ion-button fill="outline" color="danger" size="small">
              <base-icon
                :icon="biDot"
                slot="start"
                color="text-red"
                :size="36"
              />
              3 Watcher
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-card>
    </ion-slide>
    <ion-slide>
      <ion-card class="no-shadow">
        <ion-item>
          <ion-label>Team</ion-label>
          <base-icon
            :icon="biDiagram3"
            slot="end"
            :size="20"
            additional-replce="@@fill-rule:evenodd;"
          />
        </ion-item>

        <ion-row>
          <ion-col size="12" class="ion-no-padding ion-no-margin">
            <chart-radial
              :chart-id="'feed-team-chart-watcher'"
              height="120"
              :series="[23]"
              :categories="['DE1']"
              :colors="['#ff3860']"
              :track-backgroud="'#ffebee'"
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
            <div class="q-text-caption text-danger">DE1</div>
            <div class="q-text-h6 text-danger">1.0</div>
            <ion-button fill="outline" color="danger" size="small">
              <base-icon
                :icon="biDot"
                slot="start"
                color="text-red"
                :size="36"
              />
              3 Watcher
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-card>
    </ion-slide>
    <ion-slide>
      <ion-card class="no-shadow">
        <ion-item>
          <ion-label>Company</ion-label>
          <base-icon
            :icon="businessOutline"
            icon-set="ion"
            slot="end"
            :size="20"
          />
        </ion-item>

        <ion-row>
          <ion-col size="12" class="ion-no-padding ion-no-margin">
            <chart-radial
              :chart-id="'feed-company-chart-watcher'"
              height="120"
              :series="[23]"
              :categories="['D-Get']"
              :colors="['#ff8a06']"
              :track-backgroud="'#fff8e1'"
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
            <div class="q-text-caption text-danger">D-Get</div>
            <div class="q-text-h6 text-danger">99</div>
            <ion-button fill="outline" color="danger" size="small">
              <base-icon
                :icon="biDot"
                slot="start"
                color="text-red"
                :size="36"
              />
              3 Watcher
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-card>
    </ion-slide>
  </ion-slides>
</template>
<script setup lang="ts">
import { biDot, biPerson, biDiagram3 } from '@quasar/extras/bootstrap-icons';
import {
  businessOutline,
  caretDownOutline,
  caretUpOutline,
  removeOutline,
} from 'ionicons/icons';
const slideOpts = {
  initialSlide: 0,
  speed: 400,
  slidesPerView: 2,
  spaceBetween: -10,
  freeMode: true,
  centeredSlides: false,
};
</script>
