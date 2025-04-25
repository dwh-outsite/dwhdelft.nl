<i18n lang="yaml">
en: 
  title: Agenda
  intro: Stay up to date with our activities and events.
nl: 
  title: Agenda
  intro: Blijf op de hoogte van onze activiteiten en evenementen.
</i18n>

<script setup>
const { t } = useT()
</script>

<template>
  <LayoutSmallHeader>
    {{ t('title') }}
  </LayoutSmallHeader>

  <LayoutPageIntroText>
    <p v-text="t('intro')" />
  </LayoutPageIntroText>

</template>