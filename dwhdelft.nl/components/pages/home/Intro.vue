<i18n lang="yaml">
en:
  intro:
    - "DWH is the independent LGBTI+ association of Delft and surroundings. We're two things: a meeting place for
      LGBTI+ people and their friends and a group that actively pushes for greater LGBTI+ rights and acceptance. As the
      latter, we give lectures at schools, have introduction groups for newly out people and organise public events
      arounds dates like coming out day."
    - 'As a meeting place we are open regularly on four nights a week with a weekly dinner, movie night and two bar
      nights. We also organise all sorts of activities throughout the year: queer dance parties every other month,
      beer tastings, workshops, pub crawls and even vacations. See our upcoming events below!'
  invite:
    announcement: 'Come by during one of our bar nights:'
    time: Every Saturday starting at {0}
    disclaimer: 'Welcome without membership'
nl:
  intro:
    - 'DWH is dé onafhankelijke LHBTI+ vereniging van Delft en omgeving. We zijn twee dingen: een ontmoetingsplek
      voor LHBTI+ mensen en hun vrienden en een groep die actief strijdt voor meer LHBTI+ rechten en acceptatie. In die
      tweede rol organiseren we voorlichtingen op scholen, introductiegroepen voor jongeren die net uit de kast zijn en
      allerlei openbare events rond dagen als coming out dag.'
    - 'Als ontmoetingsplek zijn we vier dagen per week geopend, met een wekelijkse eettafel, filmavond en twee
      baravonden. Daarnaast hebben we allerlei activiteiten door het jaar heen: queer dansfeesten om de maand,
      bierproeverijen, workshops, pub crawls en zelfs vakanties. Zie onze aankomende events hieronder!'
  invite:
    announcement: 'Kom gerust langs op onze baravond:'
    time: Elke zaterdag vanaf {0}
    disclaimer: 'Ook welkom zonder lidmaatschap'
</i18n>

<script setup>
const { t, tt } = useT()

const { data: openingHours } = await useAsyncData(() => queryContent('opening_hours').findOne())
const barOpeningHours = openingHours.value.events.find((event) => event.day.en === 'Saturday')
</script>

<template>
  <div>
    <ElementsParagraphedText
      :paragraphs="t('intro')"
      class="space-y-4 text-lg text-gray-800 md:text-xl md:leading-relaxed"
    />
    <p v-if="barOpeningHours.announcement" class="mb-4 mt-3 text-brand-500" v-text="tt(barOpeningHours.announcement)" />
    <PagesHomeInvite
      class="my-8"
      :announcement="t('invite.announcement')"
      :time="t('invite.time', [barOpeningHours.start_time])"
      :disclaimer="t('invite.disclaimer')"
    />
  </div>
</template>
