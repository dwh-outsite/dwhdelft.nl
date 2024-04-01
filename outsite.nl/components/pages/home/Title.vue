<script setup>
defineProps({
  title: { type: String, required: true },
})
</script>

<template>
  <h2 class="text-brand-450 font-medium text-5xl mb-8">
    <Markdown :content="title" />
  </h2>
</template>
