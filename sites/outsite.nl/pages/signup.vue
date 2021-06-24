<i18n lang="yaml">
en:
  title: Membership Signup
  main_text:
    - Outsite is part of the LGBT+ association DWH. By becoming a member you support us in our actions, such as the
      “kennigsmakingsgroep”, sex education in secondary schools, film nights, bar evenings and other activities at
      DWH.
    - 'As a member you receive the magazine from DWH: the Andersblad, and you can join the EatingOUT where you can enjoy
      a cheap and delicious meal.'
nl:
  title: Inschrijven als DWH lid
  main_text:
    - Outsite is onderdeel van de LHBT+ vereniging DWH. Door lid te worden steun je ons in dingen die we belangrijk
      vinden, zoals de kennismakingsgroep, voorlichting op middelbare scholen, filmavonden, baravonden en alle
      andere activiteiten bij de vereniging.
    - 'Als lid ontvang je het blad van DWH: het Andersblad en mag je bij de EatingOUT aanschuiven waar je lekker,
      gezellig en goedkoop kunt eten.'
</i18n>

<template>
  <div>
    <SmallHeader>{{ $t('title') }}</SmallHeader>

    <PageIntroText>
      <p v-for="text in $t('main_text')" :key="text" class="mb-4" v-html="text" />
    </PageIntroText>

    <section id="form" class="bg-gray-200 pt-12 pb-12">
      <div class="mx-auto container">
        <h2 class="tracking-wide font-semibold uppercase text-2xl mx-2 text-center">
          {{ $t('title') }}
        </h2>

        <SignupForm :feesInformation="feesInformation" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, app, error }) {
    return { feesInformation: await $content(`signup/fees.${app.i18n.locale}`).fetch() }
  },
}
</script>
