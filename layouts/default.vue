<template>
  <div>
    <main class="bg-white">
      <nuxt />
    </main>
    <footer id="contact" class="bg-gray-700">
      <Footer />
    </footer>
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'DWH Delft' },
        { hid: 'og:name', property: 'og:name', content: 'DWH Delft' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'DWH Delft' },
        { hid: 'og:description', property: 'og:description', content: 'LHBT+ vereniging' },
        { hid: 'description', property: 'description', content: 'LHBT+ vereniging' },
        { hid: 'apple-mobile-web-app-title', property: 'apple-mobile-web-app-title', content: 'DWH Delft' },
      ],
    }
  },
}
</script>
