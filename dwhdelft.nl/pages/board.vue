<i18n lang="yaml">
en:
  title: DWH zoekt nieuwe bestuursleden!
nl:
  title: DWH zoekt nieuwe bestuursleden!
</i18n>

<script setup>
const { t } = useT()

const introContent = (await useAsyncData(() => queryContent('board/intro.nl').findOne())).data

const mainProfiles = (await useAsyncData(() => queryContent('board/main').find())).data
const otherProfiles = (await useAsyncData(() => queryContent('board/other').find())).data
</script>

<template>
  <LayoutSmallHeader>{{ t('title') }}</LayoutSmallHeader>

  <LanguageWarning />

  <LayoutPageIntroText>
    <Markdown :content="introContent" />
  </LayoutPageIntroText>

  <LayoutStraightSection class="mb-12">
    <template #title>
      Verplichte <strong>Functies</strong>
    </template>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      <ElementsActionCard v-for="profile in mainProfiles" :key="profile._path" :title="profile.title" class="bg-white" contentClass="!text-base">
        <Markdown :content="profile" />
      </ElementsActionCard>
    </div>
  </LayoutStraightSection>

  <LayoutStraightSection>
    <template #title>
      Andere <strong>Bestuursfuncties</strong>
    </template>

    <p class="mb-6 text-white text-xl">
      Naast de kerntaken zijn er ook andere rollen die iemand in het bestuur zou kunnen vervullen. Zo zijn daar:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      <ElementsActionCard v-for="profile in otherProfiles" :key="profile._path" :title="profile.title" class="bg-white" contentClass="!text-base">
        <Markdown :content="profile" />
      </ElementsActionCard>
    </div>
  </LayoutStraightSection>
</template>
