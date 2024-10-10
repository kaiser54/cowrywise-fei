// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },

  css: ['~/assets/css/index.css'],

  modules: ['radix-vue/nuxt', '@pinia/nuxt'],

  runtimeConfig: {
    public: {
      unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY,
    },
  },
})
