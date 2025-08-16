<i18n lang="yaml">
en:
  title: Activities
  introduction:
    "At Outsite we have a bunch of different activities for all kinds of interests, all organized by our amazing volunteer committees. We’re always looking for new volunteers, so be sure to come by during a committee interest night for more information. Who knows, maybe you’ll get to organize a fun activity this year!"
nl:
  title: Activiteiten
  introduction: "Bij Outsite hebben we veel verschillende activiteiten die allemaal georganiseerd worden door onze vrijwilliger commissies. Uiteraard kan jij je als lid ook aansluiten bij een commissie, wat hartstikke leuk en gezellig is. Wie weet, misschien organiseer jij ook wat leuks komend jaar!"
</i18n>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const { t } = useT()

const { image } = useDynamicImages(import.meta.glob('~/assets/images/photos/committees/*', { eager: true }))

const { data: committees } = await useAsyncData(() => queryContent('committees').find())

const requireImage = (name) => image(name.toLowerCase().replace(/ /g, ''))
</script>

<template>
  <LayoutSmallHeader>{{ t('title') }}</LayoutSmallHeader>

  <LayoutPageIntroText>
    <p v-text="t('introduction')" />
  </LayoutPageIntroText>

  <LayoutEmulatedSkewedSection :bottom="false" contentClass="bg-brand-200 py-16" triangleClass="border-brand-200">
    <ElementsContainer class="space-y-4 md:flex md:space-x-6 md:space-y-0">
      <TabGroup>
        <TabList class="flex space-x-2 overflow-auto whitespace-nowrap md:w-1/4 md:flex-col md:space-x-0 md:space-y-2">
          <Tab v-for="committee in committees" :key="committee.name + 'tab'" v-slot="{ selected }" as="template">
            <button
              class="block w-full rounded-lg px-4 py-3 text-left text-lg font-semibold shadow"
              :class="
                selected ? 'bg-white text-gray-800' : 'bg-brand-900/25 text-white hover:bg-white/50 hover:text-gray-800'
              "
            >
              {{ committee[`name_${$i18n.locale}`] }}
            </button>
          </Tab>
        </TabList>

        <TabPanels class="flex-1">
          <TabPanel v-for="committee in committees" :key="committee.name">
            <ElementsActionCard
              :title="committee[`name_${$i18n.locale}`]"
              class="shadow-xl"
              headerPosition="right"
              headerClass="h-64 md:h-auto md:w-2/5"
            >
              <template #header>
                <img :src="requireImage(committee.name)" class="size-full object-cover" />
              </template>

              <p v-text="committee[`description_${$i18n.locale}`]" />
            </ElementsActionCard>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </ElementsContainer>
  </LayoutEmulatedSkewedSection>
</template>
