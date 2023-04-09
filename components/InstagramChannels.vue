<i18n lang="yaml">
en:
  title: Our <strong>Events and Updates</strong>
  button: Follow {name} on Instagram
nl:
  title: Onze <strong>Events en Updates</strong>
  button: Volg {name} op Instagram
</i18n>

<template>
  <div class="space-y-6">
    <div class="lg:flex justify-between space-y-4 lg:space-y-0">
      <h1 class="text-white font-medium text-5xl" v-html="$t('title')" />
      <div class="inline-block rounded-full bg-brand-900 p-2">
        <button
          v-for="brand in brands"
          :key="brand.name"
          class="rounded-full px-4 py-2 leading-none text-lg"
          :class="active === brand ? 'bg-white' : 'text-white'"
          @click="active = brand"
        >
          <div class="font-semibold">{{ brand.name }}</div>
          <div class="text-xs">{{ brand.subtitle[$i18n.locale] }}</div>
        </button>
      </div>
    </div>
    <InstagramWidget :widget-id="active.widgetId" />
    <a :href="`https://www.instagram.com/${active.instagram}`" target="_blank" class="block text-center">
      <button class="button-white">
        <div class="flex items-center space-x-2">
          <div v-text="$t('button', { name: active.name })" />
          <Zondicon icon="cheveron-outline-right" class="h-8 text-gray-600 fill-current" />
        </div>
      </button>
    </a>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  components: { Zondicon },
  data() {
    const brands = [
      {
        name: 'DWH',
        subtitle: { nl: 'Organisatie', en: 'Organisation' },
        widgetId: '9555f325abc15974a4a4e4ef0eadfa0a',
        instagram: 'dwh_delft',
      },
      {
        name: 'Outsite',
        subtitle: { nl: 'Donderdagen', en: 'Thursdays' },
        widgetId: '624d8645cce75e45bae0a87c9c761cd6',
        instagram: 'outsite_delft',
      },
      {
        name: 'MIXUP',
        subtitle: { nl: 'Zaterdagen', en: 'Saturdays' },
        widgetId: '219aedf13a4355fe95c6e27ed1f7386c',
        instagram: 'mixupdelft',
      },
    ]
    return {
      active: brands[0],
      brands,
    }
  },
}
</script>
