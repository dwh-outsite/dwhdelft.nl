<template>
  <div class="container px-4 mx-auto py-12">
    <h2 class="text-center tracking-wide font-semibold uppercase text-2xl mx-2 mb-6">
      {{ title }}
    </h2>
    <p class="text-xl text-center leading-normal text-grey-darkest xl:px-64">
      <slot></slot>
    </p>
    <div class="md:flex mb-4">
      <div class="flex-1 mt-12 bg-white shadow-xl rounded p-8">
        <div class="-mt-2">
          <button
            v-for="day in days"
            :key="day"
            :class="[
              'mt-2',
              'bg-pink-200 text-white rounded px-4 py-2 mr-2 uppercase tracking-wide text-sm shadow focus:outline-none',
              day === currentDay ? 'bg-pink-400 text-white font-semibold' : ''
            ]"
            @click="currentDay = day"
          >
            {{ $t('owee.days.' + day.toLowerCase()) }}
          </button>
        </div>
        <div class="mt-4">
          <div
            v-for="activity in activities"
            v-show="activity.day == currentDay"
            :key="activity.name"
            :class="['py-3 flex']"
          >
            <div :class="['mr-4', activity.highlight ? 'text-pink-400' : '']">
              {{ activity.start }} - {{ activity.end }}
            </div>
            <div class="flex-1">
              <strong :class="[activity.highlight ? 'text-pink-400' : '']">{{ activity.name }}</strong>
              <p class="text-gray-700">
                {{ $i18n.locale == 'en' ? activity.descriptionEnglish : activity.descriptionDutch }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-2/5 px-8">
        <OWeeLogo class="w-full" />
      </div>
    </div>
  </div>
</template>

<script>
import schedule from '~/assets/owee_schedule.csv'
import OWeeLogo from '@/assets/images/owee_2019_logo.svg'

export default {
  props: ['title'],
  components: { OWeeLogo },
  data() {
    return {
      activities: schedule.map(row => {
        return {
          day: row[0],
          start: row[1],
          end: row[2],
          name: row[3],
          descriptionDutch: row[4],
          descriptionEnglish: row[5],
          highlight: row[6]
        }
      }),
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      currentDay: 'Monday'
    }
  }
}
</script>
