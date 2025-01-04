<i18n lang="yaml">
nl:
  title: Jong&Out Delft
  titles:
    about: Wat is **Jong&Out**
    meetings: Bijeenkomsten
    join: Kom langs!
    instagram: Updates en aankomende activiteiten
    team: Onze Begeleiders
  content:
    intro:
      - 'Ben jij een LHBTI+ jongere onder de 19 jaar of weet je het nog niet precies maar wil je wel in contact komen met andere LHBTI+ jongeren door middel van laagdrempelige activiteiten? Kom dan vooral naar onze volgende activiteit!'
    about:
      - 'Jong & Out is een landelijk initiatief van COC Nederland dat zich bezig houdt met het organiseren van activiteiten voor lhbti+ jongeren tot en met 18 jaar oud. DWH heeft inmiddels ook een Jong&Out groep die iedere maand op de derde zondag van de maand plaatsvindt in het DWH pand. Er is ook een Jong&Out app waar je in contact kan komen met andere lhbti+ jongeren en op de hoogte blijft van alle activiteiten!'
    meetings:
      - 'Lijkt het je leuk in contact te komen met andere lhbti+ jongeren door middel van laagdrempelige maar super toffe activiteiten? Dan is Jong&Out misschien wel iets voor jou! De activiteiten kunnen gewoon gezellig een bordspellen middag zijn, maar af en toe ook samen uit eten gaan naar een burger tent of pompoenen versieren met Halloween!'
      - 'Naast de bijeenkomsten van Jong&Out merken we dat de jongeren ook echt een soort vriendengroep worden en onze gezamenlijke whatsapp groep altijd erg gezellig en open is.'
      - 'Aan de bijeenkomsten van Jong&Out zitten bijna nooit kosten verbonden tenzij dit duidelijk aangegeven wordt.'
    team:
      - 'De begeleiders zijn tussen de 19 en 30 jaar en komen uit Delft en omstreken. De begeleiders organiseren de bijeenkomsten met passie om een plek te creëren waar iedereen zich zelf kan zijn.'
  join:
    button: Meld je nu aan
  team:
    - name: Dante
      pronouns: die/hun
      description:
        - 'Heeyhey, dit is Dante. Ik ben Jong&Out gaan doen omdat een soort gelijke groep mij op de middelbare heel veel plezier gebracht heeft. Deze ervaring wil ik graag doorgeven en er iets gaafs van maken.'
    - name: Thomas
      pronouns: hij/hem
      description:
        - 'Hey daar! Ik ben Thomas. Ik vind het heel tof op bij Jong&Out te zitten en een fijne plek te creëren voor de jongeren!'
    - name: Jaye
      pronouns: alle voornaamwoorden
      description:
        - 'Hoi !! Ik ben Jaye !! Ik vind het erg leuk om een plek te creëren waar jongeren hunzelf kunnen zijn en hunzelf en andere beter kunnen leren kennen :)'
    - name: Meander
      pronouns: die/hun
      description:
        - 'Hey, ik ben Meander! Zelf heb ik ook mijn J&O tijd gehad. Het was zo’n fijne en vertrouwde omgeving, dat wil ik ook creëren voor de volgende generatie J&O’ers!!'
    - name: Didi
      pronouns: zij/haar
      description:
        - 'Hey, ik ben Didi! Ik vind het leuk om voor queer jongeren een plek te creëren waar ze open kunnen zijn, zich vertrouwd kunnen voelen en waar ze natuurlijk veel leuke dingen kunnen beleven.'
    - name: Mo
      pronouns: zij/haar of hen/hun
      description:
        - 'Yoyo, ik ben Mo! Op het moment ben ik een van de J&O begeleiders in Delft! Ik vind het heel leuk om van alles en nog wat te organiseren! Ik kijk dus nu al uit naar de volgende activiteit. Zie ik je dan?'
</i18n>

<script setup>
import { IconCalendar, IconTime, IconMap } from '@iconify-prerendered/vue-zondicons'

const { t } = useT()

const { image } = useDynamicImages(import.meta.glob('~/assets/images/photos/jongenout/*', { eager: true }))
const requireImage = (name) => image(name.toLowerCase())

const showForm = ref(false)

const instagramChannels = [
  {
    name: 'Jong&Out Delft',
    widgetId: '66e86015fb1250b9ae60ce391984d2a8',
    instagram: 'jongenoutdelft',
  },
]
</script>

