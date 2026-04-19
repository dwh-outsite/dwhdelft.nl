<i18n lang="yaml">
en:
  events: '**UPcoming** MIXUP nights'
nl:
  events: 'UPkomende **MIXUP** avonden'
</i18n>

<script setup>
const { t } = useT()
import GSheetReader from 'g-sheets-api'

const emit = defineEmits(['ready'])

const { image: imageIcons } = useDynamicImages(
  import.meta.glob('~/assets/images/photos/mixup/icons/*', { eager: true })
)

const events = ref(null)

const sheetOptions = {
  apiKey: useRuntimeConfig().public.googleKey,
  sheetId: '1_FqJ8RZHJr7duOvQpWudBiRUVjcE6DFSxjY-qAUypss',
  sheetName: 'Public',
}

onMounted(() => {
  GSheetReader(sheetOptions, (results) => {
    const filteredResults = results.filter((r) => r['Event name'])
    if (filteredResults.length === 0) {
      console.error('No events')
    }

    events.value = filteredResults
      .map((row) => ({
        date: new Date(`${row[`Date`].split('-').reverse().join('/')}  23:59`),
        startTime: row[`Start Time`],
        eventName: row[`Event name`],
        icon: imageIcons(row[`Icon`]) || imageIcons('bar'),
      }))
      .filter((event) => !isNaN(event.date) && event.date.getTime() > new Date().getTime())
      .slice(0, 5)

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
      <div v-if="events === null" class="flex flex-wrap justify-center gap-4">
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
          v-for="(event, index) in events"
          :key="index"
          class="flex w-full flex-row-reverse rounded-lg bg-brand-900 p-4 shadow-lg md:w-48 md:flex-col"
        >
          <div class="flex-1">
            <div class="uppercase tracking-wide text-gray-300">
              {{ event.date.getDate() }} {{ $t(`month.${event.date.getMonth()}`)?.slice(0, 3) }}
              {{ event.startTime ? ` - ${event.startTime}` : '' }}
            </div>
            <div class="text-xl font-bold md:mb-4">
              {{ event.eventName }}
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
