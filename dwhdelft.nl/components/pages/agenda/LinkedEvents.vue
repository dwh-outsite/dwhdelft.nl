<i18n lang="yaml">
en:
  events: 'DWH Agenda'
nl:
  events: 'DWH Agenda'
</i18n>

<script setup>
const { t } = useT()
import GSheetReader from 'g-sheets-api'

const emit = defineEmits(['ready'])

const { image: imageIcons } = useDynamicImages(
  import.meta.glob('~/assets/images/photos/mixup/icons/*', { eager: true })
)

const events = ref(null)

const selectedOpenFor = ref(["Everyone", "Members only"])
const selectedAgeRestrictions = ref(["All ages", "28-", "12-18"])

const sheetOptions = {
  apiKey: useRuntimeConfig().public.googleKey,
  sheetId: '1ckbpfak1ogVU14ks4tpOSO-KSQrG3Zj7K3bR6qs3ltE',
  sheetName: 'Public',
}

const filteredEvents = computed(() => {
  if (!events.value) return []
  return events.value.filter((e) =>
    selectedOpenFor.value.includes(e.membersOnly ? 'Members only' : 'Everyone')
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
        jongenout: row[`J&O`] === 'TRUE',
        ageRestricted: row[`Age restricted`] === 'TRUE',
        icon: imageIcons(row[`Icon`]) || imageIcons('bar'),
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
    class="bg-gray-900 bg-gradient-to-b from-gray-900 to-brand-500/10 py-12 text-gray-200 md:pt-0"
  >
    <ElementsContainer>
      <h1 class="mb-6 text-center text-5xl font-medium">
        <Markdown :content="t('events')" />
      </h1>
      <label class="block mb-4">
        Open for:
        <select v-model="selectedOpenFor" multiple class="border rounded p-1">
          <option value="Everyone">Everyone</option>
          <option value="Members only">Members only</option>
        </select>
      </label>
      <div v-if="filteredEvents === null" class="flex flex-wrap justify-center gap-4">
        <div
          v-for="index in 5"
          :key="index"
          class="flex w-full animate-pulse flex-row-reverse rounded-lg bg-brand-900 p-4 shadow-lg md:w-48 md:flex-col"
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
          class="flex w-full flex-row-reverse rounded-lg bg-brand-900 p-4 shadow-lg md:w-48 md:flex-col"
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
