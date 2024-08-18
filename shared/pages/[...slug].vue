<script setup>
const { params } = useRoute()

const { locale } = useT()

const slug = params.slug.join('/').replace(/-/g, '_')

const showLanguageWarning = ref(false)

const pages = await useAsyncData(() => queryContent('pages').find())
const findPage = (slug, locale) => pages.data.value.find((page) => page._stem === `pages/${slug}.${locale}` || page._stem === `pages/${slug}/index.${locale}`)

const findContent = () => {
  const localePage = findPage(slug, locale.value)

  if (!localePage) {
    showLanguageWarning.value = true

    const nlPage = findPage(slug, 'nl')

    if (!nlPage) {
      throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
    }

    return nlPage
  }

  return localePage
}

const content = findContent()
</script>

<template>
  <div v-if="content">
    <LayoutSmallHeader>{{ content.title }}</LayoutSmallHeader>

    <LanguageWarning v-if="showLanguageWarning" />

    <LayoutPageIntroText>
      <Markdown :content="content" />
    </LayoutPageIntroText>
  </div>
</template>
