<template>
  <div>
    <main class="bg-white relative">
      <nuxt />
    </main>
    <footer id="contact" class="bg-gray-700 relative">
      <JoinWhatsapp />
      <Footer class="md:pt-8" />
    </footer>
  </div>
</template>

<script>
export default {
  head: {
    link: [
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap',
      },
    ],
  },
}
</script>
