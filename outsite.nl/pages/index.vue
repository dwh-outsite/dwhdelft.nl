<i18n lang="yaml">
en:
  hero:
    title: "Delft's LGBTI+ Youth Association"
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
    title: 'Delftse LHBTI+ jongerenvereniging'
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
    <h1 class="text-4xl font-normal text-white" v-text="t('hero.title')" />
    <h2 class="mt-2 text-2xl font-light text-white" v-text="t('hero.subtitle')" />
    <div class="mt-8 flex space-x-4">
      <a href="#join-outsite">
        <ElementsPrimaryButton>{{ t('hero.primaryButton') }}</ElementsPrimaryButton>
      </a>
      <a href="#video">
        <ElementsSecondaryButton>{{ t('hero.secondaryButton') }}</ElementsSecondaryButton>
      </a>
    </div>
  </LayoutHeader>

  <section class="-mb-40 -mt-48 overflow-x-hidden overflow-y-visible pt-48">
    <div class="container mx-auto pb-28 pt-12 sm:pt-16 md:flex md:justify-between">
      <div class="px-4 md:w-1/2">
        <PagesHomeIntro />
      </div>
      <div class="relative overflow-hidden md:w-2/5 md:overflow-visible">
        <Panda class="relative bottom-0 left-5 w-full rotate-12 md:absolute" />
      </div>
    </div>
  </section>

  <LayoutSkewedSectionWithImageBackground class="-mb-52 md:-mb-72">
    <PagesHomeBulletPoints />

    <template #background>
      <div class="size-full bg-gray-400">
        <img src="~/assets/images/photos/cover.jpg" class="size-full object-cover opacity-50 blur-sm" />
      </div>
    </template>
  </LayoutSkewedSectionWithImageBackground>

  <section id="join-outsite" class="relative z-10 bg-brand-200 bg-hero-falling-triangles">
    <ElementsContainer class="py-12">
      <PagesHomeTitle :title="t('join.title')" class="text-center text-white" />
      <PagesHomeJoinOptions />
    </ElementsContainer>
  </section>

  <LayoutSkewedSection class="-mt-48">
    <ElementsContainer class="pt-48">
      <div class="mb-8 mt-12 flex items-center">
        <h1 class="flex-1 text-5xl font-medium leading-none text-brand-450">
          <Markdown :content="t('highlights.title')" />
        </h1>
        <nuxt-link :to="$localePath('highlights')" class="hidden md:block">
          <ElementsPrimaryButton arrow>
            {{ t('highlights.more') }}
          </ElementsPrimaryButton>
        </nuxt-link>
      </div>

      <PagesHighlights :excerpts="true" />
    </ElementsContainer>

    <template #background>
      <div class="size-full bg-gray-200" />
    </template>
  </LayoutSkewedSection>

  <section id="video" class="mb-20 py-16">
    <ElementsContainer>
      <PagesHomeTitle :title="t('video.title')" class="text-center" />
      <PagesHomeVideo />
    </ElementsContainer>
  </section>

  <section>
    <ElementsContainer>
      <div class="relative -mb-56 md:mb-0">
        <div class="-mt-24 w-full md:absolute">
          <PagesHomeTestimonials class="mx-auto" />
        </div>
      </div>
    </ElementsContainer>
  </section>

  <LayoutEmulatedSkewedSection :bottom="false" contentClass="bg-gray-200" triangleClass="border-gray-200">
    <ElementsContainer class="pb-8 pt-48 md:pt-8">
      <PagesHomeInstagramChannels class="mx-auto xl:w-2/3" :brands="instagramChannels">
        <template #title>
          <h1 class="mb-10 pt-6 text-center text-2xl font-semibold uppercase tracking-wide">
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
