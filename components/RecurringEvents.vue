<template>
  <div class="container px-4 mx-auto py-16 md:pb-24">
    <h2 class="text-center text-purple-500 font-medium text-5xl mb-12 leading-tight" v-html="announcement" />
    <div class="md:flex flex-wrap justify-center -mx-2">
      <div
        v-for="event in $t('recurring_events.events')"
        :key="event.name"
        class="lg:flex-1 mx-2 mb-4 lg:mb-0 md:w-1/3 lg:w-auto rounded shadow bg-purple-100 flex flex-col
          justify-between"
      >
        <div class="p-6 md:mb-6">
          <div class="flex mb-2">
            <h4 class="flex-1 text-purple-500 font-semibold text-2xl" v-text="event.name" />
            <div v-if="event.note" class="ml-4 text-center flex items-center">
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
            {{ event.description }}
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
  props: ['title', 'url', 'announcement'],
  components: { Zondicon }
}
</script>
