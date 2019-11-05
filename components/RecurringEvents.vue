<template>
  <div class="container px-4 mx-auto pt-16 md:pb-24">
    <h2 class="text-center text-purple-500 font-medium text-5xl mb-12 leading-tight">
      <strong>DWH</strong>
      is vier avonden geopend
    </h2>
    <div class="md:flex -mx-2">
      <div
        v-for="event in events"
        :key="event.name"
        class="flex-1 mx-2 rounded shadow bg-purple-100 flex flex-col justify-between mb-4 md:mb-0"
      >
        <div class="p-6 md:mb-6">
          <div class="flex mb-2">
            <h4 class="flex-1 text-purple-500 font-semibold text-2xl" v-text="event.name" />
            <div v-if="event.note" class="flex items-center">
              <div class="bg-purple-200 rounded-lg px-2 py-1 text-xs uppercase tracking-wider" v-text="event.note" />
            </div>
          </div>
          <div class="bg-white rounded px-3 mb-4 tracking-wider flex items-center border border-purple-200">
            <Zondicon icon="calendar" class="fill-current h-4 inline mr-2 text-purple-500" />
            <div class="flex-1 py-2">
              {{ event.day }}
            </div>
            <div class="border-l border-purple-200 pl-3 py-2" v-text="event.time" />
          </div>
          <p>
            Een leuke avond om lekker te eten. Dat is gezellig en handig. Wat een spektakel.
          </p>
        </div>
        <a
          v-if="event.buttonText"
          class="bg-purple-500 hover:bg-purple-300 py-3 rounded-b text-white
                 uppercase font-semibold tracking-wider text-center"
          :href="event.buttonLink"
          v-text="event.buttonText"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  props: ['title', 'url'],
  components: { Zondicon },
  data() {
    return {
      events: [
        {
          name: 'EatingOUT',
          note: 'Alleen leden',
          day: 'Dinsdag',
          time: '19:00',
          buttonText: 'Aanmelden',
          buttonLink: '/eatingout'
        },
        {
          name: 'Fillum',
          day: 'Woensdag',
          time: '21:15',
          buttonText: 'Bekijk Programma',
          buttonLink: 'http://homodelft.nl/films/'
        },
        {
          name: 'Outsite',
          note: 'Max. 28 jaar',
          day: 'Donderdag',
          time: '22:00',
          buttonText: 'Ga naar Outsite.nl',
          buttonLink: 'https://outsite.nl/'
        },
        {
          name: 'Vrijdagbar',
          day: 'Vrijdag',
          time: '22:00'
        }
      ]
    }
  }
}
</script>
