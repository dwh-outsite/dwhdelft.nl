<template>
  <NuxtLayout>
    <main class="relative bg-white">
      <NuxtPage />
    </main>
    <footer id="contact">
      <LayoutFooter />
    </footer>
  </NuxtLayout>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: 'dwh-colors',
  },
})
</script>
