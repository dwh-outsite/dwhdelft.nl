<template>
  <div>
    <header>
      <Header>
        <h1 class="text-4xl text-white font-normal">
          {{ $t('hero.title') }}
        </h1>
        <h2 class="text-2xl text-white mt-2 w-1/2 font-light">
          {{ $t('hero.subtitle') }}
        </h2>
        <div class="mt-8 flex">
          <button class="block bg-pink-400 px-4 py-2 rounded text-white uppercase font-semibold tracking-wider shadow">
            Join Outsite
          </button>
          <button
            class="block ml-4 bg-white px-4 py-2 rounded text-gray-700 uppercase tracking-wider shadow font-semibold"
          >
            Watch video
          </button>
        </div>
      </Header>
    </header>

    <section>
      <div class="container mx-auto py-16 flex">
        <div class="flex-1 w-1/2">
          <p class="text-2xl leading-normal text-grey-darkest" v-html="$t('description.text')"></p>
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
      <Activities title="Aankomende activiteiten" />
    </section>

    <section class="bg-pink-200 bg-hero-falling-triangles">
      <JoinOptions
        title="Kennismaken met <strong>Outsite</strong>?"
        left-icon="user-group"
        :left-title="$t('ways_to_join.kmg.title')"
        left-button-text="Join the KMG"
        right-icon="beverage"
        :right-title="$t('ways_to_join.bar_buddy.title')"
        right-button-text="Find a Bar Buddy"
      >
        <template v-slot:left>
          {{ $t('ways_to_join.kmg.description') }}
        </template>
        <template v-slot:right>
          {{ $t('ways_to_join.bar_buddy.description') }}
        </template>
      </JoinOptions>
    </section>

    <section class="bg-white">
      <Video title="<strong>Outsite</strong> in 120 seconds" url="https://www.youtube-nocookie.com/embed/zWWvERxW5rM" />
    </section>

    <footer></footer>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Activities from '~/components/Activities'
import JoinOptions from '~/components/JoinOptions'
import Video from '~/components/Video'

export default {
  components: {
    Header,
    Activities,
    JoinOptions,
    Video
  }
}
</script>

<style>
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

footer {
  @apply relative overflow-hidden;
}

footer::before {
  @apply bg-gray-700 absolute w-full;
  height: 2000px;
  transform: skewY(-13deg);
  content: '';
  z-index: -1;
  top: 300px;
}
</style>
