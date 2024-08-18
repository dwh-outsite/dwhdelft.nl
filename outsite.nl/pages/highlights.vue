<i18n lang="yaml">
en:
  title: Our Highlights
nl:
  title: Onze Hoogtepunten
</i18n>

<script setup>
const { t } = useT()
</script>

<template>
  <LayoutSmallHeader bg="bg-gray-200">{{ t('title') }}</LayoutSmallHeader>

  <section class="bg-gray-200 pt-8 pb-16">
    <ElementsContainer>
      <PagesHighlights :excerpts="false" />
    </ElementsContainer>
  </section>
</template>
