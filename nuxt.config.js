import fs from 'fs'
import path from 'path'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
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
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/tailwind.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://marquez.co/docs/nuxt-netlify/
    '@aceforth/nuxt-netlify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://i18n.nuxtjs.org/
    'nuxt-i18n',
    // https://www.npmjs.com/package/nuxt-svg-loader
    'nuxt-svg-loader',
    // https://content.nuxtjs.org/
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // i18n Configuration (https://i18n.nuxtjs.org/options-reference)
  i18n: {
    locales: [
      { code: 'nl', iso: 'nl-NL', file: 'nl.js' },
      { code: 'en', iso: 'en-US', file: 'en.js' },
    ],
    defaultLocale: 'nl',
    langDir: 'assets/lang/',
    lazy: true,
    vueI18n: {
      fallbackLocale: 'nl',
    },
    vueI18nLoader: true,
  },

  // Netlify configuration (https://marquez.co/docs/nuxt-netlify/)
  netlify: {
    redirects: createRedirects().concat([
      {
        from: 'https://dwh.netlify.com/*',
        to: 'https://dwhdelft.nl/:splat',
        status: '301!',
      },
    ]),
  },
}

function createRedirects(directory = 'content/redirects') {
  return fs.readdirSync(directory).map((fileName) => JSON.parse(fs.readFileSync(path.join(directory, fileName))))
}
