<script setup>
const { t, tt } = useT()

const openingHours = (await useAsyncData(() => queryContent('opening_hours').findOne())).data.value.events
</script>

<template>
  <ul class="space-y-4 leading-snug">
    <li v-for="event in openingHours" :key="event.name" class="flex space-x-2 items-top">
      <div class="w-32">
        <div class="uppercase font-bold tracking-wide" v-text="tt(event.day)" />
        {{ event.name }}
      </div>
      <div>
        <div class="flex space-x-2">
          <div>{{ event.start_time }} - {{ event.end_time }}</div>
          <div v-if="event.restrictions">
            <div v-for="restriction in event.restrictions" :key="restriction">
              <div
                class="bg-brand-200 px-2 rounded-lg text-xs uppercase tracking-wider inline-flex items-center"
                v-text="tt(restriction)"
              />
            </div>
          </div>
        </div>
        <div v-if="event.link">
          <a
            :href="event.link.url"
            class="text-sm text-gray-500 hover:underline"
            v-html="'&raquo; ' + tt(event.link.name)"
          />
        </div>
      </div>
    </li>
  </ul>
</template>
