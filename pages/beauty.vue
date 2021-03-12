<i18n lang="yaml">
en:
  title: Beauty Workshops
  main_text:
    - Do you have an interest in makeup but no clue how to get started? You're in the right place! With the <strong>DWH Beauty Workshops</strong> you can learn all about skincare, makeup, and general beauty tips in an inclusive and judgement-free environment.
    - All workshops will be on Zoom, so you'll need your own products to follow along. If you're unsure of what to get, check out our list of suggested products below!
    - Not a member of DWH? Sign up for free at dwhdelft.nl/beautysignup
  categories:
    skincare: 'Part 1: <strong>skincare</strong>'
    CS: Part 2 <strong>coming soon</strong>
nl:
  title: Beauty Workshops
  main_text:
    - Heb jij interesse in makeup maar geen idee hoe je moet beginnen? Dan zit je hier goed! Met de <strong>DWH Beauty Workshops</strong> leer je alles over huidverzorging, makeup, en algemene schoonheidstips in een inclusieve en oordeelvrije omgeving.
    - Alle workshops zijn op Zoom, dus je hebt eigen producten nodig om mee te doen. Als je nog niet weet wat je nodig hebt, bekijk dan onze lijst met voorgestelde producten hieronder!
    - Ben je geen lid van DWH? Meld je dan gratis aan via dwhdelft.nl/beautysignup
  categories:
    skincare: 'Deel 1: <strong>huidverzorging</strong>'
    CS: Deel 2 <strong>coming soon</strong>
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
