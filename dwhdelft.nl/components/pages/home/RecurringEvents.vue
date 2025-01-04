<i18n lang="yaml">
en:
  announcement: '**DWH** is open {count} nights a week'
  announcement_month: 'Monthly events at **DWH**'
nl:
  announcement: '**DWH** is elke week op {count} avonden open'
  announcement_month: 'Maandelijkse activiteiten bij **DWH**'
</i18n>

<script setup>
const { t, tt } = useT()

const { data: openingHours } = await useAsyncData(() => queryContent('opening_hours').findOne())

const openingHoursWeekly = openingHours.value.events.filter((o) => !('monthly' in o))
const openingHoursMonthly = openingHours.value.events.filter((o) => 'monthly' in o)
</script>

<template>
  <ElementsContainer class="py-8 md:py-16">
    <!-- Weekly events -->
    <h2 class="md:text-center text-brand-500 font-medium text-5xl md:mb-6 leading-tight">
      <Markdown :content="t('announcement', { count: openingHoursWeekly.length })" />
    </h2>

    <table class="lg:w-5/6 xl:w-2/3 mx-auto border-separate border-spacing-y-10 md:border-spacing-y-16">
      <tr v-for="event in openingHoursWeekly" :key="event.name">
        <td
          class="align-top pt-1 flex items-center space-x-4 md:space-x-0 md:table-cell mb-2 md:mb-0 border-b border-gray-300 pb-2 md:pb-0 md:border-0"
        >
          <div class="flex-1 flex md:block space-x-2 md:space-x-0 mb-2">
            <div class="text-gray-500 text-2xl uppercase font-bold md:font-semibold" v-text="tt(event.day)" />
            <div class="text-gray-400 text-2xl md:text-xl" v-text="event.start_time" />
          </div>

          <EventRestrictionLabels :restrictions="event.restrictions" class="md:flex-col md:space-y-2 md:space-x-0" />
        </td>
        <td class="align-top block md:table-cell">
          <h2 class="mb-2 text-brand-500 font-semibold text-2xl md:text-3xl" v-text="event.name" />
          <p class="text-gray-500" v-text="tt(event.description)" />
          <p v-if="event.announcement" class="text-brand-500 font-semibold" v-text="tt(event.announcement)" />
          <a v-if="event.link" :href="event.link.url">
            <ElementsPrimaryButton class="mt-6 !px-5 !py-2 text-sm font-semibold">
              {{ tt(event.link.name) }}
            </ElementsPrimaryButton>
          </a>
        </td>
      </tr>
    </table>

    <!-- Monthly events -->
    <h2 class="md:text-center text-brand-500 font-medium text-5xl md:mb-6 leading-tight">
      <Markdown :content="t('announcement_month')" />
    </h2>

    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
      <ElementsActionCard
        v-for="event in openingHoursMonthly"
        :key="event.name"
        :title="event.name"
        class="!bg-brand-100"
      >
        <template #header>
          <div class="pt-6 px-6 flex justify-between items-center">
            <div class="flex space-x-2">
              <div class="text-gray-600 text-xl font-bold md:font-semibold uppercase" v-text="tt(event.day)" />
              <div class="text-gray-500 text-xl md:text-xl" v-text="event.start_time" />
            </div>
            <EventRestrictionLabels :restrictions="event.restrictions" />
          </div>
        </template>

        <template #button>
          <ElementsPrimaryButton v-if="event.link" :href="event.link.url" class="!px-5 !py-2 text-sm font-semibold">
            {{ tt(event.link.name) }}
          </ElementsPrimaryButton>
        </template>

        <p class="text-gray-500 text-base" v-text="tt(event.description)" />
      </ElementsActionCard>
    </div>
  </ElementsContainer>
</template>
