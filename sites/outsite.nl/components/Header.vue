<i18n lang="yaml">
en:
  menu:
    - title: Home
      url: index
    - title: Join Outsite
      url: index#join-outsite
    - title: Reservations
      url: book
    - title: EatingOUT
      url: index#eatingout
    - title: Committees
      url: /committees
    - title: Testimonials
      url: testimonials
    - title: Contact
      url: '#contact'
nl:
  menu:
    - title: Home
      url: index
    - title: Join Outsite
      url: index#join-outsite
    - title: Reserveren
      url: book
    - title: EatingOUT
      url: index#eatingout
    - title: Commissies
      url: committees
    - title: Ervaringen
      url: testimonials
    - title: Contact
      url: '#contact'
</i18n>

<template>
  <BaseHeader :menu="$t('menu')" :small="small" :bg="bg">
    <template #logo>
      <OutsiteLogo class="h-16 fill-current text-white" />
    </template>
    <template #mobile-menu-extension>
      <a href="https://dwhdelft.nl" class="no-underline mr-4 my-2 flex items-center">
        <Zondicon icon="link" class="h-5 inline mr-2" />
        <DWHLogo class="inline h-8 fill-current" />
      </a>
    </template>
    <template #menu-extension>
      <a href="https://dwhdelft.nl" class="hidden md:block text-white text-xl font-semibold no-underline mr-4">
        <DWHLogo class="h-8 ml-2 fill-current" />
      </a>
    </template>
    <template #background>
      <div class="video-container">
        <video id="headervid" preload="metadata" muted loop class="opacity-50">
          <source src="/outsite_web_bg.mp4" type="video/mp4" />
        </video>
      </div>
    </template>
    <slot />
  </BaseHeader>
</template>

<script>
import OutsiteLogo from '#/assets/images/outsite_logo.svg?inline'
import DWHLogo from '#/assets/images/dwh_logo.svg?inline'

export default {
  components: { OutsiteLogo, DWHLogo },
  props: { small: { default: false }, bg: {} },
  mounted() {
    window.addEventListener('load', () => {
      document.getElementById('headervid').play()
    })
  },
}
</script>
