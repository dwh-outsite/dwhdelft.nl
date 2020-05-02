<template>
  <div>
    <header>
      <Header small="true">
        <h1 class="text-4xl text-white font-normal">
          EatingOUT
        </h1>
      </Header>
    </header>

    <section class="container mx-auto relative flex">
      <div class="w-1/3">
        <div class="w-1/3 absolute -top-40 z-50">
          <EatingOutForm />
        </div>
      </div>
      <div class="flex-1 ml-16 pb-32">
        <div class="flex mb-6 justify-between items-end">
          <div>
            <div
              class="bg-purple-200 rounded-lg px-2 py-1 text-xs uppercase tracking-wider inline"
              v-text="eventDetails.note"
            />
          </div>

          <div class="bg-white rounded px-3 tracking-wider flex items-center border border-purple-200">
            <Zondicon icon="calendar" class="fill-current h-4 inline mr-2 text-purple-500" />
            <div class="flex-1 py-2 pr-3">
              {{ eventDetails.day }}
            </div>
            <div class="border-l border-purple-200 pl-3 py-2" v-text="eventDetails.time" />
          </div>
        </div>

        <p class="text-xl md:text-2xl leading-normal text-gray-800 mb-12">
          {{ eventDetails.description }}
        </p>

        <div class="flex mb-4">
          <div class="bg-purple-100 rounded px-3 tracking-wider flex items-center border border-purple-100">
            <Zondicon icon="map" class="fill-current h-4 inline mr-2 text-purple-500" />
            <div class="flex-1 py-2">
              Lange Geer 22, Delft
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="information relative pt-4 pb-24">
      <div class="mx-auto container">
        <h2 class="text-right text-white text-6xl menu-title">
          This Week's Menu
        </h2>
        <div class="flex justify-end">
          <div class="bg-purple-100 rounded p-4 text-lg inline max-w-1/2">
            {{ event.description_nl }}
          </div>
        </div>
        <div class="flex justify-end">
          <div class="pt-3 text-white">
            <div class="flex items-center">
              <Zondicon icon="user" class="fill-current h-4 inline mr-2" />
              <span class="uppercase tracking-wide mr-5">
                <span class="font-bold">Cook:</span>
                {{ event.cook }}
              </span>

              <Zondicon icon="timer" class="fill-current h-4 inline mr-2" />
              <span class="uppercase tracking-wide mr-5">
                <span class="font-bold">Due date:</span>
                {{ formatDate(event.due_date) }}
              </span>

              <Zondicon icon="currency-dollar" class="fill-current h-4 inline mr-2" />
              <span class="uppercase tracking-wide">
                <span class="font-bold">{{ event.price }}</span>
                euros
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import Zondicon from 'vue-zondicons'

import Header from '~/components/Header'
import EatingOutForm from '~/components/EatingOutForm'

export default {
  components: {
    Zondicon,
    Header,
    EatingOutForm
  },
  data() {
    return {
      eventDetails: this.$t('recurring_events.events').find(event => event.name === 'EatingOUT')
    }
  },
  async asyncData() {
    const events = await require.context('~/assets/content/eatingout/', false, /\.json$/)

    const event = events
      .keys()
      .map(key => events(key))
      .map(event => {
        event.visible_from = dayjs(event.visible_from)
        event.due_date = dayjs(event.due_date)
        return event
      })
      .filter(event => event.visible_from <= dayjs())
      .reduce((max, event) => (max.visible_from > event.visible_from ? max : event))

    return {
      event: event
    }
  },
  methods: {
    formatDate(date) {
      // TODO: fix Dutch date
      // if (this.$i18n.locale === 'nl') {
      //   dayjs.locale('nl')
      //   return dayjs(date).format('dddd, HH uur')
      // }

      return dayjs(date).format('dddd, hA')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Parisienne&display=swap');

.menu-title {
  font-family: 'Parisienne', cursive;
}

.information::before {
  @apply bg-purple-500 absolute w-full;
  height: 150%;
  transform: skewY(-7deg);
  content: '';
  z-index: -1;
  top: 0px;
}
</style>
