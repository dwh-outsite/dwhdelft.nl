<i18n lang="yaml">
en:
  boardTitle: Board
  contactTitle: Contact
  board:
    - name: Robbie Baart
      role: President
      email: voorzitter@dwhdelft.nl
    - name: Dries Stuij
      role: Secretary
      email: secretaris@dwhdelft.nl
    - name: Quinten Star
      role: Treasurer
      email: penningmeester@dwhdelft.nl
    - name: Jelle Vos
      role: Commissioner
      email: promotie@dwhdelft.nl
nl:
  boardTitle: Bestuur
  contactTitle: Contact
  board:
    - name: Robbie Baart
      role: Voorzitter
      email: voorzitter@dwhdelft.nl
    - name: Dries Stuij
      role: Secretaris
      email: secretaris@dwhdelft.nl
    - name: Quinten Star
      role: Penningmeester
      email: penningmeester@dwhdelft.nl
    - name: Jelle Vos
      role: Algemeen Bestuurslid
      email: promotie@dwhdelft.nl
</i18n>

<template>
  <div>
    <div class="container px-4 mx-auto text-white">
      <div class="md:flex">
        <div class="md:w-2/3 md:border-r border-gray-600 pt-8">
          <h3 class="text-xl font-bold mb-4 uppercase tracking-wider" v-text="$t('boardTitle')" />

          <div class="md:flex flex-wrap">
            <BoardMember
              v-for="member in $t('board')"
              :key="member.name"
              :role="member.role"
              :name="member.name"
              :email="member.email"
            />
          </div>
        </div>

        <div class="md:ml-4 xl:ml-10 pt-8 pb-8">
          <h3 class="text-xl font-bold mb-4 uppercase tracking-wider" v-text="$t('contactTitle')" />
          <div class="flex items-center mb-4">
            <div class="rounded-full w-8 h-8 p-2 bg-white text-gray-700">
              <Zondicon icon="envelope" class="fill-current w-4" />
            </div>
            <div class="ml-3">bestuur@dwhdelft.nl</div>
          </div>
          <div class="flex items-center mb-4">
            <div class="rounded-full w-8 h-8 p-2 bg-white text-gray-700">
              <Zondicon icon="phone" class="fill-current w-4" />
            </div>
            <div class="ml-3">06-37560270</div>
          </div>
          <div class="flex items-center mb-4">
            <div class="rounded-full w-8 h-8 p-2 bg-white text-gray-700">
              <Zondicon icon="map" class="fill-current w-4" />
            </div>
            <div class="ml-3 leading-tight">
              Lange Geer 22<br />
              2611PV Delft
            </div>
          </div>
          <div class="flex items-center mb-4">
            <div class="rounded-full w-8 h-8 p-2 bg-white text-gray-700">
              <Zondicon icon="box" class="fill-current w-4" />
            </div>
            <div class="ml-3 leading-tight">
              KvK: 40398035<br />
              RSIN: 807864250
            </div>
          </div>
          <div class="mb-2">
            <a
              :href="localePath('signup')"
              class="text-white font-bold inline-flex items-center border-b border-white border-dashed"
            >
              {{ $t('signup.title') }}
              <Zondicon icon="arrow-thin-right" class="fill-current w-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <hr class="border-b border-gray-600 m-0" />

    <div class="container mx-auto px-4 py-4 md:flex justify-between items-center">
      <div class="flex justify-center md:justify-start">
        <a href="https://instagram.com/dwh_delft" target="_blank">
          <div class="rounded-full w-10 h-10 p-2 bg-white text-gray-700 mr-3 hover:bg-gray-300">
            <InstagramIcon class="fill-current w-6" />
          </div>
        </a>
        <a href="https://facebook.com/DWHDelft" target="_blank">
          <div class="rounded-full w-10 h-10 p-2 bg-white text-gray-700 mr-3 hover:bg-gray-300">
            <FacebookIcon class="fill-current w-6" />
          </div>
        </a>
        <a href="https://github.com/dwh-outsite/dwhdelft.nl" target="_blank">
          <div class="rounded-full w-10 h-10 p-2 bg-white text-gray-700 mr-3 hover:bg-gray-300">
            <GitHubIcon class="fill-current w-6" />
          </div>
        </a>
        <a href="https://dwhdelft.nl/sponsorkliks" target="_blank">
          <div
            class="rounded-full h-10 px-3 py-2 bg-white text-gray-700 uppercase tracking-wide text-sm flex font-semibold items-center hover:bg-gray-300 mr-6"
          >
            <span class="text-teal-900">Sponsor</span><span class="text-teal-600">kliks</span>
          </div>
        </a>
        <a :href="localePath('anbi')" class="text-white font-bold inline-flex items-center text-gray-400 mr-3">
          ANBI
        </a>
        <a :href="localePath('privacy')" class="text-white font-bold inline-flex items-center text-gray-400 mr-3">
          Privacy
        </a>
        <a :href="localePath('steunons')" class="text-white font-bold inline-flex items-center text-gray-400">
          {{ $t('steunons.title') }}
        </a>
      </div>
      <a
        :href="localePath('index')"
        class="text-gray-400 hover:text-white flex justify-center md:justify-end pt-4 md:pt-0"
      >
        &copy; Delftse Werkgroep Homoseksualiteit (D.W.H.) {{ year }}
        <DWHLogo class="h-8 ml-2 fill-current" />
      </a>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import Zondicon from 'vue-zondicons'
import DWHLogo from '@/assets/images/dwh_logo.svg'
import InstagramIcon from '@/assets/images/social/instagram.svg'
import FacebookIcon from '@/assets/images/social/facebook.svg'
import GitHubIcon from '@/assets/images/social/github.svg'

export default {
  components: {
    Zondicon,
    DWHLogo,
    InstagramIcon,
    FacebookIcon,
    GitHubIcon,
  },
  data() {
    return {
      year: dayjs().format('YYYY'),
    }
  },
}
</script>
