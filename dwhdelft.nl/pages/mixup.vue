<i18n lang="yaml">
en:
  title: MIXUP
  events: Our UPcoming events
  intro:
    - MIXUP is thé queer nightlife experience of Delft. We open our doors every Saturday at 22:00 and almost
      every week we are more than just a bar. Drag performances of the HAUS of 4D, the city’s best karaoke,
      delicious tastings, MIXUP Alternative with bands, dance nights with popular songs of now and your favorite
      classics, Eurovision watch parties, a spicy Halloween and lots of other themed parties! If you happen to stumble
      upon us when it’s just a barnight, you can have a great chat and perhaps even a dance.
    - MIXUP consists completely of a team of enthusiastic volunteers of DWH. Did we get you excited and do you want
      to contribute and be part of an amazing community? Become a member.
    - Scared to come alone? We can match you with a barbuddy to chat with and introduce you to new people!
  invite:
    announcement: 'Come by during one of our bar nights:'
    time: Every Saturday starting at {0}
  membership_button: Sign up now for DWH
  barbuddy_button: Find a buddy
  instagram: Our Events and UPdates
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
    title: Our Highlights
    events:
      - title: MIXUP Origin
        description: The first ever party under the MIXUP branding was MIXUP Origin, the opening party! Miss Abby OMG gave a wonderful performance and people were living!
        image: highlight-abbyomg
      - title: Summer Party
        description: The weather was hot and the people even hotter! DJ Maarten brought us tropical tunes whilst we could sip summer cocktails and cool off in an actual swimming pool!
        image: highlight-summer-party

nl:
  title: MIXUP
  events: Onze UPkomende evenementen
  intro:
    - MIXUP is dé queer uitgaansavond van Delft. Iedere zaterdagavond zijn we vanaf 22:00 open en bijna
      elke week zijn we meer dan alleen een bar. Drag performances van HAUS of 4D, de beste karaoke van de stad,
      heerlijke proeverijen, MIXUP Alternative met bands, dansavonden met hitjes van nu of juist je favoriete
      klassiekers, een hitsig Halloween en andere themafeesten, Eurovisie watch parties en meer! En als we dan toch
      eens gewoon een bar zijn, is het heel gezellig bijkletsen en misschien een dansje wagen.
    - MIXUP wordt volledig mogelijk gemaakt door een team enthousiaste vrijwilligers van DWH. Ben je enthousiast geworden en wil je
      bijdragen aan en onderdeel worden van een fantastische community? Wordt dan lid.
    - Bang om alleen te komen? We kunnen je aan een barbuddy koppelen om te leren kennen, die je ook aan anderen kan voorstellen!
  invite:
    announcement: 'Kom gerust langs op onze baravond:'
    time: Elke Zaterdag vanaf {0}
  membership_button: Schrijf je nu in bij DWH
  barbuddy_button: Vind een buddy
  instagram: Onze evenementen en UPdates
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
    title: Onze Hoogtepunten
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
    <LayoutSmallHeader triangleClass="border-gray-800">
      {{ t('title') }}
    </LayoutSmallHeader>

    <section>
      <PagesMixupLinkedEvents />
    </section>

    <section>
      <div class="bg-brand-900 text-white text-lg mx-auto pt-12 pb-24 md:flex">
        <ElementsContainer>
          <div class="flex-1 px-4 lg:pr-32">
            <div class="space-y-12">
              <ElementsParagraphedText :paragraphs="t('intro')" class="md:text-xl md:leading-relaxed space-y-4" />
              <p
                v-if="barOpeningHours.announcement"
                class="mt-3 mb-4 text-brand-500"
                v-text="tt(barOpeningHours.announcement)"
              />
              <PagesHomeInvite
                class="my-8 md:my-4"
                :announcement="t('invite.announcement')"
                :time="t('invite.time', [barOpeningHours.start_time])"
              />
              <div class="flex flex-1 space-x-4">
                <div>
                  <a href="https://my.dwhdelft.nl/signup">
                    <ElementsSecondaryButton class="!text-brand-450" arrow>
                      {{ t('membership_button') }}
                    </ElementsSecondaryButton>
                  </a>
                </div>
                <div>
                  <nuxt-link :to="localePath('barbuddy')">
                    <ElementsPrimaryButton class="!text-brand-50" arrow>
                      {{ t('barbuddy_button') }}
                    </ElementsPrimaryButton>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </ElementsContainer>
        <div class="hidden lg:block">
          <div>
            <img src="~/assets/images/photos/mixup/barnight.png" class="w-96" />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="bg-highlights bg-cover bg-center py-10">
        <ElementsContainer>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            <ElementsActionCard v-for="point in t('bulletPoints')" :key="point.title" :title="point.title">
              <template #header>
                <div class="w-full h-40 overflow-hidden mx-auto">
                  <img :src="imageOverviews(point.image)" class="object-cover w-full h-full" />
                </div>
              </template>
              <p class="-mt-3 text-brand-900 text-lg leading-snug" v-text="point.description" />
            </ElementsActionCard>
          </div>
        </ElementsContainer>
      </div>
    </section>

    <section>
      <div class="bg-brand-900 pb-12">
        <ElementsContainer>
          <div class="mx-auto pt-12 pb-8">
            <h1 class="text-center text-white font-medium text-5xl mb-6 leading-tight" v-html="t('highlights.title')" />
          </div>
          <div class="grid grid-cols-[1fr_minmax(0,1280px)_1fr]">
            <div
              v-for="(event, index) in t('highlights.events')"
              :key="event.name"
              class="rounded-2xl md:rounded-full mb-6 bg-white p-4 md:flex items-center space-y-2 md:space-y-0 md:space-x-4 shadow-xl space-y-6 max-w-5xl col-start-2"
              :class="index % 2 !== 0 ? 'ml-auto' : ''"
            >
              <div class="rounded-full h-32 w-32 bg-white overflow-hidden">
                <img :src="imageOverviews(event.image)" class="object-cover h-full" />
              </div>
              <div class="flex-1 md:pr-8">
                <div class="flex space-x-2 items-baseline">
                  <h3 class="text-xl text-brand-450 font-semibold" v-text="event.title" />
                </div>
                <p class="text-brand-900 text-lg" v-html="event.description" />
              </div>
            </div>
          </div>
        </ElementsContainer>
      </div>
    </section>

    <LayoutStraightSection contentBackgroundClass="!bg-brand-450" contentClass="md:py-12">
      <PagesHomeInstagramChannels class="xl:w-2/3 mx-auto" :brands="instagramChannelsMixup">
        <template #title>
          <h1 class="text-center text-white font-medium text-5xl mb-6 leading-tight" v-html="t('instagram')" />
        </template>
      </PagesHomeInstagramChannels>
    </LayoutStraightSection>
  </div>
</template>


<style scoped>
.bg-highlights {
  background-image: url('~/assets/images/photos/mixup/barvisual.jpg');
}
</style>