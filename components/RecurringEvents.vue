<template>
  <div class="container px-4 mx-auto py-16 md:pb-24">
    <h2 v-html="announcement" class="text-center text-purple-500 font-medium text-5xl mb-12 leading-tight" />
    <div class="md:flex flex-wrap justify-center -mx-2">
      <div
        v-for="event in $t('recurring_events.events')"
        :key="event.name"
        class="lg:flex-1 mx-2 mb-4 lg:mb-0 md:w-1/3 lg:w-auto rounded shadow bg-purple-100 flex flex-col
          justify-between"
      >
        <div class="p-6 md:mb-6">
          <div class="flex mb-2">
            <h4 v-text="event.name" class="flex-1 text-purple-500 font-semibold text-2xl" />
            <div v-if="event.note" class="ml-4 text-center flex items-center">
              <div v-text="event.note" class="bg-purple-200 rounded-lg px-2 py-1 text-xs uppercase tracking-wider" />
            </div>
          </div>
          <div class="bg-white rounded px-3 mb-4 tracking-wider flex items-center border border-purple-200">
            <Zondicon icon="calendar" class="fill-current h-4 inline mr-2 text-purple-500" />
            <div class="flex-1 py-2">
              {{ event.day }}
            </div>
            <div v-text="event.time" class="border-l border-purple-200 pl-3 py-2" />
          </div>
          <p>
            {{ event.description }}
          </p>
        </div>
        <a
          v-if="event.buttonText"
          :href="event.buttonLink"
          v-html="event.buttonText"
          class="bg-purple-500 hover:bg-purple-300 py-3 rounded-b text-white
                 uppercase font-semibold tracking-wider text-center"
        />
      </div>
    </div>
    <div class="mt-12 flex justify-center">
      <div class="shadow bg-purple-500 p-4 rounded mb-8 inline-flex relative">
        <div class="rounded-full w-7 h-7 bg-white mr-3 flex items-center justify-center">
          <Zondicon icon="arrow-thin-right" class="w-4 text-purple-500 fill-current" />
        </div>
        <div v-html="$t('recurring_events.saturday.title')" class="flex-1 text-lg font-semibold text-white" />
        <div
          v-text="$t('recurring_events.saturday.note')"
          class="bg-white rounded-lg px-2 py-1 text-xs uppercase tracking-wider absolute right-0 -top-3 h-6 shadow mr-4"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  components: { Zondicon },
  props: ['title', 'url', 'announcement']
}
</script>
