<i18n lang="yaml">
en:
  title: Membership Signup
  main_text:
    - By becoming a member you support us in the things that we find important, like the introduction groups, education
      at secondary schools, the movie night, the bar nights and all other activities at DWH.
    - 'As a member you receive the magazine from DWH: the Andersblad, and you can join the EatingOUT where you can enjoy
      a cheap and delicious meal.'
  form_success: We will send you an e-mail soon to confirm your membership.
nl:
  title: Inschrijven als DWH lid
  main_text:
    - Door lid te worden steun je ons in díe dingen die we zo belangrijk vinden, zoals de kennismakingsgroep,
      voorlichting op middelbare scholen, filmavond, baravonden en alle andere activiteiten bij DWH.
    - 'Als lid ontvang je het blad van DWH: het Andersblad en mag je bij de EatingOUT aanschuiven waar je lekker,
      gezellig en goedkoop kunt eten.'
  form_success: We sturen je binnenkort een bevestiging van je lidmaatschap.
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

        <SignupForm :fees-information="feesInformation" />
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
