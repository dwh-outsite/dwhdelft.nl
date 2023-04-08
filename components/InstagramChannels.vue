<i18n lang="yaml">
en:
  title: Our <strong>Events and Updates</strong>
nl:
  title: Onze <strong>Events en Updates</strong>
</i18n>

<template>
  <div class="space-y-6">
    <div class="lg:flex justify-between space-y-4 lg:space-y-0">
      <h1 class="text-white font-medium text-5xl" v-html="$t('title')" />
      <div class="inline-block rounded-full bg-brand-900 p-2">
        <button
          v-for="brand in brands"
          :key="brand.name"
          class="rounded-full px-4 py-2"
          :class="active === brand ? 'bg-white' : 'text-white font-semibold'"
          @click="active = brand"
        >
          {{ brand.name }}
        </button>
      </div>
    </div>
    <InstagramWidget :widget-id="active.widgetId" />
  </div>
</template>

<script>
export default {
  data() {
    const brands = [
      { name: 'DWH', widgetId: '9555f325abc15974a4a4e4ef0eadfa0a' },
      { name: 'Outsite', widgetId: '624d8645cce75e45bae0a87c9c761cd6' },
      { name: 'MIXUP' },
    ]
    return {
      active: brands[0],
      brands,
    }
  },
}
</script>
