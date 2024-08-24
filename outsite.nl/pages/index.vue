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
  join:
    title: Ready to check out **Outsite**?
  video:
    title: '**Outsite** in 120 seconds'
  instagram:
    title: Updates and upcoming activities
nl:
  hero:
    title: 'Delftse LHBT+ jongerenvereniging'
    subtitle: voor iedereen t/m 28 jaar
    primaryButton: Kom naar Outsite
    secondaryButton: Bekijk Video
  join:
    title: Kennismaken met **Outsite**?
  highlights:
    title: Onze **Hoogtepunten**
    more: Meer hoogtepunten
  video:
    title: '**Outsite** in 120 seconden'
  instagram:
    title: Updates en aankomende activiteiten
</i18n>

<script setup>
import Panda from '../assets/images/panda_cropped.svg'

const { t } = useT()

const instagramChannels = [
  {
    name: 'Outsite',
    subtitle: { nl: 'Donderdagen', en: 'Thursdays' },
    widgetId: '624d8645cce75e45bae0a87c9c761cd6',
    instagram: 'outsite_delft',
  },
]
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
    <ElementsContainer class="py-12">
      <PagesHomeTitle :title="t('join.title')" class="text-center text-white" />
      <PagesHomeJoinOptions />
    </ElementsContainer>
  </section>

  <LayoutSkewedSection class="-mt-48">
    <ElementsContainer class="pt-48">
      <div class="flex items-center mt-12 mb-8">
        <h1 class="text-brand-450 font-medium text-5xl leading-none flex-1">
          <Markdown :content="t('highlights.title')" />
        </h1>
        <nuxt-link :to="localePath('highlights')" class="hidden md:block">
          <ElementsPrimaryButton arrow>
            {{ t('highlights.more') }}
          </ElementsPrimaryButton>
        </nuxt-link>
      </div>

      <PagesHighlights :excerpts="true" />
    </ElementsContainer>

    <template #background>
      <div class="bg-gray-200 h-full w-full" />
    </template>
  </LayoutSkewedSection>

  <section id="video" class="py-16 mb-20">
    <ElementsContainer>
      <PagesHomeTitle :title="t('video.title')" class="text-center" />
      <PagesHomeVideo />
    </ElementsContainer>
  </section>

  <section>
    <ElementsContainer>
      <div class="relative -mb-56 md:mb-0">
        <div class="md:absolute w-full -mt-24">
          <PagesHomeTestimonials class="mx-auto" />
        </div>
      </div>
    </ElementsContainer>
  </section>

  <LayoutEmulatedSkewedSection :bottom="false" contentClass="bg-gray-200" triangleClass="border-gray-200">
    <ElementsContainer class="pt-48 md:pt-8 pb-8">
      <PagesHomeInstagramChannels class="xl:w-2/3 mx-auto" :brands="instagramChannels">
        <template #title>
          <h1 class="tracking-wide font-semibold uppercase text-2xl pt-6 mb-10 text-center">
            {{ t('instagram.title') }}
          </h1>
        </template>
      </PagesHomeInstagramChannels>
    </ElementsContainer>
  </LayoutEmulatedSkewedSection>

  <LayoutStraightSection class="dwh-colors">
    <ElementsContainer class="pb-8">
      <PagesHomeMoreDWH />
    </ElementsContainer>
  </LayoutStraightSection>
</template>
