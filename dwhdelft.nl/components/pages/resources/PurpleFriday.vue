<i18n lang="yaml">
en:
  title: 'Purple Friday 2024'
  subtitle: 'What is happening on Purple Friday this year? Find an overview here:'
nl:
  title: 'Paarse Vrijdag 2024'
  subtitle: 'Wat is er dit jaar op Paarse Vrijdag? Zie hier een overzicht (alleen in het Engels):'
</i18n>

<script setup>
import { ref } from 'vue'
const { t } = useT()

const faculties = (await useAsyncData(() => queryContent('resources').find())).data
const active = ref(0)

faculties.value.sort((a, b) => {
  return (a.order || 0) - (b.order || 0)
})

const activeFaculty = computed(() => faculties.value[active.value])
</script>

<template>
  <div class="w-full py-6">
    <section class="container mx-auto space-y-6">
      <div class="space-y-6">
        <div class="text-5xl">
          {{ t('title') }}
        </div>
        <div>
          {{ t('subtitle') }}
        </div>
        <div class="text-2xl">
          <div class="lg:w-[36rem] xl:w-[44rem] pt-6">
            <div class="flex space-x-2 overflow-auto whitespace-nowrap">
              <div
                v-for="(faculty, index) in faculties"
                :key="faculty.name"
                :class="index === active ? 'bg-brand-800' : 'bg-brand-500 cursor-pointer hover:bg-brand-400'"
                class="text-white rounded-t-lg p-4 font-semibold tracking-wide z-20 relative"
                @click="active = index"
              >
                {{ faculty.name }}
              </div>
            </div>
            <div class="flex-1 bg-brand-800 text-white rounded-b-lg shadow-lg p-6 space-y-2 text-lg">
              <h2 class="text-2xl font-bold uppercase tracking-wider">
                {{ activeFaculty.full_name }}
              </h2>
              ⁠<Markdown :key="activeFaculty.name" :content="activeFaculty" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
