<template>
  <base-layout
    :page-title="t('base.setting')"
    fullscreen
    :show-back-link="false"
    :content-padding="false"
  >
    <template v-slot:actions-end>
      <ion-button color="dark" router-link="#">
        <ion-icon slot="icon-only" :icon="ellipsisVertical"></ion-icon>
      </ion-button>
    </template>
    <ion-row>
      <ion-col>
        <ion-list>
          <ion-item>
            <ion-avatar slot="start">
              <img :src="AvatarPlaceHolder128" alt="avatar" />
            </ion-avatar>
            <ion-label>
              <h2>Chanavee Bekaku</h2>
              <p>Software Engineer</p>
            </ion-label>
          </ion-item>
          <!-- @click="WeeGoTo('/settings/appearance')" -->
          <ion-item
            button
            router-link="/settings/appearance"
            :detail="true"
            lines="none"
          >
            <ion-icon
              color="primary"
              :icon="colorPaletteOutline"
              slot="start"
            ></ion-icon>
            <ion-label> {{ t('base.appearance') }} </ion-label>
            <ion-label slot="end">
              <ion-text class="text-muted text-caption">
                {{ t(`theme.${langugeAndThemeStore.theme}`) }}
              </ion-text>
            </ion-label>
          </ion-item>
          <ion-item
            button
            @click="WeeGoTo('/settings/languge')"
            :detail="true"
            lines="none"
          >
            <ion-icon
              :icon="languageOutline"
              color="primary"
              slot="start"
            ></ion-icon>
            <ion-label> {{ t('base.language') }} </ion-label>
            <ion-label slot="end">
              <ion-text class="text-muted text-caption">
                {{ currenLocale?.name }}
              </ion-text>
            </ion-label>
          </ion-item>

          <ion-item button :detail="false" lines="none">
            <ion-icon
              :icon="notificationsOutline"
              slot="start"
              color="primary"
            ></ion-icon>
            <ion-label class="ion-text-capitalize">{{
              $t('nav.notification')
            }}</ion-label>
          </ion-item>

          <ion-item lines="none">
            <ion-icon :icon="phonePortraitOutline" slot="start"></ion-icon>
            <ion-label>Toast</ion-label>
            <ion-button fill="clear" @click="showToast()" slot="end">
              Show
            </ion-button>
          </ion-item>
          <ion-item>
            <ion-label>Confirm</ion-label>
            <ion-button
              fill="clear"
              @click="confirm()"
              slot="end"
              color="danger"
            >
              <ion-icon slot="start" :name="trashOutline"></ion-icon>
              Delete
            </ion-button>
          </ion-item>

          <ion-item
            :detail="true"
            @click="
              WeeAlert({
                header: t('error.error'),
                subHeader: 'This is sub header',
                text: t('error.loginWrong'),
              })
            "
          >
            <ion-label>WeeAlert</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Loading</ion-label>
            <ion-button fill="clear" @click="showLoading" slot="end"
              >Show loading</ion-button
            >
          </ion-item>
          <ion-item :detail="true" @click="WeeGoTo('/scroll')">
            <ion-label>Scroll Event</ion-label>
          </ion-item>
          <ion-item :detail="true" @click="WeeGoTo('/userList')">
            <ion-icon :icon="peopleCircleOutline" slot="start"></ion-icon>
            <ion-label>Users</ion-label>
          </ion-item>
          <ion-item :detail="true" @click="WeeGoTo('/auth/login')">
            <ion-icon :icon="keyOutline" slot="start"></ion-icon>
            <ion-label>Login</ion-label>
          </ion-item>
          <ion-item :detail="true" @click="WeeGoTo('/icons')">
            <ion-label>Icons</ion-label>
          </ion-item>
          <ion-list-header> Recent Conversations </ion-list-header>
          <ion-item @click="WeeGoTo('/chat')">
            <ion-avatar slot="start">
              <img
                src="https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
            </ion-avatar>
            <ion-label>
              <h2>Finn</h2>
              <h3>I'm a big deal</h3>
              <p>
                Listen, I've had a pretty messed up day Listen, I've had a
                pretty messed up day Listen, I've had a pretty messed up day
                Listen, I've had a pretty messed up day
              </p>
            </ion-label>
            <ion-badge color="danger" slot="end"> 99+ </ion-badge>
          </ion-item>

          <ion-item lines="none">
            <ion-label class="ion-text-wrap">
              <ion-text color="primary">
                <h2>H3 Primary Title</h2>
              </ion-text>
              <h3>Paragraph line 1</h3>
              <p>
                Paragraph line 2 secondary Paragraph line 2 secondaryParagraph
                line 2 secondaryParagraph line 2 secondaryParagraph line 2
                secondaryParagraph line 2 secondary
              </p>
            </ion-label>
          </ion-item>
          <ion-item lines="none" @click="logout" :detail="true">
            <ion-icon :icon="logOutOutline" slot="start"></ion-icon>
            <ion-label>
              <ion-text color="danger">
                {{ t('base.logout') }}
              </ion-text>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-col>
    </ion-row>
  </base-layout>
</template>
<script setup lang="ts">
import { availableLocales } from '@/utils/lang';
import { useLangugeAndThemeStore } from '@/stores/langugeAndThemeStore';
import { AvatarPlaceHolder128 } from '@/utils/constant';
import {
  ellipsisVertical,
  languageOutline,
  phonePortraitOutline,
  peopleCircleOutline,
  keyOutline,
  logOutOutline,
  trashOutline,
  colorPaletteOutline,
  notificationsOutline,
  closeOutline,
} from 'ionicons/icons';
const langugeAndThemeStore = useLangugeAndThemeStore();
const { WeeGoTo, WeeToast, WeeConfirm, WeeLoading, WeeAlert } = useBase();
const { t, locale } = useLang();
const confirm = async () => {
  const confirm = await WeeConfirm(t('app.monogram'), t('base.deleteConfirm'));
  // WeeToast('Confirm > ' + confirm);
  WeeToast({
    text: 'Confirm > ' + confirm,
  });
};
const showToast = () => {
  WeeToast({
    headerText: 'Title',
    text: 'Test app toast message! <br><strong>Beka</strong>',
    icon: colorPaletteOutline,
    color: 'danger',
    closeIcon: closeOutline,
  });
};
const showLoading = async () => {
  const loading: any = await WeeLoading();
  loading.present();
  setTimeout(() => {
    loading.dismiss();
  }, 3000);
};
const logout = async () => {
  const confirm = await WeeConfirm(
    t('app.monogram'),
    t('helper.logoutConfirm'),
    undefined,
    t('base.logout')
  );
  if (confirm) {
    console.log('Tab3 > logout');
  }
};
const currenLocale = computed(() =>
  availableLocales.find((t) => t.iso == langugeAndThemeStore.locale)
);
</script>
