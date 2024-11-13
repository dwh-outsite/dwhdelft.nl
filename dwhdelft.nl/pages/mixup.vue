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
  months:
    0: January
    1: February
    2: March
    3: April
    4: May
    5: June
    6: July
    7: August
    8: September
    9: October
    10: November
    11: December

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
  months:
    0: januari
    1: februari
    2: maart
    3: april
    4: mei
    5: juni
    6: juli
    7: augustus
    8: september
    9: oktober
    10: november
    11: december
</i18n>

<script setup>
import { warn } from 'vue';

  const { t, tt } = useT()

  const { data: openingHours } = await useAsyncData(() => queryContent('opening_hours').findOne())
  const barOpeningHours = openingHours.value.events.find((event) => event.day.en === 'Saturday')

  const { image } = useDynamicImages(import.meta.glob('~/assets/images/photos/mixup/icons/*', { eager: true }))
  const requireImage = (icon) => image(icon);
  
  const instagramChannelsMixup = [
    {
      name: 'MIXUP',
      widgetId: '219aedf13a4355fe95c6e27ed1f7386c',
      instagram: 'mixupdelft',
    },
  ]

  const { data: events } = await useAsyncData('events', async() => {
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRvhyi-w-PveKJjx2Mwq1busShI5LKEXqAUOKufoK-vswFNO4W_6tesXb67RO1-biPOmQ0mQJzUy_gY/pub?gid=0&single=true&output=csv';

    
    const response = await fetch(url);
    const text = await response.text();

    const parsedData = text.replace(/\r/g, '').split('\n');
    const firstRowData = parsedData[0].split(',');

    // check if structure is not changed
    const firstRowCheck = ['Date', 'Event name', 'Icon']
    if (firstRowData.length !== firstRowCheck.length) {
      warn('Structure of MIXUP Events Sheet has been altered!')
      // return;
    }
    for (let i = 0; i < firstRowData.length; i++) {
      if (firstRowData[i] !== firstRowCheck[i])
      warn('Structure of MIXUP Events Sheet has been altered!')
      // return;
    }

    // check if event has name and date is still in future
    let mappedData = parsedData.slice(1).map(row => {
      let [dateString, eventName, icon] = row.split(',')

      if (!["bar", "disco", "drag", "karaoke", "music", "tasting"].includes(icon)) {
        icon = "bar";
      }

      return {
        date: new Date(dateString.split('-').reverse().join('/')),
        eventName: eventName,
        icon: icon
      }
    }).filter(event => event.eventName !== '' && event.date instanceof Date && !isNaN(event.date) && event.date > new Date());

    // show maximum of 5 icons
    if (mappedData.length > 5) {
      mappedData = mappedData.slice(5);
    }

    console.log('show', mappedData)

    return mappedData;
  })
</script>
  
  
<template>
  <section>
    <div v-if="events && events.length > 0" class="bg-[#E71D73] flex flex-wrap justify-center">
      <div v-for="(event, index) in events" :key="index" class="w-48 p-4 m-4 bg-black text-white rounded-lg shadow-lg space-y-2">
        <div class="flex justify-center">
          {{ ''.concat(event.date.getDate(), ' ', t(`months.${(event.date.getMonth())}`)) }}
        </div>
        <div class="flex justify-center">
          {{ event.eventName }}
        </div>
        <div class="flex justify-center">
          <img :src="requireImage(event.icon)" alt="Event Icon">
        </div>
        
      </div>
    </div>

  </section>

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

  <section>
    <div class="bg-[#E71D73]">

    </div>
  </section>

  <LayoutStraightSection contentBackgroundClass="!bg-[#E71D73]" contentClass="md:py-12">
    <PagesHomeInstagramChannels class="xl:w-2/3 mx-auto" :brands="instagramChannelsMixup">
      <template #title>
        <h1 class="text-center text-white font-medium text-5xl mb-6 leading-tight" v-html="t('instagram')" />
      </template>
    </PagesHomeInstagramChannels>
  </LayoutStraightSection>
</template>

