<template>
  <NuxtLayout>
    <main class="relative bg-white">
      <NuxtPage />
    </main>
    <footer id="contact" class="relative">
      <LayoutFooterJoinWhatsapp />
      <LayoutFooter class="md:pt-8" />
    </footer>
  </NuxtLayout>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: 'outsite-colors',
  },
})
</script>
