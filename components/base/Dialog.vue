<template>
  <ion-modal :is-open="show" @ion-modal-did-dismiss="onClose">
    <ion-header mode="ios" :class="{ 'ion-no-border': headerNoBorder || dark }">
      <slot name="toolbar">
        <ion-toolbar :class="{ dark: dark }">
          <slot name="start">
            <slot name="start">
              <slot name="avatar">
                <base-icon
                  v-if="icon"
                  slot="start"
                  :ionic-icon="ionicIcon"
                  :icon="icon"
                  :color="iconColor"
                  :size="24"
                />
                <slot name="actions-start"> </slot>
              </slot>
            </slot>
          </slot>
          <slot name="title">
            <ion-title v-if="title">{{ title }}</ion-title>
          </slot>
          <div slot="end">
            <slot name="end">
              <ion-buttons slot="end">
                <ion-button @click="onClose"
                  ><ion-icon slot="icon-only" :icon="closeOutline"
                /></ion-button>
              </ion-buttons>
            </slot>
          </div>
        </ion-toolbar>
      </slot>
    </ion-header>
    <ion-content :class="{ 'ion-padding': contentPadding, dark: dark }">
      <slot />
    </ion-content>
  </ion-modal>
</template>
<script setup lang="ts">
import { closeOutline } from 'ionicons/icons';
const props = defineProps({
  modelValue: Boolean,
  dialog: {
    type: Boolean,
    default: false,
  },
  headerNoBorder: {
    type: Boolean,
    default: false,
  },
  persistent: {
    type: Boolean,
    default: true,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  maximized: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  contentPadding: {
    type: Boolean,
    default: true,
  },
  icon: {
    type: String,
    default: '',
  },
  iconColor: {
    type: String,
    default: 'text-primary',
  },
  ionicIcon: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: '',
  },
  dialogStyle: {
    type: String,
    default: 'max-width: 480px',
  },
  dialogClass: {
    type: String,
    default: '',
  },
  transitionShow: {
    type: String,
    default: 'slide-up',
  },
  transitionHide: {
    type: String,
    default: 'slide-down',
  },
});
const emit = defineEmits(['on-close', 'update:modelValue']);
const show = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});

const onClose = () => {
  emit('on-close');
  show.value = false;
};
</script>
<style scoped>
ion-content.dark {
  --background: var(--v-main-bg-color-theme-dark);
  --color: var(--v-main-text-body-theme-dark);
}
ion-toolbar.dark {
  --background: var(--v-second-bg-color-theme-dark);
  --color: var(--v-main-text-body-theme-dark);
}
</style>
