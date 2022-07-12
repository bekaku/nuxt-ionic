import { ILocales } from '@/types/common';
import { LocaleKey, DefaultLocale } from '@/utils/constant';
import { useLangugeAndThemeStore } from '@/stores/langugeAndThemeStore';
import { useI18n } from 'vue-i18n';
import { useStorage } from '@vueuse/core';
export const availableLocales: ILocales[] = [
  {
    name: 'English',
    iso: 'en',
    flag: '🇺🇸',
  },
  {
    name: 'ไทย',
    iso: 'th',
    flag: 'TH',
  },
];
export const LanguageManager = () => {
  const langugeAndThemeStore = useLangugeAndThemeStore();
  const { locale } = useI18n();
  //   const getUserLocale = (): string => cookies.get(LocaleKey) || DefaultLocale;
  const userLocale = useStorage<string>(LocaleKey, DefaultLocale);
  // watchers
  watch(langugeAndThemeStore, (state) => {
    if (state.locale) {
      setLocale(state.locale);
    }
  });

  const setLocale = (lang: string) => {
    locale.value = lang;
    userLocale.value = lang;
    langugeAndThemeStore.setLocale(lang);
  };
  // init locale
  const initLang = () => {
    setLocale(userLocale.value);
  };
  return {
    initLang,
  };
};
