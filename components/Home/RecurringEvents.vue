<i18n lang="yaml">
en:
  announcement: <strong>DWH</strong> is open {count} nights a week
nl:
  announcement: <strong>DWH</strong> is elke week op {count} avonden open
</i18n>

<template>
  <div class="container px-4 mx-auto py-16">
    <h2
      class="text-center text-brand-500 font-medium text-5xl mb-6 leading-tight"
      v-html="$t('announcement', { count: openingHours.length })"
    />

    <table class="w-2/3 mx-auto border-separate border-spacing-y-16">
      <tr v-for="event in openingHours" :key="event.name" class="border-b">
        <td class="align-top pt-1">
          <div class="text-gray-500 text-2xl uppercase font-semibold" v-text="$tt(event.day)" />
          <div class="text-gray-400 text-xl mb-2" v-text="event.start_time" />
          <div v-if="event.restrictions" class="space-x-2">
            <div v-for="restriction in event.restrictions" :key="restriction" class="text-center flex items-center">
              <div
                class="bg-brand-200 rounded-lg px-2 py-1 text-xs uppercase tracking-wider"
                v-text="$tt(restriction)"
              />
            </div>
          </div>
        </td>
        <td class="align-top">
          <h2 class="mb-2 text-brand-500 font-semibold text-3xl" v-text="event.name" />
          <p class="text-gray-500" v-html="$tt(event.description)" />
          <a
            v-if="event.link"
            :href="event.link.url"
            class="mt-6 inline-block button-pink px-5 py-2 text-sm font-semibold"
            v-html="$tt(event.link.name)"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openingHours: [],
    }
  },
  async fetch() {
    this.openingHours = (await this.$content('opening_hours').fetch()).events
  },
}
</script>
