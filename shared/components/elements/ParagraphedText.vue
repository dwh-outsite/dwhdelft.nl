<script setup>
defineProps({
  paragraphs: { type: Array, required: true },
})
</script>

<template>
  <div>
    <p v-for="paragraph in paragraphs" :key="paragraph" v-html="paragraph" />
  </div>
</template>
