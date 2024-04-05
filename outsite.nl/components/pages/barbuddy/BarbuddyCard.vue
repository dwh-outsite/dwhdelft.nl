<i18n lang="yaml">
en:
  read_more: Read more
  read_less: Collapse
nl:
  read_more: Lees meer
  read_less: Inklappen
</i18n>

<script setup>
import { IconUser } from '@iconify-prerendered/vue-zondicons'

defineProps({
  buddy: { type: Object, required: true },
})

const { t } = useT()

const expanded = ref(false)
const readMore = () => expanded.value = !expanded.value
</script>

<template>
  <ElementsActionCard :title="buddy.name" @click="readMore()">
    <template #icon>
      <div class="rounded-full w-12 h-12 p-3 bg-brand-450 text-white">
        <IconUser class="w-full h-full" />
      </div>
    </template>

    <template #button>
      <span class="text-gray-500">{{ buddy.pronouns[$i18n.locale] }}</span>
    </template>

    <div class="text-lg relative" :class="expanded ? 'pb-8' : 'line-clamp-4'">
      <span class="absolute z-10 bottom-0 right-0 flex">
        <span class="w-32 block white-gradient" />
        <a class="text-brand-450 bg-white cursor-pointer" @click="readMore()">
          {{ t(expanded ? 'read_less' : 'read_more') }}
        </a>
      </span>
      {{ buddy[$i18n.locale] }}
    </div>
  </ElementsActionCard>
</template>

<style>
.clamp-lines {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.white-gradient {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
}
</style>
