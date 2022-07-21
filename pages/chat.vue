<template>
  <ion-page>
    <ion-header mode="ios">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="" default-href="/tabs/tab2"></ion-back-button>
          <ion-avatar style="height: 35px; width: 35px">
            <img
              src="https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
          </ion-avatar>
        </ion-buttons>
        <ion-title>Bekaku</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen ref="contentsChatcroll">
      <ion-grid>
        <ion-row>
          <ion-col
            class="ion-no-padding ion-no-margin wee-messenger-chat"
            style="padding-bottom: 100px"
          >
            <section
              class="wee-messenger"
              style="margin-top: 10px"
              v-for="(item, index) in items"
              :key="index"
            >
              <main fullscreen>
                <div
                  v-if="!item.mine"
                  class="wee-messenger-msg wee-messenger-left-msg"
                >
                  <div
                    v-if="!isSameSender(index)"
                    class="wee-messenger-img ion-margin-bottom"
                  >
                    <ion-avatar style="height: 35px; width: 35px">
                      <img :src="item.avatar" />
                    </ion-avatar>
                  </div>

                  <div
                    class="wee-messenger-bubble"
                    :style="isSameSender(index) ? 'margin-left:45px' : ''"
                  >
                    <div class="wee-messenger-info">
                      <div
                        v-if="!isSameSender(index)"
                        class="wee-messenger-info-name"
                      >
                        {{ item.name }}
                      </div>
                      <div class="wee-messenger-info-time">{{ item.time }}</div>
                    </div>

                    <div class="msg-text ion-text-wrap">
                      <template v-if="item.type === ChatMessageType.IMAGE">
                        <ion-img :src="item.image"></ion-img>
                      </template>
                      <template v-else>
                        <div v-html="urlify(item.text!)"></div>
                      </template>
                    </div>
                  </div>
                </div>

                <div v-else class="wee-messenger-msg wee-messenger-right-msg">
                  <div class="wee-messenger-bubble">
                    <div class="wee-messenger-info">
                      <div class="wee-messenger-info-time">{{ item.time }}</div>
                    </div>
                    <div class="msg-text ion-text-wrap">
                      <template v-if="item.type === ChatMessageType.IMAGE">
                        <ion-img :src="item.image"></ion-img>
                      </template>
                      <template v-else-if="item.type === ChatMessageType.MAP">
                        <iframe
                          v-if="item.lat_map && item.long_map"
                          width="100%"
                          height="150"
                          frameborder="0"
                          scrolling="no"
                          marginheight="0"
                          marginwidth="0"
                          :src="`https://maps.google.com/maps?q=${item.lat_map},${item.long_map}&hl=es;z=14&amp;output=embed&zoom=5`"
                        >
                        </iframe>
                      </template>
                      <template v-else>
                        <div v-html="urlify(item.text!, 'text-white')"></div>
                      </template>
                    </div>
                  </div>
                </div>
              </main>
            </section>
          </ion-col>
        </ion-row>
        <chat-message-bar @onSend="onSend"></chat-message-bar>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { ChatMessageType } from '~/types/Common';
import { ChatMessage } from '~/types/ChatMessage';
import { urlify } from '~/utils/appUtil';
const contentsChatcroll = ref();

const items = ref<ChatMessage[]>([
  {
    name: 'Fin',
    text: 'Hi, welcome to SimpleChat! Go ahead and send me a message.😄',
    time: '12:45',
    avatar:
      'https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    type: ChatMessageType.TEXT,
    mine: false,
  },
  {
    name: 'Fin',
    avatar:
      'https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    text: "Listen, I've had a pretty messed up day",
    time: '12:45',
    type: ChatMessageType.TEXT,
    mine: false,
  },
  {
    name: 'Bekaku',
    avatar:
      'https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    text: 'You can change your name in JS section!.',
    time: '12:45',
    type: ChatMessageType.TEXT,
    mine: true,
  },
  {
    name: 'Fin',
    avatar:
      'https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    text: 'Okay',
    time: '12:45',
    type: ChatMessageType.TEXT,
    mine: false,
  },
  {
    name: 'Bekaku',
    avatar:
      'https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    text: 'Sure',
    time: '12:45',
    type: ChatMessageType.TEXT,
    mine: true,
  },
  {
    name: 'Bekaku',
    avatar:
      'https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    text: 'Just let me know!',
    type: ChatMessageType.TEXT,
    time: '12:45',
    mine: true,
  },
  {
    name: 'Fin',
    avatar:
      'https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    text: 'Just let me know! https://dribbble.com/shots/14355627-Live-Chat-App',
    type: ChatMessageType.TEXT,
    time: '12:45',
    mine: false,
  },
  {
    name: 'Fin',
    avatar:
      'https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    text: '',
    type: ChatMessageType.IMAGE,
    image:
      'https://i.ibb.co/vwcwknr/126906845-3847263042004453-4231016022382760270-n.jpg',
    time: '12:45',
    mine: false,
  },
  {
    name: 'Bekaku',
    avatar:
      'https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    text: 'My github page https://github.com/bekaku',
    type: ChatMessageType.TEXT,
    time: '12:45',
    mine: true,
  },
  {
    name: 'Bekaku',
    avatar:
      'https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    text: '',
    lat_map: '13.961579505507864',
    long_map: '100.63035970050973',
    type: ChatMessageType.MAP,
    time: '12:45',
    mine: true,
  },
  {
    name: 'Fin',
    avatar:
      'https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    text: 'Just let me know! https://dribbble.com/shots/14355627-Live-Chat-App',
    type: ChatMessageType.TEXT,
    time: '12:45',
    mine: false,
  },
  {
    name: 'Fin',
    avatar:
      'https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    text: 'Just let me know!',
    type: ChatMessageType.TEXT,
    time: '12:45',
    mine: false,
  },
]);
const onSend = (text: string) => {
  if (!text) {
    return;
  }
  const today = new Date();
  const item: ChatMessage = {
    name: 'Bekaku',
    avatar:
      'https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    text: text,
    type: ChatMessageType.TEXT,
    time: today.getHours() + ':' + today.getMinutes(),
    mine: true,
  };

  items.value.push(item);
  console.log('onSend', text);

  scrollToBottom();
};
const isSameSender = (index: number) => {
  const prevItem = items.value[index - 1];
  const currentItem = items.value[index];
  if (currentItem && prevItem) {
    return currentItem.mine === prevItem.mine;
  }
  return false;
};
const scrollToBottom = () => {
  contentsChatcroll.value.$el.scrollToBottom(0);
};
onMounted(() => {
  scrollToBottom();
});
</script>
<style scoped>
/* https://codepen.io/sajadhsm/pen/odaBdd */
@import '~/assets/css/chat.css';
</style>
