<template>
  <div>
    <header>
      <Header small="true">
        <h1 class="text-4xl text-white font-normal" v-text="content.title" />
      </Header>
    </header>

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
import LanguageWarning from '~/components/LanguageWarning.vue'

export default {
  components: { LanguageWarning },
  async asyncData(context) {
    let showLanguageWarning = false

    const { $content, params, app, error } = context
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

<style>
.content h1 {
  @apply font-bold mt-6 mb-1 text-2xl;
}

.content h2 {
  @apply font-bold mt-2 mb-1 text-xl;
}

.content h3 {
  @apply font-bold;
}

.content p {
  @apply mb-4;
}

.content a {
  @apply text-purple-600;
}

.content a:hover {
  @apply text-purple-800 underline;
}

.content ul {
  @apply mb-3 -mt-3;
}

.content li {
  @apply list-disc mb-1 ml-6;
}
</style>
