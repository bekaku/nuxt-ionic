<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>
<script setup lang="ts">
import { App } from '@capacitor/app';
import { AppSetup } from '~/utils/app';
const ionRouter = useIonRouter();
const { getCurrentPath, WeeConfirm } = useBase();
const { t } = useLang();
// Hardware Back Button event
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
  const confirm = await WeeConfirm(t('app.monogram'), t('base.exitAppConfirm'));
  if (confirm) {
    App.exitApp();
  }
};

AppSetup();
console.log('app.vue > process', process);
</script>
