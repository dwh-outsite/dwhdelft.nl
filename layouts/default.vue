<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  components: {},
  head() {
    return {
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'DWH Delft' },
        { hid: 'og:name', property: 'og:name', content: 'DWH Delft' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'DWH Delft' },
        { hid: 'og:description', property: 'og:description', content: 'LHBT+ vereniging' },
        { hid: 'description', property: 'description', content: 'LHBT+ vereniging' },
        { hid: 'apple-mobile-web-app-title', property: 'apple-mobile-web-app-title', content: 'DWH Delft' }
      ]
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.button-pink {
  @apply bg-purple-500 px-4 py-2 rounded text-white uppercase font-semibold tracking-wider shadow;
}

.button-pink:hover {
  @apply bg-purple-300;
}

.button-white {
  @apply bg-white px-4 py-2 rounded text-gray-700 uppercase tracking-wider shadow font-semibold;
}

.button-white:hover {
  @apply bg-gray-200;
}
</style>
