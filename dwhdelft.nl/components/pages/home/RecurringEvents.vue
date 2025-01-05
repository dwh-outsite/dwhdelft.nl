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
    <h2 class="text-5xl font-medium leading-tight text-brand-500 md:mb-6 md:text-center">
      <Markdown :content="t('announcement', { count: openingHoursWeekly.length })" />
    </h2>

    <table class="mx-auto border-separate border-spacing-y-10 md:border-spacing-y-16 lg:w-5/6 xl:w-2/3">
      <tr v-for="event in openingHoursWeekly" :key="event.name">
        <td
          class="mb-2 flex items-center space-x-4 border-b border-gray-300 pb-2 pt-1 align-top md:mb-0 md:table-cell md:space-x-0 md:border-0 md:pb-0"
        >
          <div class="mb-2 flex flex-1 space-x-2 md:block md:space-x-0">
            <div class="text-2xl font-bold uppercase text-gray-500 md:font-semibold" v-text="tt(event.day)" />
            <div class="text-2xl text-gray-400 md:text-xl" v-text="event.start_time" />
          </div>

          <EventRestrictionLabels :restrictions="event.restrictions" class="md:flex-col md:space-x-0 md:space-y-2" />
        </td>
        <td class="block align-top md:table-cell">
          <h2 class="mb-2 text-2xl font-semibold text-brand-500 md:text-3xl" v-text="event.name" />
          <p class="text-gray-500" v-text="tt(event.description)" />
          <p v-if="event.announcement" class="font-semibold text-brand-500" v-text="tt(event.announcement)" />
          <a v-if="event.link" :href="event.link.url">
            <ElementsPrimaryButton class="mt-6 px-5 py-2 text-sm font-semibold">
              {{ tt(event.link.name) }}
            </ElementsPrimaryButton>
          </a>
        </td>
      </tr>
    </table>

    <!-- Monthly events -->
    <h2 id="recurring-events-monthly" class="text-5xl font-medium leading-tight text-brand-500 md:mb-6 md:text-center">
      <Markdown :content="t('announcement_month')" />
    </h2>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <ElementsActionCard
        v-for="event in openingHoursMonthly"
        :key="event.name"
        :title="event.name"
        class="bg-brand-100"
      >
        <template #header>
          <div class="flex items-center justify-between px-6 pt-6">
            <div class="flex space-x-2">
              <div class="text-xl font-bold uppercase text-gray-600 md:font-semibold" v-text="tt(event.day)" />
              <div class="text-xl text-gray-500 md:text-xl" v-text="event.start_time" />
            </div>
            <EventRestrictionLabels :restrictions="event.restrictions" />
          </div>
        </template>

        <template #button>
          <ElementsPrimaryButton v-if="event.link" :href="event.link.url" class="px-5 py-2 text-sm font-semibold">
            {{ tt(event.link.name) }}
          </ElementsPrimaryButton>
        </template>

        <p class="text-base text-gray-500" v-text="tt(event.description)" />
      </ElementsActionCard>
    </div>
  </ElementsContainer>
</template>
