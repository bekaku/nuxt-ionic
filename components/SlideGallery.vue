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
    :modules="modules"
    :keyboard="true"
    :pagination="false"
    :scrollbar="true"
    :zoom="true"
    :initial-slide="selectedIndex"
  >
    <swiper-slide v-for="(item, index) in items" :key="index">
      <div class="swiper-zoom-container">
        <ion-img class="swiper-zoom-target" :src="item.image"></ion-img></div
    ></swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import { ImageDto } from '@/types/models';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
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
const slideOpts = {
  initialSlide: props.selectedIndex,
  speed: 400,
  preloadImages: true,
};
const modules = [Autoplay, Keyboard, Pagination, Scrollbar, Zoom];
</script>
