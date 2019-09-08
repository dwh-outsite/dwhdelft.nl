<template>
  <div class=" container mx-auto">
    <div class="flex">
      <div class="flex-1 pt-12 pb-20">
        <div class="rounded-full w-20 h-20 p-6 bg-pink-400 mt-2 mb-8 text-white mx-auto">
          <Zondicon icon="location-food" class="fill-current" />
        </div>
        <h3 class="text-3xl font-semibold text-center">
          EatingOUT: Onze wekelijkse eettafel
        </h3>
        <h4 class="text-xl tracking-wide text-center">
          Elke dinsdag eten voor maar 4 euro
        </h4>
      </div>
      <div class="relative w-2/5">
        <div class="divider">
          <div class="divider-content h-full flex items-center pl-16">
            <div>
              <a href="https://dwhdelft.nl/eatingout" target="_blank">
                <button class="block button-white z-50 text-pink-400 text-left">
                  <div class="flex items-center">
                    <div class="w-56">Meld je aan voor aankomende dinsdag</div>
                    <div><Zondicon icon="cheveron-outline-right" class="h-8" /></div>
                  </div>
                </button>
              </a>
              <div class="text-white uppercase tracking-wide text-sm mt-2 font-semibold">Alleen voor leden</div>
              <div class="text-white uppercase tracking-wide text-sm font-semibold">Aanmelden verplicht</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  components: { Zondicon }
}
</script>

<style>
.divider {
  @apply bg-pink-200 h-full absolute;
  transform: skewX(-7deg);
  transform-origin: 0;
  width: 100rem;
}

.divider-content {
  transform: skewX(7deg);
  transform-origin: 0;
}
</style>
