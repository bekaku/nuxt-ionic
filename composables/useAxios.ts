import { RequestType, AppException, ResponseMessage } from '@/types/common';
import { isAppException, isServerResponseMessage } from '@/utils/appUtil';
import { alertCircle, closeOutline } from 'ionicons/icons';
export const useAxios = () => {
  const { $appAxios } = useNuxtApp();
  const { locale } = useLang();
  const { WeeToast } = useBase();
  const notifyException = (response: AppException): void => {
    WeeToast({
      text: `<strong>${response.message}</strong><br> ${response.errors?.join(
        '<br>'
      )}`,
      icon: alertCircle,
      color: 'danger',
      closeIcon: closeOutline,
    });
  };
  const notifyServerMessage = (response: ResponseMessage): void => {
    if (!response.message) {
      return;
    }
    WeeToast({
      text: response.message,
      closeIcon: closeOutline,
      color:
        response.status == 'OK' || response.status == 'CREATED'
          ? undefined
          : 'danger',
    });
  };
  const callAxios = <T>(req: RequestType): Promise<T> => {
    return new Promise((resolve, reject) => {
      // api.defaults.headers = reqHeader();
      // api.defaults.headers['Accept-Language'] = locale.value;
      // api.defaults.headers.Authorization = `Bearer ${token}`;
      $appAxios.defaults.headers.common['Content-Type'] = 'application/json';
      $appAxios.defaults.headers.common['Accept-Language'] =
        locale.value as string;

      // $appAxios.defaults.headers.common.Authorization = `Bearer ${cookies.get(AppAuthTokenKey)}`;
      // console.log('api', $appAxios.defaults);
      // console.log('useCallApi > useFetch :', req);

      $appAxios({
        method: req.method,
        url: req.API,
        data: req.body ? req.body : undefined,
      })
        .then((response) => {
          if (isAppException(response.data)) {
            notifyException(response.data);
          } else if (isServerResponseMessage(response.data)) {
            notifyServerMessage(response.data);
          }
          resolve(response.data);
        })
        .catch((error) => {
          console.error('useCallApi > catch', error);
          reject(error.message);
          WeeToast({
            headerText: error.code,
            text: error.message,
            icon: alertCircle,
            closeIcon: closeOutline,
            color: 'danger',
          });
        });
    });
  };
  return { callAxios };
};
