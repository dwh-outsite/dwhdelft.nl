<template>
  <div class="container px-4 mx-auto py-12">
    <div class="text-center">
      <h1 class="tracking-wide font-semibold uppercase text-2xl mb-6 mx-2">
        {{ title }}
      </h1>
    </div>
    <div class="md:flex justify-center">
      <div v-for="activity in activities" :key="activity.name" class="bg-white rounded shadow flex-1 mx-2 mt-4">
        <img :src="activity.cover.source" class="rounded-t" />
        <div class="p-4 pt-3">
          <h3 class="text-pink-400 text-xl font-bold">{{ activity.name }}</h3>
          <span class="text-gray-500">{{ formatDate(activity.start_time) }}</span>
        </div>
      </div>
      <div v-if="activities.length < 3" class="bg-white rounded shadow flex-1 mx-2 mt-4">
        <div class="flex flex-col h-full">
          <div class="flex-1 bg-pink-200 py-4">
            <div class="rounded-full w-20 h-20 p-6 bg-white mt-2 mb-6 text-pink-400 mx-auto">
              <Zondicon icon="beverage" class="fill-current" />
            </div>
            <h3 class="text-xl font-bold uppercase tracking-wide text-white text-center">
              Wekelijkse open baravond
            </h3>
            <h4 class="uppercase tracking-wide text-white text-center">
              Leeftijdsgrens 28 jaar
            </h4>
          </div>
          <div class="p-4 pt-3">
            <h3 class="text-pink-400 text-xl font-bold">Baravond</h3>
            <span class="text-gray-500">Elke donderdag vanaf 22.00 uur</span>
          </div>
        </div>
      </div>
      <div v-if="activities.length < 2" class="bg-white rounded shadow flex-1 mx-2 mt-4">
        <a href="https://dwhdelft.nl/eatingout">
          <div class="flex flex-col h-full">
            <div class="flex-1 bg-pink-200 py-4">
              <div class="rounded-full w-20 h-20 p-6 bg-white mt-2 mb-6 text-pink-400 mx-auto">
                <Zondicon icon="location-food" class="fill-current" />
              </div>
              <h3 class="text-xl font-bold uppercase tracking-wide text-white text-center">
                Wekelijkse eettafel
              </h3>
              <h4 class="uppercase tracking-wide text-white text-center">
                Alleen voor leden, aanmelden verplicht
              </h4>
            </div>
            <div class="p-4 pt-3">
              <h3 class="text-pink-400 text-xl font-bold">EatingOUT</h3>
              <span class="text-gray-500">Elke dinsdag om 19.00 uur</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import dayjs from 'dayjs'
import Zondicon from 'vue-zondicons'

export default {
  props: ['title'],
  components: { Zondicon },
  data() {
    return {
      activities: []
    }
  },
  mounted() {
    axios.get('/activities.json').then(response => {
      this.activities = response.data.data.sort((a, b) => a.start_time.localeCompare(b.start_time)).splice(0, 3)
    })
  },
  methods: {
    formatDate(date) {
      if (this.$i18n.locale === 'nl') {
        return dayjs(date).format('D MMMM YYYY [om] HH:mm uur')
      }

      return dayjs(date).format('MMMM Do, YYYY [at] h:mm A')
    }
  }
}
</script>
