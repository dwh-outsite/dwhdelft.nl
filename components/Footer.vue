<template>
  <div>
    <div class="container px-4 mx-auto text-white">
      <div class="md:flex">
        <div class="md:w-2/3 md:border-r border-gray-600 xl:pt-20">
          <h3 class="text-xl font-bold mb-4 uppercase tracking-wider">{{ leftTitle }}</h3>

          <div class="md:flex flex-wrap">
            <slot name="board-members"></slot>
          </div>
        </div>

        <div class="md:ml-4 xl:ml-10 xl:pt-20 pb-8">
          <h3 class="text-xl font-bold mb-4 uppercase tracking-wider">{{ rightTitle }}</h3>
          <div class="flex items-center mb-4">
            <div class="rounded-full w-8 h-8 p-2 bg-white text-gray-700">
              <Zondicon icon="envelope" class="fill-current w-4" />
            </div>
            <div class="ml-3" v-html="contactEmail" />
          </div>
          <div class="flex items-center mb-4">
            <div class="rounded-full w-8 h-8 p-2 bg-white text-gray-700">
              <Zondicon icon="phone" class="fill-current w-4" />
            </div>
            <div class="ml-3" v-html="contactPhone" />
          </div>
          <div class="flex items-center mb-4">
            <div class="rounded-full w-8 h-8 p-2 bg-white text-gray-700">
              <Zondicon icon="map" class="fill-current w-4" />
            </div>
            <div class="ml-3 leading-tight" v-html="contactAddress" />
          </div>
          <div class="flex items-center mb-4">
            <div class="rounded-full w-8 h-8 p-2 bg-white text-gray-700">
              <Zondicon icon="box" class="fill-current w-4" />
            </div>
            <div class="ml-3 leading-tight" v-html="contactCoc" />
          </div>
          <a
            :href="anbiLinkDestination"
            class="text-white font-bold inline-flex items-center border-b border-white border-dashed"
          >
            ANBI
            <Zondicon icon="arrow-thin-right" class="fill-current w-4 ml-1" />
          </a>
        </div>
      </div>
    </div>

    <hr class="border-b border-gray-600 m-0" />

    <div class="container mx-auto px-4 py-4 md:flex justify-between items-center">
      <div class="flex justify-center md:justify-start">
        <a href="https://instagram.com/dwh_delft" target="_blank">
          <div class="rounded-full w-10 h-10 p-2 bg-white text-gray-700 mr-3">
            <InstagramIcon class="fill-current w-6" />
          </div>
        </a>
        <a href="https://facebook.com/DWHDelft" target="_blank">
          <div class="rounded-full w-10 h-10 p-2 bg-white text-gray-700 mr-3">
            <FacebookIcon class="fill-current w-6" />
          </div>
        </a>
        <a href="https://github.com/dwh-outsite/dwhdelft.nl" target="_blank">
          <div class="rounded-full w-10 h-10 p-2 bg-white text-gray-700">
            <GitHubIcon class="fill-current w-6" />
          </div>
        </a>
      </div>
      <a
        href="https://dwhdelft.nl/"
        target="_blank"
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
  props: [
    'left-title',
    'right-title',
    'board-image',
    'contact-email',
    'contact-phone',
    'contact-address',
    'contact-coc',
    'dwh-description',
    'anbi-link-destination'
  ],
  components: {
    Zondicon,
    DWHLogo,
    InstagramIcon,
    FacebookIcon,
    GitHubIcon
  },
  data() {
    return {
      year: dayjs().format('YYYY')
    }
  }
}
</script>
