<template>
  <NuxtLayout>
    <main class="relative bg-background-primary">
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
