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
  <LayoutSmallHeader bg="bg-[#5e4fff]">
    {{ t('title') }}
  </LayoutSmallHeader>

  <section class="w-full py-6 md:py-8 bg-[#5e4fff] space-y-6">
    <ElementsContainer class="space-y-6">
      <LanguageWarning v-if="$i18n.locale == 'en'" class="mb-12" />
      <div class="md:flex md:space-x-12 space-y-6 md:space-y-0">
        <div class="md:w-1/3 text-2xl text-white">
          <p v-for="paragraph in t('content.intro')" :key="paragraph" v-html="paragraph" />
        </div>
        <div class="flex-1">
          <div class="md:w-5/6 md:-mt-12 z-50 relative">
            <h2 class="text-white font-semibold text-4xl mb-2 pl-6">
              <Markdown :content="t('titles.about')" />
            </h2>
            <div class="bg-white shadow-xl rounded-3xl p-6 w-full text-lg">
              <p v-for="paragraph in t('content.about')" :key="paragraph" v-html="paragraph" />
            </div>
          </div>
        </div>
      </div>
      <div class="md:flex md:space-x-12 space-y-6 md:space-y-0">
        <div class="flex-1">
          <div class="md:w-5/6 ml-auto">
            <h2 class="text-white font-semibold text-4xl mb-2 pl-6" v-html="t('titles.meetings')" />
            <div class="bg-white shadow-xl rounded-3xl p-6 w-full text-lg space-y-4">
              <p v-for="paragraph in t('content.meetings')" :key="paragraph" v-html="paragraph" />
            </div>
          </div>
        </div>
        <div class="flex-1">
          <div class="md:w-5/6 ml-auto">
            <h2 class="text-white font-semibold text-4xl mb-2 pl-6" v-html="t('titles.join')" />
            <div class="bg-[#120f82] shadow-xl text-white rounded-3xl p-6 w-full text-lg space-y-4">
              <div v-if="!showForm">
                <div class="flex items-center mb-4">
                  <div class="rounded-full w-8 h-8 p-2 bg-white text-gray-700">
                    <IconCalendar class="w-4" />
                  </div>
                  <div class="ml-3 leading-tight">Iedere derde zondag van de maand</div>
                </div>
                <div class="flex items-center mb-4">
                  <div class="rounded-full w-8 h-8 p-2 bg-white text-gray-700">
                    <IconTime class="w-4" />
                  </div>
                  <div class="ml-3 leading-tight">14.00 - 17.00</div>
                </div>
                <div class="flex items-center mb-4">
                  <div class="rounded-full w-8 h-8 p-2 bg-white text-gray-700">
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
    <PagesHomeInstagramChannels class="xl:w-2/3 mx-auto" :brands="instagramChannels">
      <template #title>
        <h1 class="text-center text-white font-medium text-5xl mb-6 leading-tight" v-html="t('titles.instagram')" />
      </template>
    </PagesHomeInstagramChannels>
  </LayoutStraightSection>

  <LayoutStraightSection contentBackgroundClass="!bg-[#5e4fff]">
    <h1 class="text-center text-white font-medium text-5xl mb-6 leading-tight" v-html="t('titles.team')" />
    <div class="text-center text-white text-2xl md:w-2/3 mx-auto mb-12">
      <p v-for="paragraph in t('content.team')" :key="paragraph" v-html="paragraph" />
    </div>
    <div class="space-y-6 max-w-6xl mx-auto">
      <div
        v-for="({ name, pronouns, description }, index) in t('team')"
        :key="name"
        class="rounded-2xl md:rounded-full bg-[#120f82] p-4 md:flex items-center space-y-2 md:space-y-0 md:space-x-4 md:w-4/5 shadow-xl"
        :class="index % 2 !== 0 ? 'ml-auto' : ''"
      >
        <div class="rounded-full h-32 w-32 bg-white overflow-hidden">
          <img :src="requireImage(name)" class="object-cover h-full" />
        </div>
        <div class="text-white flex-1 md:pr-8">
          <div class="flex space-x-2 items-baseline">
            <h3 class="text-xl font-semibold" v-text="name" />
            <span class="opacity-75" v-text="pronouns" />
          </div>
          <p v-for="paragraph in description" :key="paragraph" class="text-lg" v-html="paragraph" />
        </div>
      </div>
    </div>
    <img
      :src="requireImage('team')"
      class="rounded-2xl md:rounded-full md:w-2/3 mx-auto mt-12 border-8 border-white shadow-xl"
    />
  </LayoutStraightSection>
</template>
