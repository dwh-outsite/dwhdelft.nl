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
</i18n>

<script setup>
import { IconTime } from '@iconify-prerendered/vue-zondicons'

const { t } = useT()


const apiUrl = 'https://reserveer.dwhdelft.nl/api'

const DINNER_TEAMS = [
  { emoji: '🍝', name: 'Kitchen Helpers', description: 'You help the chef prepare the food' },
  { emoji: '⏰', name: 'In a hurry', description: 'You will help out another time' },
  { emoji: '🧽 ', name: 'Washing up', description: 'You clean the dishes afterwards' },
  { emoji: '👩‍🍳', name: 'Cookies', description: 'You are the main chef' },
  { emoji: '🍻', name: 'Bartender', description: 'You serve the drinks' },
]
const DINNER_RESTRICTIONS = ['Meat', 'Fish', 'Seafood', 'Cheese', 'Nuts', 'Dairy']


const state = ref('start')
const form = ref({
  name: '',
  email: '',
  ggd_consent: false,
  phone_number: '',
  event_id: undefined,
  twoseat: false,
  custom_fields: {},
})
const dinnerForm = ref({
  team: DINNER_TEAMS[0],
  diet: [],
  otherDiet: '',
})

const events = ref([])
const fetchEvents = async () => {
  const response = await fetch(`${apiUrl}/events`, { method: 'GET' })
  const { data } = await response.json()
  events.value = data
}
onMounted(() => fetchEvents())

const selectedEvent = ref({})
const selectEvent = (event) => {
  if (event.available_seats === 0) {
    return
  }
  form.value.event_id = event.id
  selectedEvent.value = event
}

const toggleRestriction = (restriction) => {
  const index = dinnerForm.value.diet.indexOf(restriction)
  if (index >= 0) {
    dinnerForm.value.diet.splice(index, 1)
  } else {
    dinnerForm.value.diet.push(restriction)
  }
}

const errors = ref([])
const submit = async () => {
  errors.value = []

  if (form.value.event_id === undefined) {
    errors.value.push('You have to select one of the timeslots.')
    return
  }

  if (selectedEvent.value.event_type_id === 'dinner') {
    form.value.custom_fields = {
      team: dinnerForm.value.team.name,
      diet: [...dinnerForm.value.diet, ...(dinnerForm.value.otherDiet.length > 0 ? [dinnerForm.value.otherDiet] : [])],
    }
  }

  state.value = 'loading'

  const response = await fetch(`${apiUrl}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(form.value),
  })

  const result = await response.json()

  rootElement.value.scrollIntoView({ behavior: 'smooth' })

  if (response.ok) {
    state.value = 'finished'
  } else {
    state.value = 'start'
    if (result.errors) {
      errors.value = Object.values(result.errors).flat()
    } else {
      alert('An error occurred. If this keeps happening, please send us an email.')
    }
  }
}

const formatTime = (time) => {
  const date = new Date(time)
  return date.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })
}

const formatDate = (time) => {
  const date = new Date(time)
  return date.toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long' })
}

const rootElement = ref(null)
</script>

<template>
  <div ref="rootElement" class="bg-white p-8 rounded-lg shadow-xl">
    <ElementsIconCircle class="p-5 mb-8 inline-block">
      <IconTime class="w-6 h-6" />
    </ElementsIconCircle>

    <h2 class="text-xl font-bold mb-4 text-brand-450 uppercase tracking-wider" v-text="t('title')" />

    <ElementsFormSuccessMessage v-if="state === 'finished'" class="!bg-brand-100 mb-6" :title="$t('forms.success.heading')" :subtitle="t('thank_you')" />


    <form v-show="state == 'start' || state == 'loading'" @submit.prevent="submit">
      <div v-for="error in errors" :key="error" class="bg-red-200 border-1 border-red-400 rounded p-2 mb-4">
        <strong>{{ t('oops') }}</strong>
        {{ error }}
      </div>

      <ElementsFormElement name="name" required>
        <ElementsFormTextInput v-model="form.name" gray />
      </ElementsFormElement>

      <ElementsFormElement name="email" required>
        <ElementsFormTextInput v-model="form.email" type="email" gray />
      </ElementsFormElement>

      <ElementsFormElement :label="t('event')" name="event_id" required>
        <div class="flex flex-wrap">
          <div v-if="events.length === 0" class="bg-brand-100 rounded-lg w-full p-4">
            {{ t('no_events') }}
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
                    <IconTime class="w-4 h-4 mr-2" />
                    {{ formatTime(event.start) }} - {{ formatTime(event.end) }}
                  </div>
                  <div v-if="event.available_seats <= 0" class="bg-brand-450 text-white px-2 py-1 rounded">
                    {{ t('fully_booked') }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ElementsFormElement>

      <ElementsFormElement v-if="selectedEvent.event_type_id === 'dinner'" label="Team" name="team" required>
        <div class="md:flex flex-wrap -mx-1">
          <div v-for="team in DINNER_TEAMS" :key="team.name" class="md:w-1/2 p-1">
            <div
              :class="[
                team.name === dinnerForm.team.name ? 'bg-brand-400 text-white' : 'bg-brand-100 hover:bg-brand-200',
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
      </ElementsFormElement>

      <ElementsFormElement v-if="selectedEvent.event_type_id === 'dinner'" label="I don't eat..." name="diet">
        <div class="space-y-2">
          <div class="grid grid-cols-3 gap-2">
            <div
              v-for="restriction in DINNER_RESTRICTIONS"
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
            <ElementsFormTextInput
              v-model="dinnerForm.otherDiet"
              type="text"
              class="mr-2 inline text-black"
              placeholder="Other Restrictions"
            />
          </div>
        </div>
      </ElementsFormElement>

      <p class="text-sm mb-4" v-text="t('disclaimer')" />

      <ElementsPrimaryButton :disabled="state === 'loading'" type="submit">
        {{ state === 'loading' ? t('forms.buttons.loading') : t('forms.buttons.submit') }}
      </ElementsPrimaryButton>
    </form>
  </div>
</template>
