<script setup>
import { IconMenu, IconClose } from '@iconify-prerendered/vue-zondicons'
import ExternalLinkIcon from '#shared/assets/images/layout/heroicon_external_link.svg'
import NLFlag from '#shared/assets/images/layout/flags/nl.svg'
import GBFlag from '#shared/assets/images/layout/flags/gb.svg'

const props = defineProps({
  menu: { type: Object, required: true },
  small: { type: Boolean, default: false },
  triangleClass: { type: String },
})

const { locale } = useT()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()

const route = useRoute()
const isActive = (url) => route.path === url

const menuItems = Object.values(props.menu).map((item) => {
  return { title: item.title, url: constructLocaleUrl(item.url) }
})

function constructLocaleUrl(rawUrl) {
  if (rawUrl.includes('#')) {
    if (rawUrl.startsWith('#')) {
      return rawUrl
    }
    const parts = rawUrl.split('#')

    return localePath(parts[0]) + `#${parts[1]}`
  }
  return localePath(rawUrl)
}

const showMenu = ref(false)
</script>

<template>
  <header id="header" :class="[small ? 'header-small' : '', 'relative bg-gray-700']">
    <nav class="absolute z-50 w-full mt-8">
      <ElementsContainer class="flex justify-between items-center relative">
        <nuxt-link :to="localePath('index')">
          <slot name="logo" />
        </nuxt-link>
        <div
          v-if="showMenu"
          class="lg:hidden absolute z-50 top-16 text-gray-800 backdrop-blur-xl bg-white bg-opacity-95 shadow-xl w-[calc(100vw-2rem)] px-4 py-1 text-xl rounded-md"
        >
          <nuxt-link
            v-for="item in menuItems"
            :key="item.url"
            :to="item.url"
            class="flex items-center no-underline transition-all [&:not(:last-child)]:border-b border-[#e8e8e8] py-3"
            :class="isActive(item.url) ? 'text-brand-800 font-bold' : 'hover:text-gray-500'"
            :target="item.url.startsWith('http') ? '_blank' : undefined"
          >
            {{ item.title }}
            <ExternalLinkIcon v-if="item.url.startsWith('http')" class="inline w-4 h-4 ml-2" />
          </nuxt-link>
          <slot name="mobile-menu-extension" />
        </div>
        <div
          class="hidden lg:flex p-1 rounded-full text-lg font-semibold text-white backdrop-blur-lg bg-white bg-opacity-10 shadow"
        >
          <nuxt-link
            v-for="item in menuItems"
            :key="item.url"
            :to="item.url"
            class="flex items-center py-1 px-3 no-underline hover:bg-white hover:bg-opacity-90 hover:rounded-full hover:text-gray-800 transition-all"
            :class="isActive(item.url) && 'bg-white/10 rounded-full'"
            :target="item.url.startsWith('http') ? '_blank' : undefined"
          >
            {{ item.title }}
            <ExternalLinkIcon v-if="item.url.startsWith('http')" class="inline w-4 h-4 ml-2" />
          </nuxt-link>
        </div>
        <div class="flex items-center space-x-4">
          <div class="p-2 rounded-full backdrop-blur-lg bg-white bg-opacity-10 hover:bg-opacity-25 shadow">
            <div
              class="rounded-full w-7 h-7 bg-white border-2 border-white flex items-center justify-center overflow-hidden relative"
            >
              <nuxt-link v-show="locale == 'nl'" :to="switchLocalePath('en')" class="block h-6 w-8 absolute">
                <GBFlag />
              </nuxt-link>
              <nuxt-link v-show="locale == 'en'" :to="switchLocalePath('nl')" class="block h-6 w-8 absolute">
                <NLFlag />
              </nuxt-link>
            </div>
          </div>
          <slot name="menu-extension" />
          <div class="lg:hidden p-2 rounded-full backdrop-blur-lg bg-white bg-opacity-10 hover:bg-opacity-25 shadow">
            <div
              class="rounded-full w-7 h-7 p-1 bg-white border-2 border-white flex items-center justify-center overflow-hidden relative"
              @click="showMenu = !showMenu"
            >
              <IconMenu v-show="!showMenu" class="fill-current w-full" />
              <IconClose v-show="showMenu" class="fill-current w-full" />
            </div>
          </div>
        </div>
      </ElementsContainer>
    </nav>
    <slot name="background" />
    <div class="triangle-top absolute bottom-0" :class="triangleClass ? triangleClass : 'border-white'" />
    <div class="relative flex items-center h-full">
      <ElementsContainer class="mt-40 mb-48">
        <slot />
      </ElementsContainer>
    </div>
  </header>
</template>

<style scoped>
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

.triangle-top {
  border-bottom-width: 10.555vw; /* 38deg / 360deg * 100vw = 10.555 */
  border-left: 100vw solid transparent;
}
</style>
