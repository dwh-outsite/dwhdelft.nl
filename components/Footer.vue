<template>
  <div>
    <div class="container px-4 mx-auto text-white">
      <div class="md:flex">
        <div class="md:w-2/3 md:border-r border-gray-600 xl:pt-20">
          <div class="md:flex mb-8 md:mr-4 xl:mr-10">
            <div class="flex-1">
              <h3 class="text-xl font-bold mb-4 uppercase tracking-wider">{{ leftTitle }}</h3>

              <slot name="board-members" class="mb-2"></slot>

              <a
                :href="linkDestination"
                class="text-white font-bold inline-flex items-center border-b border-white border-dashed"
              >
                {{ linkTitle }}
                <Zondicon icon="arrow-thin-right" class="fill-current w-4 ml-1" />
              </a>
            </div>
            <div class="mt-8 md:mt-0">
              <img src="~/assets/images/board18.jpg" class="w-full md:w-auto md:h-56 lg:h-64 xl:h-80 shadow-xl" />
            </div>
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
          <div class="flex items-center">
            <div class="rounded-full w-8 h-8 p-2 bg-white text-gray-700">
              <Zondicon icon="map" class="fill-current w-4" />
            </div>
            <div class="ml-3" v-html="contactAddress" />
          </div>
        </div>
      </div>
    </div>

    <hr class="border-b border-gray-600 m-0" />

    <div class="container mx-auto px-4">
      <a href="https://dwhdelft.nl/" target="_blank" class="text-gray-400 hover:text-white flex py-4 justify-end">
        {{ dwhDescription }}
        <DWHLogo class="h-8 ml-2 fill-current" />
      </a>
    </div>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'
import DWHLogo from '@/assets/images/dwh_logo.svg'

export default {
  props: [
    'left-title',
    'right-title',
    'link-title',
    'link-destination',
    'board-image',
    'contact-email',
    'contact-address',
    'dwh-description'
  ],
  components: {
    Zondicon,
    DWHLogo
  }
}
</script>
