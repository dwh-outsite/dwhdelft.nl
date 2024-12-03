<i18n lang="yaml">
en:
  events: Our UPcoming events
nl:
  events: Onze UPkomende evenementen
</i18n>

<script setup>
const { t } = useT()

const { image: imageIcons } = useDynamicImages(
  import.meta.glob('~/assets/images/photos/mixup/icons/*', { eager: true, as: 'url_encode' })
)

const { data: events } = await useAsyncData('events', async () => {
  const url =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vRvhyi-w-PveKJjx2Mwq1busShI5LKEXqAUOKufoK-vswFNO4W_6tesXb67RO1-biPOmQ0mQJzUy_gY/pub?gid=0&single=true&output=csv'

  const response = await fetch(url)
  const text = await response.text()

  const parsedData = text.replace(/\r/g, '').split('\n')
  const firstRowData = parsedData[0].split(',')

  // check if structure is not changed
  const firstRowCheck = ['Date', 'Event name', 'Icon']
  if (firstRowData.length !== firstRowCheck.length) {
    warn('Structure of MIXUP Events Sheet has been altered!')
  }
  for (let i = 0; i < firstRowData.length; i++) {
    if (firstRowData[i] !== firstRowCheck[i]) {
      warn('Structure of MIXUP Events Sheet has been altered!')
    }
  }

  // check if event has name and date is still in future
  let mappedData = parsedData
    .slice(1)
    .map((row) => {
      let [dateString, eventName, icon] = row.split(',')

      if (!['bar', 'disco', 'drag', 'karaoke', 'music', 'tasting'].includes(icon)) {
        icon = 'bar'
      }

      dateString = `${dateString.split('-').reverse().join('/')}  23:59`

      return {
        date: new Date(dateString),
        eventName: eventName,
        icon: icon,
      }
    })
    .filter(
      (event) =>
        event.eventName !== '' &&
        !isNaN(event.date) &&
        event.date.getTime() > new Date().getTime()
    )

  // show maximum of 5 icons
  if (mappedData.length > 5) {
    mappedData = mappedData.slice(0, 5)
  }

  return mappedData
})
</script>

<template>
  <div v-if="events && events.length > 0" class="bg-brand-450 text-white">
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
  </div>
</template>
