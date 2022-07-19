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
          <ion-item button :detail="false" lines="none">
            <ion-icon
              :icon="personCircleOutline"
              slot="start"
              color="primary"
            ></ion-icon>
            <ion-label class="ion-text-capitalize">{{
              $t('base.yourProfile')
            }}</ion-label>
          </ion-item>
          <ion-item button :detail="false" lines="none">
            <ion-icon
              :icon="bookmarkOutline"
              slot="start"
              color="primary"
            ></ion-icon>
            <ion-label class="ion-text-capitalize">{{
              $t('savedPost')
            }}</ion-label>
          </ion-item>
          <ion-item button :detail="false" lines="none">
            <ion-icon
              :icon="pricetagOutline"
              slot="start"
              color="primary"
            ></ion-icon>
            <ion-label class="ion-text-capitalize">{{
              $t('followingTag')
            }}</ion-label>
          </ion-item>
          <ion-item button :detail="false" lines="none">
            <ion-icon
              :icon="searchOutline"
              slot="start"
              color="primary"
            ></ion-icon>
            <ion-label class="ion-text-capitalize">{{
              $t('base.search')
            }}</ion-label>
          </ion-item>
        </ion-list>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <ion-list>
          <ion-item :detail="false" lines="inset">
            <ion-label>
              <p>{{ t('base.setting') }}</p>
            </ion-label>
          </ion-item>
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
          <ion-item
            @click="WeeGoTo('/animations')"
            button
            :detail="false"
            lines="none"
          >
            <ion-label class="ion-text-capitalize">Animations</ion-label>
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
import { useTabStore } from '~/stores/tabStore';
import { TabsName } from '@/utils/constant';
import {
  ellipsisVertical,
  languageOutline,
  logOutOutline,
  colorPaletteOutline,
  notificationsOutline,
  closeOutline,
  personCircleOutline,
  bookmarkOutline,
  pricetagOutline,
  searchOutline,
} from 'ionicons/icons';
const tabStore = useTabStore();
tabStore.setCurrentTab(TabsName.OTHER);
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
