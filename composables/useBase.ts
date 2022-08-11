import { useRoute } from 'vue-router';
import {
  toastController,
  alertController,
  loadingController,
} from '@ionic/vue';
import { formatDate } from '@/utils/dateUtil';
import { AppToastOptions, AppAlertOptions } from '@/types/common';
export const useBase = () => {
  const router = useIonRouter();
  const route = useRoute();
  const { t, locale } = useLang();
  const getCurrentPath = (fullPath = true) => {
    return fullPath ? route.fullPath : route.path;
  };
  const onBack = () => {
    router.back();
  };
  const onReplaceUrl = (url: string = '') => {
    history.pushState({}, '', url);
  };
  const WeeGoTo = (link: string, replace?: boolean): void => {
    console.log('WeeGoTo', link);
    if (!link) {
      return;
    }
    if (!replace) {
      // router.push({ path: link });
      router.push(link);
    } else {
      // router.replace({ path: link });
      router.replace(link);
    }
  };
  const getParam = (field: string): any => {
    if (!field) {
      return;
    }
    return route.params ? route.params[field] : null;
  };
  const getQuery = (field: string): any => {
    if (!field) {
      return;
    }
    return route.query ? route.query[field] : null;
  };
  const getParamNumber = (att: string): number => {
    const val = getParam(att);
    return val != undefined ? +val : 0;
  };
  const getQueryNumber = (att: string): number => {
    const val = getQuery(att);
    return val != undefined ? +val : 0;
  };
  const getIonContent = () => {
    return document.querySelector('ion-content');
  };
  const WeeScrollToBottom = () => {
    const content = getIonContent();
    if (!content) {
      return;
    }
    content.scrollToBottom(500);
  };
  const WeeScrollToTop = () => {
    const content = getIonContent();
    console.log('WeeScrollToTop', content);
    if (!content) {
      return;
    }
    content.scrollToTop(500);
  };
  const WeeToast = async (options: AppToastOptions) => {
    const toast = await toastController.create({
      header: options.headerText || '',
      message: options.text,
      duration: options.time || 3000,
      position: options.toastPosition || 'bottom',
      icon: options.icon || undefined,
      color: options.color || undefined,
      buttons: [
        {
          icon: options.closeIcon || undefined,
          side: 'end',
          text: !options.closeIcon ? t('base.close') : undefined,
        },
      ],
    });
    return toast.present();
  };

  /**
   *
   * @param confirmHeader
   * @param text
   * @returns
   *   const confirm = await WeeConfirm(
        tc("app.monogram"),
        tc("base.deleteConfirm")
      );
   */
  const WeeConfirm = async (
    confirmHeader: string,
    text: string,
    cancelText: string | undefined = undefined,
    okayText: string | undefined = undefined
  ) => {
    return new Promise((resolve) => {
      alertController
        .create({
          header: confirmHeader,
          message: text, //Message <strong>text</strong>!!!
          buttons: [
            {
              text: cancelText ? cancelText : t('base.cancel'),
              handler: () => resolve(false),
            },
            {
              text: okayText ? okayText : t('base.submit'),
              handler: () => resolve(true),
            },
          ],
        })
        .then((alert) => {
          alert.present();
        });
    });
  };

  /*
   alertMessage: string | undefined,
    alertHeader: string | undefined,
    type: string | undefined = undefined //wee-alert-danger, wee-alert-warning
  */
  const WeeAlert = async (options: AppAlertOptions) => {
    const alert = await alertController.create({
      cssClass: options.type ? `wee-alert-${options.type}` : undefined,
      header: options.header || t('app.monogram'),
      subHeader: options.subHeader || undefined,
      message: options.text,
      buttons: [t('base.okay')],
    });
    return alert.present();
  };

  /**
   *
   * @param text
   * @param spinnerType
   * @returns
   *  const loading = await WeeLoading();
      loading.present();
      loading.dismiss();
   */
  const WeeLoading = async (text?: string, spinnerType?: any) => {
    const loading = await loadingController.create({
      cssClass: 'my-custom-class',
      message: text ? text : t('base.pleaseWait'),
      // duration: 3000,
      spinner: spinnerType ? spinnerType : 'lines', //bubbles" | "circles" | "circular" | "crescent" | "dots" | "lines" | "lines-small" | null | undefined
    });
    return new Promise((resolve) => {
      resolve(loading);
    });
  };
  const AppFormatDate = (d: string, fmt: string) => {
    return formatDate(d, fmt, locale.value);
  };

  /**
   * <div ref="bottomSection"></div>
   * scrollToTop(bottomSection.value);
   * @param el
   */
  const scrollToTop = (el: Element) => {
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return {
    WeeGoTo,
    getParam,
    getQuery,
    getParamNumber,
    getQueryNumber,
    getIonContent,
    WeeScrollToBottom,
    WeeScrollToTop,
    WeeToast,
    WeeConfirm,
    WeeAlert,
    WeeLoading,
    onBack,
    scrollToTop,
    AppFormatDate,
    getCurrentPath,
    onReplaceUrl,
  };
};
