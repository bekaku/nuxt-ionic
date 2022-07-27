<template>
  <!-- <ion-slides
    class="q-absolute-center"
    :pager="false"
    :options="slideOpts"
    zoom
  >
    <ion-slide v-for="(item, index) in items" :key="index">
      <div class="swiper-zoom-container">
        <ion-img :src="item.image"></ion-img>
      </div>
    </ion-slide>
  </ion-slides> -->
  <swiper
    class="q-absolute-center"
    :modules="[Autoplay, Keyboard, Scrollbar, Zoom, Navigation]"
    :keyboard="true"
    :pagination="false"
    :navigation="false"
    :scrollbar="true"
    :zoom="true"
    :initial-slide="selectedIndex"
    :lazy="true"
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
  >
    <swiper-slide v-for="(item, index) in items" :key="index">
      <div class="swiper-zoom-container">
        <!-- <ion-img class="swiper-zoom-target" :src="item.image"></ion-img> -->
        <base-image
          class="swiper-zoom-target"
          :src="item.image"
          ratio="1"
        /></div
    ></swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import { ImageDto } from '@/types/models';
import { Autoplay, Keyboard, Scrollbar, Zoom, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import 'swiper/css/lazy';
import '@ionic/vue/css/ionic-swiper.css';
const props = defineProps({
  items: {
    type: Array as PropType<ImageDto[]>,
    default: () => [],
  },
  selectedIndex: {
    type: Number,
    default: 0,
  },
});
</script>
