<template>
  <div
    :id="'feed-post-content-' + postId"
    :class="showMoreBtn && !showMoreText ? 'word-limit' : ''"
    v-html="urlify(content)"
  ></div>
  <ion-button
    v-if="showMoreBtn && !showMoreText"
    fill="clear"
    color="primary"
    @click="showMoreText = true"
    class="ion-no-margin ion-no-padding ion-text-capitalize"
  >
    {{ '...' + t('base.seeMore') }}
  </ion-button>
</template>
<script setup lang="ts">
import { urlify, roundDecimal } from '@/utils/appUtil';
const props = defineProps({
  content: {
    type: String,
    default: '',
  },
  postId: {
    type: Number,
    default: 0,
  },
  wrapText: {
    type: Boolean,
    default: true,
  },
});
const { t } = useLang();
const lineHeight = ref(0);
const limitLines = ref(4);
const showMoreBtn = ref(false);
const showMoreText = ref(false);
const contentTimeOut = ref();
onMounted(() => {
  if (props.wrapText) {
    contentTimeOut.value = setTimeout(() => {
      setDescHeight();
    }, 10);
  }
});
onBeforeUnmount(() => {
  if (contentTimeOut.value) {
    clearTimeout(contentTimeOut.value);
    contentTimeOut.value = null;
  }
});
const setDescHeight = () => {
  var el = document.getElementById('feed-post-content-' + props.postId);
  if (el) {
    var divHeight = el.offsetHeight;
    const lh = divHeight / 17;
    lineHeight.value = roundDecimal(lh, 0);
    if (lineHeight.value > limitLines.value) {
      showMoreBtn.value = true;
    }
  }
};
</script>
<style scoped>
.word-limit {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>
