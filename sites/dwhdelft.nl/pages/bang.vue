<i18n lang="yaml">
en:
  title: Out with a Bang
  title_label: Events
  description:
    - Time to make up some lost time!
      We say goodbye to the lockdown times and go out with a bang at midnight to bring the birth of a new age on <strong>July 23rd</strong>.
      With your ticket to this New Year's Eve LGBT+ party you will get some nice bubbly drinks and we will make up for last year's missed parties and drinks.
      There is a limited amount of <strong>early bird</strong> tickets available for a reduced price so make sure to get yours quick!
      After you've ordered your ticket, don't forget to think about your <strong>casual chique outfit!</strong>
    - More details follow later, keep an eye on our social media and your email for more information.
    - '<strong>Please note:</strong> For this event a corona admission ticket is required.
      You can get this by getting tested within 40 hours prior to the party
      (<a href="https://testenvoortoegang.nl" target="_blank" class="underline">testenvoortoegang.nl</a>)
      or by having been fully vaccinated for more than two weeks.
      When you purchase a ticket, you will receive more detailed information by email soon.'
  faq_categories:
    general: General
    tickets: Tickets
    corona: COVID-19
nl:
  title: Out with a Bang
  title_label: Events
  description:
    - Tijd om wat verloren tijd in te halen!
      We sluiten een periode af and go out with a bang om middernacht een nieuw tijdperk in op <strong>23 juli</strong>.
      Met je ticket krijg je bubbels en halen we afgelopen oud en nieuw in tijdens het LHBT+ feest (vanaf 18 jaar).
      Er zijn een beperkt aantal <strong>early bird</strong> tickets beschikbaar voor een gereduceerde prijs, dus wees er snel bij!
      Vergeet niet na het kopen van je ticket alvast na te gaan denken over je <strong>casual chique outfit</strong>.
    - Meer details over het feest volgen snel, houd daarvoor onze socials én je mail in de gaten na het kopen van een ticket.
    - '<strong>Let op:</strong> voor dit evenement is een <strong>corona toegangsbewijs</strong> verplicht.
      Deze kun je verkrijgen door binnen 40 uur voor het feest een test te laten doen
      (<a href="https://testenvoortoegang.nl" target="_blank" class="underline">testenvoortoegang.nl</a>)
      of door langer dan twee weken voor het evenement volledig gevaccineerd te zijn.
      Wanneer je een ticket koopt ontvang je binnenkort een e-mail met meer informatie over de details.'
  faq_categories:
    general: Algemeen
    tickets: Tickets
    corona: COVID-19
</i18n>

