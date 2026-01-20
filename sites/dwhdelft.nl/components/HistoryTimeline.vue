<template>
  <div class="flex flex-col md:grid grid-cols-9 mx-auto">
    <HistoryTimelineEntry
      v-for="(event, index) in events"
      :key="event.year + event.title"
      :year="event.year"
      :title="event.title_nl"
      :description="event.description_nl"
      :is-left="index % 2 == 0"
    />
  </div>
</template>

<script>
export default {
  props: ['events'],
}
</script>
