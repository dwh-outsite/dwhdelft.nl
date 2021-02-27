<i18n lang="yaml">
en:
  title: Makeup Workshop
  main_text:
    - Text
    - Text
  categories:
    skincare: <strong>Skincare</strong> products
    skin_and_eyebrows: <strong>Skin</strong> and <strong>eyebrow</strong> makeup
    eyes_and_lips: <strong>Eye</strong> and <strong>lip</strong> makeup
    tools: <strong>Tools</strong>
nl:
  title: Makeup Workshop
  main_text:
    - Text
    - Text
  categories:
    skincare: Producten voor <strong>huidverzorging</strong>
    skin_and_eyebrows: Makeup voor <strong>huid</strong> en <strong>wenkbrauwen</strong>
    eyes_and_lips: Makeup voor <strong>ogen</strong> en <strong>lippen</strong>
    tools: <strong>Tools</strong>
</i18n>

<template>
  <div>
    <SmallHeader>{{ $t('title') }}</SmallHeader>

    <PageIntroText>
      <p v-for="text in $t('main_text')" :key="text" class="mb-4" v-html="text" />
    </PageIntroText>

    <section class="bg-purple-400 pb-4 md:py-12">
      <div
        v-for="(categoryName, category) in $t('categories')"
        :key="category"
        class="container px-4 mx-auto pt-8 md:pb-12"
      >
        <h1 class="text-white font-medium text-5xl leading-none mb-6" v-html="categoryName" />
        <div class="md:flex flex-wrap mt-2">
          <div v-for="group in productsByCategory[category]" :key="group.name" class="lg:w-1/2 p-2">
            <ActionCard :title="group[`name_${$i18n.locale}`]" class="h-full">
              <template v-slot:button></template>

              <p class="text-xl" v-html="group[`description_${$i18n.locale}`]" />
            </ActionCard>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const groupBy = (items, key) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  )

export default {
  async asyncData({ $content, app }) {
    const products = await $content(`makeup`, { deep: true }).fetch()

    const productsByCategory = groupBy(
      products
        .map((group) => {
          return { ...group, category: group.dir.substring(group.dir.lastIndexOf('/') + 1) }
        })
        .sort((a, b) => (a.order > b.order ? 1 : -1)),
      'category'
    )
    return { productsByCategory }
  },
}
</script>
