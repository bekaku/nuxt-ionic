<template>
  <base-layout
    :page-title="$t('base.language')"
    fullscreen
    :content-padding="false"
    show-back-link
  >
    <ion-list>
      <ion-item lines="none">
        <ion-label>
          <h2 class="text-muted">{{ $t('base.chooseLanguge') }}</h2>
        </ion-label>
      </ion-item>
      <ion-item
        lines="none"
        v-for="lang in availableLocales"
        :key="lang.iso"
        @click="langugeAndThemeStore.setLocale(lang.iso)"
      >
        <ion-label>{{ lang.name }}</ion-label>
        <ion-icon
          v-if="lang.iso == langugeAndThemeStore.locale"
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
import { availableLocales } from '@/utils/lang';
import { checkmarkCircle } from 'ionicons/icons';
const langugeAndThemeStore = useLangugeAndThemeStore();
</script>
