<i18n lang="yaml">
en:
  events: Our UPcoming events
nl:
  events: Onze UPkomende evenementen
</i18n>

<script setup>
const { t } = useT()
import GSheetReader from 'g-sheets-api'

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
        eventName: row[`Event name`],
        icon: imageIcons(row[`Icon`]) || imageIcons('bar'),
      }))
      .filter((event) => !isNaN(event.date) && event.date.getTime() > new Date().getTime())
      .slice(0, 5)
  })
})
</script>

<template>
  <div v-if="events && events.length > 0" class="bg-gray-800 text-white">
    <ElementsContainer>
      <h1 class="text-center font-medium text-5xl">
        {{ t('events') }}
      </h1>
      <div class="flex flex-wrap justify-center text-center">
        <div
          v-for="(event, index) in events"
          :key="index"
          class="w-48 p-4 m-4 bg-brand-900 rounded-lg shadow-lg space-y-2"
        >
          <div>
            {{ ''.concat(event.date.getDate(), ' ', $t(`month.${event.date.getMonth()}`)) }}
          </div>
          <div class="text-xl font-bold">
            {{ event.eventName }}
          </div>
          <div class="flex justify-center">
            <img :src="event.icon" alt="Event Icon" class="h-12" />
          </div>
        </div>
      </div>
    </ElementsContainer>
  </div>
</template>
