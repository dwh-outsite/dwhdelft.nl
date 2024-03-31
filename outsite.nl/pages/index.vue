<i18n lang="yaml">
en:
  hero:
    title: "Delft's LGBT+ Youth Association"
    subtitle: for everyone up to 28 years
    primaryButton: Join Outsite
    secondaryButton: Watch Video
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
  video:
    title: " in 120 seconden"
  instagram:
    title: Updates en aankomende activiteiten
</i18n>

<script setup>
import Panda from '../assets/images/panda_cropped.svg'

const { t, tt } = useT()
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

  <section class="overflow-x-hidden overflow-y-visible pt-48 -mt-48 -mb-40">
    <div class="container mx-auto pt-12 sm:pt-16 pb-24 md:flex md:justify-between">
      <div class="md:w-1/2 px-4">
        <PagesHomeIntro />
      </div>
      <div class="md:w-2/5 overflow-hidden md:overflow-visible relative">
        <Panda class="panda relative md:absolute" />
      </div>
    </div>
  </section>
</template>
