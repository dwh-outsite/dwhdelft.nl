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
      domain: 'outsite.nl',
    }
  },

  app: {
    head: {
      title: 'Outsite - LHBTI+ vereniging Delft',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Outsite is er voor jongeren en studenten tot en met 28 jaar die zich identificeren als LHBTI+.',
        },
        { hid: 'apple-mobile-web-app-title', property: 'apple-mobile-web-app-title', content: 'Outsite' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#e31c79' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
    }
  },
})
