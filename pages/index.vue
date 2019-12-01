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
          <a href="#join-dwh">
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

    <section class="introduction overflow-x-hidden">
      <div class="container mx-auto pt-12 pb-24 md:flex">
        <div class="flex-1 md:w-1/2 px-4 md:pr-16">
          <p class="text-lg md:text-xl leading-relaxed text-gray-800" v-html="$t('description.text')"></p>
          <div
            class="
              flex-1 rounded shadow-xl bg-purple-500 text-lg md:text-xl text-white my-12 md:mt-10 md:mb-24 p-4 relative
              w-full md:w-auto md:inline-flex items-center
            "
          >
            <div
              class="
                rounded-full w-16 h-16 p-4 bg-white text-purple-500 shadow md:shadow-none
                absolute -top-8 md:static
              "
            >
              <Zondicon icon="explore" class="fill-current" />
            </div>
            <div class="mt-6 md:mt-0 md:ml-4" v-html="$t('description.invitation')" />
          </div>
        </div>
        <div class="hidden md:block">
          <div class="bg-white p-4 border rotate shadow-lg z-50 mr-8 -mt-7">
            <img src="~/assets/images/building.jpg" class="w-96" />
          </div>
        </div>
      </div>
    </section>

    <section class="information relative pt-12">
      <Activities :title="$t('activities.title')" />
    </section>

    <section id="join-dwh" class="bg-purple-400">
      <JoinOptions
        :title="$t('ways_to_join.title')"
        :description="$t('ways_to_join.description')"
        :outsite-hint="$t('ways_to_join.outsite_hint')"
        left-icon="user-group"
        :left-title="$t('ways_to_join.kmg.title')"
        :left-button-text="$t('ways_to_join.kmg.action')"
        :left-url="localePath('kmg')"
        box-icon="beverage"
        :box-title="$t('ways_to_join.bar_buddy.title')"
        :box-button-text="$t('ways_to_join.bar_buddy.action')"
        :box-url="localePath('barbuddy')"
      >
        <template v-slot:left>
          {{ $t('ways_to_join.kmg.description') }}
        </template>
        <template v-slot:box>
          {{ $t('ways_to_join.bar_buddy.description') }}
        </template>
      </JoinOptions>
    </section>

    <section id="recurring_events" class="bg-white">
      <RecurringEvents :announcement="$t('recurring_events.announcement')" />
    </section>

    <section id="eatingout" class="bg-gray-200">
      <EatingOut />
    </section>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

import Header from '~/components/Header'
import Activities from '~/components/Activities'
import JoinOptions from '~/components/JoinOptions'
import RecurringEvents from '~/components/RecurringEvents'
import EatingOut from '~/components/EatingOut'

export default {
  components: {
    Header,
    Activities,
    JoinOptions,
    RecurringEvents,
    EatingOut,
    Zondicon
  }
}
</script>

<style>
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

  width: 100%;
  height: inherit;

  bottom: 0rem;
  left: 5rem;
}

.introduction {
  margin-bottom: -10rem;
}

.rotate {
  transform: rotate(5deg);
}
</style>
