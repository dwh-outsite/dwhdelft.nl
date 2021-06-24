<i18n lang="yaml">
en:
  boardTitle: Board
  contactTitle: Contact
  links:
    support_us: Support Us
    sign_up: Join DWH as a member
nl:
  boardTitle: Bestuur
  contactTitle: Contact
  links:
    support_us: Steun Ons
    sign_up: Inschrijven als DWH lid
</i18n>

<template>
  <div>
    <div class="container px-4 mx-auto text-white">
      <div class="md:flex">
        <div class="md:w-2/3 md:border-r border-gray-600 pt-8">
          <h3 class="text-xl font-bold mb-4 uppercase tracking-wider" v-text="$t('boardTitle')" />

          <div class="md:flex flex-wrap">
            <slot name="board-members" />
          </div>
        </div>

        <div class="md:ml-4 xl:ml-10 pt-8 pb-8">
          <h3 class="text-xl font-bold mb-4 uppercase tracking-wider" v-text="$t('contactTitle')" />
          <div class="flex items-center mb-4">
            <div class="rounded-full w-8 h-8 p-2 bg-white text-gray-700">
              <Zondicon icon="envelope" class="fill-current w-4" />
            </div>
            <div class="ml-3">{{ contactEmail }}</div>
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
              {{ $t('links.sign_up') }}
              <Zondicon icon="arrow-thin-right" class="fill-current w-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <hr class="border-b border-gray-600 m-0" />

    <div class="container mx-auto px-4 py-4 lg:flex justify-between items-center">
      <div class="lg:flex">
        <div class="flex justify-center lg:justify-start">
          <a v-for="{ url, icon } in socials" :key="url" :href="url" target="_blank">
            <div class="rounded-full w-10 h-10 p-2 bg-white text-gray-700 mr-3 hover:bg-gray-300">
              <component :is="icon" class="fill-current w-6" />
            </div>
          </a>
          <a href="https://dwhdelft.nl/sponsorkliks" target="_blank">
            <div
              class="rounded-full h-10 px-3 py-2 bg-white text-gray-700 uppercase tracking-wide text-sm flex font-semibold items-center hover:bg-gray-300 lg:mr-6"
            >
              Sponsor<span class="text-green-600">kliks</span>
            </div>
          </a>
        </div>
        <div class="flex justify-center lg:justify-start mt-4 lg:mt-0">
          <nuxt-link
            v-for="{ url, name } in links"
            :key="url"
            :to="url"
            class="font-bold inline-flex items-center text-gray-400 hover:text-white mr-3"
          >
            {{ name }}
          </nuxt-link>
        </div>
      </div>
      <a
        :href="localePath('index')"
        class="text-gray-400 hover:text-white text-xs lg:text-base flex items-center justify-center lg:justify-end pt-4 lg:pt-0"
      >
        <slot name="copyright" />
        <DWHLogo class="h-8 ml-2 fill-current" />
      </a>
    </div>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'
import DWHLogo from '#/assets/images/dwh_logo.svg?inline'

export default {
  components: {
    Zondicon,
    DWHLogo,
  },
  props: ['contactEmail', 'socials', 'links'],
}
</script>
