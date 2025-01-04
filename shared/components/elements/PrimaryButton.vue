<script setup>
import { IconArrowRight } from '@iconify-prerendered/vue-zondicons'

defineProps({
  arrow: { type: Boolean, default: false },
})
</script>

<template>
  <button
    class="rounded-full bg-brand-450 px-6 py-3 font-semibold uppercase tracking-wider text-white shadow-lg transition-colors hover:bg-brand-300"
    :class="arrow && 'flex items-center'"
  >
    <slot />
    <IconArrowRight v-if="arrow" class="ml-2 size-3" />
  </button>
</template>
