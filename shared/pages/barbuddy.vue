<i18n lang="yaml">
en:
  title: Bar Buddies
  description: If you are looking to go to one of our weekly activities but you are not yet familiar with the
    association you can sign up for a bar buddy! A bar buddy is someone who can not only tell you all there is to know
    about us but will also introduce you to new people. That way, the next time you come by there will be friendly
    faces waiting!
  sign_up: Sign up for a bar buddy
  action: Find a bar buddy
  bar_buddies_title: Our **Bar Buddies**
nl:
  title: Barbuddies
  description: Wil jij een keertje langskomen bij een van onze wekelijkse activiteiten maar ben je bang dat je je niet
    meteen op je gemak voelt? Meld je dan aan voor een barbuddy! Een barbuddy is iemand die jou de ins en outs kan
    vertellen over ons, maar ook iemand die jou voor kan stellen aan nieuwe mensen. Zo kom je volgende keer gelijk
    bekenden tegen!
  action: Vind een barbuddy
  sign_up: Aanmelden voor een barbuddy
  bar_buddies_title: Onze **Barbuddies**
</i18n>

<script setup>
const { t, locale } = useT()

const runtimeConfig = useRuntimeConfig()

const { data: barBuddies } = await useAsyncData(() => queryContent('barbuddies').where({
  sites: { $contains: runtimeConfig.public.domain },
  [locale.value]: { $type: 'string' },
}).find())
</script>

<template>
  <LayoutSmallHeader>{{ t('title') }}</LayoutSmallHeader>

  <LayoutPageIntroText>
    <p v-text="t('description')" />
  </LayoutPageIntroText>

  <section class="bg-brand-300 pt-8 pb-12">
    <ElementsContainer>
      <h1 class="text-white text-center font-medium text-5xl mb-8">
        <Markdown :content="t('bar_buddies_title')" />
      </h1>
      <div class="grid md:grid-cols-2 gap-4">
        <div v-for="buddy in barBuddies" :key="buddy.name" >
          <PagesBarbuddyCard :buddy="buddy" />
        </div>
      </div>
    </ElementsContainer>
  </section>

  <section class="bg-gray-200 pt-12 pb-20">
    <ElementsContainer>
      <h2 class="tracking-wide font-semibold uppercase text-2xl mx-2 text-center">
        {{ t('sign_up') }}
      </h2>
      <div class="md:w-2/3 mt-8 mx-auto">
        <PagesBarbuddyForm :barBuddies="barBuddies" />
      </div>
    </ElementsContainer>
  </section>
</template>
