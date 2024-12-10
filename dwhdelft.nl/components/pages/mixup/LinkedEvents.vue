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
  import.meta.glob('~/assets/images/photos/mixup/icons/*', { eager: true, query: 'url_encode' })
)

const { data: events } = await useAsyncData('events', async () => {
  const options = {
    apiKey: 'AIzaSyDwi_l2R3qDWkh2HN8_AmIpy7mk8Ij7nk8',
    sheetId: '1_FqJ8RZHJr7duOvQpWudBiRUVjcE6DFSxjY-qAUypss',
    sheetName: 'Public',
  }
  return new Promise((resolve, reject) => {
    GSheetReader(
      options,
      (results) => {
        results = results.filter((r) => r['Event name'])
        if (results.length === 0) {
          console.error('No events')
        }

        let mappedData = results
          .map((row) => {
            let dateString = `${row[`Date`].split('-').reverse().join('/')}  23:59`
            let eventName = row[`Event name`]
            let icon = row[`Icon`]

            if (!imageIcons(icon)) {
              icon = 'bar'
            }

            return {
              date: new Date(dateString),
              eventName: eventName,
              icon: icon,
            }
          })
          .filter((event) => !isNaN(event.date) && event.date.getTime() > new Date().getTime())
        mappedData = mappedData.slice(0, 5)
        resolve(mappedData)
      },
      (error) => {
        console.warn(error)
        reject(error)
      }
    )
  })
})
</script>

<template>
  <div v-if="events && events.length > 0" class="bg-brand-450 text-white">
    <ElementsContainer>
      <div class="flex justify-center font-medium text-5xl">
        <h1>{{ t('events') }}</h1>
      </div>
      <div class="flex flex-wrap justify-center text-center">
        <div
          v-for="(event, index) in events"
          :key="index"
          class="w-48 p-4 m-4 bg-brand-900 rounded-lg shadow-lg space-y-2"
        >
          <div>
            {{ ''.concat(event.date.getDate(), ' ', $t(`month.${event.date.getMonth()}`)) }}
          </div>
          <div class="text-xl">
            {{ event.eventName }}
          </div>
          <div class="flex justify-center">
            <img :src="imageIcons(event.icon)" alt="Event Icon" />
          </div>
        </div>
      </div>
    </ElementsContainer>
  </div>
</template>
