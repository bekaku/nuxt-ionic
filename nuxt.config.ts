import { defineNuxtConfig } from 'nuxt';
import { IntlifyModuleOptions } from '@intlify/nuxt3';
// https://v3.nuxtjs.org/api/configuration/nuxt.config
declare module '@nuxt/schema' {
  interface NuxtConfig {
    intlify?: IntlifyModuleOptions;
  }
}
const devMode = process.env.NODE_ENV === 'development';
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'service-worker',
  },
  modules: ['nuxt-ionic'],
  css: [
    '~/assets/css/color.scss',
    '~/assets/css/app.scss',
    '~/assets/css/typography.sass',
    '~/assets/css/size.sass',
    '~/assets/css/positioning.sass',
    'animate.css/animate.min.css',
  ],
  // build modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@intlify/nuxt3',
    '@vueuse/nuxt',
  ],
  // auto import components
  components: true,

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'th',
      fallbackLocale: 'th',
      availableLocales: ['en', 'th'],
    },
  },
  // vite plugins
  vite: {},
  ionic: {
    integrations: {
      meta: true,
      pwa: true,
      router: true,
    },
    css: {
      core: true,
      basic: true,
      utilities: true,
    },
  },
  publicRuntimeConfig: {},
  runtimeConfig: {
    /*
    console.log(runtimeConfig.apiSecret)
    console.log(runtimeConfig.public.apiBase)
    */
    // The private keys which are only available within server-side
    apiSecret: '11001100',
    // Keys within public, will be also exposed to the client-side
    public: {
      // apiBase: '/api',
      apiBase: devMode
        ? 'https://jsonplaceholder.typicode.com'
        : 'https://api.synapse.app',
      timeOut: 5 * 60000, // 60000 = 1 minute, 0 = no timeout
      token:
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzMmVjOWMwYy02YWVmLTQ2ZjEtYTY5Yy0zYjRlMDU3ZjBjYjkiLCJpYXQiOjE2NTExMzkwODksImV4cCI6MTY4MjY3NTA4OX0.e8OM_0M5HXyM0J2cxeBYjqYYVwPDm_6JBH2lB9DbsFo',
    },
  },
});
