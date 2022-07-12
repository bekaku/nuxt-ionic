<template>
  <ion-page>
    <ion-header>
      <slot name="toolbar">
        <ion-toolbar :color="toolbarColor">
          <div slot="start">
            <slot name="avatar">
              <ion-avatar
                v-if="avatar"
                :class="isAppPlatfrom('android') ? 'ion-margin-start' : ''"
                :style="{
                  height: avatarWidth + 'px',
                  width: avatarWidth + 'px',
                }"
              >
                <ion-img :src="avatar" />
              </ion-avatar>
            </slot>
            <slot name="actions-start">
              <ion-back-button
                v-if="showBackLink"
                :text="backText"
                :default-href="pageDefaultBackLink"
              ></ion-back-button>
            </slot>
          </div>
          <ion-title
            :size="titleSize"
            :style="{ fontWeight: pageTitleBold ? 'bold' : 'normal' }"
            >{{ pageTitle }}</ion-title
          >
          <ion-buttons slot="end">
            <slot name="actions-end"></slot>
          </ion-buttons>
        </ion-toolbar>
      </slot>
    </ion-header>
    <ion-content
      :fullscreen="fullscreen"
      :scroll-y="scrollY"
      :class="contentPadding ? 'ion-padding' : ''"
      class="wee-container-limit"
    >
      <template v-if="collapse == 'condense'">
        <ion-header collapse="condense">
          <ion-toolbar :color="toolbarColor">
            <ion-title size="large">{{ pageTitle }}</ion-title>
          </ion-toolbar>
        </ion-header>
      </template>

      <slot />
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
defineProps({
  pageTitle: {
    type: String,
    default: '',
  },
  pageTitleBold: {
    type: Boolean,
    default: false,
  },
  backText: {
    type: String,
    default: '',
  },
  toolbarColor: {
    type: String,
    default: undefined,
  },
  pageDefaultBackLink: {
    type: String,
    default: '',
  },
  avatar: {
    type: String,
    default: '',
  },
  avatarWidth: {
    type: String,
    default: '35',
  },
  collapse: {
    type: String,
    default: undefined, //condense
  },
  contentPadding: {
    type: Boolean,
    default: true,
  },
  scrollY: {
    type: Boolean,
    default: true,
  },
  fullscreen: {
    type: Boolean,
    default: true,
  },
  showBackLink: {
    type: Boolean,
    default: true,
  },
  titleSize: {
    type: String as PropType<'large' | 'small' | undefined>,
    default: undefined, //"large" | "small" | undefined
  },
});
const { isAppPlatfrom } = useDevice();
</script>
