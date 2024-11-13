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
      to contribute and be part of an amazing community? Become a member.
  invite:
    announcement: 'Come by during one of our bar nights:'
    time: Every Saturday starting at {0}
  membership_button: Sign up now
  instagram: Our Events and UPdates

nl:
  title: MIXUP
  intro: 
    - MIXUP is dè queer uitgaansavond van Delft. Iedere zaterdagavond zijn we vanaf 22:00 open en bijna 
      elke week zijn we meer dan alleen een bar. Drag performances van HAUS of 4D, de beste karaoke van de stad, 
      heerlijke proeverijen, MIXUP Alternative met bands, dansavonden met hitjes van nu of juist je favoriete 
      klassiekers, een hitsig Halloween en andere themafeesten, Eurovisie watch parties en meer! En als we dan toch 
      eens gewoon een bar zijn, is het heel gezellig bijkletsen en misschien een dansje wagen.
    - MIXUP wordt volledig mogelijk gemaakt door een team enthousiaste vrijwilligers van DWH. Ben je enthousiast geworden en wil je 
      bijdragen aan en onderdeel worden van een fantastische community? Wordt dan lid.
  invite:
    announcement: 'Kom gerust langs op onze baravond:'
    time: Elke Zaterdag vanaf {0}
  membership_button: Schrijf je nu in
  instagram: Onze evenementen en UPdates
</i18n>

<script setup>
import { warn } from 'vue';

  const { t, tt } = useT()

  const { data: openingHours } = await useAsyncData(() => queryContent('opening_hours').findOne())
  const barOpeningHours = openingHours.value.events.find((event) => event.day.en === 'Saturday')

  const instagramChannelsMixup = [
    {
      name: 'MIXUP',
      widgetId: '219aedf13a4355fe95c6e27ed1f7386c',
      instagram: 'mixupdelft',
    },
  ]
</script>
  
  
<template>
  <section>
    <div class="bg-[#0A0910]  mx-auto pt-12 pb-24 md:flex">
      <div class="flex-1 px-4 lg:pr-32">
        <div>
          <ElementsParagraphedText
            :paragraphs="t('intro')"
            class="text-lg md:text-xl md:leading-relaxed text-white space-y-4"
          />
          <p v-if="barOpeningHours.announcement" class="mt-3 mb-4 text-brand-500" v-text="tt(barOpeningHours.announcement)" />
          <PagesHomeInvite
            class="my-8 md:my-4"
            :announcement="t('invite.announcement')"
            :time="t('invite.time', [barOpeningHours.start_time])"
          />

          <a href="https://my.dwhdelft.nl/signup">
            <ElementsSecondaryButton class="!text-brand-600" arrow>
              {{ t('membership_button') }}
            </ElementsSecondaryButton>
          </a>
        </div>
      </div>
      <div class="hidden lg:block">
        <div>
          <img src="~/assets/images/photos/mixup/barvisual.jpg" class="w-96" />
        </div>
      </div>
    </div>
  </section>

  <!-- <section>
    <div class="bg-[#E71D73]">

    </div>
  </section> -->

  <LayoutStraightSection contentBackgroundClass="!bg-[#E71D73]" contentClass="md:py-12">
    <PagesHomeInstagramChannels class="xl:w-2/3 mx-auto" :brands="instagramChannelsMixup">
      <template #title>
        <h1 class="text-center text-white font-medium text-5xl mb-6 leading-tight" v-html="t('instagram')" />
      </template>
    </PagesHomeInstagramChannels>
  </LayoutStraightSection>
</template>

