<template>
  <div class="q-gutter-x-xs">
    <ion-button
      shape="round"
      fill="clear"
      color="dark"
      class="ion-no-margin ion-no-padding"
    >
      <base-icon
        :icon="arrowRedoOutline"
        slot="icon-only"
        icon-set="ion"
        color="text-muted"
        :size="20"
      />
    </ion-button>
    <ion-button
      @click="openPopover($event)"
      shape="round"
      fill="clear"
      color="dark"
      class="ion-no-margin ion-no-padding"
    >
      <ion-icon
        slot="icon-only"
        class="text-muted"
        :icon="ellipsisVerticalOutline"
      ></ion-icon>
    </ion-button>
    <ion-popover
      :is-open="popoverOpen"
      :event="event"
      @didDismiss="popoverOpen = false"
      trigger-action="click"
    >
      <ion-content>
        <ion-list lines="none">
          <ion-item
            v-for="(item, index) in items"
            :key="index"
            button
            :detail="false"
            @click="onItemClick(item.id)"
          >
            <ion-icon :icon="item.icon" slot="start"></ion-icon>
            <ion-label>
              <p class="q-text-black">{{ $t(item.label) }}</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-popover>
  </div>
</template>
<script setup lang="ts">
import {
  ellipsisVerticalOutline,
  bookmarkOutline,
  linkOutline,
  flagOutline,
  arrowRedoOutline,
} from 'ionicons/icons';
interface Menu {
  icon: string;
  label: string;
  id: number;
}
const props = defineProps({
  id: {
    type: Number,
    default: 0,
    required: true,
  },
  contextId: {
    type: String,
    default: '',
  },
});
const popoverOpen = ref(false);
const event = ref<Event>();
const openPopover = (e: Event) => {
  event.value = e;
  popoverOpen.value = true;
};
const items = ref<Menu[]>([
  {
    id: 1,
    label: 'saveThisPost',
    icon: bookmarkOutline,
  },
  {
    id: 2,
    label: 'copyLinkToPost',
    icon: linkOutline,
  },
  {
    id: 3,
    label: 'reportPost',
    icon: flagOutline,
  },
]);
const onItemClick = (id: number) => {
  console.log('postID ' + props.id + ', onItemClick ' + id);
  popoverOpen.value = false;
};
</script>
<style scoped>
ion-popover {
  --width: 195px;
}
</style>
