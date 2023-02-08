<i18n lang="yaml">
nl:
  title: Voorlichting
  titles:
    jongenout: 'Zie ook: <strong>Jong&Out Delft</strong>'
    voorlichting: Hoe ziet een voorlichting eruit?
    contact: Interesse in een voorlichting?
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
        lesuren. Met een associatiespel worden leerlingen gevraagd alle termen te roepen die ze met LHBT+ associëren,
        zonder dat antwoorden als goed of fout worden aangemerkt – zo blijft het gesprek open. Daarna gaan de
        voorlichters in op de verschillende termen binnen LHBT+ en op de genoemde vooroordelen. Door hun persoonlijke
        verhalen te koppelen aan soortgelijke ervaringen van leerlingen bouwen we aan wederzijds begrip en het wegnemen
        van vooroordelen.
    contact:
      - Interesse in een voorlichting of op zoek naar meer informatie? Laat hieronder je contactgegevens achter, dan
        nemen onze voorlichting coördinatoren contact op.
</i18n>

<template>
  <div>
    <SmallHeader>
      {{ $t('title') }}
    </SmallHeader>

    <PageIntroText :center="false">
      <div class="md:flex md:space-x-12">
        <div class="flex-1">
          <LanguageWarning v-if="$i18n.locale == 'en'" class="mb-12" />
          <p
            v-for="paragraph in $t('content.more')"
            :key="paragraph"
            class="text-lg first:text-2xl md:text-xl mb-4"
            v-html="paragraph"
          />
        </div>
        <div class="md:w-1/4">
          <nuxt-link :to="localePath('jongenout')">
            <Announcement class="space-y-2">
              <h2 class="font-semibold text-2xl" v-html="$t('titles.jongenout')" />
              <p class="text-base" v-html="$t('content.jongenout')" />
              <button class="button-white text-base block">Lees meer &raquo;</button>
            </Announcement>
          </nuxt-link>
        </div>
      </div>
    </PageIntroText>

    <SkewedSection triangle-class="border-brand-500" content-class="bg-brand-500" :bottom="false">
      <div
        class="container px-4 mx-auto relative z-10 md:flex justify-center space-y-12 md:space-y-0 md:space-x-8 pt-4 pb-12"
      >
        <div class="bg-brand-100 bg-opacity-80 backdrop-blur p-4 md:p-8 rounded-lg shadow-xl flex-1 mt-[-8.555vw]">
          <h2 class="text-xl font-bold mb-4 text-brand-500 uppercase tracking-wider" v-text="$t('titles.contact')" />
          <p v-for="paragraph in $t('content.contact')" :key="paragraph" class="text-lg mb-4" v-html="paragraph" />
          <EducationForm />
        </div>

        <div class="flex-1 text-white">
          <h1 class="font-medium leading-none text-5xl mb-4" v-html="$t('titles.voorlichting')"></h1>
          <p v-for="paragraph in $t('content.voorlichting')" :key="paragraph" class="text-lg mb-4" v-html="paragraph" />
        </div>
      </div>
      <Educators class="pb-12" />
    </SkewedSection>
  </div>
</template>
