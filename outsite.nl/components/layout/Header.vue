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
      url: "https://dwhdelft.nl/book"
    - title: Contact
      url: '#contact'
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
      url: "https://dwhdelft.nl/book"
    - title: Contact
      url: '#contact'
</i18n>

<script setup>
import OutsiteLogo from '#shared/assets/images/outsite_logo.svg'
import DWHLogo from '#shared/assets/images/dwh_logo.svg'

defineProps({
  small: { type: Boolean, default: false },
  bg: { type: String },
})

const { t } = useT()
const menu = t('menu')
</script>

<template>
  <LayoutBaseHeader :menu="menu" :small="small" :bg="bg">
    <template #logo>
      <OutsiteLogo class="h-16 fill-current text-white" />
    </template>
    <template #mobile-menu-extension>
      <a href="https://dwhdelft.nl" class="block py-2 px-1">
        <DWHLogo class="h-8 fill-current" />
      </a>
    </template>
    <template #menu-extension>
      <a href="https://dwhdelft.nl" class="hidden md:block text-white">
        <DWHLogo class="h-8 fill-current" />
      </a>
    </template>
    <template #background>
      <div class="absolute top-0 bottom-0 w-full h-full overflow-hidden blur-sm">
        <video id="headervid" preload="metadata" autoplay muted loop class="opacity-50">
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
