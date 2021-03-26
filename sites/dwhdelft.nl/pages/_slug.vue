<template>
  <div>
    <SmallHeader>{{ content.title }}</SmallHeader>

    <language-warning v-if="showLanguageWarning" />
    <ColumnLayout v-if="content.layout === 'column'">
      <nuxt-content class="content" :document="content" />
    </ColumnLayout>
    <ArticleLayout v-else-if="content.layout === 'article'">
      <nuxt-content class="content" :document="content" />
    </ArticleLayout>
    <div v-else>This layout is not available.</div>
  </div>
</template>

<script>
import LanguageWarning from '../../../components/LanguageWarning.vue'

export default {
  components: { LanguageWarning },
  async asyncData({ $content, params, app, error }) {
    let showLanguageWarning = false

    const slug = params.slug.replace('-', '_')
    const content = await $content(`pages/${slug}.${app.i18n.locale}`)
      .fetch()
      .catch(() => {
        showLanguageWarning = true

        return $content(`pages/${slug}.${app.i18n.defaultLocale}`)
          .fetch()
          .catch(() => {
            error({ statusCode: 404, message: 'Page not found' })
          })
      })

    return { content, showLanguageWarning }
  },
}
</script>
