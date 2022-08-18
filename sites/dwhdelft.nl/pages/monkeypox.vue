<i18n lang="yaml">
nl:
  title: Monkeypox (apenpokken) Vaccinatie
  titles:
    jongenout: 'Zie ook: <strong>Jong&Out Delft</strong>'
    dwh: Wat is DWH?
    form: Aanmelden Vaccinatie
  content:
    intro:
      - |
        DWH werkt samen met het Centrum Seksuele Gezondheid van GGD Haaglanden om preventieve vaccinaties
        voor het apenpokkenvirus uit te delen. Om in aanmerking te komen voor een vaccin, moet je voldoen
        aan minstens één van de volgende voorwaarden:
      - |
        <ul class="list-disc space-y-2">
          <li>Je hebt in het afgelopen halfjaar een SOA gehad</li>
          <li>Je bent in het afgelopen halfjaar gewaarschuwd voor een SOA door een partner</li>
          <li>Je hebt in het afgelopen halfjaar minstens 3 verschillende sekspartners gehad</li>
          <li>Je bent een man die seks heeft met mannen, biseksueel, of actief in die kringen</li>
        </ul>
      - Na je aanmelding zal het Centrum Seksuele Gezondheid telefonisch contact opnemen om jouw risico op
        besmetting te bespreken en indien nodig een afspraak te maken.
    dwh:
      - Deze actie is opgezet door DWH, de LHBT+ vereniging van Delft.
      - DWH is dé onafhankelijke LHBT+ vereniging van Delft en omgeving. We zijn twee dingen; een ontmoetingsplek
        voor LHBT+ mensen en hun vrienden en een groep die actief strijdt voor meer LHBT+ rechten en acceptatie. In die
        tweede rol organiseren we voorlichtingen op scholen, introductiegroepen voor jongeren die net uit de kast zijn en
        allerlei openbare events rond dagen als coming out dag.
      - 'Als ontmoetingsplek zijn we vier dagen per week geopend, met een wekelijkse eettafel, filmavond en twee
        baravonden. Daarnaast hebben we allerlei activiteiten door het jaar heen: queer dansfeesten om de maand,
        bierproeverijen, workshops, pub crawls en zelfs vakanties.'
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
      <p v-for="paragraph in $t('content.intro')" :key="paragraph" class="mb-4" v-html="paragraph" />
    </PageIntroText>

    <SkewedSection triangle-class="border-brand-500" content-class="bg-brand-500" :bottom="false">
      <div
        class="container px-4 mx-auto relative z-10 md:flex justify-center space-y-12 md:space-y-0 md:space-x-8 pt-4 pb-12"
      >
        <div class="bg-brand-100 bg-opacity-95 backdrop-blur p-4 md:p-8 rounded-lg shadow-xl flex-1 mt-[-8.555vw]">
          <h2 class="text-xl font-bold mb-4 text-brand-500 uppercase tracking-wider" v-text="$t('titles.form')" />
          <MonkeypoxForm />
        </div>

        <div class="flex-1 text-white">
          <h1 class="font-medium leading-none text-5xl mb-4" v-html="$t('titles.dwh')"></h1>
          <p v-for="paragraph in $t('content.dwh')" :key="paragraph" class="text-lg mb-4" v-html="paragraph" />
        </div>
      </div>
    </SkewedSection>
  </div>
</template>
