<script setup>
import { IconExplore } from '@iconify-prerendered/vue-zondicons'

defineProps({
  announcement: { type: String, required: true },
  time: { type: String, required: true },
})
</script>

<template>
  <div
    class="relative z-20 w-full flex-1 items-center rounded-lg bg-brand-450 p-4 text-lg text-white shadow-xl md:inline-flex md:w-auto md:text-xl"
  >
    <div class="absolute -top-8 size-16 rounded-full bg-white p-4 text-brand-450 shadow md:static md:shadow-none">
      <IconExplore class="size-full fill-current" />
    </div>
    <div class="pt-6 md:pl-4 md:pt-0">
      <p>{{ announcement }}</p>
      <p class="font-bold">{{ time }}</p>
    </div>
  </div>
</template>
