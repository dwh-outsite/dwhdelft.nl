<template>
  <div class="bg-white p-8 rounded-lg shadow-xl">
    <div class="rounded-full w-16 h-16 p-5 bg-purple-500 mb-8 text-white">
      <Zondicon icon="time" class="fill-current" />
    </div>

    <h2 v-text="$t('bookings.form.title')" class="text-xl font-bold mb-4 text-purple-500 uppercase tracking-wider" />
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'
import axios from 'axios'
import dayjs from 'dayjs'
import 'dayjs/locale/nl'

const apiUrl = 'https://reserveer.dwhdelft.nl'

export default {
  components: { Zondicon },
  data() {
    return {
      errors: [],
      form: {
        name: '',
        email: '',
        event_id: undefined,
        twoseat: false
      },
      events: [],
      selectedEvent: undefined,
      state: 'start'
    }
  },
  mounted() {
    axios
      .get(apiUrl + '/api/events')
      .then(response => {
        this.events = response.data.data
      })
      .catch(() => {
        alert('An error occurred. If this keeps happening, please send us an email.')
      })
  },
  methods: {
    selectEvent(event) {
      if (event.available_seats > 0) {
        this.form.event_id = event.id
        this.selectedEvent = event
      }
    },
    selectTwoseat(twoseat) {
      if (twoseat && this.selectedEvent.available_twoseats > 0) {
        this.form.twoseat = true
      } else {
        this.form.twoseat = false
      }
    },
    submit(event) {
      event.preventDefault()

      if (this.form.event_id === undefined) {
        this.errors.push('You have to select one of the timeslots.')
        return
      }

      this.state = 'loading'

      axios
        .post(apiUrl + '/api/bookings', this.form)
        .then(() => {
          this.state = 'finished'
        })
        .catch(error => {
          this.state = 'start'

          if (error.response.data.errors) {
            this.errors = Object.values(error.response.data.errors)
              .flat()
              .map(this.translateError)
          } else {
            alert('An error occurred. If this keeps happening, please send us an email.')
          }
        })
    },
    formatDate(date) {
      if (this.$i18n.locale === 'nl') {
        dayjs.locale('nl')
      }

      return dayjs(date).format('dddd DD-MM')
    },
    formatTime(date) {
      if (this.$i18n.locale === 'nl') {
        dayjs.locale('nl')
        return dayjs(date).format('H:mm')
      }

      return dayjs(date).format('h:mm A')
    },
    translateError(error) {
      const key = error.replace(/ /g, '_').replace(/\./g, '')

      if (this.$te('bookings.form.validation.' + key)) {
        return this.$t('bookings.form.validation.' + key)
      }

      return error
    }
  }
}
</script>
