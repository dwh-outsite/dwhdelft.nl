<template>
  <NuxtLayout>
    <main class="relative bg-white">
      <NuxtPage />
    </main>
  </NuxtLayout>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: 'dwh-colors',
  },
})
</script>
