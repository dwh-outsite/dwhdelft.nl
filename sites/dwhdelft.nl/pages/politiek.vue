<i18n lang="yaml">
nl:
  title: Politiek
</i18n>

<template>
  <div>
    <SmallHeader>{{ $t('title') }}</SmallHeader>

    <LanguageWarning v-if="$i18n.locale == 'en'" />

    <PageIntroText>
      <nuxt-content
        class="text-xl md:text-2xl leading-normal text-gray-800 md:mb-12 content intro-content"
        :document="intro"
      />
    </PageIntroText>

    <section class="bg-purple-400">
      <div class="container px-4 mx-auto pt-8 pb-12">
        <FileCards google-drive-id="1I_FijqO8UD8Gl_pIZpifQ5ggGmIgItpR" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, app }) {
    return {
      intro: await $content(`politics/intro.nl`).fetch(),
    }
  },
}
</script>
