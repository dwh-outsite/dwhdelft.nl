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

const boardMembers = (await useAsyncData(() => queryContent('board_members').findOne())).data.value.board

const { image } = useDynamicImages(import.meta.glob('~/assets/images/photos/board/*', { eager: true }))
const requireImage = (name) => image(name.toLowerCase().replace(/ /g, '_'))
</script>

<template>
  <LayoutSmallHeader>{{ t('title') }}</LayoutSmallHeader>

  <section>
    <ElementsContainer class="mb-6 items-start space-y-6 py-12 md:flex md:space-y-0">
      <div class="flex-1 md:mb-0"><PagesContactForm /></div>
      <div class="md:ml-6 md:w-1/3 md:border-l md:pl-6">
        <ContactOptions email="bestuur@dwhdelft.nl" :dark="true" />
        <a href="https://my.dwhdelft.nl">
          <Announcement class="xl:w-2/3">
            {{ t('my') }}
            <span class="block text-xl font-bold">my.dwhdelft.nl</span>
          </Announcement>
        </a>
      </div>
    </ElementsContainer>
  </section>

  <LayoutEmulatedSkewedSection contentClass="bg-brand-100 py-12" triangleClass="border-brand-100">
    <ElementsContainer class="md:flex md:space-x-16">
      <div class="mb-12 md:mb-0 md:pt-16">
        <h2 class="mb-6 text-4xl font-semibold" v-text="t('titles.opening_hours')" />
        <PagesContactOpeningHours />
      </div>
      <div class="flex-1 pb-16 md:-mt-10 md:pb-0">
        <PagesContactMap class="rounded shadow-xl" />
      </div>
    </ElementsContainer>
  </LayoutEmulatedSkewedSection>

  <LayoutEmulatedSkewedSection
    contentClass="bg-brand-800"
    triangleClass="border-brand-800"
    :connect="true"
    :bottom="false"
  >
    <ElementsContainer class="pb-4 pt-12 md:pb-12">
      <h1 class="mb-12 text-5xl font-medium text-white" v-html="t('titles.board')" />

      <div class="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2">
        <BusinessCard
          v-for="member in boardMembers"
          :key="member.name"
          :name="member.name"
          :pronouns="tt(member.pronouns)"
          :role="tt(member.description)"
          :email="member.email"
          :photo="requireImage(member.name)"
        />
      </div>
    </ElementsContainer>
  </LayoutEmulatedSkewedSection>
</template>
