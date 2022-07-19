import { defineStore } from 'pinia';
import { TabsName } from '@/utils/constant';
export const useTabStore = defineStore('tabStore', {
  state: () => ({
    currentTab: TabsName.HOME,
  }),
  getters: {},
  actions: {
    setCurrentTab(name: string) {
      this.currentTab = name;
    },
  },
});
