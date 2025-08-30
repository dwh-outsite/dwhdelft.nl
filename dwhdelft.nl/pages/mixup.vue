<i18n lang="yaml">
en:
  title: MIXUP
  intro:
    - MIXUP is thé queer nightlife experience of Delft. We open our doors every Saturday at 22:00 and almost
      every week we are more than just a bar. Drag performances of the HAUS of 4D, the city’s best karaoke,
      delicious tastings, MIXUP Alternative with bands, dance nights with popular songs of now and your favorite
      classics, Eurovision watch parties, a spicy Halloween and lots of other themed parties! If you happen to stumble
      upon us when it’s just a barnight, you can have a great chat and perhaps even a dance.
    - MIXUP consists completely of a team of enthusiastic volunteers of DWH. Did we get you excited and do you want
      to contribute and be part of an amazing community? [Become a member](https://my.dwhdelft.nl/signup) (not required to visit us).
    - Scared to come alone? We can [match you with a barbuddy](/en/barbuddy) to chat with and introduce you to new people!
  invite:
    announcement: 'Come by during one of our bar nights:'
    time: Every Saturday starting at {0}
  instagram: MIXUP **Events** and **UPdates**
  bulletPoints:
    - title: Dance Nights
      description: We have drinks together each week and will often have a DJ to get the dance floor moving!
      image: events-dancenights
    - title: Parties
      description: Disco, hard rock, Oktoberfest, Halloween and more... There’s always time for a party.
      image: events-parties
    - title: Drag Shows
      description: Our own drag house HAUS of 4D performs every two months with amazing shows.
      image: events-dragshow
    - title: Events
      description: Karaoke, tastings, vinyl night or a talent show, there is a lot to do on a night at MIXUP.
      image: events-silentdisco
  highlights:
    title: Our **Highlights**
    events:
      - title: MIXUP Origin
        description: The first ever party under the MIXUP branding was MIXUP Origin, the opening party! Miss Abby OMG gave a wonderful performance and people were living!
        image: highlight-abbyomg
      - title: Summer Party
        description: The weather was hot and the people even hotter! DJ Maarten brought us tropical tunes whilst we could sip summer cocktails and cool off in an actual swimming pool!
        image: highlight-summer-party

nl:
  title: MIXUP
  intro:
    - MIXUP is dé queer uitgaansavond van Delft. Iedere zaterdagavond zijn we vanaf 22:00 open en bijna
      elke week zijn we meer dan alleen een bar. Drag performances van HAUS of 4D, de beste karaoke van de stad,
      heerlijke proeverijen, MIXUP Alternative met bands, dansavonden met hitjes van nu of juist je favoriete
      klassiekers, een hitsig Halloween en andere themafeesten, Eurovisie watch parties en meer! En als we dan toch
      eens gewoon een bar zijn, is het heel gezellig bijkletsen en misschien een dansje wagen.
    - MIXUP wordt volledig mogelijk gemaakt door een team enthousiaste vrijwilligers van DWH. Ben je enthousiast geworden en wil je
      bijdragen aan en onderdeel worden van een fantastische community? [Word dan lid](https://my.dwhdelft.nl/signup) (niet verplicht wanneer je ons wilt bezoeken).
    - Bang om alleen te komen? We kunnen je [aan een barbuddy koppelen](https://my.dwhdelft.nl/barbuddy) om te leren kennen, die je ook aan anderen kan voorstellen!
  invite:
    announcement: 'Kom gerust langs op onze baravond:'
    time: Elke zaterdag vanaf {0}
    disclaimer: 'Ook welkom zonder lidmaatschap'
  instagram: MIXUP **Events** en **UPdates**
  bulletPoints:
    - title: Dansavonden
      description: Elke week komen we samen voor drankjes, vaak is er zelfs een DJ om die voetjes op te bewegen!
      image: events-dancenights
    - title: Feesten
      description: Disco, hard rock, Oktoberfest, Halloween en nog veel meer... Er is altijd tijd voor een feestje.
      image: events-parties
    - title: Drag optredens
      description: Ons eigen drag huis HAUS of 4D geeft elke twee maanden geweldige shows
      image: events-dragshow
    - title: Evenementen
      description: Karaoke, proeverijen, vinyl nachten of een talentenshow, er is veel te beleven op een MIXUP avond.
      image: events-silentdisco
  highlights:
    title: Onze **Hoogtepunten**
    events:
      - title: MIXUP Oorsprong
        description: Het allereerste feestje onder de MIXUP banner was MIXUP Origin’s, het openingsfeest! Miss Abby OMG gaf ons een prachtig optreden, het feest was aan!
        image: highlight-abbyomg
      - title: Zomerfeest
        description: Heet weer en nog hetere mensen! DJ Maarten verzorgde tropische tunes terwijl we zomercocktails aan het nippen waren en afkoelde in een daadwerkelijk zwembad!
        image: highlight-summer-party
</i18n>

<script setup>
const { t, tt } = useT()

import MIXUPLogo from '#shared/assets/images/mixup_logo.svg'

const { data: openingHours } = await useAsyncData(() => queryContent('opening_hours').findOne())
const barOpeningHours = openingHours.value.events.find((event) => event.day.en === 'Saturday')

const { image: imageOverviews } = useDynamicImages(import.meta.glob('~/assets/images/photos/mixup/*', { eager: true }))

const instagramChannelsMixup = [
  {
    name: 'MIXUP',
    widgetId: '219aedf13a4355fe95c6e27ed1f7386c',
    instagram: 'mixupdelft',
  },
]
</script>

<template>
  <div class="mixup-colors">
    <LayoutSmallHeader triangleClass="border-gray-900">
      {{ t('title') }}
    </LayoutSmallHeader>

    <PagesMixupLinkedEvents />

    <section class="mx-auto bg-brand-900 pb-24 pt-12 text-lg text-white md:flex">
      <ElementsContainer>
        <div class="flex space-x-16 px-4 lg:space-y-24 lg:pr-32">
          <div class="space-y-4">
            <MIXUPLogo class="mx-auto mb-8 block h-20 md:hidden" />
            <div class="space-y-4 md:text-xl md:leading-relaxed">
              <Markdown v-for="paragraph in t('intro')" :key="paragraph" :content="paragraph" />
            </div>
            <div class="space-y-2">
              <div class="flex flex-wrap items-center justify-center gap-4">
                <MIXUPLogo class="hidden h-20 md:block" />
                <div class="w-full max-w-md md:w-auto">
                  <p
                    v-if="barOpeningHours.announcement"
                    class="mb-4 mt-3 text-brand-500"
                    v-text="tt(barOpeningHours.announcement)"
                  />
                  <PagesHomeInvite
                    class="my-8 md:my-4"
                    :announcement="t('invite.announcement')"
                    :time="t('invite.time', [barOpeningHours.start_time])"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="hidden 2xl:block">
            <div>
              <img src="~/assets/images/photos/mixup/barnight.jpg" />
            </div>
          </div>
        </div>
      </ElementsContainer>
    </section>

    <section class="relative bg-black">
      <div class="c-bg-highlights absolute size-full bg-cover bg-center blur-sm" />
      <BulletPoints
        :bulletPoints="t('bulletPoints')"
        :image="imageOverviews"
        cardClass="bg-gray-800/80 backdrop-blur-xl"
        descriptionClass="text-gray-200"
        class="py-12"
      />
    </section>

    <section class="bg-brand-900 bg-gradient-to-r from-brand-900 via-brand-500/20 to-brand-900 pb-12">
      <ElementsContainer>
        <div class="mx-auto pb-8 pt-12">
          <h1 class="mb-6 text-center text-5xl font-medium leading-tight text-white">
            <Markdown :content="t('highlights.title')" />
          </h1>
        </div>
        <div class="grid gap-6 xl:grid-cols-2">
          <PhotoCard
            v-for="event in t('highlights.events')"
            :key="event.title"
            :title="event.title"
            :description="event.description"
            :image="imageOverviews(event.image)"
          />
        </div>
      </ElementsContainer>
    </section>

    <LayoutStraightSection contentBackgroundClass="bg-brand-450" contentClass="md:py-12">
      <PagesHomeInstagramChannels class="mx-auto xl:w-2/3" :brands="instagramChannelsMixup">
        <template #title>
          <h1 class="mb-6 text-center text-5xl font-medium leading-tight text-white">
            <Markdown :content="t('instagram')" />
          </h1>
        </template>
      </PagesHomeInstagramChannels>
    </LayoutStraightSection>
  </div>
</template>

<style scoped>
.c-bg-highlights {
  background-image: url('~/assets/images/photos/mixup/barvisual.jpg');
}
</style>

<style>
.mixup-colors .content a {
  @apply text-brand-300;
}
</style>
