<i18n lang="yaml">
en:
  title: Our **Events and Updates**
  button: Follow {name} on Instagram
nl:
  title: Onze **Events en Updates**
  button: Volg {name} op Instagram
</i18n>

<script setup>
const props = defineProps({
  brands: { type: Array, required: true },
})

const { t } = useT()

const active = ref(props.brands[0])
</script>

<template>
  <div class="space-y-6">
    <slot name="title">
      <div class="lg:flex justify-between space-y-4 lg:space-y-0">
        <h1 class="font-medium text-5xl"><Markdown :content="t('title')" /></h1>
        <div class="inline-block rounded-full bg-brand-900 p-2">
          <button
            v-for="brand in brands"
            :key="brand.name"
            class="rounded-full px-4 py-2 leading-none text-lg"
            :class="active.instagram === brand.instagram ? 'bg-white text-gray-800' : 'text-white'"
            @click="active = brand"
          >
            <div class="font-semibold">{{ brand.name }}</div>
            <div class="text-xs">{{ brand.subtitle[$i18n.locale] }}</div>
          </button>
        </div>
      </div>
    </slot>

    <PagesHomeInstagramWidget :widget-id="active.widgetId" />

    <a :href="`https://www.instagram.com/${active.instagram}`" target="_blank" class="block text-center">
      <ElementsSecondaryButton class="mx-auto" arrow>
        {{ t('button', { name: active.name }) }}
      </ElementsSecondaryButton>
    </a>
  </div>
</template>
