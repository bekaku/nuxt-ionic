<template>
  <ion-button :router-link="to" :color="textColor" class="button-badge">
    <ion-icon slot="icon-only" :icon="icon"></ion-icon>
    <ion-badge :color="color">{{ no }}</ion-badge>
  </ion-button>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
defineProps({
  no: {
    type: String as PropType<string | number>,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  textColor: {
    type: String,
    default: 'primary',
  },
  color: {
    type: String,
    default: 'danger',
  },
  to: {
    type: String,
    default: '#',
  },
});
</script>
<style scoped>
ion-badge {
  position: absolute;
  font-size: 11px;
  right: -1px;
  top: 1px;
  --padding-bottom: 3px;
  --padding-end: 3px;
  --padding-start: 3px;
  --padding-top: 3px;
}

ion-button {
  margin: 5px;
  width: 40px;
  height: 40px;
  position: relative;
}

/* Setting Overflow Visible */
ion-button.button-badge::part(native) {
  overflow: visible;
}
</style>
