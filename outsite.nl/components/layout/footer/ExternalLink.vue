<script setup>
import { IconArrowThinRight } from '@iconify-prerendered/vue-zondicons'
</script>

<template>
  <a class="flex items-center border-b border-dashed border-white font-bold text-white">
    <slot />
    <IconArrowThinRight class="ml-1 w-4" />
  </a>
</template>
