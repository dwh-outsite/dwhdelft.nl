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
  app: {
    head: {
      title: 'DWH - LHBT+ vereniging Delft',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'DWH is dé onafhankelijke LHBT+ vereniging van Delft en omgeving. We zijn twee dingen; een ontmoetingsplek ' +
            'voor LHBT+ mensen en hun vrienden en een groep die actief strijdt voor meer LHBT+ rechten en acceptatie.',
        },
        { hid: 'apple-mobile-web-app-title', property: 'apple-mobile-web-app-title', content: 'DWH Delft' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#e31c79' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
    }
  }
})
