<i18n lang="yaml">
en:
  title: Links
  description: Here is a nifty overview of a ton of DWH resources linked on our website!
  
nl:
  title: Links
  description: Hier is een handig overzicht van veel DWH links die we hebben op onze website!
</i18n>

<template>
  <div>
    <SmallHeader>
      {{ $t('title') }}
    </SmallHeader>

    <PageIntroText>
      <p v-html="$t('description')" />
    </PageIntroText>

    <section>
      <div class="container px-4 mx-auto mb-6">
        <h1 class="text-brand-500 font-medium text-5xl" v-html="$t('bar_buddies_title')" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, app }) {
    const links = [
      {
        
      }
    ]

    return { barBuddies }
  },
}
</script>
