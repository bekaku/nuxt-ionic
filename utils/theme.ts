import { IThemeSettingOptions, ITheme } from '@/types/common';
import { ThemeKey } from '@/utils/constant';
import { useLangugeAndThemeStore } from '@/stores/langugeAndThemeStore';
import { useStorage } from '@vueuse/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { isPlatform } from '@ionic/vue';
import {
  sunnyOutline,
  moonOutline,
  phonePortraitOutline,
  alarmOutline,
} from 'ionicons/icons';
export const availableThemes: {
  key: IThemeSettingOptions;
  text: string;
  icon: string;
}[] = [
  { key: 'light', text: 'theme.lightTheme', icon: sunnyOutline },
  { key: 'dark', text: 'theme.darkTheme', icon: moonOutline },
  { key: 'system', text: 'theme.systemTheme', icon: phonePortraitOutline },
  { key: 'realtime', text: 'theme.realtimeTheme', icon: alarmOutline },
];
export const ThemeManager = () => {
  const langugeAndThemeStore = useLangugeAndThemeStore();
  const userTheme = useStorage<string>(ThemeKey, 'system');
  const getSystemTheme = (): ITheme => {
    try {
      return window
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
        : 'dark';
    } catch (error) {
      return 'light';
    }
  };
  const getRealtimeTheme = (): ITheme => {
    const now = new Date();
    const hour = now.getHours();
    const isNight = hour >= 17 || hour <= 5;
    return isNight ? 'dark' : 'light';
  };
  const currentTheme = computed(() =>
    availableThemes.find((t) => t.key == langugeAndThemeStore.themeSetting)
  );
  // wathcers
  const onThemeSettingChange = (themeSetting: IThemeSettingOptions) => {
    langugeAndThemeStore.setThemeSetting(themeSetting);
    if (themeSetting === 'realtime') {
      langugeAndThemeStore.setTheme(getRealtimeTheme());
    } else if (themeSetting === 'system') {
      langugeAndThemeStore.setTheme(getSystemTheme());
    } else {
      langugeAndThemeStore.setTheme(themeSetting);
    }

    setTheme();
  };
  const setTheme = () => {
    userTheme.value = langugeAndThemeStore.themeSetting;
    setDarkMode();
  };
  const setDarkMode = () => {
    const isdark = langugeAndThemeStore.theme === 'dark';
    document.body.setAttribute('color-theme', isdark ? 'dark' : 'light');
    //add to appSetting store
    if (isPlatform('hybrid')) {
      setStatusBar(isdark);
    }
  };
  const setStatusBar = async (isdark: boolean) => {
    // StatusBar.setOverlaysWebView({ overlay: true });
    await StatusBar.setStyle({
      style: !isdark ? Style.Light : Style.Dark,
    });
    await StatusBar.setBackgroundColor({
      color: !isdark ? '#ffffff' : '#000000',
    });
  };
  watch(langugeAndThemeStore, (state) => {
    onThemeSettingChange(state.themeSetting as IThemeSettingOptions);
  });
  const onThemeSystemChange = () => {
    if (langugeAndThemeStore.themeSetting === 'system') {
      langugeAndThemeStore.setTheme(getSystemTheme());
    }
  };
  const onRealtimeCheck = () => {
    if (langugeAndThemeStore.themeSetting === 'realtime') {
      langugeAndThemeStore.setTheme(getRealtimeTheme());
    }
  };
  // init theme
  const initTheme = () => {
    langugeAndThemeStore.themeSetting = userTheme.value;
    onThemeSettingChange(
      langugeAndThemeStore.themeSetting as IThemeSettingOptions
    );
  };
  // lifecycle
  let intervalCheckTime: NodeJS.Timer;
  // onBeforeMount(() => initTheme());
  onMounted(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', onThemeSystemChange);
    intervalCheckTime = setInterval(onRealtimeCheck, 1000);
  });
  onBeforeUnmount(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', onThemeSystemChange);
    if (intervalCheckTime) clearInterval(intervalCheckTime);
  });
  return {
    initTheme,
    userTheme,
    getSystemTheme,
    getRealtimeTheme,
    currentTheme,
  };
};
