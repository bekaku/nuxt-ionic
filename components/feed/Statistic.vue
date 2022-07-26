<template>
  <ion-slides :pager="false" :options="slideOpts">
    <ion-slide>
      <ion-card class="no-shadow">
        <ion-item>
          <ion-label>SLide 1</ion-label>
          <ion-button fill="outline" slot="end">View</ion-button>
        </ion-item>

        <ion-card-content>
          This is content, without any paragraph or header tags, within an
          ion-card-content element.
        </ion-card-content>
      </ion-card>
    </ion-slide>
    <ion-slide>
      <ion-card>
        <ion-item>
          <ion-label>SLide 2</ion-label>
          <ion-button fill="outline" slot="end">View</ion-button>
        </ion-item>

        <ion-card-content>
          This is content, without any paragraph or header tags, within an
          ion-card-content element.
        </ion-card-content>
      </ion-card>
    </ion-slide>
    <ion-slide>
      <ion-card>
        <ion-item>
          <ion-label>SLide 3</ion-label>
          <ion-button fill="outline" slot="end">View</ion-button>
        </ion-item>

        <ion-card-content>
          This is content, without any paragraph or header tags, within an
          ion-card-content element.
        </ion-card-content>
      </ion-card>
    </ion-slide>
  </ion-slides>
</template>
<script setup lang="ts">
const slideOpts = {
  initialSlide: 1,
  speed: 400,
  slidesPerView: 2,
  spaceBetween: 0,
  freeMode: true,
  centeredSlides: true,
};
</script>
