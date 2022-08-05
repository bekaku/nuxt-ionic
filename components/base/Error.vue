<template>
  <ion-grid>
    <ion-row class="ion-justify-content-center">
      <ion-col>
        <div class="ion-text-center on-text-wrap">
          <h1 v-if="error" class="ion-padding-vertical q-text-weight-bold">
            {{ $t('error.error') }}
          </h1>
          <template v-if="showImage">
            <img
              v-if="error"
              class="ion-padding-vertical"
              :src="require('@/assets/robot-sad.png')"
              style="width: 50%"
            />
            <img
              v-else
              class="ion-padding-vertical"
              :src="require('@/assets/robot.png')"
              style="width: 50%"
            />
          </template>
          <template v-else>
            <ion-icon
              :color="error ? 'danger' : 'medium'"
              :icon="error ? alertCircle : fileTray"
            ></ion-icon>
          </template>

          <p class="q-text-muted">
            {{ text ? text : $t('error.dataNotfound') }}
          </p>
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import { fileTray, alertCircle } from 'ionicons/icons';
defineProps({
  error: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: '',
  },
  showImage: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
});
</script>
<style scoped>
ion-icon {
  font-size: 128px;
}
</style>
