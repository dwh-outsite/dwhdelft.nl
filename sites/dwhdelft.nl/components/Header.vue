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
  <BaseHeader :menu="$t('menu')" :small="small">
    <template #logo>
      <DWHLogo class="h-16 fill-current text-white" />
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
  props: { small: { default: false } },
}
</script>
