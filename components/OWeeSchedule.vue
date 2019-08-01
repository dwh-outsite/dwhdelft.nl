<template>
  <div class="container mx-auto pt-12 pb-24">
    <h2 class="text-center tracking-wide font-semibold uppercase text-2xl mx-2 mb-6">
      {{ title }}
    </h2>
    <p class="text-xl text-center leading-normal text-grey-darkest px-64">
      Twee keer per jaar organiseert Outsite de KMG. In een kennismakingsgroep maak je onder begeleiding test test test
      van twee ervaren leden kennis met de vereniging maar vooral ook met elkaar. Je deelt met elkaar je coming-out
      verhalen (als je dat wil), je gaat langs een gay feest en nog veel meer!
    </p>
    <div class="flex mb-4">
      <div class="flex-1 mt-12 bg-white shadow-xl rounded p-8">
        <div>
          <button
            v-for="day in days"
            :key="day"
            :class="[
              'bg-pink-200 text-white rounded px-4 py-2 mr-2 uppercase tracking-wide text-sm shadow focus:outline-none',
              day === currentDay ? 'bg-pink-400 text-white font-semibold' : ''
            ]"
            @click="currentDay = day"
          >
            {{ day }}
          </button>
        </div>
        <div class="mt-4">
          <div
            v-for="activity in activities"
            v-show="activity.day == currentDay"
            :key="activity.name"
            class="py-2 border-b flex"
          >
            <div class="mr-4">{{ activity.start }} - {{ activity.end }}</div>
            <div class="flex-1">
              <strong>{{ activity.name }}</strong>
              <p>{{ activity.descriptionDutch }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-2/5 px-8">
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
          descriptionEnglish: row[5]
        }
      }),
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      currentDay: 'Sunday'
    }
  }
}
</script>
