<i18n lang="yaml">
  nl:
    title: Regenboog Actie Plan
    intro:
      - De gemeente Delft heeft een Actieplan Regenboogstad.
      - "Zo zegt zij 'Delft is een regenboogstad vanaf het eerste uur: een gemeente die met haar beleid actief
        inzet op de steun, sociale acceptatie en veiligheid van lesbiennes, homoseksuelen,
        biseksuelen, transgender- en intersekse personen (LHBT+).'"
  en:
    title: Rainbow Action Plan
    intro:
      - The municipality of Delft has a Rainbow City Action Plan.
      - "It reads 'Delft has been a rainbow city from the very beginning: a municipality that actively
        focuses its policy on the support, social acceptance and safety of lesbians, homosexuals,
        bisexuals, transgender- and intersex persons (LGBT+).'"
</i18n>

<script setup>
const { t } = useT()
</script>


<template>
  <LayoutSmallHeader>
    {{ t('title') }}
  </LayoutSmallHeader>

  <LayoutPageIntroText>
    <Markdown v-for="text in t('intro')" :key="text" :content="text" />
  </LayoutPageIntroText>

</template>