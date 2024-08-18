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

const visibleHighlights = props.excerpts ? highlights.value.sort(() => 0.5 - Math.random()).slice(0, 3) : highlights.value
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
        <img
          :src="image(highlight.image)"
          class="object-cover w-full h-full"
        />
      </template>

      <div class="flex-1 flex flex-col justify-between">
        <p
          class="text-xl"
          v-text="excerpts ? highlight[`excerpt_${locale}`] : highlight[`description_${locale}`]"
        />

        <a v-if="excerpts" :href="localePath('highlights')" class="text-brand-400 text-lg hover:text-brand-500">
          {{ t('read_more') }} &raquo;
        </a>
      </div>
    </ElementsActionCard>
  </div>
</template>
