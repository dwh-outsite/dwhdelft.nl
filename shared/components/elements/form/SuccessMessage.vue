<script setup>
import { IconCheckmarkOutline } from '@iconify-prerendered/vue-zondicons'

defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
})
</script>

<template>
  <div class="flex items-center rounded-lg bg-white p-6 text-lg shadow-lg">
    <div class="size-16 rounded-full bg-brand-500 p-3 text-white">
      <IconCheckmarkOutline class="size-10" />
    </div>
    <div class="ml-4">
      <h4 class="text-xl font-semibold text-gray-900" v-text="title" />
      <span class="text-gray-700" v-text="subtitle" />
    </div>
  </div>
</template>
