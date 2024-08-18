<script setup>
import { IconArrowRight } from '@iconify-prerendered/vue-zondicons'

defineProps({
  arrow: { type: Boolean, default: false },
})
</script>

<template>
  <button
    class="bg-brand-450 hover:bg-brand-300 px-6 py-3 rounded-full text-white uppercase font-semibold tracking-wider shadow-lg transition-colors"
    :class="arrow && 'flex items-center'"
  >
    <slot />
    <IconArrowRight v-if="arrow" class="w-3 h-3 ml-2" />
  </button>
</template>
