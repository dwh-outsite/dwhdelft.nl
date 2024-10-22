<i18n lang="yaml">
en:
  menu:
    - title: Home
      url: index
    - title: Join
      url: index#join-outsite
    - title: Committees
      url: committees
    - title: Testimonials
      url: testimonials
    - title: EatingOUT
      url: 'https://dwhdelft.nl/book'
    - title: Contact
      url: '#contact'
  goto: Go to
nl:
  menu:
    - title: Home
      url: index
    - title: Join
      url: index#join-outsite
    - title: Commissies
      url: committees
    - title: Ervaringen
      url: testimonials
    - title: EatingOUT
      url: 'https://dwhdelft.nl/book'
    - title: Contact
      url: '#contact'
  goto: Ga naar
</i18n>

<script setup>
import { IconArrowRight } from '@iconify-prerendered/vue-zondicons'
import OutsiteLogo from '#shared/assets/images/outsite_logo.svg'
import DWHLogo from '#shared/assets/images/dwh_logo.svg'

const { t } = useT()
const menu = t('menu')
</script>

<template>
  <LayoutBaseHeader :menu="menu">
    <template #logo>
      <OutsiteLogo class="h-16 fill-current text-white" />
    </template>
    <template #mobile-menu-extension>
      <a href="https://dwhdelft.nl" class="flex justify-between items-center space-x-2 py-3 hover:text-gray-500">
        <div class="flex items-center space-x-2">
          <span>{{ t('goto') }}</span>
          <DWHLogo class="h-8 fill-current" />
        </div>
        <IconArrowRight class="w-4 h-4" />
      </a>
    </template>
    <template #menu-extension>
      <a href="https://dwhdelft.nl" class="hidden md:block text-white">
        <DWHLogo class="h-8 fill-current" />
      </a>
    </template>
    <template #background>
      <div class="absolute top-0 bottom-0 w-full h-full overflow-hidden">
        <video id="headervid" preload="metadata" autoplay muted loop class="opacity-50 blur-sm">
          <source src="../../assets/images/layout/outsite_web_bg.mp4" type="video/mp4" />
        </video>
      </div>
    </template>
    <slot />
  </LayoutBaseHeader>
</template>

<style scoped>
video {
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
