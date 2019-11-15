<template>
  <div>
    <nuxt />

    <footer id="contact" class="bg-gray-700">
      <JoinNewsletter :button-text="$t('footer.newsletter.button')">
        <span v-html="$t('footer.newsletter.description')" />
      </JoinNewsletter>
      <Footer
        :left-title="$t('footer.leftTitle')"
        :right-title="$t('footer.rightTitle')"
        contact-email="bestuur@dwhdelft.nl"
        contact-address="Lange Geer 22<br />2611PV Delft"
        contact-phone="06-37560270"
        contact-coc="KvK: 40398035<br />RSIN: 807864250"
        :anbi-link-destination="localePath('anbi')"
      >
        <template v-slot:board-members>
          <BoardMember name="Robert Baart" :role="$t('footer.board.president')" email="voorzitter@dwhdelft.nl" />
          <BoardMember name="Casper Boone" :role="$t('footer.board.youth')" email="jongeren@dwhdelft.nl" />
          <BoardMember name="Nick van Loo" :role="$t('footer.board.secretary')" email="secretaris@dwhdelft.nl" />
          <BoardMember name="Jelle Vos" :role="$t('footer.board.general')" email="promotie@dwhdelft.nl" />
          <BoardMember name="Quinten Star" :role="$t('footer.board.treasurer')" email="penningmeester@dwhdelft.nl" />
          <BoardMember name="Jeroen Wegdam" :role="$t('footer.board.general')" email="pand@dwhdelft.nl" />
        </template>
      </Footer>
    </footer>
  </div>
</template>

<script>
import Footer from '~/components/Footer'
import BoardMember from '~/components/BoardMember'
import JoinNewsletter from '~/components/JoinNewsletter'

export default {
  components: {
    Footer,
    BoardMember,
    JoinNewsletter
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
