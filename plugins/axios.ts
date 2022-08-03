import axios, { AxiosInstance } from 'axios';
import { DefaultApiCLient } from '@/utils/constant';
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}
export default defineNuxtPlugin(() => {
  const api = axios.create({
    // baseURL: process.env.NODE_ENV == 'development' ? 'http://192.168.7.249:8080' : 'https://api.example.com',
    baseURL: useRuntimeConfig().public.apiBase,
    withCredentials: false,
    timeout: useRuntimeConfig().public.timeOut || 3 * 60000, // 60000 = 1 minute, 0 = no timeout
    headers: {
      // Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept-Apiclient': DefaultApiCLient,
      // 'Accept-Language': DefaultLocale,
    },
    validateStatus: (status) => status <= 500, // Resolve only if the status code is less than 500
  });
  return {
    provide: {
      appAxios: api,
    },
  };
});
