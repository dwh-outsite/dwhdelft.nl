<i18n lang="yaml">
en:
  events: 'DWH Agenda'
  filters:
    toggle:
      show: 'Show filters'
      hide: 'Hide filters'
    members:
      label: 'Open for'
      options:
        everyone: 'Everyone'
        membersOnly: 'Members only'
    age: 
      label: 'Age groups'
      options:
        all: 'All ages'
        ages28: '28-'
        ages18: '12-18'
    signup: 
      label: 'Sign-up'
      options:
        open: 'Open event'
        signup: 'Sign-up necessary'
    location: 
      label: 'Location'
      options:
        pand: 'Our Building'
        elsewhere: 'Elsewhere'
nl:
  events: 'DWH Agenda'
  filters: 
    toggle:
      show: 'Toon filters'
      hide: 'Verberg filters'
    members:
      label: 'Open voor'
      options:
        everyone: 'Iedereen'
        membersOnly: 'Alleen leden'
    age: 
      label: 'Leeftijdsgroepen'
      options:
        all: 'Alle leeftijden'
        ages28: '28-'
        ages18: '12-18'
    signup: 
      label: 'Aanmelden'
      options:
        open: 'Open evenement'
        signup: 'Aanmelden noodzakelijk'
    location: 
      label: 'Locatie'
      options:
        pand: 'Ons gebouw'
        elsewhere: 'Ergens anders'
</i18n>

<script setup>
const { t, tt } = useT()
import GSheetReader from 'g-sheets-api'

const emit = defineEmits(['ready'])

const { image: imageIcons } = useDynamicImages(
  import.meta.glob('~/assets/images/photos/agenda/icons/*', { eager: true })
)

const events = ref(null)

const showFilters = ref(false)

const selectedOpenFor = ref(["Everyone", "Members only"])
const selectedAgeRestrictions = ref(["All ages", "28-", "12-18"])
const selectedSignup = ref(["Sign-up", "Open"])
const selectedLocation = ref(["Pand", "Elsewhere"])


const sheetOptions = {
  apiKey: useRuntimeConfig().public.googleKey,
  sheetId: '1ckbpfak1ogVU14ks4tpOSO-KSQrG3Zj7K3bR6qs3ltE',
  sheetName: 'Public',
}

const filteredEvents = computed(() => {
  if (!events.value) return []
  return events.value.filter((e) =>
    {
      const openForMatches =  selectedOpenFor.value.includes(e.membersOnly ? 'Members only' : 'Everyone')
      const ageMatches = selectedAgeRestrictions.value.includes(e.ageGroup)
      const signupMatches = selectedSignup.value.includes(e.signupRequired ? 'Sign-up' : 'Open')
      const locationMatches = selectedLocation.value.includes(e.location ? 'Pand' : 'Elsewhere')
      return openForMatches && ageMatches && signupMatches && locationMatches
    }
   
  )
})

onMounted(() => {
  GSheetReader(sheetOptions, (results) => {
    const filteredResults = results.filter((r) => r['Event name - EN'])
    if (filteredResults.length === 0) {
      console.error('No events')
    }

    events.value = filteredResults
      .map((row) => ({
        date: new Date(`${row[`Date`].split('-').reverse().join('/')}  23:59`),
        startTime: row[`Start Time`],
        eventName: {
            en: row[`Event name - EN`],
            nl: row[`Event name - NL`],
        },
        eventDescription: {
            en: row[`Event description - EN`],
            nl: row[`Event description - NL`],
        },
        membersOnly: row[`Members only`] === 'TRUE',
        ageGroup: row[`J&O`] === 'TRUE' ? '12-18' :row[`Age restricted`] === 'TRUE' ? '28-' : 'All ages',
        signupRequired: row[`Sign-up required`] === 'TRUE',
        location: row[`Location`] ? row[`Location`] : 'Pand',
        icon: imageIcons(row[`Icon`]) || imageIcons('dwh'),
      }))
      .filter((event) => !isNaN(event.date) && event.date.getTime() > new Date().getTime())

    events.value.sort((a, b) => a.date.getTime() - b.date.getTime())

    emit('ready')
  })
})
</script>

