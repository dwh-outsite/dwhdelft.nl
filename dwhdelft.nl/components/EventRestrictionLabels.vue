<script setup>
defineProps({
  restrictions: {
    type: Array,
    default: [],
  },
})

const { tt } = useT()
</script>

<template>
  <div class="flex items-start space-x-0">
    <div
      v-for="restriction in restrictions"
      :key="restriction"
      class="bg-brand-200 rounded-lg px-2 py-1 text-xs uppercase tracking-wider"
      v-text="tt(restriction)"
    />
  </div>
</template>
