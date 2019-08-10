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
              {{ $t('hero.leftButton') }}
            </button>
          </a>
          <a href="#video">
            <button class="block ml-4 button-white">
              {{ $t('hero.rightButton') }}
            </button>
          </a>
        </div>
      </Header>
    </header>

    <section class="introduction">
      <div class="container mx-auto px-4 pt-12 pb-24 md:flex">
        <div class="flex-1 md:w-1/2">
          <p class="text-l md:text-xl leading-normal text-gray-800" v-html="$t('description.text')"></p>
          <br />
          <p class="text-l md:text-xl leading-normal text-pink-400">
            <strong>{{ $t('description.invitation') }}</strong>
          </p>
        </div>
        <div class="flex-1 md:w-1/2 panda-container">
          <Panda class="panda"></Panda>
        </div>
      </div>
    </section>

    <section class="information">
      <Activities title="Aankomende activiteiten" />
    </section>

    <section id="join-outsite" class="bg-pink-200 bg-hero-falling-triangles">
      <JoinOptions
        :title="$t('ways_to_join.title')"
        left-icon="user-group"
        :left-title="$t('ways_to_join.kmg.title')"
        :left-button-text="$t('ways_to_join.kmg.action')"
        :left-url="localePath('kmg')"
        right-icon="beverage"
        :right-title="$t('ways_to_join.bar_buddy.title')"
        :right-button-text="$t('ways_to_join.bar_buddy.action')"
        :right-url="localePath('barbuddy')"
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

    <section id="owee" class="bg-gray-200">
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
import Panda from '@/assets/images/outsite_panda_cropped.svg'
import Activities from '~/components/Activities'
import JoinOptions from '~/components/JoinOptions'
import Video from '~/components/Video'
import OWeeSchedule from '~/components/OWeeSchedule'

export default {
  components: {
    Header,
    Panda,
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

.panda {
  z-index: -2;

  position: relative;
  width: 100%;
  height: inherit;

  bottom: 0rem;
  left: 5rem;
}

.panda-container {
  height: inherit;
}

.introduction {
  margin-bottom: -10rem;
}
</style>
