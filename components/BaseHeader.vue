<template>
  <header id="header" :class="[small ? 'header-small' : '', 'relative overflow-hidden bg-gray-700']">
    <nav class="absolute z-50 w-full mt-8">
      <div class="container px-4 mx-auto flex justify-between items-center relative">
        <nuxt-link :to="localePath('index')">
          <slot name="logo" />
        </nuxt-link>
        <div
          v-show="showMenu"
          class="
            md:hidden
            absolute
            z-60
            top-16
            text-white
            backdrop-blur-xl
            bg-white bg-opacity-10
            w-full
            -ml-4
            px-1
            py-2
            space-y-1
            text-lg
            font-semibold
            transition-all
          "
        >
          <nuxt-link
            v-for="item in menuItems"
            :key="item.url"
            :to="item.url"
            class="
              nav-item
              block
              py-1
              px-3
              no-underline
              hover:bg-white hover:bg-opacity-90 hover:text-gray-800
              transition-all
              rounded-full
              border border-opacity-25
            "
          >
            {{ item.title }}
          </nuxt-link>
          <slot name="mobile-menu-extension"></slot>
        </div>
        <div
          class="
            hidden
            md:flex
            p-1
            rounded-full
            text-lg
            font-semibold
            text-white
            backdrop-blur-lg
            bg-white bg-opacity-10
            shadow
          "
        >
          <nuxt-link
            v-for="item in menuItems"
            :key="item.url"
            :to="item.url"
            class="
              nav-item
              block
              py-1
              px-3
              no-underline
              hover:bg-white hover:bg-opacity-90 hover:rounded-full hover:text-gray-800
              transition-all
            "
          >
            {{ item.title }}
          </nuxt-link>
        </div>
        <div class="flex items-center space-x-4">
          <div class="p-2 rounded-full backdrop-blur-lg bg-white bg-opacity-10 hover:bg-opacity-25 shadow">
            <div
              class="
                rounded-full
                w-7
                h-7
                bg-white
                border-2 border-white
                flex
                items-center
                justify-center
                overflow-hidden
                relative
              "
            >
              <nuxt-link v-show="$i18n.locale == 'nl'" :to="switchLocalePath('en')" class="block h-6 w-8 absolute">
                <GBFlag />
              </nuxt-link>
              <nuxt-link v-show="$i18n.locale == 'en'" :to="switchLocalePath('nl')" class="block h-6 w-8 absolute">
                <NLFlag />
              </nuxt-link>
            </div>
          </div>
          <slot name="menu-extension"></slot>
          <div class="md:hidden p-2 rounded-full backdrop-blur-lg bg-white bg-opacity-10 hover:bg-opacity-25 shadow">
            <div
              class="
                rounded-full
                w-7
                h-7
                p-1
                bg-white
                border-2 border-white
                flex
                items-center
                justify-center
                overflow-hidden
                relative
              "
              @click="showMenu = !showMenu"
            >
              <Zondicon v-show="!showMenu" icon="menu" class="fill-current w-full" />
              <Zondicon v-show="showMenu" icon="close" class="fill-current w-full" />
            </div>
          </div>
        </div>
      </div>
    </nav>
    <slot name="background"></slot>
    <div :class="bg ? bg : 'bg-white'" class="hero"></div>
    <div class="relative flex items-center h-full">
      <div class="container px-4 mx-auto mt-40 mb-48">
        <slot></slot>
      </div>
    </div>
  </header>
</template>

<script>
import Zondicon from 'vue-zondicons'
import NLFlag from '#/assets/images/flags/nl.svg?inline'
import GBFlag from '#/assets/images/flags/gb.svg?inline'

export default {
  components: {
    NLFlag,
    GBFlag,
    Zondicon,
  },
  props: ['menu', 'small', 'bg'],
  data() {
    return {
      showMenu: false,
      menuItems: Object.values(this.menu).map((item) => {
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
a.nav-item.nuxt-link-exact-active {
  @apply bg-white bg-opacity-10 rounded-full;
}

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
  @apply absolute w-full;
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

.video-container {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.video-container video {
  min-width: 100%;
  min-height: 100%;
  max-width: none;

  width: auto;
  height: auto;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
