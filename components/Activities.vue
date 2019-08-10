<template>
  <div class="container px-4 mx-auto pt-24 pb-16">
    <div class="text-center">
      <h1 class="tracking-wide font-semibold uppercase text-2xl mb-12 mx-2">
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
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  props: ['title'],
  data() {
    return {
      activities: []
    }
  },
  mounted() {
    moment.locale('nl')
    axios.get('/activities.json').then(response => {
      this.activities = response.data.data.sort((a, b) => a.start_time.localeCompare(b.start_time)).splice(0, 3)
    })
  },
  methods: {
    formatDate(date) {
      moment.locale(this.$i18n.locale)

      if (this.$i18n.locale === 'nl') {
        return moment(date).format('D MMMM YYYY [om] HH:mm uur')
      }

      return moment(date).format('MMMM Do, YYYY [at] h:mm A')
    }
  }
}
</script>
