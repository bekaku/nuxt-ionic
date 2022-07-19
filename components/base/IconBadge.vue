<template>
  <ion-button :color="textColor" class="button-badge">
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
});
</script>
<style scoped>
ion-badge {
  position: absolute;
  font-size: 8pt;
  right: -10px;
  top: 1px;
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
