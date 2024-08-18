<i18n lang="yaml">
en:
  title: Chat Groups
  join: Join
  main_text:
    - Talking to each other doesn't stop outside our bar nights, and for all the many interests and goals we have a
      whole lot of chat groups. Because they're not obvious to find otherwise we've created this absolutely fabulous
      overview! We have a few announcement chats to keep up-to-date with everything we do, which are open to join for
      anyone! We also have a WhatsApp community for our members!
    - Are you a member but not yet part of the WhatsApp community? Send a message to the
      [assocation phone (+31 6 3756 0270)](https://dwhdelft.nl/whatsapp).
  categories:
    general: Groups for **announcements**
    community: Groups in our **WhatsApp** communnity
    other: Our **other** platforms
nl:
  title: Chatgroepen
  join: Deelnemen
  main_text:
    - We spreken elkaar buiten de baravonden om natuurlijk ook graag, en voor alllerlei interesses en doelen zijn
      daarom chatgroepen ontstaan. Omdat je maar net moet weten dat die er zijn hebben we hieronder een fabulous
      overzichtje voor je gemaakt! We hebben een aantal chats voor aankondigingen om te horen over alle events, deze
      zijn open voor iedereen! We hebben ook een WhatsApp community voor onze leden.
    - Ben je lid maar nog geen deel van de WhatsApp community? Stuur een berichtje naar de
      [verenigingstelefoon (+31 6 3756 0270)](https://dwhdelft.nl/whatsapp).
  categories:
    general: Groepen voor **aankondigingen**
    community: Groepen in onze **WhatsApp** community
    other: Onze **overige** platforms
</i18n>

<script setup>
import Markdown from '#shared/components/Markdown.vue'

const { t } = useT()

const groupBy = (items, key) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  )

const chatGroups = (await useAsyncData(() => queryContent('chatgroups').find())).data.value

const chatGroupsByCategory = groupBy(
  chatGroups
    .map((chatGroup) => ({ ...chatGroup, category: chatGroup._dir }))
    .sort((a, b) => (a.order || 0) - (b.order || 0)),
  'category'
)
</script>

<template>
  <LayoutSmallHeader>{{ t('title') }}</LayoutSmallHeader>

  <LayoutPageIntroText>
    <Markdown v-for="text in t('main_text')" :key="text" :content="text" />
  </LayoutPageIntroText>

  <LayoutStraightSection
    v-for="(categoryName, category) in t('categories')"
    :key="category"
    class="mb-12"
  >
    <template #title>
      <Markdown :content="categoryName" />
    </template>

    <div class="grid md:grid-cols-2 gap-6">
      <ElementsActionCard v-for="group in chatGroupsByCategory[category]" :key="group.name" :title="group.name">
        <template #button>
          <a v-if="group.url" :href="group.url" target="_blank">
            <ElementsPrimaryButton>{{ t('join') }}</ElementsPrimaryButton>
          </a>
        </template>

        <p v-text="group[`description_${$i18n.locale}`]" />
      </ElementsActionCard>
    </div>
  </LayoutStraightSection>
</template>
