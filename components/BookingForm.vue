<template>
  <div class="bg-white p-8 rounded-lg shadow-xl">
    <div class="rounded-full w-16 h-16 p-5 bg-purple-500 mb-8 text-white">
      <Zondicon icon="time" class="fill-current" />
    </div>

    <h2 v-text="$t('bookings.form.title')" class="text-xl font-bold mb-4 text-purple-500 uppercase tracking-wider" />

    <div v-if="state === 'finished'">
      <div class="bg-purple-100 rounded p-4 text-lg flex items-center">
        <div class="rounded-full w-16 h-16 p-3 bg-purple-500 text-white">
          <Zondicon icon="checkmark-outline" class="fill-current w-10" />
        </div>
        <div class="ml-4">
          <h4 v-text="$t('bookings.form.thank_you')" class="text-xl leading-tight" />
        </div>
      </div>
    </div>

    <form v-if="state == 'start' || state == 'loading'" @submit="submit">
      <div v-for="error in errors" :key="error" class="bg-red-200 border-1 border-red-400 rounded p-2 mb-4">
        <strong>{{ $t('bookings.form.oops') }}</strong>
        {{ error }}
      </div>

      <p class="form-element-gray">
        <label class="required">{{ $t('forms.label.name') }}</label>
        <input v-model="form.name" :placeholder="$t('forms.placeholder.name')" type="text" required />
      </p>

      <p class="form-element-gray">
        <label class="required">{{ $t('forms.label.email') }}</label>
        <input v-model="form.email" :placeholder="$t('forms.placeholder.email')" type="email" required />
      </p>

      <div class="form-element-gray">
        <label class="required">Tijdslot</label>
        <div class="flex flex-wrap">
          <div v-for="event in events" :key="event.id" class="w-full md:w-1/3">
            <div
              @click="selectEvent(event)"
              :class="[
                form.event_id == event.id ? 'border-2 border-purple-500' : '',
                event.available_seats == 0 ? 'text-gray-400' : 'cursor-pointer'
              ]"
              class="bg-purple-100 rounded-md mt-2 mr-2 shadow overflow-hidden"
            >
              <div
                v-text="event.name"
                :class="event.available_seats <= 0 ? 'bg-purple-200 text-purple-300' : 'text-white bg-purple-500'"
                class="px-3 py-1 font-bold"
              />
              <div class="px-3 py-2 text-sm">
                <div v-text="formatDate(event.start)" class="capitalize" />
                <div>{{ formatTime(event.start) }} - {{ formatTime(event.end) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p v-text="$t('bookings.form.disclaimer')" class="text-sm mb-4" />

      <button :disabled="state === 'loading'" type="submit" class="button-pink">
        {{ state === 'loading' ? $t('forms.buttons.loading') : $t('forms.buttons.sign_up') }}
      </button>
    </form>
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
