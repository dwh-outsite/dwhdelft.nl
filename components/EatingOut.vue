<template>
  <div class="overflow-y-hidden md:overflow-x-hidden">
    <div class="md:max-w-6xl mx-auto">
      <div class="md:flex">
        <div class="flex-1 pt-12 pb-24 md:pb-12 px-4">
          <div class="rounded-full w-20 h-20 p-6 bg-purple-500 mt-2 mb-8 text-white mx-auto">
            <Zondicon icon="location-food" class="fill-current" />
          </div>
          <h3 class="text-3xl font-semibold text-center" v-text="title" />
          <h4 class="text-xl tracking-wide text-center" v-text="subtitle" />
        </div>
        <div class="relative">
          <div class="triangle md:hidden" />
        </div>
        <div class="relative md:w-2/5">
          <div class="divider">
            <div class="divider-content h-full flex items-center px-4 md:pl-16">
              <div class="mx-auto md:mx-0">
                <a href="/eatingout" target="_blank">
                  <button class="block button-white z-50 text-purple-500 text-left mb-2">
                    <div class="flex items-center">
                      <div class="max-w-56" v-text="button" />
                      <div><Zondicon icon="cheveron-outline-right" class="h-8" /></div>
                    </div>
                  </button>
                </a>
                <div v-for="note in notes" :key="note" class="text-white uppercase tracking-wide text-sm font-semibold">
                  {{ note }}
                </div>
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
  props: ['title', 'subtitle', 'button', 'notes'],
  components: { Zondicon }
}
</script>

<style>
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
    @apply bg-purple-400 h-full absolute;
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
</style>
