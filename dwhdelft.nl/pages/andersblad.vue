<i18n lang="yaml">
en:
  title: Andersblad
  main_text:
    - The association magazine of DWH is published several times a year.
      We distribute the magazine to our members and to social organisations.
      The Andersblad presents event and activity reports but also editorials on social topics.
      The magazine is (mostly) in Dutch.
    - The first edition of the Andersblad came out in 1989, as the successor of the DWH maandbrief (a monthly newsletter).
      Below, we list the editions of the last ten years.
      Older editions are available upon request (please send an email to [andersblad{'@'}dwhdelft.nl](mailto:andersblad{'@'}dwhdelft.nl)).
  list_title: '**Andersblad** Editions'
nl:
  title: Andersblad
  main_text:
    - Het verenigingsblad van DWH verschijnt meerdere malen per jaar.
      Het blad wordt gedistribueerd naar leden en maatschappelijke organisaties.
      In het Andersblad worden verslagen van activiteiten en events gedeeld, maar ook opiniestukken over maatschappelijke thema's.
    - Het Andersblad wordt uitgegeven sinds 1989 als opvolger van de DWH maandbrieven.
      Hieronder zijn de edities van de laatste tien jaar in te zien.
      Oudere edities zijn op aanvraag ter inzage beschikbaar (via [andersblad{'@'}dwhdelft.nl](mailto:andersblad{'@'}dwhdelft.nl)).
  list_title: '**Andersblad** Edities'
</i18n>

<script setup>
const { t } = useT()
</script>

<template>
  <div>
    <LayoutSmallHeader>{{ t('title') }}</LayoutSmallHeader>

    <LayoutPageIntroText>
      <Markdown v-for="text in t('main_text')" :key="text" :content="text" />
    </LayoutPageIntroText>

    <section>
      <ElementsContainer class="mb-6">
        <h1 class="text-brand-500 font-medium text-5xl">
          <Markdown :content="t('list_title')" />
        </h1>
      </ElementsContainer>
      <div class="bg-brand-500">
        <ElementsContainer class="px-1 py-6">
          <PagesAndersbladFileCards google-drive-id="1z_V_JSdyxX9jGH8CmC1ahMCtRk4tlzfM" />
        </ElementsContainer>
      </div>
    </section>
  </div>
</template>
