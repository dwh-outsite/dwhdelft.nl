<i18n lang="yaml">
en:
  title: Introduction Group
  description: Twice a year Outsite organises introduction groups (the so-called KMG). These groups are a chance to
    not only get to know the association but also to become close to other LGBT+ youth, all under
    supervision of two experienced Outsite members. During nine Thursday evenings, you will share
    coming out stories (if you want to) and are able to learn from each other about being LGBT+.
    Furthermore, you may eat together, visit queer parties together and much more!
  sign_up: Sign up for the introduction group
  next:
    Just like Outsite, the introduction group (KMG) is aimed at youth and young adults with an age of 28 years and under.
    The introduction group takes place on Thursday evenings between 19:00 and 21:00. Because we aim to create a sense of team spirit,
    it is important that all participants can be there all evenings. Therefore, we kindly ask you to block the KMG evenings in your agenda.
    More information about the exact dates will be communicated via e-mail. We are really looking forward to the next KMG and hope to
    see you there! **The next Introduction Group will start in February 2025**.
nl:
  title: Kennismakingsgroepen (KMG)
  description: Twee keer per jaar organiseert Outsite de KMG. In een kennismakingsgroep maak je onder begeleiding
    van twee ervaren leden kennis met de vereniging maar vooral ook met elkaar. Op negen donderdagavonden
    deel je met elkaar je coming-out verhaal (als je dat wil) en kun je veel van elkaar leren over het LHBT+ zijn.
    Bovendien is er gelegenheid om samen te eten, ga je langs een gay feest en nog veel meer!
  sign_up: Aanmelden voor de KMG
  next: Net als Outsite is de KMG gericht op jongeren en jongvolwassenen tot en met 28 jaar. De KMG vindt plaats
    op negen donderdagavonden tussen 19:00 en 21:00. Omdat het voor het groepsgevoel belangrijk is dat iedereen
    er alle avonden bij kan zijn vragen we je om de KMG avonden vrij te houden in je agenda.
    Meer informatie over de exacte data wordt gecommuniceerd via de mail. Wij hebben er alvast heel veel zin in!
    **De volgende KennisMakingsGroep start in februari 2025**.
</i18n>

<script setup>
const { t } = useT()
</script>

<template>
  <LayoutSmallHeader>{{ t('title') }}</LayoutSmallHeader>

  <LayoutPageIntroText>
    <p v-text="t('description')" />
    <Markdown :content="t('next')" />
  </LayoutPageIntroText>

  <LayoutStraightSection contentBackgroundClass="bg-gray-200" contentClass="pt-12 pb-20">
    <h2 class="mx-2 text-center text-2xl font-semibold uppercase tracking-wide">
      {{ t('sign_up') }}
    </h2>
    <div class="mx-auto mt-8 md:w-2/3">
      <PagesKmgForm />
    </div>
  </LayoutStraightSection>
</template>
