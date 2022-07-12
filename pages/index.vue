<template>
  <ion-page>
    <ion-content fullscreen class="ion-padding">
      <ion-grid>
        <ion-row style="height: 100vh" class="ion-justify-content-center">
          <ion-col class="ion-align-self-center">
            <div class="ion-text-center">
              <img src="icon.png" style="width: 105px" />
              <br />
              <ion-spinner name="dots" color="primary"></ion-spinner>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
const { WeeGoTo } = useBase();
WeeGoTo('/tabs/tab1', true);
</script>
