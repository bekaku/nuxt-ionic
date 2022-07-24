<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>
<script setup lang="ts">
import { App } from '@capacitor/app';
import { AppSetup } from '~/utils/app';
const ionRouter = useIonRouter();
const { getCurrentPath } = useBase();
if (process.client) {
  useBackButton(-1, () => {
    const currentPath = getCurrentPath();
    console.log('currentPath : ' + currentPath);
    if (!ionRouter.canGoBack() || currentPath == '/tabs/tabHome') {
      exitApp();
    }
  });
}

const exitApp = async () => {
  App.exitApp();
};

AppSetup();
</script>
