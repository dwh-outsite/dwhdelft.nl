<template>
  <div>
    <header>
      <Header>
        <h1 class="text-4xl text-white font-normal">
          {{ $t('hero.title') }}
        </h1>
        <h2 class="text-2xl text-white mt-2 font-light">
          {{ $t('hero.subtitle') }}
        </h2>
        <div class="mt-8 flex">
          <a href="#join-outsite">
            <button class="block button-pink">
              Join Outsite
            </button>
          </a>
          <a href="#video">
            <button class="block ml-4 button-white">
              Watch video
            </button>
          </a>
        </div>
      </Header>
    </header>

    <section>
      <div class="container mx-auto px-4 pt-12 pb-24 md:flex">
        <div class="flex-1 md:w-1/2">
          <p class="text-xl md:text-2xl leading-normal text-grey-darkest" v-html="$t('description.text')"></p>
        </div>
        <div class="flex-1 md:w-1/2">
          <div
            class="
              rounded border-8 border-pink-200 mx-32 text-center uppercase text-4xl font-bold tracking-wide
              mt-8 md:-mt-24
            "
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

    <section id="join-outsite" class="bg-pink-200 bg-hero-falling-triangles">
      <JoinOptions
        title="Kennismaken met <strong>Outsite</strong>?"
        left-icon="user-group"
        :left-title="$t('ways_to_join.kmg.title')"
        :left-button-text="$t('ways_to_join.kmg.action')"
        right-icon="beverage"
        :right-title="$t('ways_to_join.bar_buddy.title')"
        :right-button-text="$t('ways_to_join.bar_buddy.action')"
      >
        <template v-slot:left>
          {{ $t('ways_to_join.kmg.description') }}
        </template>
        <template v-slot:right>
          {{ $t('ways_to_join.bar_buddy.description') }}
        </template>
      </JoinOptions>
    </section>

    <section id="video" class="bg-white">
      <Video title="<strong>Outsite</strong> in 120 seconds" url="https://www.youtube-nocookie.com/embed/zWWvERxW5rM" />
    </section>

    <section class="bg-gray-200">
      <OWeeSchedule title="OWee Schedule 2019">
        Van 18 t/m 22 augustus vindt de Delftse introductieweek, de OWee, plaats. Tijdens deze week organiseren wij
        allerlei activiteiten om te laten zien wat voor vereniging wij zijn. Hierdoor kun jij erachter komen of Outsite
        de vereniging is die bij je past. We hebben sowieso elke avond een leuk feestje, maar doen ook andere leuke
        dingen die je hieronder in het schema kunt zien! We hopen je te zien tijdens de OWee!
      </OWeeSchedule>
    </section>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Activities from '~/components/Activities'
import JoinOptions from '~/components/JoinOptions'
import Video from '~/components/Video'
import OWeeSchedule from '~/components/OWeeSchedule'

export default {
  components: {
    Header,
    Activities,
    JoinOptions,
    Video,
    OWeeSchedule
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
  transform: skewY(-7deg);
  content: '';
  z-index: -1;
  top: 0px;
}
</style>
