<template>
  <ion-slides :pager="false" :scrollbar="false" :options="slideOpts">
    <ion-slide>
      <ion-card class="no-shadow">
        <ion-item>
          <ion-label>Individual</ion-label>
          <base-icon :icon="biPerson" slot="end" :size="20" />
        </ion-item>

        <ion-row>
          <ion-col size="12">
            <div class="q-text-h6">E-Own</div>
          </ion-col>
          <ion-col size="12">
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
          <ion-col size="12">
            <div class="q-text-h6">DE1</div>
          </ion-col>
          <ion-col size="12">
            <ion-button fill="outline" color="danger" size="small">
              <base-icon
                :icon="biDot"
                slot="start"
                color="text-red"
                :size="36"
              />
              5 Watcher
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
          <ion-col size="12">
            <div class="q-text-h6">DE2</div>
          </ion-col>
          <ion-col size="12">
            <ion-button fill="outline" color="danger" size="small">
              <base-icon
                :icon="biDot"
                slot="start"
                color="text-red"
                :size="36"
              />
              5 Watcher
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-card>
    </ion-slide>
  </ion-slides>
</template>
<script setup lang="ts">
import { biDot, biPerson, biDiagram3 } from '@quasar/extras/bootstrap-icons';
import { businessOutline } from 'ionicons/icons';
const slideOpts = {
  initialSlide: 0,
  speed: 400,
  slidesPerView: 2,
  spaceBetween: 0,
  freeMode: true,
  centeredSlides: false,
};
</script>
