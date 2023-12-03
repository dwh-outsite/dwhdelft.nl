<i18n lang="yaml">
en:
  title: Andersblad
  main_text:
    - The association magazine of DWH is published several times a year.
      We distribute the magazine to our members and to social organisations.
      The Andersblad presents event and activity reports but also editorials on social topics.
      The magazine is (mostly) in Dutch.
    - The first edition of the Andersblad came out in 1989, as the successor of the DWH maandbrief (a monthly newsletter).
      Below, we list the editions since 2006.
      Older editions are available upon request.
  list_title: <strong>Andersblad</strong> Editions
nl:
  title: Andersblad
  main_text:
    - Het verenigingsblad van DWH verschijnt meerdere malen per jaar.
      Het blad wordt gedistribueerd naar leden en maatschappelijke organisaties.
      In het Andersblad worden verslagen van activiteiten en events gedeeld, maar ook opiniestukken over maatschappelijke thema's.
    - Het Andersblad wordt uitgegeven sinds 1989 als opvolger van de DWH maandbrieven.
      Hieronder zijn de edities sinds 2006 in te zien.
      Oudere edities zijn op aanvraag ter inzage beschikbaar.
  list_title: <strong>Andersblad</strong> Edities
</i18n>

<template>
  <div>
    <SmallHeader>{{ $t('title') }}</SmallHeader>

    <PageIntroText>
      <p v-for="text in $t('main_text')" :key="text" class="mb-4" v-html="text" />
    </PageIntroText>

    <section>
      <div class="container px-4 mx-auto mb-6">
        <h1 class="text-brand-500 font-medium text-5xl" v-html="$t('list_title')" />
      </div>
      <div class="bg-brand-500">
        <div class="container px-1 py-6 mx-auto">
          <FileCards google-drive-id="1z_V_JSdyxX9jGH8CmC1ahMCtRk4tlzfM" />
        </div>
      </div>
    </section>
  </div>
</template>
