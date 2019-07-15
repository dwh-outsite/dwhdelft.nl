<template>
  <div>
    <nav class="absolute z-50 w-full mt-8">
      <div class="container mx-auto flex justify-between items-center">
        <img src="~assets/images/outsite_logo.svg" alt="Outsite" class="h-16" />
        <div>
          <nuxt-link to="/" class="text-white text-xl font-semibold no-underline mr-4">
            Home
          </nuxt-link>
          <nuxt-link to="/ander" class="text-white text-xl font-semibold no-underline mr-4">
            EatingOUT
          </nuxt-link>
          <nuxt-link to="/ander" class="text-white text-xl font-semibold no-underline mr-4">
            Commissies
          </nuxt-link>
          <nuxt-link to="/ander" class="text-white text-xl font-semibold no-underline mr-4">
            Kennismakingsgroep
          </nuxt-link>
        </div>
        <div>
          <a href="/dwh" class="text-white text-xl font-semibold no-underline mr-4">
            DWH
          </a>
        </div>
      </div>
    </nav>
    <header class="relative">
      <div class="hero"></div>
      <div class="relative flex items-center h-full">
        <div class="container mx-auto">
          <h1 class="text-4xl text-white font-normal">
            {{ $t('hero.title') }}
          </h1>
          <h2 class="text-2xl text-white mt-2 w-1/2 font-light">
            {{ $t('hero.subtitle') }}
          </h2>
          <div class="mt-8 flex">
            <button
              class="block bg-pink-400 px-4 py-2 rounded text-white uppercase font-semibold tracking-wider shadow"
            >
              Join Outsite
            </button>
            <button
              class="block ml-4 bg-white px-4 py-2 rounded text-gray-700 uppercase tracking-wider shadow font-semibold"
            >
              Watch video
            </button>
          </div>
        </div>
      </div>
    </header>
    <section>
      <div class="container mx-auto py-16 flex">
        <div class="flex-1 w-1/2">
          <p v-html="$t('description.text')" class="text-2xl leading-normal text-grey-darkest"></p>
        </div>
        <div class="flex-1 w-1/2">
          <div
            class="
              rounded border-8 border-pink-200 mx-32 text-center uppercase text-4xl font-bold tracking-wide -mt-24"
          >
            <div class="bg-pink-200 text-white py-2">
              Elke Donderdag
            </div>
            <div class="border-t-8 border-b-8 border-pink-200 text-5xl text-pink-200">
              22:00
              <small class="text-sm block">Dit lelijke ding gaat weg</small>
            </div>
            <div class="bg-pink-200 text-white py-2">
              Open Baravond
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="information">
      <div class="container mx-auto pt-24 pb-16">
        <div class="text-center">
          <h1 class="tracking-wide font-semibold uppercase text-2xl mb-12 mx-2">
            Aankomende activiteiten
          </h1>
        </div>
        <div class="flex justify-center mt-4">
          <div class="bg-white rounded shadow flex-1 mx-2">
            <img src="act_1.jpg" class="rounded-t" />
            <div class="p-4 pt-3">
              <h3 class="text-pink-400 text-xl font-bold">CraySea in Love</h3>
              <span class="text-gray-500">March 7, 2019 at 10 PM – 4 AM</span>
            </div>
          </div>
          <div class="bg-white rounded shadow flex-1 mx-2">
            <img src="act_2.jpg" class="rounded-t" />
            <div class="p-4 pt-3">
              <h3 class="text-pink-400 text-xl font-bold">Nowee 2019: Karaoke</h3>
              <span class="text-gray-500">April 4, 2019 at 9 PM – 2 AM</span>
            </div>
          </div>
          <div class="bg-white rounded shadow flex-1 mx-2">
            <img src="act_3.jpg" class="rounded-t" />
            <div class="p-4 pt-3">
              <h3 class="text-pink-400 text-xl font-bold">Board Interest Drink</h3>
              <span class="text-gray-500">
                March 28, 2019 at 10 PM – 12 AM
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-pink-200 bg-hero-falling-triangles w-full pt-8 pb-12">
      <div class="container mx-auto">
        <div class="text-center mb-4">
          <h1 class="text-white font-medium text-5xl">Kennismaken met <strong>Outsite</strong>?</h1>
        </div>
        <div class="flex justify-center">
          <div class="bg-white rounded shadow p-8 flex-1 mx-2">
            <div class="rounded-full w-16 h-16 p-4 bg-pink-400 mb-8 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current">
                <path
                  d="
                    M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9
                    10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16
                    20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z
                  "
                />
              </svg>
            </div>
            <h2 class="text-xl font-bold mb-4 text-pink-400 uppercase tracking-wider">
              {{ $t('ways_to_join.kmg.title') }}
            </h2>
            <p class="mb-8 text-lg">
              {{ $t('ways_to_join.kmg.description') }}
            </p>
            <button
              class="block bg-pink-400 px-4 py-2 rounded text-white uppercase font-semibold tracking-wider shadow"
            >
              Join the KMG
            </button>
          </div>
          <div class="bg-white rounded shadow p-8 flex-1 mx-2">
            <div class="rounded-full w-16 h-16 p-5 bg-pink-400 mb-8 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current">
                <path d="M9 18v-7L0 2V0h20v2l-9 9v7l5 1v1H4v-1l5-1zm2-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              </svg>
            </div>
            <h2 class="text-xl font-bold mb-4 text-pink-400 uppercase tracking-wider">
              {{ $t('ways_to_join.bar_buddy.title') }}
            </h2>
            <p class="mb-8 text-lg">
              {{ $t('ways_to_join.bar_buddy.description') }}
            </p>
            <button
              class="block bg-pink-400 px-4 py-2 rounded text-white uppercase font-semibold tracking-wider shadow"
            >
              Find a bar buddy
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white">
      <Video />
    </section>
    <section>
      Insta foto'
    </section>
    <section>
      Outsite bestuur
    </section>
    <footer>
      tt
    </footer>
  </div>
</template>

<script>
import Video from '~/components/Video'

export default {
  components: { Video }
}
</script>

<style>
header {
  height: calc(190px * 4);
}

.hero {
  @apply bg-gray-700 absolute w-full h-full;
  transform: skewY(-13deg);
  transform-origin: 0;
}

.information {
  @apply relative;
}

.information::before {
  @apply bg-gray-200 absolute w-full;
  height: 250%;
  transform: skewY(-13deg);
  content: '';
  z-index: -1;
  top: 0px;
}
</style>
