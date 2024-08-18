<i18n lang="yaml">
en:
  title: Committees
  introduction:
    At Outsite we have many fun and challenging committees. We are of course always looking for new committeemembers,
    so be sure to check out the various committees we have below. Who knows, you might get to organise a fun activity
    this year!
nl:
  title: Commissies
  introduction: Bij Outsite hebben we veel commissies en die zijn natuurlijk allemaal hartstikke leuk en
    gezellig. Uiteraard kan jij je ook aansluiten bij een commissie. Hieronder vind je een
    mooi overzicht van alle commissies. Kijk maar een beetje rond en zie wat bij je past, wie
    weet organiseer jij wat leuks komend jaar!
</i18n>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const { t } = useT()

const { image } = useDynamicImages(import.meta.glob('~/assets/images/photos/committees/*', { eager: true }))

const { data: committees } = await useAsyncData(() => queryContent('committees').find())

const active = ref(committees.value[0])

const requireImage = (name) => image(name.toLowerCase().replace(/ /g, ''))
</script>

<template>
  <LayoutSmallHeader>{{ t('title') }}</LayoutSmallHeader>

  <LayoutPageIntroText>
    <p v-text="t('introduction')" />
  </LayoutPageIntroText>

  <LayoutEmulatedSkewedSection :bottom="false" contentClass="bg-brand-200 py-16" triangleClass="border-brand-200">
    <ElementsContainer class="md:flex space-y-4 md:space-y-0 md:space-x-6">
      <TabGroup>
        <TabList class="md:w-1/4 flex md:flex-col space-x-2 md:space-x-0 md:space-y-2 whitespace-nowrap overflow-auto">
          <Tab
            v-for="committee in committees"
            :key="committee.name + 'tab'"
            as="template"
            v-slot="{ selected }"
          >
            <button
              class="block w-full rounded-lg text-left px-4 py-3 font-semibold shadow text-lg"
              :class="selected ? 'bg-white text-gray-800' : 'bg-brand-900/25 text-white hover:bg-white/50 hover:text-gray-800'"
            >
              {{ committee.name }}
            </button>
          </Tab>
        </TabList>

        <TabPanels class="flex-1">
          <TabPanel v-for="committee in committees" :key="committee.name">
            <ElementsActionCard :title="committee.name" class="shadow-xl" headerPosition="right" headerClass="h-64 md:h-auto md:w-2/5">
              <template #header>
                <img
                  :src="requireImage(committee.name)"
                  class="object-cover w-full h-full"
                />
              </template>

              <p v-text="committee[`description_${$i18n.locale}`]" />
            </ElementsActionCard>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </ElementsContainer>
  </LayoutEmulatedSkewedSection>
</template>
