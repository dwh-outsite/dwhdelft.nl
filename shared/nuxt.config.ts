
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// Workaround for relative paths in shared layers, see https://nuxt.com/docs/guide/going-further/layers#relative-paths-and-aliases
const relativePath = (path) => join(dirname(fileURLToPath(import.meta.url)), path)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', 'nuxt-svgo'],
  i18n: {
    locales: ['en', 'nl'],
    legacy: true,
    compilation: {
      strictMessage: false,
      legacy: true,
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
  }
})
