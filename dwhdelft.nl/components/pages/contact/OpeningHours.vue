<i18n lang="yaml">
en:
  monthly_events: Besides the regular opening hours, there are also various [monthly events](/#recurring-events-monthly) at DWH.
nl:
  monthly_events: Naast de vaste openingstijden zijn er ook diverse [maandelijkse activiteiten](/#recurring-events-monthly) bij DWH.
</i18n>

<script setup>
import Markdown from '#shared/components/Markdown.vue'

const { t, tt } = useT()

const openingHours = (await useAsyncData(() => queryContent('opening_hours').findOne())).data.value.events.filter(
  (event) => !('monthly' in event)
)
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
  <div class="mt-6 w-80 text-gray-800">
    <Markdown :content="t('monthly_events')" />
  </div>
</template>
