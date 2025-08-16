<i18n lang="yaml">
en: 
  title: Agenda
  intro: Stay up to date with our activities and events.
  news: We send out a monthly newsletter with upcoming events.
  news_button: Sign up for our newsletter!
  news_link: /nieuwsbrief
nl: 
  title: Agenda
  intro: Blijf op de hoogte van onze activiteiten en evenementen.
  news: We sturen maandelijks een nieuwsbrief met daarin de aankomende evenementen. 
  news_button: Schrijf je in voor onze nieuwsbrief!
  news_link: /nieuwsbrief
</i18n>

<script setup>
const { t } = useT()

// const sheet = "1ckbpfak1ogVU14ks4tpOSO-KSQrG3Zj7K3bR6qs3ltE"
</script>

<template>
  <LayoutSmallHeader>
    {{ t('title') }}
  </LayoutSmallHeader>

  <LayoutPageIntroText>
    <p v-text="t('intro')" />
  </LayoutPageIntroText>

  <PagesAgendaLinkedEvents />

</template>