<template>
  <div>
    <Header small="true" bg="bg-bang-gray">
      <div class="bg-white rounded-lg px-2 py-1 text-xs uppercase tracking-wider inline" v-text="$t('title_label')" />
      <h1 class="text-4xl text-white font-normal mt-2" v-text="$t('title')" />
    </Header>
    <div class="bg-bang-gray w-full pb-9">
      <div class="container mx-auto px-6 pt-6 md:pt-0">
        <Presents class="w-full max-w-2xl mx-auto" />
      </div>
    </div>
    <section class="bg-bang-gray bg-bang p-4 md:p-12">
      <div class="container mx-auto bg-bang-gray p-2 md:p-6">
        <div class="bg-white bg-dots md:flex">
          <div class="flex-1 p-6 md:p-12 md:pr-0 md:-mr-6">
            <img :src="require(`#/assets/images/events/bang/logo@4x.png`)" />
          </div>
          <div class="flex-1 bg-castle-horizontal px-4 md:pl-40 py-6 md:py-12 md:pr-12 font-akagi text-center">
            <div class="h-full flex flex-col justify-between space-y-3 md:space-y-0">
              <div class="text-bang-gray md:text-3xl uppercase flex items-center justify-between">
                <Divider class="h-1 md:h-3" />
                Friday 23 July - 10 PM
                <Divider class="h-1 md:h-3" />
              </div>
              <div class="text-white text-lg md:text-[2.4rem]">LGBT+ | PARTY | MUSIC | DRINKS</div>
              <div class="text-bang-gray md:text-3xl">
                EARLY BIRD € 3.75 / REGULAR € 4.75<br />
                TICKETS ONLY SOLD ONLINE<br />
              </div>
              <a :href="`https://www.ticketkantoor.nl/shop/outwithabang/${$i18n.locale}`" target="_blank" class="block">
                <button class="bg-white px-6 pt-4 pb-3 text-bang-gray md:text-4xl uppercase hover:bg-opacity-75">
                  Buy your tickets now &raquo;
                </button>
              </a>
              <div class="text-bang-gray md:text-3xl">
                CORONA ADMISSION TICKET REQUIRED
                <div class="leading-none text-sm md:text-xl">(SEE BELOW)</div>
              </div>
              <div class="text-bang-gray text-3xl uppercase flex items-center justify-between">
                <Divider class="h-1 md:h-3" />
                <Divider class="h-1 md:h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="bg-bang-gray h-6" />
    <div class="bg-gold h-6" />
    <section class="bg-bang-gray py-4 md:py-16">
      <div class="container px-4 mx-auto md:flex md:space-x-24 space-y-6 md:space-y-0">
        <div class="md:w-2/5 text-white text-lg md:text-2xl space-y-4">
          <p v-for="paragraph in $t('description')" :key="paragraph" v-html="paragraph" />
          <a :href="`https://www.ticketkantoor.nl/shop/outwithabang/${$i18n.locale}`" target="_blank" class="block">
            <button class="bg-white px-6 pt-4 pb-3 hover:bg-opacity-75">
              <span class="font-akagi text-bang-gray uppercase text-lg md:text-2xl">Buy your tickets now &raquo;</span>
            </button>
          </a>
          <p class="text-lg">
            <strong>DWH and Outsite present: Out with a Bang</strong><br />
            23 July 2021, 10 PM - 4 AM<br />
            Lange Geer 22, Delft
          </p>
        </div>
        <div class="flex-1">
          <div class="ml-auto bg-white rounded-xl p-3 space-y-3">
            <div v-for="(faqEntries, category) in faq" :key="category">
              <span class="font-akagi uppercase text-bang-gray text-lg mb-1">{{ $t('faq_categories')[category] }}</span>
              <div class="space-y-2">
                <Disclosure
                  v-for="content in faqEntries"
                  :key="content.question"
                  class="bg-gold text-white"
                  :title="content.question"
                >
                  <nuxt-content class="content" :document="content" />
                </Disclosure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="bg-gold h-6" />
  </div>
</template>

<script>
import Presents from '#/assets/images/events/bang/presents.svg?inline'
import Divider from '#/assets/images/events/bang/divider.svg?inline'

const groupBy = (items, key) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  )

export default {
  components: {
    Presents,
    Divider,
  },
  async asyncData({ $content, app }) {
    const faq = (await $content(`events/bang/faq`, { deep: true }).fetch()).filter(
      (file) => file.slug.substr(-2) === app.i18n.locale
    )

    const faqByCategory = groupBy(
      faq
        .map((group) => {
          return { ...group, category: group.dir.substring(group.dir.lastIndexOf('/') + 1) }
        })
        .sort((a, b) => (a.name > b.name ? 1 : -1)),
      'category'
    )

    return {
      faq: faqByCategory,
    }
  },
}
</script>

<style>
@font-face {
  font-family: 'Akagi Pro W00 Fat';
  src: url('../../../assets/fonts/akagi/48a08739676e1af25c6b594ee50c9459.eot'); /* IE9*/
  src: url('../../../assets/fonts/akagi/48a08739676e1af25c6b594ee50c9459.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('../../../assets/fonts/akagi/48a08739676e1af25c6b594ee50c9459.woff2') format('woff2'),
    /* chrome、firefox */ url('../../../assets/fonts/akagi/48a08739676e1af25c6b594ee50c9459.woff') format('woff'),
    /* chrome、firefox */ url('../../../assets/fonts/akagi/48a08739676e1af25c6b594ee50c9459.ttf') format('truetype'),
    /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
      url('../../../assets/fonts/akagi/48a08739676e1af25c6b594ee50c9459.svg#Akagi Pro W00 Fat') format('svg'); /* iOS 4.1- */
}

.font-akagi {
  font-family: 'Akagi Pro W00 Fat';
}

.bg-bang {
  @apply bg-cover;
  background-image: url(../../../assets/images/events/bang/bg.svg);
}

.bg-bang-gray {
  background-color: #3a3a3a;
}

.text-bang-gray {
  color: #3a3a3a;
}

.bg-dots {
  background-image: url(../../../assets/images/events/bang/dots.svg);
}

@media (max-width: 767px) {
  .bg-castle-horizontal {
    background-color: #cba74b;
  }
}

@media (min-width: 768px) {
  .bg-castle-horizontal {
    @apply bg-cover;
    background-image: url(../../../assets/images/events/bang/castle_bg_horizontal.png);
  }
}

.bg-gold {
  background-color: #cba74b;
}
</style>
