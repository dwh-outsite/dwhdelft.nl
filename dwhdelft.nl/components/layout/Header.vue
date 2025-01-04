<i18n lang="yaml">
en:
  menu:
    - title: Home
      url: index
    - title: Outsite
      url: https://outsite.nl
    - title: MIXUP
      url: mixup
    - title: Jong&Out
      url: jongenout
    - title: Education
      url: education
    - title: Andersblad
      url: andersblad
    - title: Contact
      url: contact
nl:
  menu:
    - title: Home
      url: index
    - title: Outsite
      url: https://outsite.nl
    - title: MIXUP
      url: mixup
    - title: Jong&Out
      url: jongenout
    - title: Voorlichting
      url: education
    - title: Andersblad
      url: andersblad
    - title: Contact
      url: contact
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
      <div class="absolute inset-y-0 size-full overflow-hidden">
        <img src="../../assets/images/photos/cover.jpg" class="size-full object-cover opacity-50 blur-sm" />
      </div>
    </template>
    <slot />
  </LayoutBaseHeader>
</template>
