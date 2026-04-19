<script setup>
defineProps({
  title: { type: String, required: true },
})
</script>

<template>
  <h1 class="mb-8 text-5xl font-medium text-brand-450">
    <Markdown :content="title" />
  </h1>
</template>
