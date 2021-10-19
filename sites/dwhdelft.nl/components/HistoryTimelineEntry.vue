<template>
  <div :class="['flex md:contents', isLeft && 'flex-row-reverse']">
    <HistoryTimelineEntryYear v-if="!isLeft" class="col-start-5 col-end-6 md:mx-auto relative mr-10" :year="year" />
    <div
      :class="[isLeft ? 'col-start-1 col-end-5' : 'col-start-6 col-end-10', 'bg-white rounded-lg p-6 my-8 shadow-xl']"
    >
      <h3 class="text-xl font-bold mb-2 text-brand-500 uppercase tracking-wider" v-text="title" />
      <p class="text-lg" v-text="description" />
    </div>
    <HistoryTimelineEntryYear v-if="isLeft" class="col-start-5 col-end-6 md:mx-auto relative mr-10" :year="year" />
  </div>
</template>

<script>
export default {
  props: ['year', 'title', 'description', 'isLeft'],
}
</script>
