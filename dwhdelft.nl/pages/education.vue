<i18n lang="yaml">
nl:
  title: Voorlichting
  titles:
    jongenout: 'Zie ook: **Jong&Out Delft**'
    voorlichting: Hoe ziet een gastles eruit?
    contact: Interesse in een voorlichting?
    educators: Onze **Voorlichters**
  content:
    intro:
      - DWH geeft gastlessen over LHBTI+ onderwerpen zoals gender en seksualiteit, met als doel vooroordelen en
        stereotypen daarover weg te nemen. Dit doen onze voorlichters in een interactieve sessie, op basis van door
        Movisie effectief bewezen methoden en onze eigen jarenlange ervaring met voorlichting.
    more:
      - DWH geeft gastlessen over LHBTI+ onderwerpen zoals gender en seksualiteit, met als doel vooroordelen en
        stereotypen daarover weg te nemen. Dit doen onze voorlichters in een interactieve sessie, op basis van door
        Movisie effectief bewezen methoden en onze eigen jarenlange ervaring met voorlichting.
      - De voorlichters van DWH zijn een enthousiaste en diverse groep vrijwilligers uit de regio. Ze vertellen
        graag een verhaal over hun ervaring als LHBTI+’er, en weten dit te koppelen aan de eigen ervaring die
        leerlingen hebben met vooroordelen of discriminatie. Daarna gaan ze over op een, op de doelgroep afgestemd,
        spel om positieve associaties te creëren met LHBTI+ zijn, en zo een gezamenlijke norm op te bouwen tegen
        discriminatie.
      - Wij geven al vele jaren voorlichting op middelbare scholen in Delft, Midden-Delfland, Pijnacker-Nootdorp,
        Rijswijk en incidenteel daarbuiten. Sinds kort geven we ook voorlichting op basisscholen, bij
        sportverenigingen, en op MBO’s.
    jongenout: |-
      Voor jonge LHBTI+’ers van 12 en 18 jaar oud organiseert DWH ook maandelijkse Jong&Out bijeenkomsten op elke derde
      zondag van de maand. Elke keer is er een andere activiteit, van levend stratego in de Delftse Hout tot
      spelletjesmiddagen, drag karaoke of waterfietsen.
    voorlichting:
      - Een voorlichting (op het voortgezet onderwijs) wordt gegeven door twee voorlichters, gedurende een of twee
        lesuren.
      - Met een associatiespel worden leerlingen gevraagd alle termen te roepen die ze met LHBTI+ associëren,
        zonder dat antwoorden als goed of fout worden aangemerkt – zo blijft het gesprek open. Daarna gaan de
        voorlichters in op de verschillende termen binnen LHBTI+ en op de genoemde vooroordelen. Door hun persoonlijke
        verhalen te koppelen aan soortgelijke ervaringen van leerlingen bouwen we aan wederzijds begrip en het wegnemen
        van vooroordelen.
    contact:
      - Interesse in een voorlichting of op zoek naar meer informatie? Laat hieronder je contactgegevens achter, dan
        nemen onze voorlichting coördinatoren contact op.
</i18n>

<script setup>
const { t } = useT()
</script>

<template>
  <LayoutSmallHeader>
    {{ t('title') }}
  </LayoutSmallHeader>

  <section>
    <ElementsContainer>
      <div class="py-8 lg:flex lg:space-x-12">
        <div class="flex-1">
          <LanguageWarning v-if="$i18n.locale == 'en'" class="mb-12" />
          <p
            v-for="paragraph in t('content.more')"
            :key="paragraph"
            class="mb-4 text-lg first:text-2xl md:text-xl"
            v-html="paragraph"
          />
        </div>
        <div class="lg:w-1/3 xl:w-1/4">
          <nuxt-link :to="localePath('jongenout')">
            <Announcement>
              <h2 class="mb-2 text-2xl font-semibold"><Markdown :content="t('titles.jongenout')" /></h2>
              <p class="mb-4 text-base" v-html="t('content.jongenout')" />
              <ElementsSecondaryButton arrow>Lees meer</ElementsSecondaryButton>
            </Announcement>
          </nuxt-link>
        </div>
      </div>
    </ElementsContainer>
  </section>

  <LayoutStraightSection>
    <template #title>
      <Markdown :content="t('titles.educators')" />
    </template>

    <PagesEducationEducators />
  </LayoutStraightSection>

  <LayoutEmulatedSkewedSection
    triangleClass="border-brand-800"
    contentClass="bg-brand-800"
    class="bg-brand-500"
    :bottom="false"
  >
    <ElementsContainer class="justify-center py-12 xl:flex">
      <div class="mb-12 text-white xl:mb-0 xl:w-1/2 xl:pr-6">
        <h1 class="mb-4 text-5xl font-medium leading-none" v-html="t('titles.voorlichting')" />
        <p v-for="paragraph in t('content.voorlichting')" :key="paragraph" class="mb-4 text-lg" v-html="paragraph" />
      </div>

      <div class="flex-1 rounded-lg bg-brand-100/80 p-4 shadow-xl backdrop-blur xl:ml-6 xl:mt-[-14.555vw] xl:p-8">
        <h2 class="mb-4 text-xl font-bold uppercase tracking-wider text-brand-500" v-text="t('titles.contact')" />

        <p v-for="paragraph in t('content.contact')" :key="paragraph" class="mb-4 text-lg" v-html="paragraph" />

        <PagesEducationForm />
      </div>
    </ElementsContainer>
  </LayoutEmulatedSkewedSection>
</template>
