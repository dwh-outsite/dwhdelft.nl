<i18n lang="yaml">
en:
  hero:
    title: "Delft's LGBT+ Youth Association"
    subtitle: for everyone up to 28 years
    primaryButton: Join Outsite
    secondaryButton: Watch Video
  highlights:
    title: Our **Highlights**
    more: More highlights
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
  highlights:
    title: Onze **Hoogtepunten**
    more: Meer hoogtepunten
  video:
    title: " in 120 seconden"
  instagram:
    title: Updates en aankomende activiteiten
</i18n>

<script setup>
import { IconArrowRight } from '@iconify-prerendered/vue-zondicons'
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
        <Panda class="relative md:absolute bottom-0 left-5 w-full" />
      </div>
    </div>
  </section>

  <LayoutSkewedSectionWithImageBackground class="-mb-52 md:-mb-72">
    <PagesHomeBulletPoints />

    <template #background>
      <div class="bg-gray-400 h-full w-full">
        <img src="~/assets/images/photos/cover.jpg" class="opacity-50 blur-sm w-full h-full object-cover" />
      </div>
    </template>
  </LayoutSkewedSectionWithImageBackground>

  <section id="join-outsite" class="bg-brand-200 relative z-10 bg-hero-falling-triangles">
    <PagesHomeJoinOptions />
  </section>

  <LayoutSkewedSection class="-mt-48">
    <ElementsContainer class="pt-48">
      <div class="flex items-center mt-12 mb-8">
        <h1 class="text-brand-450 font-medium text-5xl leading-none flex-1">
          <Markdown :content="t('highlights.title')" />
        </h1>
        <nuxt-link :to="localePath('highlights')" class="hidden md:block">
          <ElementsPrimaryButton class="flex items-center">
            {{ t('highlights.more') }}
            <IconArrowRight class="w-3 h-3 ml-2" />
          </ElementsPrimaryButton>
        </nuxt-link>
      </div>

      <PagesHomeHighlights :excerpts="true" />
    </ElementsContainer>

<!--
    <a v-show="excerpts" :href="localePath('highlights')" class="md:hidden">
      <button
        class="bg-brand-500 rounded-full px-6 py-3 text-white shadow-lg font-semibold flex items-center hover:bg-brand-400 text-lg mt-2 mx-auto"
      >
        {{ $t('more') }}
        <Zondicon icon="arrow-right" class="fill-current w-3 h-3 ml-2" />
      </button>
    </a> -->

    <template #background>
      <div class="bg-gray-200 h-full w-full" />
    </template>
  </LayoutSkewedSection>

</template>
