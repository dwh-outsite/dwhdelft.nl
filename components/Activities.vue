<template>
  <div class="container px-4 mx-auto py-12">
    <div class="text-center">
      <h1 class="tracking-wide font-semibold uppercase text-2xl mb-6 mx-2">
        {{ title }}
      </h1>
    </div>
    <a :href="localePath('krans')">
      <div class="flex bg-white rounded shadow mx-2 mt-4">
        <div class="w-1/3 p-8">
          <Krans class="h-64 mx-auto" />
        </div>
        <div class="flex-1 bg-purple-500 p-8">
          <div
            v-text="$t('remembrance_day.title_label')"
            class="bg-white rounded-lg px-2 py-1 text-xs uppercase tracking-wider inline"
          />
          <h2 v-text="$t('remembrance_day.title')" class="text-4xl text-white font-normal mt-2 mb-6" />

          <h3
            v-text="$t('remembrance_day.wreath_laying.title')"
            class="text-white leading-none text-center md:text-left text-5xl mb-10 md:text-6xl parisienne"
          />

          <button class="block button-white">
            {{ $t('remembrance_day.form.title') }}
            &raquo;
          </button>
        </div>
      </div>
    </a>
    <div v-if="false" class="md:flex justify-center">
      <div v-for="activity in activities" :key="activity.name" class="bg-white rounded shadow flex-1 mx-2 mt-4">
        <a
          :href="'https://www.facebook.com/events/' + activity.id"
          target="_blank"
          class="flex flex-col justify-between h-full"
        >
          <div>
            <div
              :style="'background-image: url(' + activity.cover.source + ');'"
              class="aspect-ratio-fb relative overflow-hidden bg-cover bg-center rounded-t"
            />
            <div class="px-4 pt-3">
              <h3 class="text-purple-500 text-xl font-bold">{{ activity.name }}</h3>
            </div>
          </div>
          <div class="px-4 pb-4">
            <span class="text-gray-500">{{ formatDate(activity.start_time) }}</span>
          </div>
        </a>
      </div>
      <div v-if="activities.length < 3" class="bg-white rounded shadow flex-1 mx-2 mt-4">
        <div class="flex flex-col h-full">
          <div class="flex-1 bg-purple-300 py-4">
            <div class="rounded-full w-20 h-20 p-6 bg-white mt-2 mb-6 text-purple-500 mx-auto">
              <Zondicon icon="beverage" class="fill-current" />
            </div>
            <h3 class="text-xl font-bold uppercase tracking-wide text-white text-center">
              {{ $t('activities.defaults.bar.banner_title') }}
            </h3>
            <h4 class="uppercase tracking-wide text-white text-center">
              {{ $t('activities.defaults.bar.banner_subtitle') }}
            </h4>
          </div>
          <div class="p-4 pt-3">
            <h3 class="text-purple-500 text-xl font-bold">{{ $t('activities.defaults.bar.title') }}</h3>
            <span class="text-gray-500">{{ $t('activities.defaults.bar.date') }}</span>
          </div>
        </div>
      </div>
      <div v-if="activities.length < 2" class="bg-white rounded shadow flex-1 mx-2 mt-4">
        <a href="https://dwhdelft.nl/eatingout">
          <div class="flex flex-col h-full">
            <div class="flex-1 bg-purple-300 py-4">
              <div class="rounded-full w-20 h-20 p-6 bg-white mt-2 mb-6 text-purple-500 mx-auto">
                <Zondicon icon="location-food" class="fill-current" />
              </div>
              <h3 class="text-xl font-bold uppercase tracking-wide text-white text-center">
                {{ $t('activities.defaults.eating_out.banner_title') }}
              </h3>
              <h4 class="uppercase tracking-wide text-white text-center">
                {{ $t('activities.defaults.eating_out.banner_subtitle') }}
              </h4>
            </div>
            <div class="p-4 pt-3">
              <h3 class="text-purple-500 text-xl font-bold">{{ $t('activities.defaults.eating_out.title') }}</h3>
              <span class="text-gray-500">{{ $t('activities.defaults.eating_out.date') }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import 'dayjs/locale/nl'
import Zondicon from 'vue-zondicons'
import activitiesFile from '~/static/activities.json'

import Krans from '@/assets/images/krans.svg'

export default {
  components: { Zondicon, Krans },
  props: ['title'],
  data() {
    return {
      activities: JSON.parse(JSON.stringify(activitiesFile))
        .data.sort((a, b) => a.start_time.localeCompare(b.start_time))
        .splice(0, 3)
    }
  },
  methods: {
    formatDate(date) {
      date = date.slice(0, -2) + ':' + date.slice(-2)

      if (this.$i18n.locale === 'nl') {
        dayjs.locale('nl')
        return dayjs(date).format('D MMMM YYYY [om] HH:mm uur')
      }

      return dayjs(date).format('MMMM D, YYYY [at] h:mm A')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Parisienne&display=swap');

.parisienne {
  font-family: 'Parisienne', cursive;
}
</style>
