<template>
  <base-layout
    :page-title="$t('base.appearance')"
    fullscreen
    :content-padding="false"
    show-back-link
  >
    <ion-list>
      <ion-item lines="none">
        <ion-label>
          <h2 class="text-muted">{{ $t('base.mode') }}</h2>
        </ion-label>
      </ion-item>
      <ion-item
        lines="none"
        v-for="theme in availableThemes"
        :key="theme.key"
        @click="langugeAndThemeStore.setThemeSetting(theme.key)"
      >
        <ion-icon :icon="theme.icon" slot="start"></ion-icon>
        <ion-label>{{ $t(theme.text) }}</ion-label>
        <ion-icon
          v-if="theme.key == langugeAndThemeStore.themeSetting"
          slot="end"
          color="primary"
          :icon="checkmarkCircle"
        ></ion-icon>
      </ion-item>
    </ion-list>
  </base-layout>
</template>
<script setup lang="ts">
import { useLangugeAndThemeStore } from '@/stores/langugeAndThemeStore';
import { availableThemes } from '@/utils/theme';
import { checkmarkCircle } from 'ionicons/icons';
const langugeAndThemeStore = useLangugeAndThemeStore();
</script>
