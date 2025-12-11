<i18n lang="yaml">
en:
  title: Purple Friday 2024
  subtitle: Join us for Purple Friday - a day of celebration and awareness for the LGBTQ+ community at TU Delft!
  back_to_highlights: Back to Highlights
nl:
  title: Paarse Vrijdag 2024
  subtitle: Doe mee met Paarse Vrijdag - een dag van viering en bewustwording voor de LGBTQ+ gemeenschap aan de TU Delft!
  back_to_highlights: Terug naar Hoogtepunten
</i18n>

<script setup>
import { ref } from 'vue'

const { t, locale } = useT()

const { data: purpleFridayEvents } = await useAsyncData(() => queryContent('purple_friday').find())

const facultyLabels = {
  inholland: 'InHolland',
  citg: 'CiTG',
  ewi: 'EWI',
  io: 'IO',
  lr: 'LR',
  me: 'ME',
  tpm: 'TPM',
  bk: 'BK',
  tnw: 'TNW',
}

const getEventId = (event) => {
  const path = event._path || ''
  const parts = path.split('/')
  return parts[parts.length - 1]
}

const sortedEvents =
  purpleFridayEvents.value?.sort((a, b) => {
    const idA = getEventId(a)
    const idB = getEventId(b)
    return Object.keys(facultyLabels).indexOf(idA) - Object.keys(facultyLabels).indexOf(idB)
  }) || []

const activeTab = ref(sortedEvents.length > 0 ? getEventId(sortedEvents[0]) : null)
</script>

<template>
  <LayoutSmallHeader triangleClass="border-purple-100">{{ t('title') }}</LayoutSmallHeader>

  <LayoutPageIntroText>
    <div class="mb-6">
      <nuxt-link
        :to="$localePath('highlights')"
        class="inline-flex items-center font-semibold text-purple-600 hover:text-purple-700"
      >
        <svg
          class="mr-2 size-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        {{ t('back_to_highlights') }}
      </nuxt-link>
    </div>
    <p class="text-xl text-gray-700">{{ t('subtitle') }}</p>
  </LayoutPageIntroText>

  <LayoutStraightSection contentBackgroundClass="bg-purple-50" contentClass="py-12">
    <ElementsContainer>
      <div class="overflow-hidden rounded-lg bg-white shadow-lg">
        <!-- Tabs -->
        <div class="border-b border-purple-200 bg-purple-100">
          <div class="flex flex-wrap justify-center gap-2 p-4">
            <button
              v-for="event in sortedEvents"
              :key="getEventId(event)"
              :class="[
                'rounded-lg px-4 py-2 font-semibold transition-all duration-200',
                activeTab === getEventId(event)
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-white text-purple-700 hover:bg-purple-50 hover:text-purple-800',
              ]"
              @click="activeTab = getEventId(event)"
            >
              {{ facultyLabels[getEventId(event)] }}
            </button>
          </div>
        </div>

        <!-- Content -->
        <div class="bg-white p-8 md:p-12">
          <div v-for="event in sortedEvents" v-show="activeTab === getEventId(event)" :key="getEventId(event)">
            <div class="mb-6">
              <span class="inline-block rounded-full bg-purple-600 px-4 py-2 text-lg font-bold text-white">
                {{ facultyLabels[getEventId(event)] }}
              </span>
            </div>
            <div class="prose prose-lg max-w-none text-gray-700">
              <div class="whitespace-pre-line text-xl leading-relaxed" v-html="event[`description_${locale}`]" />
            </div>
          </div>
        </div>
      </div>
    </ElementsContainer>
  </LayoutStraightSection>
</template>

<style scoped>
@media (max-width: 640px) {
  button {
    min-width: 80px;
  }
}
</style>
