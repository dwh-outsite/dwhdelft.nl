<i18n lang="yaml">
en:
  announcement: <strong>DWH</strong> is open 4 nights a week
  button:
    title: <strong>Book a table</strong> for one of our activities
    note: Bookings are mandatory due to COVID-19
  closed_notice:
    title: We are <strong>temporarily closed</strong> due to COVID-19.
  events:
    - name: EatingOUT
      note: Members only
      day: Tuesday
      time: '----'
      description: |-
        On Tuesdays we gather around the dinner table to enjoy a delicious meal cooked by one of our
        members, sometimes with an activity afterwards.
      buttonText: Sign Up
      buttonLink: https://dwhdelft.nl/eatingout
    - name: Fillum
      day: Wednesday
      time: '----'
      description: |-
        The one and only gay movie night in Delft: Come by and watch both newly released movies as well as
        old classics.
      buttonText: Programme <small>(For Members)</small>
      buttonLink: http://homodelft.nl/films/
    - name: Outsite
      note: Max. 28 years old
      day: Thursday
      time: '----'
      description: |-
        Our bar night for everyone 28 and under. Come have a drink at the bar, and check our Outsite
        website for upcoming events and more.
      buttonText: Head to Outsite.nl
      buttonLink: https://outsite.nl/en
    - name: Open Bar Night
      day: Saturday
      time: '----'
      description: |-
        Saturday night is thé queer bar night of Delft. Meet new people, come dance at our regular
        parties, and join one of our many events!
nl:
  announcement: <strong>DWH</strong> is elke week op 4 avonden open
  button:
    title: <strong>Reserveer</strong> nu voor één van onze activiteiten
    note: Reserveren verplicht i.v.m. COVID-19
  closed_notice:
    title: Wij zijn <strong>tijdelijk gesloten</strong> vanwege COVID-19.
  events:
    - name: EatingOUT
      note: Alleen leden
      day: Dinsdag
      time: '----'
      description: |-
        Elke dinsdagavond zitten we gezellig rond de eettafel om van een maaltijd te genieten, bereid door
        één van onze leden, met soms een activiteit achteraf.
      buttonText: Aanmelden
      buttonLink: https://dwhdelft.nl/eatingout
    - name: Fillum
      day: Woensdag
      time: '----'
      description: |-
        Dé gay filmavond van Delft: Elke week is er weer een andere klassieker of juist gloednieuwe film
        aan de beurt.
      buttonText: Programma <small>(voor leden)</small>
      buttonLink: http://homodelft.nl/films/
    - name: Outsite
      note: Max. 28 jaar
      day: Donderdag
      time: '----'
      description: |-
        Onze baravond voor iedereen van 28 of jonger. Kom een drankje doen aan de bar, en check onze
        Outsite website voor aankomende events!
      buttonText: Ga naar Outsite.nl
      buttonLink: https://outsite.nl/
    - name: Open Bar
      day: Zaterdag
      time: '----'
      description: |-
        Zaterdagavond is dé queer baravond van Delft. Ontmoet nieuwe mensen, kom dansen bij een van onze
        feesten en doe mee met een van onze vele events!
</i18n>

<template>
  <div class="container px-4 mx-auto py-16 md:pb-24">
    <h2 class="text-center text-purple-500 font-medium text-5xl mb-12 leading-tight" v-html="$t('announcement')" />
    <div class="md:flex flex-wrap justify-center -mx-2">
      <div v-for="event in $t('events')" :key="event.name" class="p-2 mb-4 xl:mb-0 md:w-1/2 xl:flex-1 xl:w-auto">
        <div class="rounded shadow bg-purple-100 flex flex-col justify-between h-full">
          <div class="p-6 md:mb-6">
            <div class="flex mb-2">
              <h4 class="flex-1 text-purple-500 font-semibold text-2xl" v-text="event.name" />
              <div v-if="event.note" class="ml-4 text-center flex items-center">
                <div class="bg-purple-200 rounded-lg px-2 py-1 text-xs uppercase tracking-wider" v-text="event.note" />
              </div>
            </div>
            <div class="bg-white rounded px-3 mb-4 tracking-wider flex items-center border border-purple-200">
              <Zondicon icon="calendar" class="fill-current h-4 inline mr-2 text-purple-500" />
              <div class="flex-1 py-2">
                {{ event.day }}
              </div>
              <div class="border-l border-purple-200 pl-3 py-2" v-text="event.time" />
            </div>
            <p>
              {{ event.description }}
            </p>
          </div>
          <a
            v-if="event.buttonText"
            :href="event.buttonLink"
            class="bg-purple-500 hover:bg-purple-300 py-3 rounded-b text-white uppercase font-semibold tracking-wider text-center"
            v-html="event.buttonText"
          />
        </div>
      </div>
    </div>
    <div class="mt-16 flex justify-center">
      <div class="shadow bg-purple-500 p-4 rounded inline-flex items-center relative focus:outline-none">
        <div class="text-left flex-1 text-xl font-semibold text-white" v-html="$t('closed_notice.title')" />
      </div>
    </div>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  components: { Zondicon },
}
</script>
