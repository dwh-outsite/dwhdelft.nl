<i18n lang="yaml">
en:
  title: Reservation
  event: Event
  fully_booked: Fully booked
  no_events: There are no events scheduled at the moment. Please come back later.
  thank_you:
    Thank you for making a reservation! You will receive an e-mail with your proof of reservation. If you need to
    cancel, you can do so via the e-mail you will receive.
  another_booking: Make another booking
  disclaimer:
    By submitting this form you allow DWH to save your information and to process it. Your information will only be
    used to check reservations and for the possibility to get in touch with you. If you have more questions, please
    contact us via the information below.
  oops: Oops.
  validation:
    A_guest_can_only_have_one_open_booking: You already have an active reservation for the coming days.
      You can only have one open booking at a time.
nl:
  title: Reserveren
  event: Evenement
  fully_booked: Niet meer beschikbaar
  no_events: Er zijn op dit moment geen evenementen gepland. Kom later terug.
  thank_you:
    Bedankt voor het reserveren! Je ontvangt een e-mail met je reserveringsbewijs. Lukt het je uiteindelijk toch
    niet om aanwezig te zijn? Via de mail die je ontvangt kun je je reservering annuleren.
  another_booking: Maak nog een reservering
  disclaimer: Bij het verzenden van dit formulier geef je DWH toestemming om je gegevens op te slaan en te verwerken. Je
    gegevens worden alleen gebruikt voor het controleren van reserveringen en voor de mogelijkheid om contact
    met je op te nemen. Neem voor vragen contact op via onderstaande contactgegevens.
  oops: Oeps.
  validation:
    A_guest_can_only_have_one_open_booking:
      Je hebt al een actieve reservering voor een event de komende tijd. Je kunt maximaal 1 openstaande
      reservering hebben.
</i18n>

<template>
  <div class="bg-white p-8 rounded-lg shadow-xl">
    <div class="rounded-full w-16 h-16 p-5 bg-brand-450 mb-8 text-white">
      <Zondicon icon="time" class="fill-current" />
    </div>

    <h2 class="text-xl font-bold mb-4 text-brand-450 uppercase tracking-wider" v-text="$t('title')" />

    <div v-show="state === 'finished'">
      <FormCompleted class="bg-brand-100 mb-6" :title="$t('forms.success.heading')" :subtitle="$t('thank_you')" />
      <button
        class="border border-brand-500 hover:bg-brand-500 text-brand-500 hover:text-white rounded uppercase text-sm tracking-wide py-2 px-3 shadow"
        @click="reset"
        v-text="$t('another_booking')"
      />
    </div>

    <form v-show="state == 'start' || state == 'loading'" @submit="submit">
      <div v-for="error in errors" :key="error" class="bg-red-200 border-1 border-red-400 rounded p-2 mb-4">
        <strong>{{ $t('oops') }}</strong>
        {{ error }}
      </div>

      <FormElement :label="$t('forms.label.name')" class="form-element-gray" required="true">
        <FormInput v-model="form.name" :placeholder="$t('forms.placeholder.name')" />
      </FormElement>

      <FormElement :label="$t('forms.label.email')" class="form-element-gray" required="true">
        <FormInput v-model="form.email" :placeholder="$t('forms.placeholder.email')" type="email" />
      </FormElement>

      <div class="form-element-gray">
        <label class="required" v-text="$t('event')" />
        <div class="flex flex-wrap">
          <div v-if="events.length === 0" class="bg-brand-100 rounded-lg w-full p-4">
            {{ $t('no_events') }}
          </div>
          <div v-for="event in events" :key="event.id" class="w-full">
            <div
              :class="[
                form.event_id == event.id ? 'border-2 border-brand-450' : '',
                event.available_seats == 0 ? 'text-gray-400' : 'cursor-pointer',
              ]"
              class="bg-brand-100 rounded-md mt-2 mr-2 shadow overflow-hidden"
              @click="selectEvent(event)"
            >
              <div
                :class="event.available_seats <= 0 ? 'bg-brand-200 text-brand-300' : 'text-white bg-brand-450'"
                class="px-3 py-1 font-bold"
                v-text="event.name"
              />
              <div class="px-3 py-2">
                <div class="capitalize mb-1 font-sembold" v-text="formatDate(event.start)" />
                <div class="md:flex space-y-2 md:space-y-0 md:space-x-2">
                  <div class="bg-white px-2 py-1 rounded inline-flex items-center">
                    <Zondicon icon="time" class="fill-current w-4 h-4 mr-2" />
                    {{ formatTime(event.start) }} - {{ formatTime(event.end) }}
                  </div>
                  <div v-if="event.available_seats <= 0" class="bg-purple-450 text-white px-2 py-1 rounded">
                    {{ $t('fully_booked') }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-show="selectedEvent.event_type_id === 'dinner'" class="form-element-gray">
        <label class="required">Team</label>
        <div class="md:flex flex-wrap -mx-1">
          <div v-for="team in teams" :key="team.name" class="md:w-1/2 p-1">
            <div
              :class="[
                team === dinnerForm.team ? 'bg-brand-400 text-white' : 'bg-brand-100 hover:bg-brand-200',
                'rounded px-3 py-2 tracking-wider flex items-center cursor-pointer shadow',
              ]"
              @click="dinnerForm.team = team"
            >
              <span class="mr-3">{{ team.emoji }}</span>
              {{ team.name }}
            </div>
          </div>
        </div>
        <p class="mt-4 px-3 py-3 rounded shadow text-gray-500">
          <span class="mr-3">{{ dinnerForm.team.emoji }}</span>
          {{ dinnerForm.team.description }}
        </p>
      </div>

      <div v-show="selectedEvent.event_type_id === 'dinner'" class="form-element">
        <label class="form-element-label">I don't eat...</label>
        <div class="space-y-2">
          <div class="grid grid-cols-3 gap-2">
            <div
              v-for="restriction in restrictions"
              :key="restriction"
              :class="[
                dinnerForm.diet.includes(restriction) ? 'bg-brand-400 text-white' : 'bg-brand-100 hover:bg-brand-200',
                'rounded px-3 py-1 tracking-wider text-center cursor-pointer shadow',
              ]"
              @click="toggleRestriction(restriction)"
              v-text="restriction"
            />
          </div>
          <div
            :class="[
              dinnerForm.otherDiet.length > 0 ? 'bg-brand-400 text-white' : 'bg-brand-100 hover:bg-brand-200',
              'rounded px-1 py-2 tracking-wider flex-1 flex items-center cursor-pointer h-full shadow',
            ]"
          >
            <div class="px-2">Other:</div>
            <input
              v-model="dinnerForm.otherDiet"
              type="text"
              class="mr-2 inline text-black"
              placeholder="Other Restrictions"
            />
          </div>
        </div>
      </div>

      <p class="text-sm mb-4" v-text="$t('disclaimer')" />

      <PrimaryButton :disabled="state === 'loading'" type="submit">
        {{ state === 'loading' ? $t('forms.buttons.loading') : $t('forms.buttons.submit') }}
      </PrimaryButton>
    </form>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'
