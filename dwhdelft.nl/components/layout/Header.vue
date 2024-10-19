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
      url: book
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
      url: book
    - title: Andersblad
      url: andersblad
    - title: Contact again
      url: '/contact'
    - title: Contact
      url: '/contact'
</i18n>

<script setup>
import DWHLogo from '#shared/assets/images/dwh_logo.svg'

const { t } = useT()
const menu = t('menu')
</script>

<template>
  <LayoutBaseHeader :menu="menu">
    <template #logo>
      <DWHLogo class="h-14 fill-current text-white" />
    </template>
    <template #background>
      <div class="absolute top-0 bottom-0 w-full h-full overflow-hidden">
        <img src="../../assets/images/photos/cover.jpg" class="w-full h-full object-cover opacity-50 blur-sm" />
      </div>
    </template>
    <slot />
  </LayoutBaseHeader>
</template>