<template>
  <section
    v-if="events === null || events.length > 0"
    class="bg-brand-450 py-12 text-gray-200 md:pt-6"
  >
    <ElementsContainer>
      <h1 class="mb-6 text-center text-5xl font-medium">
        <Markdown :content="t('events')" />
      </h1>
      <div class="mb-4">
        <button
          @click="showFilters = !showFilters"
          class="bg-brand-500 hover:bg-brand-400 px-4 py-2 rounded text-gray-200 font-semibold shadow"
        >
          {{ showFilters ? t('filters.toggle.hide') : t('filters.toggle.show') }}
        </button>
      </div>
      <transition name="fade">
        <div
          v-if="showFilters"
          class="bg-brand-500 p-4 rounded text-gray-200 border border-brand-400 space-y-4"
        >
          <PagesAgendaFilterBlock
            :label="t('filters.members.label')"
            :options="[
              { label: t('filters.members.options.everyone'), value: 'Everyone' },
              { label: t('filters.members.options.membersOnly'), value: 'Members only' }
            ]"
            v-model="selectedOpenFor"
          />
          <PagesAgendaFilterBlock
            :label="t('filters.age.label')"
            :options="[
              { label: t('filters.age.options.all'), value: 'All ages' },
              { label: t('filters.age.options.ages28'), value: '28-' },
              { label: t('filters.age.options.ages18'), value: '12-18' }
            ]"
            v-model="selectedAgeRestrictions"
          />
          <PagesAgendaFilterBlock
            :label="t('filters.signup.label')"
            :options="[
              { label: t('filters.signup.options.open'), value: 'Open' },
              { label: t('filters.signup.options.signup'), value: 'Sign-up' }
            ]"
            v-model="selectedSignup"
          />
          <PagesAgendaFilterBlock
            :label="t('filters.location.label')"
            :options="[
              { label: t('filters.location.options.pand'), value: 'Pand' },
              { label: t('filters.location.options.elsewhere'), value: 'Elsewhere' }
            ]"
            v-model="selectedLocation"
          />
       </div>
      </transition>

      <div v-if="events === null" class="flex flex-wrap justify-center gap-4">
        <div
          v-for="index in 5"
          :key="index"
          class="flex w-full animate-pulse flex-row-reverse rounded-lg bg-brand-700 p-4 shadow-lg md:w-48 md:flex-col"
        >
          <div class="flex-1">
            <div class="mb-2 h-4 w-24 bg-gray-400/10 md:mx-auto" />
            <div class="h-7 w-36 animate-pulse bg-gray-200/10 md:mx-auto md:mb-4" />
          </div>
          <div class="mr-2 flex min-w-16 items-center justify-center md:mr-0">
            <div class="size-12 animate-pulse rounded-full bg-white/10" />
          </div>
        </div>
      </div>
      <div v-else class="flex flex-wrap justify-center gap-4 md:text-center">
        <div
          v-for="(event, index) in filteredEvents"
          :key="index"
          class="flex w-full flex-row-reverse rounded-lg bg-brand-700 p-4 shadow-lg md:w-48 md:flex-col"
        >
          <div class="flex-1">
            <div class="uppercase tracking-wide text-gray-300">
              {{ event.date.getDate() }} {{ $t(`month.${event.date.getMonth()}`)?.slice(0, 3) }}
              {{ event.startTime ? ` - ${event.startTime}` : '' }}
            </div>
            <div class="text-xl font-bold md:mb-4">
              {{ event.eventName[$i18n.locale] }}
            </div>
          </div>
          <div class="mr-2 flex min-w-16 items-center justify-center md:mr-0">
            <img :src="event.icon" alt="Event Icon" class="h-12" />
          </div>
        </div>
      </div>
    </ElementsContainer>
  </section>
</template>
