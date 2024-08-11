
<script setup>
const { params } = useRoute()

const { locale } = useT()

const slug = params.slug.join('/').replace(/-/g, '_')

const showLanguageWarning = ref(false)

const content = await useAsyncData(() => queryContent(`pages/${slug}.${locale.value}`).findOne())
  .then(async (result) => {
    if (!result.data.value) {
      showLanguageWarning.value = true

      const fallbackResult = await useAsyncData(() => queryContent(`pages/${slug}.nl`).findOne())
      if (!fallbackResult.data.value) {
        throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
      }

      return fallbackResult
    }
    return result
  })
  .then((result) => result.data.value)

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
