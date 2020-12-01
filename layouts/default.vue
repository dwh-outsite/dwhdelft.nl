<template>
  <div>
    <nuxt />

    <footer id="contact" class="bg-gray-700">
      <Footer
        :left-title="$t('footer.leftTitle')"
        :right-title="$t('footer.rightTitle')"
        :anbi-link-destination="localePath('anbi')"
        contact-email="bestuur@dwhdelft.nl"
        contact-address="Lange Geer 22<br />2611PV Delft"
        contact-phone="06-37560270"
        contact-coc="KvK: 40398035<br />RSIN: 807864250"
      >
        <template v-slot:board-members>
          <BoardMember :role="$t('footer.board.president')" name="Robbie Baart" email="voorzitter@dwhdelft.nl" />
          <BoardMember :role="$t('footer.board.treasurer')" name="Quinten Star" email="penningmeester@dwhdelft.nl" />
          <BoardMember :role="$t('footer.board.secretary')" name="Dries Stuij" email="secretaris@dwhdelft.nl" />
          <BoardMember :role="$t('footer.board.general')" name="Jelle Vos" email="promotie@dwhdelft.nl" />
        </template>
        <template v-slot:newsletter></template>
      </Footer>
    </footer>
  </div>
</template>

<script>
import Footer from '~/components/Footer'
import BoardMember from '~/components/BoardMember'

export default {
  components: {
    Footer,
    BoardMember
  },
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
