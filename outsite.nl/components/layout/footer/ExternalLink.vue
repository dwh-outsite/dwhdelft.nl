<script setup>
import { IconArrowThinRight } from '@iconify-prerendered/vue-zondicons'
</script>

<template>
  <a class="text-white font-bold flex items-center border-b border-white border-dashed">
    <slot />
    <IconArrowThinRight class="w-4 ml-1" />
  </a>
</template>
