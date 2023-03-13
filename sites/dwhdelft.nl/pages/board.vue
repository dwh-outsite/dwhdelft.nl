<i18n lang="yaml">
en:
  title: DWH zoekt nieuwe bestuursleden!
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
  title: DWH zoekt nieuwe bestuursleden!
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
  <div class="pb-8">
    <SmallHeader>{{ $t('title') }}</SmallHeader>

    <LanguageWarning />

    <PageIntroText>
      <nuxt-content class="content" :document="introContent" />
    </PageIntroText>

    <div class="container mx-auto px-4 mb-12">
      <h2 class="text-brand-400 font-medium text-5xl text-center mb-8">Verplichte <strong>Functies</strong></h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="profile in mainProfiles" :key="profile.slug" class="rounded-lg shadow-xl overflow-hidden">
          <div class="bg-brand-500 text-white px-4 py-2">
            <h3 class="font-bold text-xl">{{ profile.title }}</h3>
          </div>
          <div class="p-4 -mb-4">
            <nuxt-content class="content" :document="profile" />
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4">
      <h2 class="text-brand-400 font-medium text-5xl mb-4 text-center">Andere <strong>Bestuursfuncties</strong></h2>
      <p class="mb-4 text-center">
        Naast de kerntaken zijn er ook andere rollen die iemand in het bestuur zou kunnen vervullen. Zo zijn daar:
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="profile in otherProfiles" :key="profile.slug" class="rounded-lg shadow-xl overflow-hidden">
          <div class="bg-brand-500 text-white px-4 py-2">
            <h3 class="font-bold text-xl">{{ profile.title }}</h3>
          </div>
          <div class="p-4 -mb-4">
            <nuxt-content class="content" :document="profile" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LanguageWarning from '#/components/LanguageWarning.vue'

export default {
  components: { LanguageWarning },
  async asyncData({ $content }) {
    const introContent = await $content(`pages/board.nl`).fetch()

    const mainProfiles = await $content('board_profiles/main').fetch()
    const otherProfiles = await $content('board_profiles/other').fetch()

    return { introContent, mainProfiles, otherProfiles }
  },
}
</script>
