<script setup>
import { IconExplore } from '@iconify-prerendered/vue-zondicons'

defineProps({
  announcement: { type: String, required: true },
  time: { type: String, required: true },
  disclaimer: { type: String, required: false },
})
</script>

<template>
  <div
    class="relative z-20 w-full flex-1 items-center rounded-3xl bg-brand-450 px-6 py-4 text-lg text-white shadow-xl md:inline-flex md:w-auto md:text-xl"
  >
    <div
      v-if="disclaimer"
      class="absolute -bottom-3 right-8 flex h-6 items-center rounded-full border border-white bg-brand-400/60 px-3 text-xs font-bold uppercase tracking-wide backdrop-blur"
    >
      {{ disclaimer }}
    </div>
    <div class="absolute -top-8 size-16 rounded-full bg-white p-4 text-brand-450 shadow md:static md:shadow-none">
      <IconExplore class="size-full fill-current" />
    </div>
    <div class="pt-6 md:pl-4 md:pt-0">
      <p>{{ announcement }}</p>
      <p class="-mt-1 font-bold">{{ time }}</p>
    </div>
  </div>
</template>
