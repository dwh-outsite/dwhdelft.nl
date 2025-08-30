<i18n lang="yaml">
en:
  intro:
    - 'Outsite is here for everybody 28 and under who identifies as LGBTI+. Outsite organises all kinds of
      activities, ranging from drinks every Thursday night and quarterly LGBTI+ parties to trips to other cities where
      we go out together. Outsite is a part of DWH, the LGBTI+ association of Delft.'
    - 'These activities are all organized by our fantastic committees and members! The best way to become acquainted with
      Outsite is to take part in the introduction groups (which we call KMGs) or through the use of the bar buddy
      system: Where we will make sure there is someone ready to show you around and who could introduce you to others.'
  invite:
    announcement: 'Come by during one of our bar nights:'
    time: Every Thursday starting at {0}
    disclaimer: 'Welcome without membership'
nl:
  intro:
    - 'Outsite is er voor iedereen tot en met 28 jaar die zich identificeert als LHBTI+. Er worden allerlei
      activiteiten georganiseerd door vrijwilligers: van een borrel elke donderdagavond en grote LHBTI+ feesten elk
      kwartaal tot gezamenlijk uitgaan in andere steden. Outsite is onderdeel van DWH, de LHBTI+ vereniging van Delft.'
    - 'Al deze activiteiten worden mogelijk gemaakt door onze fantastische commissies en leden! De voornaamste manier om
      kennis te maken met de vereniging is door deel te nemen aan de KennisMakingsGroepen (KMG) of door gebruik te maken
      van de barbuddies: Wij zorgen er dan voor dat er iemand klaar staat wanneer jij langskomt.'
  invite:
    announcement: 'Kom gerust langs op onze baravond:'
    time: Elke donderdag vanaf {0}
    disclaimer: 'Ook welkom zonder lidmaatschap'
</i18n>

<script setup>
const { t, tt } = useT()

const { data: openingHours } = await useAsyncData(() => queryContent('opening_hours').findOne())
const barOpeningHours = openingHours.value.events.find((event) => event.day.en === 'Thursday')
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
