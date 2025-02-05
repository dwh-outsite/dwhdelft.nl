import { resolve, join } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-11',

  extends: '../shared/nuxt.config.ts',

  content: {
    sources: {
      shared: {
        driver: 'fs',
        base: resolve(__dirname, join('..', 'shared', 'content'))
      },
    },
  },

  runtimeConfig: {
    public: {
      domain: 'lg33.nl',
    }
  },

  app: {
    head: {
      title: 'Stichting LG33',
    }
  },
})
