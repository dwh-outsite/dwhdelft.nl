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
  <section v-if="events && events.length > 0" class="bg-gray-875 py-12 md:pt-0 text-gray-200">
    <ElementsContainer>
      <h1 class="text-center font-medium text-5xl mb-6">
        <Markdown :content="t('events')" />
      </h1>
      <div class="flex flex-wrap justify-center md:text-center gap-4">
        <div
          v-for="(event, index) in events"
          :key="index"
          class="w-full md:w-48 p-4 bg-brand-900 rounded-lg shadow-lg flex flex-row-reverse md:flex-col"
        >
          <div class="flex-1">
            <div class="text-gray-300 uppercase tracking-wide">
              {{ event.date.getDate() }} {{ $t(`month.${event.date.getMonth()}`)?.slice(0, 3) }} - {{ event.startTime }}
            </div>
            <div class="text-xl font-bold md:mb-4">
              {{ event.eventName }}
            </div>
          </div>
          <div class="flex justify-center items-center min-w-16 mr-2 md:mr-0">
            <img :src="event.icon" alt="Event Icon" class="h-12" />
          </div>
        </div>
      </div>
    </ElementsContainer>
  </section>
</template>
