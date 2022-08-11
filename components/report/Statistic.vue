<template>
  <ion-card class="no-shadow ion-no-margin q-my-md">
    <div class="q-text-h6 q-pa-sm">Stats</div>
    <ion-grid>
      <ion-row class="ion-justify-content-around ion-align-items-center">
        <ion-col class="ion-text-center">
          <div class="q-text-h6 q-text-weight-bold">78</div>
          <div class="q-text-cation q-pa-sm text-muted">
            <base-icon
              :icon="gift"
              icon-set="ion"
              color="text-muted"
              :size="20"
            />
            {{ $t('prizeGet') }}
          </div>
        </ion-col>
        <ion-col class="ion-text-center">
          <div class="q-text-h6 q-text-weight-bold">1.2k</div>
          <div class="q-text-cation q-pa-sm text-muted">
            <base-icon
              :icon="biPencil"
              icon-set="bootstrap-icons"
              color="text-muted"
              :size="20"
            />
            {{ $t('posts') }}
          </div>
        </ion-col>
        <ion-col class="ion-text-center">
          <div class="q-text-h6 q-text-weight-bold">7.5k</div>
          <div class="q-text-cation q-pa-sm text-muted">
            <base-icon
              :icon="chatboxOutline"
              icon-set="ion"
              color="text-muted"
              :size="20"
            />
            {{ $t('comments') }}
          </div>
        </ion-col>
      </ion-row>

      <ion-row class="ion-justify-content-around ion-align-items-center">
        <ion-col class="ion-text-center">
          <div class="text-subtitle2 q-text-weight-bold">2.9k</div>
          <div class="q-text-smaller q-pa-sm text-muted">
            <base-icon
              :icon="giftOutline"
              icon-set="ion"
              color="text-muted"
              :size="20"
            />
            {{ $t('give') }}
          </div>
        </ion-col>
        <ion-col class="ion-text-center">
          <div class="text-subtitle2 q-text-weight-bold">2.9k</div>
          <div class="q-text-smaller q-pa-sm text-muted">
            <base-icon
              :icon="eyeOutline"
              icon-set="ion"
              color="text-muted"
              :size="20"
            />
            {{ $t('read') }}
          </div>
        </ion-col>
        <ion-col class="ion-text-center">
          <div class="text-subtitle2 q-text-weight-bold">2.9k</div>
          <div class="q-text-smaller q-pa-sm text-muted">
            <base-icon
              :icon="heart"
              icon-set="ion"
              color="text-muted"
              :size="20"
            />
            {{ $t('got') }}
          </div>
        </ion-col>
        <ion-col class="ion-text-center">
          <div class="text-subtitle2 q-text-weight-bold">2.9k</div>
          <div class="q-text-smaller q-pa-sm text-muted">
            <base-icon
              :icon="heartOutline"
              icon-set="ion"
              color="text-muted"
              :size="20"
            />
            {{ $t('give') }}
          </div>
        </ion-col>
        <ion-col class="ion-text-center">
          <div class="text-subtitle2 q-text-weight-bold">2.9k</div>
          <div class="q-text-smaller q-pa-sm text-muted">
            <base-icon
              :icon="arrowRedoOutline"
              icon-set="ion"
              color="text-muted"
              :size="20"
            />
            {{ $t('share') }}
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-card>
  <ion-card class="no-shadow ion-no-margin q-my-md">
    <div class="q-text-h6 q-pa-sm">Medal Stats</div>
    <ion-grid>
      <ion-row class="ion-justify-content-around ion-align-items-center">
        <ion-col class="ion-text-center">
          <div class="q-text-h6 q-text-weight-bold">12</div>
          <base-image
            style="height: 45px; width: 45px"
            src="/icons/gold-medal.png"
            ratio="1"
          />
          <div class="q-text-cation q-pa-sm text-muted">Gold</div>
        </ion-col>
        <ion-col class="ion-text-center">
          <div class="q-text-h6 q-text-weight-bold">1</div>
          <base-image
            src="/icons/silver-medal.png"
            style="height: 45px; width: 45px"
            ratio="1"
          />
          <div class="q-text-cation q-pa-sm text-muted">Silver</div>
        </ion-col>
        <ion-col class="ion-text-center">
          <div class="q-text-h6 q-text-weight-bold">99</div>
          <base-image
            style="height: 45px; width: 45px"
            src="/icons/bronze-medal.png"
            ratio="1"
          />
          <div class="q-text-cation q-pa-sm text-muted">Bronze</div>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-card>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import { Hashtag } from '@/types/models';
import {
  gift,
  giftOutline,
  chatboxOutline,
  eyeOutline,
  heart,
  heartOutline,
  arrowRedoOutline,
} from 'ionicons/icons';
import { biPencil } from '@quasar/extras/bootstrap-icons';
defineProps({
  items: {
    type: Array as PropType<Hashtag[]>,
    default: () => [],
  },
});
</script>
