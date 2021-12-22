<i18n lang="yaml">
en:
  announcement: <strong>DWH</strong> is open 4 nights a week
nl:
  announcement: <strong>DWH</strong> is elke week op 4 avonden open
</i18n>

<template>
  <div class="container px-4 mx-auto py-16 md:pb-24">
    <h2 class="text-center text-brand-500 font-medium text-5xl mb-12 leading-tight" v-html="$t('announcement')" />
    <div class="md:flex flex-wrap justify-center -mx-2">
      <div v-for="event in openingHours" :key="event.name" class="p-2 mb-4 xl:mb-0 md:w-1/2 xl:flex-1 xl:w-auto">
        <div class="rounded shadow bg-brand-100 flex flex-col justify-between h-full">
          <div class="p-6">
            <div class="flex items-center mb-2">
              <h4 class="flex-1 text-brand-500 font-semibold text-2xl" v-text="event.name" />
              <div v-if="event.restrictions">
                <div
                  v-for="restriction in event.restrictions"
                  :key="restriction"
                  class="ml-4 text-center flex items-center"
                >
                  <div
                    class="bg-brand-200 rounded-lg px-2 py-1 text-xs uppercase tracking-wider"
                    v-text="$tt(restriction)"
                  />
                </div>
              </div>
            </div>
            <div class="bg-white rounded px-3 mb-4 tracking-wider flex items-center border border-brand-200">
              <Zondicon icon="calendar" class="fill-current h-4 inline mr-2 text-brand-500" />
              <div class="flex-1 py-2">
                {{ $tt(event.day) }}
              </div>
              <div class="border-l border-brand-200 pl-3 py-2" v-text="event.start_time" />
            </div>
            <p v-html="$tt(event.description)" />
          </div>
          <a
            v-if="event.link"
            :href="event.link.url"
            class="bg-brand-500 hover:bg-brand-300 py-3 rounded-b text-white uppercase font-semibold tracking-wider text-center"
            v-html="$tt(event.link.name)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  components: { Zondicon },
  data() {
    return {
      openingHours: [],
    }
  },
  async fetch() {
    this.openingHours = (await this.$content('opening_hours').fetch()).events
  },
}
</script>