import axios from 'axios'
import dayjs from 'dayjs'
import 'dayjs/locale/nl'

const apiUrl = 'https://reserveer.dwhdelft.nl'

const DINNER_TEAMS = [
  { emoji: '🍝', name: 'Kitchen Helpers', description: 'You help the chef prepare the food' },
  { emoji: '⏰', name: 'In a hurry', description: 'You will help out another time' },
  { emoji: '🧽 ', name: 'Washing up', description: 'You clean the dishes afterwards' },
  { emoji: '👩‍🍳', name: 'Cookies', description: 'You are the main chef' },
  { emoji: '🍻', name: 'Bartender', description: 'You serve the drinks' },
]
const DINNER_RESTRICTIONS = ['Meat', 'Fish', 'Seafood', 'Cheese', 'Nuts', 'Dairy']

export default {
  components: { Zondicon },
  data() {
    return {
      errors: [],
      form: {
        name: '',
        email: '',
        ggd_consent: false,
        phone_number: '',
        event_id: undefined,
        twoseat: false,
        custom_fields: {},
      },
      events: [],
      selectedEvent: {},
      state: 'start',
      teams: DINNER_TEAMS,
      restrictions: DINNER_RESTRICTIONS,
      dinnerForm: {
        team: DINNER_TEAMS[0],
        diet: [],
        otherDiet: '',
      },
    }
  },
  mounted() {
    this.initialize()
  },
  methods: {
    initialize() {
      this.restorePersonalDetails()

      axios
        .get(apiUrl + '/api/events')
        .then((response) => {
          this.events = response.data.data
        })
        .catch(() => {
          alert('An error occurred. If this keeps happening, please send us an email.')
        })
    },
    selectEvent(event) {
      if (event.available_seats > 0) {
        this.form.event_id = event.id
        this.selectedEvent = event
      }
    },
    submit(event) {
      event.preventDefault()

      if (this.form.event_id === undefined) {
        this.errors.push('You have to select one of the timeslots.')
        return
      }

      if (this.selectedEvent.event_type_id === 'dinner') {
        this.form.custom_fields = {
          team: this.dinnerForm.team.name,
          diet: [...this.dinnerForm.diet, ...(this.dinnerForm.otherDiet.length > 0 ? [this.dinnerForm.otherDiet] : [])],
        }
      }

      this.state = 'loading'

      axios
        .post(apiUrl + '/api/bookings', this.form)
        .then(() => {
          this.state = 'finished'
          this.$el.scrollIntoView({ behavior: 'smooth' })
          this.cachePersonalDetails()
        })
        .catch((error) => {
          this.state = 'start'

          if (error.response.data.errors) {
            this.errors = Object.values(error.response.data.errors).flat().map(this.translateError)
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

      if (this.$te('validation.' + key)) {
        return this.$t('validation.' + key)
      }

      return error
    },
    toggleRestriction(restriction) {
      if (this.dinnerForm.diet.includes(restriction)) {
        this.dinnerForm.diet.splice(this.dinnerForm.diet.indexOf(restriction), 1)
      } else {
        this.dinnerForm.diet.push(restriction)
      }
    },
    cachePersonalDetails() {
      window.localStorage.setItem(
        'booking_details',
        JSON.stringify({
          name: this.form.name,
          email: this.form.email,
        })
      )
    },
    restorePersonalDetails() {
      const cachedDetails = JSON.parse(window.localStorage.getItem('booking_details'))
      if (cachedDetails) {
        this.form.name = cachedDetails.name
        this.form.email = cachedDetails.email
      }
    },
    reset() {
      Object.assign(this.$data, this.$options.data.apply(this))
      this.initialize()
    },
  },
}
</script>
