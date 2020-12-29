<template>
  <div>
    <header>
      <Header small="true">
        <h1 class="text-4xl text-white font-normal" v-text="content.title" />
      </Header>
    </header>

    <ColumnLayout v-if="content.layout === 'column'">
      <nuxt-content class="content" :document="content" />
    </ColumnLayout>
    <ArticleLayout v-if="content.layout === 'article'">
      <nuxt-content class="content" :document="content" />
    </ArticleLayout>
    <div v-else>This layout is not available.</div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const { $content, params, app } = context
    const slug = params.slug
    const content = await $content(`pages/${slug}.${app.i18n.locale}`).fetch()

    return { content }
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
