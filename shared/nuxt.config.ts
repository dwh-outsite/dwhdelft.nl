
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// Workaround for relative paths in shared layers, see https://nuxt.com/docs/guide/going-further/layers#relative-paths-and-aliases
const relativePath = (path) => join(dirname(fileURLToPath(import.meta.url)), path)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', 'nuxt-svgo', '@nuxt/content', 'nuxt-content-assets'],
  i18n: {
    defaultLocale: 'nl',
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: 'en',
        name: 'English',
        files: ['en.js'],
      },
      {
        code: 'nl',
        name: 'Nederlands',
        files: ['nl.js'],
      },
    ],
    langDir: 'lang/',
    detectBrowserLanguage: false,
    compilation: {
      strictMessage: false,
    },
  },
  svgo: {
    defaultImport: 'component'
  },
  css: [relativePath('assets/css/main.css')],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
      routes: ['/404'],
    },
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap',
        },
      ],
    },
  },
})
