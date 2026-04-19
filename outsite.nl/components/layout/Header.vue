<i18n lang="yaml">
en:
  menu:
    - title: Home
      url: index
    - title: Join
      url: index#join-outsite
    - title: Activities
      url: activities
    - title: Testimonials
      url: testimonials
    - title: FAQ
      url: faq
    - title: Contact
      url: '#contact'
  goto: Go to
nl:
  menu:
    - title: Home
      url: index
    - title: Join
      url: index#join-outsite
    - title: Activiteiten
      url: activities
    - title: Ervaringen
      url: testimonials
    - title: FAQ
      url: faq
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
      <a href="https://dwhdelft.nl" class="flex items-center justify-between space-x-2 py-3 hover:text-gray-500">
        <div class="flex items-center space-x-2">
          <span>{{ t('goto') }}</span>
          <DWHLogo class="h-8 fill-current" />
        </div>
        <IconArrowRight class="size-4" />
      </a>
    </template>
    <template #menu-extension>
      <a href="https://dwhdelft.nl" class="hidden text-white md:block">
        <DWHLogo class="h-8 fill-current" />
      </a>
    </template>
    <template #background>
      <div class="absolute inset-y-0 size-full overflow-hidden">
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
