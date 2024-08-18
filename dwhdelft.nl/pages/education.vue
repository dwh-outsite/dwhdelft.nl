<i18n lang="yaml">
nl:
  title: Voorlichting
  titles:
    jongenout: "Zie ook: **Jong&Out Delft**"
    voorlichting: Hoe ziet een gastles eruit?
    contact: Interesse in een voorlichting?
    educators: Onze **Voorlichters**
  content:
    intro:
      - DWH geeft gastlessen over LHBT+ onderwerpen zoals gender en seksualiteit, met als doel vooroordelen en
        stereotypen daarover weg te nemen. Dit doen onze voorlichters in een interactieve sessie, op basis van door
        Movisie effectief bewezen methoden en onze eigen jarenlange ervaring met voorlichting.
    more:
      - DWH geeft gastlessen over LHBT+ onderwerpen zoals gender en seksualiteit, met als doel vooroordelen en
        stereotypen daarover weg te nemen. Dit doen onze voorlichters in een interactieve sessie, op basis van door
        Movisie effectief bewezen methoden en onze eigen jarenlange ervaring met voorlichting.
      - De voorlichters van DWH zijn een enthousiaste en diverse groep vrijwilligers uit de regio. Ze vertellen
        graag een verhaal over hun ervaring als LHBT+’er, en weten dit te koppelen aan de eigen ervaring die
        leerlingen hebben met vooroordelen of discriminatie. Daarna gaan ze over op een, op de doelgroep afgestemd,
        spel om positieve associaties te creëren met LHBT+ zijn, en zo een gezamenlijke norm op te bouwen tegen
        discriminatie.
      - Wij geven al vele jaren voorlichting op middelbare scholen in Delft, Midden-Delfland, Pijnacker-Nootdorp,
        Rijswijk en incidenteel daarbuiten. Sinds kort geven we ook voorlichting op basisscholen, bij
        sportverenigingen, en op MBO’s.
    jongenout: |-
      Voor jonge LHBT+’ers van 12 en 18 jaar oud organiseert DWH ook maandelijkse Jong&Out bijeenkomsten op elke derde
      zondag van de maand. Elke keer is er een andere activiteit, van levend stratego in de Delftse Hout tot
      spelletjesmiddagen, drag karaoke of waterfietsen.
    voorlichting:
      - Een voorlichting (op het voortgezet onderwijs) wordt gegeven door twee voorlichters, gedurende een of twee
        lesuren.
      - Met een associatiespel worden leerlingen gevraagd alle termen te roepen die ze met LHBT+ associëren,
        zonder dat antwoorden als goed of fout worden aangemerkt – zo blijft het gesprek open. Daarna gaan de
        voorlichters in op de verschillende termen binnen LHBT+ en op de genoemde vooroordelen. Door hun persoonlijke
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
            class="text-lg first:text-2xl md:text-xl mb-4"
            v-html="paragraph"
          />
        </div>
        <div class="lg:w-1/3 xl:w-1/4">
          <nuxt-link :to="localePath('jongenout')">
            <Announcement class="space-y-2">
              <h2 class="font-semibold text-2xl"><Markdown :content="t('titles.jongenout')" /></h2>
              <p class="text-base !mb-4" v-html="t('content.jongenout')" />
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

  <LayoutEmulatedSkewedSection triangle-class="border-brand-800" content-class="bg-brand-800" class="bg-brand-500" :bottom="false">
    <ElementsContainer class="xl:flex justify-center py-12">
      <div class="xl:w-1/2 text-white mb-12 xl:mb-0 xl:pr-6">
        <h1 class="font-medium leading-none text-5xl mb-4" v-html="t('titles.voorlichting')"></h1>
        <p v-for="paragraph in t('content.voorlichting')" :key="paragraph" class="text-lg mb-4" v-html="paragraph" />
      </div>

      <div
        class="flex-1 bg-brand-100 bg-opacity-80 backdrop-blur p-4 xl:p-8 rounded-lg shadow-xl xl:mt-[-14.555vw] xl:ml-6"
      >
        <h2 class="text-xl font-bold mb-4 text-brand-500 uppercase tracking-wider" v-text="t('titles.contact')" />

        <p v-for="paragraph in t('content.contact')" :key="paragraph" class="text-lg mb-4" v-html="paragraph" />

        <PagesEducationForm />
      </div>
    </ElementsContainer>
  </LayoutEmulatedSkewedSection>
</template>
