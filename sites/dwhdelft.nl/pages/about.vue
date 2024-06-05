<i18n lang="yaml">
en:
  title: About DWH
  main_text: The association magazine of DWH is published several times a year.
    Earlier editions can be seen here in PDF format. The magazine is (partly) in Dutch.
  history_title: <strong>History</strong> of DWH
nl:
  title: Over DWH
  main_text:
    - DWH is een lhbt-vereniging en belangenorganisatie die zich richt op Delft en omgeving. DWH is een ontmoetingsplek voor lhbt'ers in de regio met wekelijks een eettafel, filmavond en twee baravonden, en daarnaast activiteiten en feesten. Het doel van DWH is het doorbreken van heteronormen, het vergroten van acceptatie en het stimuleren van discussie rond lhbt-onderwerpen. Naast het bieden van een ontmoetingsplek geven ze daarom ook voorlichting op scholen en werken ze samen met andere organisaties om voor zichtbaarheid en discussie te zorgen rond dagen als Coming Out Dag.
    - Lhbt-jongerenvereniging Outsite is onderdeel van DWH. Daarnaast wordt samengewerkt met de Delftse homosportvereniging het Roze Blok en met COC Nederland.
    - DWH is sinds 1985 gevestigd aan de Lange Geer in Delft en geeft enkele keren per jaar een ledenblad, het Andersblad, uit.
  list_title: <strong>Geschiedenis</strong> van DWH
</i18n>

<template>
  <div>
    <SmallHeader>{{ $t('title') }}</SmallHeader>

    <PageIntroText>
      <p v-for="text in $t('main_text')" :key="text" class="mb-4" v-html="text" />
    </PageIntroText>

    <section>
      <div class="container px-4 mx-auto mb-6">
        <h1 class="text-brand-400 font-medium text-5xl" v-html="$t('list_title')" />
      </div>
      <div class="bg-brand-400">
        <div class="container px-4 mx-auto">
          <HistoryTimeline :events="historyEvents" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, app }) {
    return { historyEvents: await $content('history').sortBy('year').fetch() }
  },
}
</script>
