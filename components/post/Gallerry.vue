<template>
  <ion-row
    ><template v-for="(item, index) in limitItems" :key="index">
      <ion-col
        class="ion-no-margin ion-no-padding"
        :size="getColWidth"
        :style="items.length > 1 ? 'padding: 0.5px !important' : ''"
      >
        <!-- <ion-img @click="onOpenGallery(index)" :src="item.image"></ion-img> -->
        <!-- <ion-img @click="WeeGoTo('/post/gallerry')" :src="item.image"></ion-img> -->
        <base-image
          @click="onOpenGallery(index)"
          :src="item.image"
          ratio="4/3"
        />
        <div
          v-if="index == limitImage - 1 && getMoreNumber > 0"
          @click="WeeGoTo(`/post/gallerry/${postId}`)"
          class="q-absolute-center q-text-white q-fit"
          style="background-color: rgba(0, 0, 0, 0.5); top: 50%"
        >
          <div class="q-absolute-center">+{{ getMoreNumber }}</div>
        </div>
      </ion-col></template
    ></ion-row
  >
  <base-dialog
    :model-value="dialogGallery"
    @on-close="dialogGallery = false"
    :content-padding="false"
    dark
    title="Photos"
  >
    <template #avatar>
      <ion-avatar style="width: 32px; height: 32px">
        <ion-img :src="AvatarPlaceHolder128" />
      </ion-avatar>
    </template>
    <slide-gallery :items="items" :selected-index="dialogGalleryIndex" />
  </base-dialog>
</template>
<script setup lang="ts">
import { PropType, computed } from 'vue';
import { ImageDto } from '@/types/models';
import { AvatarPlaceHolder128 } from '@/utils/constant';
const props = defineProps({
  items: {
    type: Array as PropType<ImageDto[]>,
    default: () => [],
  },
  postId: {
    type: Number,
    default: 0,
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
