<i18n lang="yaml">
en:
  title: Education
  main_text:
    - Who doesn’t remember puberty? A period with many changes… Hair begins to grow in places, you start being
      independent from your parents and you fall in love for the first time! But what if you fall in love with someone
      of the same gender?
    - Many LGBT youngsters can’t cope with this and don’t dare to come out because they fear they might be victims of
      bullying. In high schools, the word gay is unfortunately too often used as a term of abuse. This shows that young
      people often don’t have a grasp of what constitutes homosexuality, which sometimes can result in incomprehension
      and harassment.
    - Through education we can show the young people that homosexuality is not that strange. By breaking stereotypes and
      explaining the sexual diversity terms, we get the youth to think actively about homosexuality and its meaning for
      themselves. Experience shows that after being informed, young people have more respect for sexual diversity and
      more importantly, for each other!
    - DWH characterizes itself for having a predominantly young and enthusiastic team of educators. Through this small
      age difference with the high school students it is often easy for them to relate and identify to our educators.
      Do you want DWH to come to your school? Send us an email at
      <a href="mailto:voorlichting@dwhdelft.nl" class="text-purple-500">voorlichting@dwhdelft.nl</a>.
    - See you soon!<br />
      Jeroen en Justin<br />
      Education Coordinators
    - P.S. Are you a member of DWH and would you like to become an educator? Send us an email!
nl:
  title: Voorlichting
  main_text:
    - Wie kan het zich niet herinneren, de puberteit? Een periode waar veel in verandert… Zo begint de groei van
      beharing, maak je je los van je ouders en word je voor het eerst verliefd! Maar wat nou als je op iemand verliefd
      wordt van je eigen geslacht?
    - Veel LHBT+ jongeren weten zich hier geen raad mee en durven het niet te vertellen omdat ze bijvoorbeeld bang zijn
      het doelwit te worden van pesterijen. Op de middelbare scholen wordt, jammer genoeg, het woord homo nog vaak
      genoeg als scheldwoord gebruikt. Het blijkt dat de jongeren vaak geen goed besef hebben van wat homoseksualiteit
      inhoudt, met soms onbegrip en pesterijen tot gevolg.
    - Door voorlichting te geven zien de jongeren in dat homoseksualiteit eigenlijk helemaal niet vreemd is. Zo worden
      de stereotyperingen doorbroken, de termen binnen seksuele diversiteit behandeld en denken de jongeren zelf actief
      na over homoseksualiteit. Uit ervaring blijkt dat de jongeren na de voorlichting meer respect hebben voor seksuele
      diversiteiten en, nog veel belangrijker, voor elkaar!
    - DWH kenmerkt zichzelf door een enthousiast en overwegend jong team aan voorlichters. Door dit kleine
      leeftijdsverschil met de middelbare scholieren is het vaak gemakkelijk voor hen zich te identificeren met onze
      voorlichters. Wilt u dat DWH bij uw school langskomt? Neem dan contact met ons op door te mailen naar
      <a href="mailto:voorlichting@dwhdelft.nl" class="text-purple-500">voorlichting@dwhdelft.nl</a>.
    - Tot snel!<br />
      <em>Jeroen en Justin<br />
      Coördinatoren voorlichting</em>
    - P.S. Lid van DWH en wil je misschien zelf voorlichter worden? Stuur ons dan ook een mail!
</i18n>

<template>
  <div>
    <header>
      <Header small="true">
        <h1 class="text-4xl text-white font-normal" v-text="$t('title')" />
      </Header>
    </header>

    <section class="container mx-auto text-xl md:text-2xl leading-normal text-gray-800">
      <div class="px-4 md:mx-auto py-32 md:mt-0 space-y-6 md:text-columns-2 xl:text-columns-3">
        <p v-for="paragraph in $t('main_text')" :key="paragraph" v-html="paragraph" />
      </div>
    </section>
  </div>
</template>
