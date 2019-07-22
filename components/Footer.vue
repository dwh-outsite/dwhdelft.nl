<template>
  <div>
    <div class="container mx-auto text-white">
      <div class="flex">
        <div class="w-2/3 border-r border-gray-600 pt-24">
          <div class="flex mb-10 mr-12">
            <div class="flex-1">
              <h3 class="text-xl font-bold mb-4 uppercase tracking-wider">Bestuur</h3>
              <p class="leading-tight mb-4">
                <strong>Casper Boone</strong> | Voorzitter<br />
                <span class="text-gray-400">voorzitter@outsite.nl</span>
              </p>

              <p class="leading-tight mb-4">
                <strong>Daan Verrer</strong> | Secretaris<br />
                <span class="text-gray-400">secretaris@outsite.nl</span>
              </p>

              <p class="leading-tight mb-6">
                <strong>Joël Abrahams</strong> | Penningmeester<br />
                <span class="text-gray-400">penningmeester@outsite.nl</span>
              </p>

              <p class="mb-4">
                <a href="#" class="text-white font-bold inline-flex items-center border-b border-white border-dashed">
                  Vertrouwenspersoon
                  <Zondicon icon="arrow-thin-right" class="fill-current w-4 ml-1" />
                </a>
              </p>
            </div>
            <div>
              <img src="~/assets/images/board17.png" class="h-64 shadow-xl" />
            </div>
          </div>
        </div>

        <div class="ml-10 pt-24">
          <h3 class="text-xl font-bold mb-4 uppercase tracking-wider">Contact</h3>
          <div class="flex items-center mb-4">
            <div class="rounded-full w-8 h-8 p-2 bg-white text-gray-700">
              <Zondicon icon="envelope" class="fill-current w-4" />
            </div>
            <div class="ml-3">
              bestuur@outsite.nl
            </div>
          </div>
          <div class="flex items-center">
            <div class="rounded-full w-8 h-8 p-2 bg-white text-gray-700">
              <Zondicon icon="map" class="fill-current w-4" />
            </div>
            <div class="ml-3">
              Lange Geer 22<br />
              2611 PV Delft
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr class="border-b border-gray-600" />

    <div class="container mx-auto">
      <a href="https://dwhdelft.nl/" target="_blank" class="text-gray-400 hover:text-white flex py-4 justify-end">
        Outsite is onderdeel van
        <DWHLogo class="h-8 ml-2 fill-current" />
      </a>
    </div>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'
import DWHLogo from '@/assets/images/dwh_logo.svg'

export default {
  components: {
    Zondicon,
    DWHLogo
  }
}
</script>
