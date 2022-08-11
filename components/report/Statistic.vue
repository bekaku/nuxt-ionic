<template>
  <ion-card class="no-shadow ion-no-margin q-my-md">
    <div class="q-text-h6 q-pa-sm">Total</div>
    <ion-grid>
      <ion-row class="ion-justify-content-around ion-align-items-center">
        <ion-col class="ion-text-center">
          <div class="q-text-h6 q-text-weight-bold">78</div>
          <div class="q-text-cation q-pa-sm text-muted">
            <base-icon
              :icon="giftOutline"
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
    </ion-grid>
  </ion-card>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import { Hashtag } from '@/types/models';
import { giftOutline, chatboxOutline } from 'ionicons/icons';
import { biPencil } from '@quasar/extras/bootstrap-icons';
defineProps({
  items: {
    type: Array as PropType<Hashtag[]>,
    default: () => [],
  },
});
</script>
