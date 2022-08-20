<i18n lang="yaml">
en:
  title: Monkeypox Vaccination
  titles:
    dwh: About DWH
    form: Vaccination Signup
  content:
    intro:
      - |
        DWH is working together with the Centre for Sexual Health of GGD Haaglanden to give out preventive
        vaccines against monkeypox. To be eligible for a vaccination, you have to meet at least one of the
        following requirements:
      - |
        <ul class="list-disc space-y-2 pl-6 mb-4">
          <li>You have had an STD in the past six months</li>
          <li>You have been warned about an STD by a partner in the last six months</li>
          <li>You have had at least three sexual partners in the last six months, and this wasn't just a recurring, safe group of known contacts</li>
        </ul>
        Also, you must meet both of the following requirements:
        <ul class="list-disc space-y-2 pl-6 mt-4">
          <li>You are a man who has sex with men, bisexual, or sexually active in these circles</li>
          <li>You must live in the Haaglanden area</li>
        </ul>
      - After your application, the Centre for Sexual Health will
        contact you by phone to discuss your risk of infection and schedule an appointment if necessary.
    dwh:
      - This campagin is organised by DWH, the LGBT+ association of Delft.
        Would you like to support us to organize more campaigns like this one?
        <a href="/signup" class="font-bold">Become a member</a> or take a look at the <a href="/support-us" class="font-bold">support us page</a>.
      - DWH is the independent LGBT+ association of Delft and surroundings. We're two things, a meeting place for
        LGBT+ people and their friends and a group that actively pushes for greater LGBT+ rights and acceptance. As the
        latter, we give lectures at schools, have introduction groups for newly out people and organise public events
        arounds dates like coming out day.
      - 'As a meeting place we are open regularly on four nights a week with a weekly dinner, movie night and two bar
        nights. We also organise all sorts of activities throughout the year: queer dance parties every other month,
        beer tastings, workshops, pub crawls and even vacations.'
nl:
  title: Monkeypox (apenpokken) Vaccinatie
  titles:
    dwh: Wat is DWH?
    form: Aanmelden Vaccinatie
  content:
    intro:
      - |
        DWH werkt samen met het Centrum Seksuele Gezondheid van GGD Haaglanden om preventieve vaccinaties
        voor het apenpokkenvirus uit te delen. Om in aanmerking te komen voor een vaccin, moet je voldoen
        aan minstens één van de volgende voorwaarden:
      - |
        <ul class="list-disc space-y-2 pl-6 mb-4">
          <li>Je hebt in het afgelopen halfjaar een SOA gehad</li>
          <li>Je bent in het afgelopen halfjaar gewaarschuwd voor een SOA door een partner</li>
          <li>Je hebt in het afgelopen halfjaar minstens 3 sekspartners gehad, én dit betrof niet alleen een vaste, veilige groep bekenden</li>
        </ul>
        Daarnaast moet je voldoen aan allebei de volgende voorwaarden:
        <ul class="list-disc space-y-2 pl-6 mt-4">
          <li>Je bent een man die seks heeft met mannen, biseksueel, of seksueel actief in die kringen</li>
          <li>Je bent woonachtig in de regio Haaglanden</li>
        </ul>
      - Na je aanmelding zal het Centrum Seksuele Gezondheid telefonisch contact opnemen om jouw risico op
        besmetting te bespreken en indien nodig een afspraak te maken.
    dwh:
      - Deze actie is opgezet door DWH, de LHBT+ vereniging van Delft.
        Wil je ons helpen meer acties zoals deze te organiseren?
        <a href="/signup" class="font-bold">Word lid</a> of kijk op de <a href="/support-us" class="font-bold">steun ons pagina</a>
        hoe je ons nog meer kunt helpen.
      - DWH is dé onafhankelijke LHBT+ vereniging van Delft en omgeving. We zijn twee dingen; een ontmoetingsplek
        voor LHBT+ mensen en hun vrienden en een groep die actief strijdt voor meer LHBT+ rechten en acceptatie. In die
        tweede rol organiseren we voorlichtingen op scholen, introductiegroepen voor jongeren die net uit de kast zijn en
        allerlei openbare events rond dagen als coming out dag.
      - 'Als ontmoetingsplek zijn we vier dagen per week geopend, met een wekelijkse eettafel, filmavond en twee
        baravonden. Daarnaast hebben we allerlei activiteiten door het jaar heen: queer dansfeesten om de maand,
        bierproeverijen, workshops, pub crawls en zelfs vakanties.'
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
