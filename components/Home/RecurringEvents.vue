<i18n lang="yaml">
en:
  announcement: <strong>DWH</strong> is open 4 nights a week
nl:
  announcement: <strong>DWH</strong> is elke week op 4 avonden open
</i18n>

<template>
  <div class="container px-4 mx-auto py-16 md:pb-24">
    <h2 class="text-center text-brand-500 font-medium text-5xl mb-12 leading-tight" v-html="$t('announcement')" />
    <div class="flex">
      <div class="w-1/3 xl:w-1/4">
        <div
          v-for="(event, index) in openingHours"
          :key="event.name"
          class="p-3 pl-12 rounded-l-full cursor-pointer"
          :class="{
            'shadow-lg bg-brand-500 text-white': event === active,
            'hover:bg-brand-100 text-brand-500': event !== active,
          }"
          @click="activeIndex = index"
        >
          <div class="flex items-center mb-2 space-x-2">
            <h4 class="font-semibold text-2xl" v-text="event.name" />
            <RecurringEventRestrictions class="text-gray-900" :restrictions="event.restrictions" />
          </div>
          <div
            class="text-gray-900 bg-white rounded px-2 tracking-wider text-sm inline-flex items-center border border-brand-200"
          >
            <Zondicon icon="calendar" class="fill-current h-4 inline mr-2 text-brand-500" />
            <div class="flex-1 py-1 pr-2">
              {{ $tt(event.day) }}
            </div>
            <div class="border-l border-brand-200 pl-2 py-1" v-text="event.start_time" />
          </div>
        </div>
      </div>
      <div
        class="flex-1 bg-cover bg-brand-100 shadow-lg rounded-r-[3.5rem] overflow-hidden px-12 flex items-center"
        :class="{ 'rounded-tl-none': isFirstActive, 'rounded-bl-none': isLastActive }"
        :style="backgroundImage"
      >
        <div
          v-if="active"
          class="backdrop-blur bg-brand-100 bg-opacity-20 w-2/3 xl:w-1/2 p-6 space-y-6 rounded-3xl shadow-lg transition-all duration-500"
          :style="active.offset"
        >
          <h4 class="font-semibold text-white text-4xl" v-text="active.name" />
          <div class="bg-brand-100 bg-opacity-80 backdrop-blur-xl shadow-lg text-xl rounded-2xl p-6 relative">
            <RecurringEventRestrictions
              class="absolute top-0 right-0 mr-6 -mt-2.5"
              :restrictions="active.restrictions"
            />
            <span v-html="$tt(active.description)" />
          </div>
          <a
            v-if="active.link"
            :href="active.link.url"
            class="inline-block button-pink"
            v-html="$tt(active.link.name)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import Zondicon from 'vue-zondicons'
import RecurringEventRestrictions from './RecurringEventRestrictions.vue'

export default {
  components: { Zondicon, RecurringEventRestrictions },
  data() {
    return {
      openingHours: [],
      activeIndex: 0,
    }
  },
  async fetch() {
    this.openingHours = (await this.$content('opening_hours').fetch()).events

    // Set active index to current day
    this.activeIndex = this.openingHours.findIndex((event) => event.day.en === dayjs().format('dddd'))
  },
  computed: {
    active() {
      return this.openingHours[this.activeIndex]
    },
    isFirstActive() {
      return this.activeIndex === 0
    },
    isLastActive() {
      return this.activeIndex === this.openingHours.length - 1
    },
    backgroundImage() {
      return {
        backgroundImage: `url(${this.requireImage(this.active.photo)})`,
      }
    },
  },
  methods: {
    requireImage(photo) {
      try {
        return require(`#/assets/images/photos/${photo}`)
      } catch (e) {
        return require(`#/assets/images/photos/testimonials/default.png`)
      }
    },
  }
}
</script>
