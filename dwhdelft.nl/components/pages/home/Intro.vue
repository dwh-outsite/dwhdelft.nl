<i18n lang="yaml">
en:
  intro:
    - "DWH is the independent LGBT+ association of Delft and surroundings. We're two things: a meeting place for
      LGBT+ people and their friends and a group that actively pushes for greater LGBT+ rights and acceptance. As the
      latter, we give lectures at schools, have introduction groups for newly out people and organise public events
      arounds dates like coming out day."
    - 'As a meeting place we are open regularly on four nights a week with a weekly dinner, movie night and two bar
      nights. We also organise all sorts of activities throughout the year: queer dance parties every other month,
      beer tastings, workshops, pub crawls and even vacations. See our upcoming events below!'
  invite:
    announcement: "Come by during one of our bar nights:"
    time: Every Saturday starting at {0}
nl:
  intro:
    - 'DWH is dé onafhankelijke LHBT+ vereniging van Delft en omgeving. We zijn twee dingen: een ontmoetingsplek
      voor LHBT+ mensen en hun vrienden en een groep die actief strijdt voor meer LHBT+ rechten en acceptatie. In die
      tweede rol organiseren we voorlichtingen op scholen, introductiegroepen voor jongeren die net uit de kast zijn en
      allerlei openbare events rond dagen als coming out dag.'
    - 'Als ontmoetingsplek zijn we vier dagen per week geopend, met een wekelijkse eettafel, filmavond en twee
      baravonden. Daarnaast hebben we allerlei activiteiten door het jaar heen: queer dansfeesten om de maand,
      bierproeverijen, workshops, pub crawls en zelfs vakanties. Zie onze aankomende events hieronder!'
  invite:
    announcement: "Kom gerust langs op onze baravond:"
    time: Elke Zaterdag vanaf {0}
</i18n>

<script setup>
const { t, tt } = useT()

const { data: openingHours } = await useAsyncData(() => queryContent('opening_hours').findOne())
const barOpeningHours = openingHours.value.events.find((event) => event.day.en === 'Saturday')
</script>

<template>
  <div>
    <ElementsParagraphedText :paragraphs="t('intro')" class="text-lg md:text-xl md:leading-relaxed text-gray-800 space-y-4" />
    <p
      v-if="barOpeningHours.announcement"
      class="mt-3 mb-4 text-brand-500"
      v-text="tt(barOpeningHours.announcement)"
    />
    <PagesHomeInvite class="my-8 md:my-4" :announcement="t('invite.announcement')" :time="t('invite.time', [barOpeningHours.start_time])" />
  </div>
</template>