<template>
  <LayoutSmallHeader triangleClass="border-[#5e4fff]">
    {{ t('title') }}
  </LayoutSmallHeader>

  <section class="w-full space-y-6 bg-[#5e4fff] py-6 md:py-8">
    <ElementsContainer class="space-y-6">
      <LanguageWarning v-if="$i18n.locale == 'en'" class="mb-12" />
      <div class="space-y-6 md:flex md:space-x-12 md:space-y-0">
        <div class="text-2xl text-white md:w-1/3">
          <p v-for="paragraph in t('content.intro')" :key="paragraph" v-html="paragraph" />
        </div>
        <div class="flex-1">
          <div class="relative z-50 md:-mt-12 md:w-5/6">
            <h2 class="mb-2 pl-6 text-4xl font-semibold text-white">
              <Markdown :content="t('titles.about')" />
            </h2>
            <div class="w-full rounded-3xl bg-white p-6 text-lg shadow-xl">
              <p v-for="paragraph in t('content.about')" :key="paragraph" v-html="paragraph" />
            </div>
          </div>
        </div>
      </div>
      <div class="space-y-6 md:flex md:space-x-12 md:space-y-0">
        <div class="flex-1">
          <div class="ml-auto md:w-5/6">
            <h2 class="mb-2 pl-6 text-4xl font-semibold text-white" v-html="t('titles.meetings')" />
            <div class="w-full space-y-4 rounded-3xl bg-white p-6 text-lg shadow-xl">
              <p v-for="paragraph in t('content.meetings')" :key="paragraph" v-html="paragraph" />
            </div>
          </div>
        </div>
        <div class="flex-1">
          <div class="ml-auto md:w-5/6">
            <h2 class="mb-2 pl-6 text-4xl font-semibold text-white" v-html="t('titles.join')" />
            <div class="w-full space-y-4 rounded-3xl bg-[#120f82] p-6 text-lg text-white shadow-xl">
              <div v-if="!showForm">
                <div class="mb-4 flex items-center">
                  <div class="size-8 rounded-full bg-white p-2 text-gray-700">
                    <IconCalendar class="w-4" />
                  </div>
                  <div class="ml-3 leading-tight">Iedere derde zondag van de maand</div>
                </div>
                <div class="mb-4 flex items-center">
                  <div class="size-8 rounded-full bg-white p-2 text-gray-700">
                    <IconTime class="w-4" />
                  </div>
                  <div class="ml-3 leading-tight">14.00 - 17.00</div>
                </div>
                <div class="mb-4 flex items-center">
                  <div class="size-8 rounded-full bg-white p-2 text-gray-700">
                    <IconMap class="w-4" />
                  </div>
                  <div class="ml-3 leading-tight">
                    Lange Geer 22<br />
                    2611PV Delft
                  </div>
                </div>
                <ElementsSecondaryButton arrow @click="showForm = true">
                  {{ t('join.button') }}
                </ElementsSecondaryButton>
              </div>
              <PagesJongenoutForm v-if="showForm" @cancel="showForm = false" />
            </div>
          </div>
        </div>
      </div>
    </ElementsContainer>
  </section>

  <LayoutStraightSection contentBackgroundClass="!bg-[#120f82]" contentClass="md:py-12">
    <PagesHomeInstagramChannels class="mx-auto xl:w-2/3" :brands="instagramChannels">
      <template #title>
        <h1 class="mb-6 text-center text-5xl font-medium leading-tight text-white" v-html="t('titles.instagram')" />
      </template>
    </PagesHomeInstagramChannels>
  </LayoutStraightSection>

  <LayoutStraightSection contentBackgroundClass="!bg-[#5e4fff]">
    <h1 class="mb-6 text-center text-5xl font-medium leading-tight text-white" v-html="t('titles.team')" />
    <div class="mx-auto mb-12 text-center text-2xl text-white md:w-2/3">
      <p v-for="paragraph in t('content.team')" :key="paragraph" v-html="paragraph" />
    </div>
    <div class="mx-auto max-w-6xl space-y-6">
      <div
        v-for="({ name, pronouns, description }, index) in t('team')"
        :key="name"
        class="items-center space-y-2 rounded-2xl bg-[#120f82] p-4 shadow-xl md:flex md:w-4/5 md:space-x-4 md:space-y-0 md:rounded-full"
        :class="index % 2 !== 0 ? 'ml-auto' : ''"
      >
        <div class="size-32 overflow-hidden rounded-full bg-white">
          <img :src="requireImage(name)" class="h-full object-cover" />
        </div>
        <div class="flex-1 text-white md:pr-8">
          <div class="flex items-baseline space-x-2">
            <h3 class="text-xl font-semibold" v-text="name" />
            <span class="opacity-75" v-text="pronouns" />
          </div>
          <p v-for="paragraph in description" :key="paragraph" class="text-lg" v-html="paragraph" />
        </div>
      </div>
    </div>
    <img
      :src="requireImage('team')"
      class="mx-auto mt-12 rounded-2xl border-8 border-white shadow-xl md:w-2/3 md:rounded-full"
    />
  </LayoutStraightSection>
</template>
