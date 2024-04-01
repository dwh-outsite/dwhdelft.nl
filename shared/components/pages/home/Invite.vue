<script setup>
import { IconExplore } from '@iconify-prerendered/vue-zondicons'

defineProps({
  announcement: { type: String, required: true },
  time: { type: String, required: true },
})
</script>

<template>
  <div
    class="flex-1 rounded-lg shadow-xl bg-brand-450 text-lg md:text-xl text-white p-4 relative w-full z-20 md:w-auto md:inline-flex items-center"
  >
    <div class="rounded-full w-16 h-16 p-4 bg-white text-brand-450 shadow md:shadow-none absolute -top-8 md:static">
      <IconExplore class="fill-current w-full h-full" />
    </div>
    <div class="pt-6 md:pt-0 md:pl-4">
      <p>{{ announcement }}</p>
      <p class="font-bold">{{ time }}</p>
    </div>
  </div>
</template>
