import { resolve, join } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: '../shared/nuxt.config.ts',
  content: {
    sources: {
      shared: {
        driver: 'fs',
        base: resolve(__dirname, join('..', 'shared', 'content'))
      },
    },
  },
})
