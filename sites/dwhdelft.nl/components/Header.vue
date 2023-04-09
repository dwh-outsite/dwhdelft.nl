<i18n lang="yaml">
en:
  menu:
    - title: Home
      url: index
    - title: Bar Buddy
      url: barbuddy
    - title: Education
      url: /education
    - title: Jong&Out
      url: /jongenout
    - title: EatingOUT
      url: index#eatingout
    - title: Andersblad
      url: andersblad
    - title: Contact
      url: '/contact'
nl:
  menu:
    - title: Home
      url: index
    - title: Barbuddy
      url: barbuddy
    - title: Voorlichting
      url: /education
    - title: Jong&Out
      url: /jongenout
    - title: EatingOUT
      url: index#eatingout
    - title: Andersblad
      url: andersblad
    - title: Contact
      url: '/contact'
</i18n>

<template>
  <BaseHeader :menu="$t('menu')" :small="small" :bg="bg">
    <template #logo>
      <DWHLogo class="h-14 fill-current text-white" />
    </template>
    <template #background>
      <div class="image-container">
        <img src="../../../assets/images/photos/cover.jpg" class="opacity-50" />
      </div>
    </template>
    <slot />
  </BaseHeader>
</template>

<script>
import DWHLogo from '#/assets/images/dwh_logo.svg?inline'

export default {
  components: { DWHLogo },
  props: { small: { default: false }, bg: {} },
}
</script>
