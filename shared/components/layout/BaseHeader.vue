<script setup>
import { IconMenu, IconClose } from '@iconify-prerendered/vue-zondicons'
import ExternalLinkIcon from '#shared/assets/images/layout/heroicon_external_link.svg'
import NLFlag from '#shared/assets/images/layout/flags/nl.svg'
import GBFlag from '#shared/assets/images/layout/flags/gb.svg'

const props = defineProps({
  menu: { type: Object, default: () => ({}) },
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
  <header id="header" :class="[small ? 'c-header-small' : '', 'relative bg-gray-700']">
    <nav class="absolute z-50 mt-8 w-full">
      <ElementsContainer class="relative flex items-center justify-between">
        <nuxt-link :to="localePath('index')">
          <slot name="logo" />
        </nuxt-link>
        <div
          v-if="menuItems.length && showMenu"
          class="absolute top-16 z-50 w-[calc(100vw-2rem)] rounded-md bg-white/95 px-4 py-1 text-xl text-gray-800 shadow-xl backdrop-blur-xl lg:hidden"
        >
          <nuxt-link
            v-for="item in menuItems"
            :key="item.url"
            :to="item.url"
            class="flex items-center border-[#e8e8e8] py-3 no-underline transition-all [&:not(:last-child)]:border-b"
            :class="isActive(item.url) ? 'text-brand-800 font-bold' : 'hover:text-gray-500'"
            :target="item.url.startsWith('http') ? '_blank' : undefined"
          >
            {{ item.title }}
            <ExternalLinkIcon v-if="item.url.startsWith('http')" class="ml-2 inline size-4" />
          </nuxt-link>
          <slot name="mobile-menu-extension" />
        </div>
        <div
          v-if="menuItems.length"
          class="hidden rounded-full bg-white/10 p-1 text-lg font-semibold text-white shadow backdrop-blur-lg lg:flex"
        >
          <nuxt-link
            v-for="item in menuItems"
            :key="item.url"
            :to="item.url"
            class="flex items-center px-3 py-1 no-underline transition-all hover:rounded-full hover:bg-white/90 hover:text-gray-800"
            :class="isActive(item.url) && 'bg-white/10 rounded-full'"
            :target="item.url.startsWith('http') ? '_blank' : undefined"
          >
            {{ item.title }}
            <ExternalLinkIcon v-if="item.url.startsWith('http')" class="ml-2 inline size-4" />
          </nuxt-link>
        </div>
        <div class="flex items-center space-x-4">
          <div class="rounded-full bg-white/10 p-2 shadow backdrop-blur-lg hover:bg-white/25">
            <div
              class="relative flex size-7 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white"
            >
              <nuxt-link v-show="locale == 'nl'" :to="switchLocalePath('en')" class="absolute block h-6 w-8">
                <GBFlag />
              </nuxt-link>
              <nuxt-link v-show="locale == 'en'" :to="switchLocalePath('nl')" class="absolute block h-6 w-8">
                <NLFlag />
              </nuxt-link>
            </div>
          </div>
          <slot name="menu-extension" />
          <div
            v-if="menuItems.length"
            class="rounded-full bg-white/10 p-2 shadow backdrop-blur-lg hover:bg-white/25 lg:hidden"
          >
            <div
              class="relative flex size-7 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white p-1"
              @click="showMenu = !showMenu"
            >
              <IconMenu v-show="!showMenu" class="w-full fill-current" />
              <IconClose v-show="showMenu" class="w-full fill-current" />
            </div>
          </div>
        </div>
      </ElementsContainer>
    </nav>
    <slot name="background" />
    <div :class="cn('c-triangle-top absolute bottom-0 border-white', triangleClass)" />
    <div class="relative flex h-full items-center">
      <ElementsContainer class="mb-48 mt-40">
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

  #header.c-header-small {
    height: calc(120px * 4);
  }
}

@media (min-width: 1900px) {
  #header {
    height: calc(240px * 4);
  }

  #header.c-header-small {
    height: calc(120px * 4);
  }
}

.c-triangle-top {
  border-bottom-width: 10.555vw; /* 38deg / 360deg * 100vw = 10.555 */
  border-left: 100vw solid transparent;
}
</style>
