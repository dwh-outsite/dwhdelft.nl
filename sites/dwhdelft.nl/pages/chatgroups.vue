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
      <a href="https://api.whatsapp.com/send?phone=+31637560270" target="_blank" class="text-brand-500">
      association phone (+31 6 3756 0270)</a>.
  categories:
    general: Groups for <strong>announcements</strong>
    community: Groups in our <strong>WhatsApp</strong> communnity
    other: Our <strong>other</strong> platforms
nl:
  title: Chatgroepen
  join: Deelnemen
  main_text:
    - We spreken elkaar buiten de baravonden om natuurlijk ook graag, en voor alllerlei interesses en doelen zijn
      daarom chatgroepen ontstaan. Omdat je maar net moet weten dat die er zijn hebben we hieronder een fabulous
      overzichtje voor je gemaakt! We hebben een aantal chats voor aankondigingen om te horen over alle events, deze
      zijn open voor iedereen! We hebben ook een WhatsApp community voor onze leden.
    - Ben je lid maar nog geen deel van de WhatsApp community? Stuur een berichtje naar de
      <a href="https://dwhdelft.nl/whatsapp" target="_blank" class="text-brand-500">
      verenigingstelefoon (+31 6 3756 0270)</a>.
  categories:
    general: Groepen voor <strong>aankondigingen</strong>
    community: Groepen in onze <strong>WhatsApp</strong> community
    other: Onze <strong>overige</strong> platformen
</i18n>

<template>
  <div>
    <SmallHeader>{{ $t('title') }}</SmallHeader>

    <PageIntroText>
      <p v-for="text in $t('main_text')" :key="text" class="mb-4" v-html="text" />
    </PageIntroText>

    <section class="bg-brand-400 pb-4 md:py-12">
      <div
        v-for="(categoryName, category) in $t('categories')"
        :key="category"
        class="container px-4 mx-auto pt-8 md:pb-12"
      >
        <h1 class="text-white font-medium text-5xl leading-none mb-6" v-html="categoryName" />
        <div class="md:flex flex-wrap mt-2">
          <div v-for="group in chatGroupsByCategory[category]" :key="group.name" class="lg:w-1/2 p-2">
            <ActionCard :title="group.name" class="h-full">
              <template #button>
                <a v-show="group.url" :href="group.url" target="_blank">
                  <PrimaryButton>{{ $t('join') }}</PrimaryButton>
                </a>
              </template>

              <p class="text-xl" v-text="group[`description_${$i18n.locale}`]" />
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
    const chatGroups = await $content(`chatgroups`, { deep: true }).fetch()

    const chatGroupsByCategory = groupBy(
      chatGroups
        .map((group) => {
          return { ...group, category: group.dir.substring(group.dir.lastIndexOf('/') + 1) }
        })
        .sort((a, b) => (a.order || 0) - (b.order || 0)),
      'category'
    )

    return { chatGroupsByCategory }
  },
}
</script>
