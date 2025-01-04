<script setup>
const { tt } = useT()

const openingHours = (await useAsyncData(() => queryContent('opening_hours').findOne())).data.value.events
</script>

<template>
  <ul class="space-y-4 leading-snug">
    <li v-for="event in openingHours" :key="event.name" class="flex space-x-2">
      <div class="w-32">
        <div class="font-bold uppercase tracking-wide" v-text="tt(event.day)" />
        {{ event.name }}
      </div>
      <div>
        <div class="flex space-x-2">
          <div>{{ event.start_time }} - {{ event.end_time }}</div>
          <EventRestrictionLabels :restrictions="event.restrictions" />
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
