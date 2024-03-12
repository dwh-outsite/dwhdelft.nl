
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// Workaround for relative paths in shared layers, see https://nuxt.com/docs/guide/going-further/layers#relative-paths-and-aliases
const relativePath = (path) => join(dirname(fileURLToPath(import.meta.url)), path)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [relativePath('assets/css/main.css')],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
