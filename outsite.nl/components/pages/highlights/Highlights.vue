<i18n lang="yaml">
en:
  read_more: Read more about this activity
nl:
  read_more: Lees meer over deze activiteit
</i18n>

<script setup>
const props = defineProps({
  excerpts: { type: Boolean, default: false },
})

const { t, locale } = useT()

const { image } = useDynamicImages(import.meta.glob('~/assets/images/photos/highlights/*', { eager: true }))

const { data: highlights } = await useAsyncData(() => queryContent('highlights').find())

const shuffle = (items) => [...items].sort(() => 0.5 - Math.random())

const purpleFridayHighlight = highlights.value.find((highlight) => highlight.image === 'purple_friday')
const visibleHighlights = props.excerpts
  ? shuffle([
      ...(purpleFridayHighlight ? [purpleFridayHighlight] : []),
      ...shuffle(highlights.value.filter((highlight) => highlight.image !== 'purple_friday')).slice(0, 2),
    ])
  : highlights.value
</script>

<template>
  <div :class="[excerpts ? 'space-y-10' : 'space-y-16']">
    <ElementsActionCard
      v-for="(highlight, index) in visibleHighlights"
      :key="highlight.title_en"
      :title="highlight[`title_${locale}`]"
      class="shadow-xl"
      headerClass="xl:h-64 md:w-1/3 overflow-hidden"
      :headerPosition="index % 2 == 0 ? 'left' : 'right'"
      contentClass="p-8"
    >
      <template #header>
        <img :src="image(highlight.image)" class="size-full object-cover" />
      </template>

      <div class="flex flex-1 flex-col justify-between">
        <p class="text-xl" v-text="excerpts ? highlight[`excerpt_${locale}`] : highlight[`description_${locale}`]" />

        <nuxt-link
          v-if="excerpts && highlight.image === 'purple_friday'"
          :to="$localePath('purple-friday')"
          class="text-lg font-semibold text-brand-400 hover:text-brand-500"
        >
          {{ t('read_more') }} &raquo;
        </nuxt-link>
        <a v-else-if="excerpts" :href="$localePath('highlights')" class="text-lg text-brand-400 hover:text-brand-500">
          {{ t('read_more') }} &raquo;
        </a>

        <nuxt-link
          v-if="!excerpts && highlight.image === 'purple_friday'"
          :to="$localePath('purple-friday')"
          class="mt-4 inline-block text-lg font-semibold text-brand-400 hover:text-brand-500"
        >
          {{ t('read_more') }} &raquo;
        </nuxt-link>
      </div>
    </ElementsActionCard>
  </div>
</template>
