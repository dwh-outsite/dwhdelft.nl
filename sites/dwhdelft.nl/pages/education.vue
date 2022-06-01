<i18n lang="yaml">
nl:
  title: Voorlichting
  titles:
    jongenout: 'Zie ook: <strong>Jong&Out Delft</strong>'
    voorlichting: Hoe ziet een voorlichting eruit?
    contact: Contact
  content:
    intro:
      - 'DWH geeft gastlessen over LHBT+ onderwerpen zoals gender en seksualiteit, met als doel vooroordelen en 
      stereotypen daarover weg te nemen. Dit doen onze voorlichters in een interactieve sessie, op basis van door 
      Movisie effectief bewezen methoden en onze eigen jarenlange ervaring met voorlichting.<br/><br/>'
    more:
      - 'De voorlichters van DWH zijn een enthousiaste en diverse groep vrijwilligers uit de regio. Ze vertellen 
      graag een verhaal over hun ervaring als LHBT+’er, en weten dit te koppelen aan de eigen ervaring die 
      leerlingen hebben met vooroordelen of discriminatie. Daarna gaan ze over op een, op de doelgroep afgestemd, 
      spel om positieve associaties te creëren met LHBT+ zijn, en zo een gezamenlijke norm op te bouwen tegen 
      discriminatie.'
      - 'Wij geven al vele jaren voorlichting op middelbare scholen in Delft, Midden-Delfland, Pijnacker-Nootdorp, 
      Rijswijk en incidenteel daarbuiten. Sinds kort geven we ook voorlichting op basisscholen, bij 
      sportverenigingen, en op MBO’s.'
    jongenout:
      - 'Voor jonge LHBT+’ers van 12 en 18 jaar oud organiseert DWH ook maandelijkse 
      <a class="font-bold" href="/jongenout/">Jong&Out</a> bijeenkomsten op elke derde zondag van de 
      maand. Elke keer is er een andere activiteit, van levend stratego in de Delftse Hout tot spelletjesmiddagen, 
      drag karaoke of waterfietsen.'
      - 'Naast de bijeenkomsten van onze Jong&Out is er ook een chatgroep waar jongeren in een veilige omgeving met
      elkaar kunnen praten. We zien dat ze een hechte vriendengroep vormen en dagelijks van de chat gebruik maken,
      meestal voor luchtige onderwerpen maar ook om tips te vragen of frustraties te uiten.'
      - 'De begeleiders zijn tussen de 19 en 30 jaar en komen uit Delft en omstreken. De begeleiders organiseren 
      de bijeenkomsten met passie om een plek te creëren waar iedereen zich zelf kan zijn.'
      - 'Aan de maandelijkse bijeenkomsten van Jong&Out zitten nooit kosten verbonden, voor extra activiteiten zoals
      het jaarlijkse kamp wordt een kleine bijdrage gevraagd.'
    voorlichting:
      - 'Een voorlichting (op het voortgezet onderwijs) wordt gegeven door twee voorlichters, gedurende een of twee lesuren. Met een associatiespel 
      worden leerlingen gevraagd alle termen te roepen die ze met LHBT+ associëren, zonder dat antwoorden als goed of 
      fout worden aangemerkt – zo blijft het gesprek open. Daarna gaan de voorlichters in op de verschillende termen 
      binnen LHBT+ en op de genoemde vooroordelen. Door hun persoonlijke verhalen te koppelen aan soortgelijke 
      ervaringen van leerlingen bouwen we aan wederzijds begrip en het wegnemen van vooroordelen.'
    contact:
      - 'Interesse in een voorlichting of op zoek naar meer informatie? Laat hieronder je contactgegevens achter, dan 
      nemen onze voorlichting coördinatoren contact op.<br/><br/>'
</i18n>

<template>
  <div>
    <SmallHeader>
      {{ $t('title') }}
    </SmallHeader>

    <div class="w-full py-6">
      <section class="container px-4 mx-auto space-y-6">
        <div class="md:flex md:space-x-12 space-y-6 md:space-y-0">
          <div class="text-2xl">
            <LanguageWarning v-if="$i18n.locale == 'en'" class="mb-12" />
            <p v-for="paragraph in $t('content.intro')" :key="paragraph" v-html="paragraph" />

            <p
              v-for="paragraph in $t('content.more')"
              :key="paragraph"
              class="text-lg md:text-xl md:leading-relaxed text-gray-800 mb-4"
              v-html="paragraph"
            />
          </div>
          <div class="flex-1">
            <div class="md:w-[30.5rem] md:-mt-12 z-50 relative">
              <div class="bg-jongenout text-white rounded-3xl p-6 w-full text-lg space-y-4">
                <h2 class="font-semibold text-4xl mb-2" v-html="$t('titles.jongenout')" />
                <p v-for="paragraph in $t('content.jongenout')" :key="paragraph" v-html="paragraph" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="w-full py-6">
      <section class="container px-4 mx-auto space-y-6">
        <div class="md:flex md:space-x-12 space-y-6 md:space-y-0">
          <div class="text-2xl">
            <h2 class="font-medium text-4xl mb-6 leading-tight" v-html="$t('titles.voorlichting')" />

            <p
              v-for="paragraph in $t('content.voorlichting')"
              :key="paragraph"
              class="text-lg md:text-xl md:leading-relaxed text-gray-800 mb-4"
              v-html="paragraph"
            />
          </div>
        </div>
      </section>
    </div>

    <div class="bg-purple-400 text-white w-full py-6 md:py-12">
      <section class="container px-4 mx-auto space-y-6">
        <div class="md:flex md:space-x-6 space-y-6 md:space-y-0">
          <div class="flex-1 space-y-6">
            <h2 class="font-semibold text-4xl mb-2" v-html="$t('titles.contact')" />
            <p
              v-for="paragraph in $t('content.contact')"
              :key="paragraph"
              class="text-lg md:text-xl"
              v-html="paragraph"
            />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.bg-jongenout {
  @apply bg-cover;
  background-image: url(../../../assets/images/jongenout/background.svg);
}
</style>
