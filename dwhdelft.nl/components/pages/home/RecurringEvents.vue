<i18n lang="yaml">
en:
  announcement: '**DWH** is open {count} nights a week'
  announcement_month: 'Monthly events at **DWH**'
nl:
  announcement: '**DWH** is elke week op {count} avonden open'
  announcement_month: 'Maandelijkse evenementen bij **DWH**'
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

    <table class="lg:w-2/3 mx-auto border-separate border-spacing-y-16">
      <tr v-for="event in openingHoursWeekly" :key="event.name">
        <td class="align-top pt-1 block md:table-cell mb-4 md:mb-0">
          <div class="text-gray-500 text-2xl uppercase font-semibold" v-text="tt(event.day)" />
          <div class="text-gray-400 text-xl" v-text="event.start_time" />
          <div v-if="event.restrictions" class="space-x-2 pt-2">
            <div v-for="restriction in event.restrictions" :key="restriction" class="text-center flex items-center">
              <div
                class="bg-brand-200 rounded-lg px-2 py-1 text-xs uppercase tracking-wider"
                v-text="tt(restriction)"
              />
            </div>
          </div>
        </td>
        <td class="align-top block md:table-cell">
          <h2 class="mb-2 text-brand-500 font-semibold text-3xl" v-text="event.name" />
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

    <div class="md:flex flex-wrap justify-center -mx-2">
      <div v-for="event in openingHoursMonthly" :key="event.name" class="p-2 mb-4 xl:mb-0 md:w-1/2 xl:flex-1 xl:w-auto">
        <div class="rounded shadow bg-brand-100 flex flex-col justify-between h-full relative z-10">
          <div class="p-6">
            <div class="flex items-center mb-2">
              <h2 class="mb-2 text-brand-500 font-semibold text-3xl" v-text="event.name" />
              <div v-if="event.restrictions">
                <div
                  v-for="restriction in event.restrictions"
                  :key="restriction"
                  class="ml-4 text-center flex items-center"
                >
                  <div
                    class="bg-brand-200 rounded-lg px-2 py-1 text-xs uppercase tracking-wider"
                    v-text="tt(restriction)"
                  />
                </div>
              </div>
            </div>
            <div class="text-gray-500 text-2xl font-semibold" v-text="tt(event.day)" />
            <div class="text-gray-400 text-xl" v-text="event.start_time" />
            <p v-text="tt(event.description)" />
          </div>
          <a
            v-if="event.link"
            :href="event.link.url"
            class="bg-brand-500 hover:bg-brand-300 py-3 rounded-b text-white uppercase font-semibold tracking-wider text-center"
            v-text="tt(event.link.name)"
          />
        </div>
      </div>
    </div>
  </ElementsContainer>
</template>
