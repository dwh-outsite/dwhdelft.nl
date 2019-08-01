<template>
  <div class="container mx-auto pt-12 pb-24">
    <h2 class="text-center tracking-wide font-semibold uppercase text-2xl mx-2 mb-6">
      {{ title }}
    </h2>
    <p class="text-xl text-center leading-normal text-grey-darkest px-64">
      Van 18 t/m 22 augustus vindt de Delftse introductieweek, de OWee, plaats. Tijdens deze week organiseren wij
      allerlei activiteiten om te laten zien wat voor vereniging wij zijn. Hierdoor kun jij erachter komen of Outsite de
      vereniging is die bij je past. We hebben sowieso elke avond een leuk feestje, maar doen ook andere leuke dingen
      die je hieronder in het schema kunt zien! We hopen je te zien tijdens de OWee!
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
            {{ $t('days.' + day.toLowerCase()) }}
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
