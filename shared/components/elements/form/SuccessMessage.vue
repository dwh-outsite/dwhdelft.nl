<script setup>
import { IconCheckmarkOutline } from '@iconify-prerendered/vue-zondicons'

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
})
</script>

<template>
  <div :class="cn('bg-white rounded-lg shadow-lg p-6 text-lg flex items-center', $attrs.class)">
    <div class="rounded-full w-16 h-16 p-3 bg-brand-500 text-white">
      <IconCheckmarkOutline class="w-10 h-10" />
    </div>
    <div class="ml-4">
      <h4 class="font-semibold text-xl text-gray-900" v-text="title" />
      <span class="text-gray-700" v-text="subtitle" />
    </div>
  </div>
</template>
