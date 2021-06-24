<i18n lang="yaml">
en:
  title: Bar Buddies
  description: If you are looking to come by on a bar night but you are not yet familiar with the association
    you can make use of our bar buddy system! A bar buddy is someone who will meet up with you before the bar night
    starts and go there with you together. They can introduce you to the people there and tell you anything you want
    to know about Outsite.
  sign_up: Sign up for a bar buddy
  action: Find a bar buddy
  barbuddies_title: Our <strong>Bar Buddies</strong>
nl:
  title: Barbuddies
  description: Wil jij een keertje langskomen op een baravond maar ben je nog niet bekend met de vereniging? Meld
    je dan aan voor een barbuddy! Een barbuddy is iemand die van tevoren met je afspreekt zodat je samen naar de
    baravond kunt gaan. Die kan je voorstellen aan de andere bezoekers en alles vertellen wat je maar wilt weten
    over Outsite.
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
            <BarBuddyCard :buddy="buddy" @meet="meetWith(buddy)" />
          </div>
        </div>
      </div>
    </section>

    <section id="form" class="bg-gray-200 pt-12 pb-12">
      <div class="mx-auto container">
        <h2 class="tracking-wide font-semibold uppercase text-2xl mx-2 text-center">
          {{ $t('sign_up') }}
        </h2>
        <BarBuddyForm :bar-buddies="barBuddies" :selected="selectedBarBuddy" />
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
  data() {
    return {
      selectedBarBuddy: undefined,
    }
  },
  methods: {
    meetWith(buddy) {
      this.selectedBarBuddy = buddy
      window.scrollTo({ top: document.getElementById('form').offsetTop, behavior: 'smooth' })
    },
  },
}
</script>
