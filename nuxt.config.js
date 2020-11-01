import path from 'path'

import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'DWH - LHBT+ vereniging Delft',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#e31c79' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-i18n',
    'nuxt-purgecss',
    'nuxt-svg-loader',
    '@aceforth/nuxt-netlify',
    '@nuxtjs/markdownit'
  ],

  i18n: {
    locales: [
      { code: 'nl', iso: 'nl-NL', file: 'nl.js' },
      { code: 'en', iso: 'en-US', file: 'en.js' }
    ],
    defaultLocale: 'nl',
    langDir: 'lang/',
    lazy: true,
    vueI18n: {
      fallbackLocale: 'nl'
    }
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      }
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules.push({
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: false,
          skipEmptyLines: true
        }
      })
    }
  },

  netlify: {
    redirects: [
      {
        from: 'https://dwh.netlify.com/*',
        to: 'https://dwhdelft.nl/:splat',
        status: '301!'
      },
      {
        from: '/eatingout',
        to: 'https://dwhdelft.nl/book'
      },
      {
        from: '/outsite',
        to: 'https://outsite.nl'
      },
      {
        from: '/nldoet',
        to: 'https://docs.google.com/forms/d/1IXgfc5k9G9LByasP9812fcZ_xNQqNUcl3riNHvJNjxM/viewform'
      },
      {
        from: '/protocol',
        to: 'https://docs.google.com/document/d/1wKbk5_DnEJnF2DNBinUyBWCICEogRnUs_VWS60juqNg/'
      },
      {
        from: '/discord',
        to: 'https://discord.gg/RDwtnRK'
      },
      {
        from: '/sponsorkliks',
        to: 'https://www.sponsorkliks.com/partners.php?club=4338'
      },
      {
        from: '/reserveer',
        to: 'https://dwhdelft.nl/book'
      },
      {
        from: '/chatgroepen',
        to: 'https://dwhdelft.nl/chatgroups'
      },
      {
        from: '/review',
        to: 'https://docs.google.com/forms/d/e/1FAIpQLSeOvE7kHgjnLIuSOwW5DpcIqtRah9alPnZQXanhvZ34Fu9HNg/viewform'
      },
      {
        from: '/welkom',
        to: 'https://reserveer.dwhdelft.nl/visitor/welcome'
      },
      {
        from: '/welcome',
        to: 'https://reserveer.dwhdelft.nl/visitor/welcome'
      },
      {
        from: '/tafel',
        to: 'https://reserveer.dwhdelft.nl/visitor'
      },
      {
        from: '/table',
        to: 'https://reserveer.dwhdelft.nl/visitor'
      },
      {
        from: '/events.ics',
        to: 'https://calendar.google.com/calendar/ical/dwhdelft.nl_st9n90454d4r9ps5alm2vdjobo%40group.calendar.google.com/public/basic.ics'
      },
      {
        from: '/eventsgooglecalendar',
        to: 'https://calendar.google.com/calendar/u/1?cid=ZHdoZGVsZnQubmxfc3Q5bjkwNDU0ZDRyOXBzNWFsbTJ2ZGpvYm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'
      },
      {
        from: '/bartender',
        to: 'https://docs.google.com/forms/d/e/1FAIpQLSeC3cf0TVhHkGqXUMEHR5Bq4BZ7uactHgG9m0tCO6MV_1r55w/viewform'
      },
      {
        from: '/kunstwerk',
        to: 'https://kunstwerk.dwhdelft.nl'
      },
      {
        from: '/whatsapp',
        to: 'http://wa.me/0031637560270'
      },
      {
        from: '/studieplekken',
        to: 'https://docs.google.com/spreadsheets/d/1iLAygG2SY7bhi8k9F8WghvYrCthpdF11c_PIlrRQ3Yg/edit?usp=sharing'
      }
    ]
  }
}
