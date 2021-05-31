<i18n lang="yaml">
en:
  title: 'EatingOUT: Our weekly dinner'
  subtitle: Every Tuesday, for just 4 euros
  button: Sign up for the next EatingOUT now
  notes:
    - Members only
    - Sign-up required
nl:
  title: 'EatingOUT: Onze wekelijkse eettafel'
  subtitle: Elke dinsdag eten voor maar 4 euro
  button: Meld je aan voor aankomende dinsdag
  notes:
    - Alleen voor leden
    - Aanmelden verplicht
</i18n>

<template>
  <div class="overflow-y-hidden md:overflow-x-hidden">
    <div class="mx-auto">
      <div class="md:flex">
        <div class="flex-1 pt-12 pb-20 px-4 md:pr-40 background text-white text-shadow flex flex-col items-end">
          <div>
            <div class="rounded-full w-20 h-20 p-6 bg-purple-400 mt-2 mb-8 text-white mx-auto">
              <Zondicon icon="location-food" class="fill-current" />
            </div>
            <h3 class="text-3xl font-semibold text-center" v-text="$t('title')" />
            <h4 class="text-xl tracking-wide text-center" v-text="$t('subtitle')" />
          </div>
        </div>
        <div class="relative">
          <div class="triangle md:hidden" />
        </div>
        <div class="relative md:w-2/5">
          <div class="divider">
            <div class="divider-content h-full flex items-center px-4 md:pl-8 lg:pl-16">
              <div class="mx-auto md:mx-0">
                <a href="https://dwhdelft.nl/eatingout" target="_blank">
                  <button class="button-white text-left mb-2">
                    <div class="flex items-center">
                      <div class="max-w-56" v-text="$t('button')" />
                      <Zondicon icon="cheveron-outline-right" class="h-8 text-gray-600 fill-current" />
                    </div>
                  </button>
                </a>
                <div
                  v-for="note in $t('notes')"
                  :key="note"
                  class="text-white uppercase tracking-wide text-sm font-semibold"
                  v-text="note"
                />
              </div>
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
  components: { Zondicon },
}
</script>

<style scoped>
.background {
  @apply bg-cover;
  background-image: url(#/assets/images/photos/eatingout/eatingout.jpg);
}

.triangle {
  @apply bg-purple-400 w-full absolute;
  transform: skewY(-7deg);
  transform-origin: 0;
  height: 10rem;
  top: 0rem;
}

.divider {
  @apply bg-purple-400 h-full py-8;
}

@screen md {
  .divider {
    @apply bg-purple-400 h-full absolute -ml-8;
    transform: skewX(-7deg);
    transform-origin: 0;
    width: 100rem;
  }
}

@screen md {
  .divider-content {
    transform: skewX(7deg);
    transform-origin: 0;
  }
}

.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
