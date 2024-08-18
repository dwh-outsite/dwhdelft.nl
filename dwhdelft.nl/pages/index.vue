<i18n lang="yaml">
en:
  hero:
    title: LGBT+ in Delft and surroundings
    subtitle: DWH is the community for everyone, to meet up with each other, support each other, and to fight for our rights together.
    leftButton: Check out DWH
    rightButton: Opening Hours
nl:
  hero:
    title: LHBT+ in Delft en omgeving
    subtitle: DWH is de community voor iedereen, om elkaar te ontmoeten, elkaar te supporten, en samen voor onze rechten op te komen.
    leftButton: Kom naar DWH
    rightButton: Openingstijden
</i18n>

<script setup>
const { t } = useT()

const instagramChannels = [
  {
    name: 'DWH',
    subtitle: { nl: 'Organisatie', en: 'Organisation' },
    widgetId: '9555f325abc15974a4a4e4ef0eadfa0a',
    instagram: 'dwh_delft',
  },
  {
    name: 'Outsite',
    subtitle: { nl: 'Donderdagen', en: 'Thursdays' },
    widgetId: '624d8645cce75e45bae0a87c9c761cd6',
    instagram: 'outsite_delft',
  },
  {
    name: 'MIXUP',
    subtitle: { nl: 'Zaterdagen', en: 'Saturdays' },
    widgetId: '219aedf13a4355fe95c6e27ed1f7386c',
    instagram: 'mixupdelft',
  },
]
</script>

<template>
  <LayoutHeader>
    <h1 class="text-4xl text-white font-normal" v-text="t('hero.title')" />
    <h2
      class="text-2xl text-white mt-2 font-light md:w-2/3 lg:w-1/2 [text-shadow:0_2px_4px_rgba(0,0,0,0.35)]"
      v-text="t('hero.subtitle')"
    />
    <div class="mt-8 md:flex space-y-4 md:space-y-0 md:space-x-4">
      <a href="#join-dwh" class="block">
        <ElementsPrimaryButton>{{ t('hero.leftButton') }}</ElementsPrimaryButton>
      </a>
      <a href="#recurring_events" class="block">
        <ElementsSecondaryButton>{{ t('hero.rightButton') }}</ElementsSecondaryButton>
      </a>
    </div>
  </LayoutHeader>

  <section class="overflow-x-hidden">
    <div class="container mx-auto pt-12 pb-24 md:flex">
      <div class="flex-1 px-4 lg:pr-32">
        <PagesHomeIntro />
      </div>
      <div class="hidden lg:block">
        <div class="bg-white p-4 border rotate-[5deg] shadow-lg relative z-50 mr-8 -mt-7">
          <img src="~/assets/images/photos/building.jpg" class="w-96" />
        </div>
      </div>
    </div>
  </section>

  <div class="-mt-64">
    <LayoutEmulatedSkewedSection
      contentClass="bg-brand-100 pt-24 md:pt-12 pb-12"
      triangleClass="border-brand-100"
      :bottom="false"
    >
      <PagesHomeBulletPoints />
    </LayoutEmulatedSkewedSection>
  </div>

  <section id="join-dwh" class="bg-brand-500">
    <PagesHomeJoinOptions />
  </section>

  <section id="recurring_events" class="bg-white">
    <PagesHomeRecurringEvents />
  </section>

  <section class="-mt-24">
    <LayoutEmulatedSkewedSection contentClass="bg-brand-800" triangleClass="border-brand-800" :bottom="false">
      <ElementsContainer class="pt-12 pb-16">
        <PagesHomeInstagramChannels class="text-white" :brands="instagramChannels" />
      </ElementsContainer>
    </LayoutEmulatedSkewedSection>
  </section>
</template>
