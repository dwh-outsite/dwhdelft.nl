<script setup>
import { IconArrowRight } from '@iconify-prerendered/vue-zondicons'

defineProps({
  arrow: { type: Boolean, default: false },
})
</script>

<template>
  <button
    :class="
      cn(
        'bg-brand-450 hover:bg-brand-300 px-6 py-3 rounded-full text-white uppercase font-semibold tracking-wider shadow-lg transition-colors',
        arrow && 'flex items-center',
        $attrs.class
      )
    "
  >
    <slot />
    <IconArrowRight v-if="arrow" class="w-3 h-3 ml-2" />
  </button>
</template>
