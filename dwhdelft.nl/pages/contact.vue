<i18n lang="yaml">
en:
  title: Contact
  titles:
    opening_hours: Opening Hours
    board: Board
  my: Are you a DWH member? Update your personal details and check your open payments at
nl:
  title: Contact
  titles:
    opening_hours: Openingstijden
    board: Bestuur
  my: Lid van DWH? Pas je gegevens aan en check je betalingen op
</i18n>


<script setup>
const { t, tt } = useT()

const boardMembers = (await useAsyncData(() => queryContent('board_members_dwh').findOne())).data.value.board

const { image } = useDynamicImages(import.meta.glob('~/assets/images/photos/board/*', { eager: true }))
const requireImage = (name) => image(name.toLowerCase().replace(/ /g, '_'))
</script>

<template>
  <LayoutSmallHeader>{{ t('title') }}</LayoutSmallHeader>

  <section>
    <ElementsContainer class="py-12 md:flex items-start mb-6">
      <div class="flex-1 md:mb-0"><PagesContactForm /></div>
      <div class="md:w-1/3 md:border-l md:pl-6 md:ml-6">
        <ContactOptions email="bestuur@dwhdelft.nl" :dark="true" />
        <a href="https://my.dwhdelft.nl">
          <Announcement class="xl:w-2/3">
            {{ t('my') }}
            <span class="text-xl font-bold block">my.dwhdelft.nl</span>
          </Announcement>
        </a>
      </div>
    </ElementsContainer>
  </section>

  <LayoutEmulatedSkewedSection content-class="bg-brand-100 py-12" triangle-class="border-brand-100">
    <ElementsContainer class="md:flex md:space-x-16">
      <div class="md:pt-16 mb-12 md:mb-0">
        <h2 class="font-semibold text-4xl mb-6" v-text="t('titles.opening_hours')" />
        <PagesContactOpeningHours />
      </div>
      <div class="flex-1 md:-mt-10 pb-16 md:pb-0">
        <PagesContactMap class="rounded shadow-xl" />
      </div>
    </ElementsContainer>
  </LayoutEmulatedSkewedSection>

  <LayoutEmulatedSkewedSection content-class="bg-brand-800" triangle-class="border-brand-800" :connect="true" :bottom="false">
    <ElementsContainer class="pt-12 pb-4 md:pb-12">
      <h1 class="text-white font-medium text-5xl mb-12" v-html="t('titles.board')" />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <BusinessCard v-for="member in boardMembers" :key="member.name" :name="member.name" :role="tt(member.description)" :email="member.email" :photo="requireImage(member.name)" />
      </div>
    </ElementsContainer>
  </LayoutEmulatedSkewedSection>
</template>
