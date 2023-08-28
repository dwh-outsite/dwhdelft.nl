<i18n lang="yaml">
en:
  title: Bar Buddies
  description: If you are looking to go to one of our weekly activities but you are not yet familiar with the
    association you can sign up for a bar buddy! A bar buddy is someone who can not only tell you all there is to know
    about us but will also introduce you to new people. That way, the next time you come by there will be friendly
    faces waiting!
  sign_up: Sign up for a bar buddy
  action: Find a bar buddy
  bar_buddies_title: Our <strong>Bar Buddies</strong>
nl:
  title: Barbuddies
  description: Wil jij een keertje langskomen bij een van onze wekelijkse activiteiten maar ben je bang dat je je niet
    meteen op je gemak voelt? Meld je dan aan voor een barbuddy! Een barbuddy is iemand die jou de ins en outs kan
    vertellen over ons, maar ook iemand die jou voor kan stellen aan nieuwe mensen. Zo kom je volgende keer gelijk
    bekenden tegen!
  action: Vind een barbuddy
  sign_up: Aanmelden voor een barbuddy
  bar_buddies_title: Onze <strong>Barbuddies</strong>
</i18n>

<template>
  <div>
    <SmallHeader>
      {{ $t('title') }}
    </SmallHeader>

    <PageIntroText>
      <p v-html="$t('description')" />
    </PageIntroText>

    <section class="bg-brand-300">
      <div class="container px-4 mx-auto pt-8 pb-12">
        <h1 class="text-white text-center font-medium text-5xl mb-8" v-html="$t('bar_buddies_title')" />
        <div class="lg:flex flex-wrap -mx-2 mt-2">
          <div v-for="buddy in barBuddies" :key="buddy.name" class="lg:w-1/2 p-2">
            <BarBuddyCard :buddy="buddy" />
          </div>
        </div>
      </div>
    </section>

    <section id="form" class="bg-gray-200 pt-12 pb-12">
      <div class="mx-auto container">
        <h2 class="tracking-wide font-semibold uppercase text-2xl mx-2 text-center">
          {{ $t('sign_up') }}
        </h2>
        <BarBuddyForm :bar-buddies="barBuddies" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, app }) {
    const barBuddies = await $content('barbuddies')
      .where({ [app.i18n.locale]: { $type: 'string' }, sites: { $contains: 'outsite' } })
      .fetch()

    return { barBuddies }
  },
}
</script>
