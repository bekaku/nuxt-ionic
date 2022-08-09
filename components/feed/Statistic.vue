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
            <ion-chip class="bg-red-1">
              <ion-avatar>
                <ion-icon :icon="caretDownOutline" class="text-red"></ion-icon>
              </ion-avatar>
              <ion-label
                >DE1 <span class="text-red">3.5</span
                ><span class="text-red text-caption-smaller q-ml-xs"
                  >(-0.5)</span
                ></ion-label
              >
            </ion-chip>

            <chart-radial
              chart-id="g-chart-radial-e-own"
              height="180"
              semi
              :start-angle="-90"
              :end-angle="90"
              :series="[45]"
              :categories="['E-Own']"
              :colors="['#ff9800']"
              :show-legend="false"
              :show-data-labels="false"
            />

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
            <ion-chip class="bg-green-1">
              <ion-avatar>
                <ion-icon :icon="caretUpOutline" class="text-green"></ion-icon>
              </ion-avatar>
              <ion-label
                >DE1 <span class="text-green">3.1</span
                ><span class="text-green text-caption-smaller q-ml-xs"
                  >(+0.5)</span
                ></ion-label
              >
            </ion-chip>
            <chart-radial
              chart-id="g-chart-radial-de1"
              height="180"
              semi
              :start-angle="-90"
              :end-angle="90"
              :series="[23]"
              :categories="['DE1']"
              :colors="['#f44336']"
              track-backgroud="#ffebee"
              :show-legend="false"
              :show-data-labels="false"
            />
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
            <ion-chip>
              <ion-avatar>
                <ion-icon :icon="removeOutline"></ion-icon>
              </ion-avatar>
              <ion-label
                >DE1 <span>3.5</span
                ><span class="text-caption-smaller q-ml-xs"
                  >(-0.5)</span
                ></ion-label
              >
            </ion-chip>
            <chart-radial
              chart-id="g-chart-radial-de2"
              height="180"
              semi
              :start-angle="-90"
              :end-angle="90"
              :series="[50]"
              :categories="['DE1']"
              :colors="['#2196f3']"
              track-backgroud="#e3f2fd"
              :show-legend="false"
              :show-data-labels="false"
            />
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
  slidesPerView: 1.5,
  spaceBetween: -10,
  freeMode: true,
  centeredSlides: false,
};
</script>
