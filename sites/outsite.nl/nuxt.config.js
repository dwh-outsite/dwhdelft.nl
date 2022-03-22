import fs from 'fs'
import path from 'path'

export default {
  rootDir: __dirname,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  generate: {
    fallback: true,
  },

  // Globalg page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Outsite - LHBT+ vereniging Delft',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Outsite is er voor jongeren en studenten tot en met 28 jaar die zich identificeren als LHBT+.',
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
  },

  // Aliases (https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-alias)
  alias: {
    '#': path.resolve(__dirname, '../../'),
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [path.resolve(__dirname, '../../assets/css/tailwind.css')],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['../../plugins/tt.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components',
    path.resolve(__dirname, '../../components/'),
    path.resolve(__dirname, '../../components/bar_buddies'),
    path.resolve(__dirname, '../../components/bookings'),
    path.resolve(__dirname, '../../components/content_layouts'),
    path.resolve(__dirname, '../../components/Form'),
    path.resolve(__dirname, '../../components/global'),
    path.resolve(__dirname, '../../components/Home'),
    path.resolve(__dirname, '../../components/SharedPages'),
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://marquez.co/docs/nuxt-netlify/
    '@aceforth/nuxt-netlify',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://i18n.nuxtjs.org/
    '@nuxtjs/i18n',
    // https://content.nuxtjs.org/
    '@nuxt/content',
  ],

  // Tailwind configuration (https://tailwindcss.nuxtjs.org/options)
  tailwindcss: {
    configPath: './tailwind.config.js',
    config: {
      content: ['../../components/**/**.vue', '../../content/**/**.md'],
    },
  },

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
    langDir: '../../assets/lang/',
    lazy: true,
    detectBrowserLanguage: false,
    vueI18n: {
      fallbackLocale: 'nl',
    },
    vueI18nLoader: true,
  },

  // NuxtJS Content Configuration https://content.nuxtjs.org/configuration
  content: {
    dir: '../../content',
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

function createRedirects(directory = '../../content/redirects') {
  return fs.readdirSync(directory).map((fileName) => JSON.parse(fs.readFileSync(path.join(directory, fileName))))
}
