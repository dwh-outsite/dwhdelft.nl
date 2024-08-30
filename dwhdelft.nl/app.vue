<template>
  <NuxtLayout>
    <main class="bg-white relative">
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
