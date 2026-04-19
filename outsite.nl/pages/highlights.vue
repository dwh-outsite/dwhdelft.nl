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
  <LayoutSmallHeader triangleClass="border-gray-200">{{ t('title') }}</LayoutSmallHeader>

  <LayoutStraightSection contentBackgroundClass="bg-gray-200" contentClass="pt-8 pb-16">
    <PagesHighlights :excerpts="false" />
  </LayoutStraightSection>
</template>
