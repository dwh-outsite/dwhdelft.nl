<i18n lang="yaml">
en:
  hero:
    title: "Delft's LGBT+ Youth Association"
    subtitle: for everyone up to 28 years
    primaryButton: Join Outsite
    secondaryButton: Watch Video
  description:
    text:
      - "These activities are all organized by our fantastic committees and members! The best way to become acquainted with
        Outsite is to take part in the introduction groups (which we call KMGs) or through the use of the bar buddy
        system: Where we will make sure there is someone ready to show you around and who could introduce you to others."
  video:
    title: " in 120 seconds"
  instagram:
    title: Updates and upcoming activities
nl:
  hero:
    title: 'Delftse LHBT+ jongerenvereniging'
    subtitle: voor iedereen t/m 28 jaar
    primaryButton: Kom naar Outsite
    secondaryButton: Bekijk Video
  description:
    text:
      - "Outsite is er voor iedereen tot en met 28 jaar die zich identificeert als LHBT+. Er worden allerlei
        activiteiten georganiseerd door vrijwilligers: van een borrel elke donderdagavond en grote LHBT+ feesten elk
        kwartaal tot gezamenlijk uitgaan in andere steden. Outsite is onderdeel van DWH, de LHBT+ vereniging van Delft."
  video:
    title: " in 120 seconden"
  instagram:
    title: Updates en aankomende activiteiten
</i18n>

<script setup>
const { t } = useI18n({ useScope: 'local' })
</script>

<template>
  <LayoutHeader>
    <h1 class="text-4xl text-white font-normal" v-text="t('hero.title')" />
    <h2 class="text-2xl text-white mt-2 font-light" v-text="t('hero.subtitle')" />
    <div class="mt-8 flex space-x-4">
      <a href="#join-outsite">
        <ElementsPrimaryButton>{{ t('hero.primaryButton') }}</ElementsPrimaryButton>
      </a>
      <a href="#video">
        <ElementsSecondaryButton>{{ t('hero.secondaryButton') }}</ElementsSecondaryButton>
      </a>
    </div>
  </LayoutHeader>
</template>
