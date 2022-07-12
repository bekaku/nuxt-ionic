<template>
  <base-layout
    page-title="404"
    fullscreen
    :scroll-y="false"
    :show-back-link="false"
  >
    <ion-grid>
      <ion-row class="ion-justify-content-center">
        <ion-col>
          <div class="ion-text-center on-text-wrap">
            <h1 class="ion-padding-vertical wee-fw-600">Error 404</h1>
            <img
              class="ion-padding-vertical"
              src="~assets/icons/sad-man.png"
              style="width: 50%"
            />
            <ion-text class="wee-text-muted">
              <p>
                {{ $t('error.404') }}
              </p>
            </ion-text>

            <ion-button
              :color="langugeAndThemeStore.theme == 'light' ? 'light' : 'dark'"
              @click="onBack"
            >
              <ion-icon slot="start" :icon="arrowBackOutline" />
              {{ $t('base.back') }}
            </ion-button>
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>
<script setup>
import { arrowBackOutline } from 'ionicons/icons';
import { useLangugeAndThemeStore } from '@/stores/langugeAndThemeStore';
const langugeAndThemeStore = useLangugeAndThemeStore();
const { onBack } = useBase();
const props = defineProps({
  error: Object,
});
console.error(props.error);
</script>
