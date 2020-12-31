<i18n lang="yaml">
en:
  menu:
    - title: Home
      url: index
    - title: Join DWH
      url: index#join-dwh
    - title: Reservations
      url: book
    - title: EatingOUT
      url: index#eatingout
    - title: Education
      url: /education
    - title: Andersblad
      url: andersblad
    - title: Contact
      url: '#contact'
nl:
  menu:
    - title: Home
      url: index
    - title: Kom naar DWH
      url: index#join-dwh
    - title: Reserveren
      url: book
    - title: EatingOUT
      url: index#eatingout
    - title: Voorlichting
      url: /education
    - title: Andersblad
      url: andersblad
    - title: Contact
      url: '#contact'
</i18n>

<template>
  <header id="header" :class="[small ? 'header-small' : '', 'relative overflow-hidden bg-gray-700']">
    <nav class="absolute z-50 w-full mt-8">
      <div class="container px-4 mx-auto flex justify-between items-center">
        <nuxt-link :to="localePath('index')">
          <DWHLogo class="h-16 fill-current text-white" />
        </nuxt-link>
        <div v-show="showMenu" class="md:hidden absolute top-16 bg-white w-full -ml-4 p-4 text-xl font-semibold">
          <nuxt-link v-for="item in menu" :key="item.url" :to="item.url" class="block md:inline no-underline mr-4 my-2">
            {{ item.title }}
          </nuxt-link>
        </div>
        <div class="hidden md:block px-4 text-xl font-semibold text-white">
          <nuxt-link v-for="item in menu" :key="item.url" :to="item.url" class="block md:inline no-underline mr-4 my-2">
            {{ item.title }}
          </nuxt-link>
        </div>
        <div class="flex">
          <div
            class="rounded-full w-7 h-7 bg-white mr-3 md:mr-4 border-2 border-white flex items-center justify-center overflow-hidden relative"
          >
            <nuxt-link v-show="$i18n.locale == 'nl'" :to="switchLocalePath('en')" class="block h-6 w-8 absolute">
              <GBFlag />
            </nuxt-link>
            <nuxt-link v-show="$i18n.locale == 'en'" :to="switchLocalePath('nl')" class="block h-6 w-8 absolute">
              <NLFlag />
            </nuxt-link>
          </div>
          <div
            class="rounded-full w-7 h-7 p-1 bg-white mr-1 md:mr-4 border-2 border-white flex items-center justify-center md:hidden overflow-hidden relative"
            @click="showMenu = !showMenu"
          >
            <Zondicon v-show="!showMenu" icon="menu" class="fill-current w-full" />
            <Zondicon v-show="showMenu" icon="close" class="fill-current w-full" />
          </div>
        </div>
      </div>
    </nav>
    <div class="image-container">
      <img src="~/assets/images/photos/cover.jpg" class="opacity-50" />
    </div>
    <div class="hero"></div>
    <div class="relative flex items-center h-full">
      <div class="container px-4 mx-auto mt-40 mb-48">
        <slot></slot>
      </div>
    </div>
  </header>
</template>

<script>
import Zondicon from 'vue-zondicons'
import DWHLogo from '@/assets/images/dwh_logo.svg'
import NLFlag from '@/assets/images/flags/nl.svg'
import GBFlag from '@/assets/images/flags/gb.svg'

export default {
  components: {
    DWHLogo,
    NLFlag,
    GBFlag,
    Zondicon,
  },
  props: ['small'],
  data() {
    return {
      showMenu: false,
      menu: Object.values(this.$t('menu')).map((item) => {
        return { title: item.title, url: this.constructLocaleUrl(item.url) }
      }),
    }
  },
  methods: {
    constructLocaleUrl(rawUrl) {
      if (rawUrl.includes('#')) {
        if (rawUrl.startsWith('#')) {
          return rawUrl
        }
        const parts = rawUrl.split('#')

        return this.localePath(parts[0]) + `#${parts[1]}`
      }
      return this.localePath(rawUrl)
    },
  },
}
</script>

<style>
@screen md {
  #header {
    height: calc(190px * 4);
  }

  #header.header-small {
    height: calc(120px * 4);
  }
}

@media (min-width: 1900px) {
  #header {
    height: calc(240px * 4);
  }

  #header.header-small {
    height: calc(120px * 4);
  }
}

.hero {
  @apply bg-white absolute w-full;
  transform: skewY(-7deg);
  transform-origin: 0;
  height: 100rem;
  bottom: -100rem;
  z-index: 0;
}

.image-container {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
