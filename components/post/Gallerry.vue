<template>
  <ion-row
    ><template v-for="(item, index) in limitItems" :key="index">
      <ion-col class="ion-no-margin ion-no-padding" :size="getColWidth">
        <!-- <ion-img @click="onOpenGallery(index)" :src="item.image"></ion-img> -->
        <ion-img @click="WeeGoTo('/post/gallerry')" :src="item.image"></ion-img>
        <div
          v-if="index == limitImage - 1 && getMoreNumber > 0"
          @click="WeeGoTo('/post/gallerry')"
          class="q-absolute-center wee-text-white q-fit"
          style="background-color: rgba(0, 0, 0, 0.5); top: 50%"
        >
          <div class="q-absolute-center">+{{ getMoreNumber }}</div>
        </div>
      </ion-col></template
    ></ion-row
  >
  <!-- <base-dialog
    :model-value="dialogGallery"
    @on-close="dialogGallery = false"
    :content-padding="false"
    dark
  >
    <slide-gallery :items="items" :selected-index="dialogGalleryIndex" />
  </base-dialog> -->
</template>
<script setup lang="ts">
import { PropType, computed } from 'vue';
import { ImageDto } from '@/types/models';
const props = defineProps({
  items: {
    type: Array as PropType<ImageDto[]>,
    default: () => [],
  },
});
const { WeeGoTo } = useBase();
const dialogGallery = ref(false);
const dialogGalleryIndex = ref(0);
const limitImage = 6;
const getColWidth = computed(() => {
  return props.items.length === 1 ? '' : props.items.length >= 3 ? '4' : '6';
});
const getMoreNumber = computed(() =>
  props.items.length > limitImage ? props.items.length - limitImage : 0
);
const limitItems = computed(() =>
  props.items.length > 0 ? props.items.slice(0, limitImage) : []
);
const onOpenGallery = (index: number) => {
  dialogGalleryIndex.value = index;
  dialogGallery.value = true;
};
</script>
