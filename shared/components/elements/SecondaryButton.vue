<script setup>
import cn from '#shared/composables/cn.js'
import { IconArrowRight } from '@iconify-prerendered/vue-zondicons'

defineProps({
  arrow: { type: Boolean, default: false },
})
</script>

<template>
  <button
    :class="
      cn(
        'bg-white hover:bg-gray-200 px-6 py-3 rounded-full text-gray-700 uppercase tracking-wider shadow-lg font-semibold transition-colors',
        arrow && 'flex items-center',
        $attrs.class
      )
    "
  >
    <slot />
    <IconArrowRight v-if="arrow" class="w-3 h-3 ml-2" />
  </button>
</template>
