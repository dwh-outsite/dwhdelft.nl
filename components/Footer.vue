<template>
  <div>
    <div class="container mx-auto text-white">
      <div class="flex">
        <div class="w-2/3 border-r border-gray-600 pt-24">
          <div class="flex mb-10 mr-12">
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
            <div>
              <img src="~/assets/images/board17.png" class="h-64 shadow-xl" />
            </div>
          </div>
        </div>

        <div class="ml-10 pt-24">
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

    <hr class="border-b border-gray-600" />

    <div class="container mx-auto">
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
