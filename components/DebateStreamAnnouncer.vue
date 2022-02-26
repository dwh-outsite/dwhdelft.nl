<template>
  <div v-if="currentDebate">
    <a :href="currentDebate.url">
      <button
        class="bg-brand-500 rounded-full px-6 py-3 text-white shadow-lg font-semibold flex items-center hover:bg-brand-400 text-lg my-8 mx-auto"
      >
        <span>
          Kijk het Regenboogdebat van
          <strong>{{ currentDebate.municipality }}</strong>
          nu live via YouTube
        </span>
        <Zondicon icon="arrow-right" class="fill-current w-3 h-3 ml-2" />
      </button>
    </a>
  </div>
  <p v-else class="font-bold">Op 26 en 27 februari komt hier een link te staan naar de livestream.</p>
</template>

<script>
import Zondicon from 'vue-zondicons'
import dayjs from 'dayjs'

export default {
  components: { Zondicon },
  data() {
    return {
      debates: [
        {
          municipality: 'Midden-Delfland',
          start: '2022-02-26 11:00',
          end: '2022-02-26 13:00',
          url: 'https://youtu.be/jYXtqQvRzd0',
        },
        {
          municipality: 'Pijnacker-Nootdorp',
          start: '2022-02-24 15:00',
          end: '2022-02-24 16:00',
          url: 'https://youtu.be/70IjYll_FNg',
        },
        {
          municipality: 'Delft',
          start: '2022-02-26 20:00',
          end: '2022-02-26 22:00',
          url: 'https://youtu.be/Koj8IgGK2s0',
        },
        {
          municipality: 'Rijswijk',
          start: '2022-02-27 12:00',
          end: '2022-02-27 13:00',
          url: 'https://youtu.be/_4-Y_waMkgk',
        },
        {
          municipality: 'Westland',
          start: '2022-02-27 15:00',
          end: '2022-02-27 16:15',
          url: 'https://youtu.be/CjX-gdkrJJY',
        },
        {
          municipality: 'Den Haag',
          start: '2022-02-27 20:00',
          end: '2022-02-27 22:00',
          url: 'https://youtu.be/V5t6sioAYhQ',
        },
      ],
    }
  },
  computed: {
    currentDebate() {
      return this.debates.find((debate) => this.isOngoing(debate))
    },
  },
  methods: {
    isOngoing(debate) {
      return dayjs().add(30, 'minutes').isAfter(debate.start) && dayjs().isBefore(debate.end)
    },
  },
}
</script>
