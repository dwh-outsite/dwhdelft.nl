<script setup>
const count = ref(0)
const increment = () => count.value++
</script>

<template>
  <button @click="increment">
    Count is: {{ count }}
  </button>
</template>
