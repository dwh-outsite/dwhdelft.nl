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
          <BoardMember :role="$t('footer.board.president')" name="Robert Baart" email="voorzitter@dwhdelft.nl" />
          <BoardMember :role="$t('footer.board.youth')" name="Casper Boone" email="jongeren@dwhdelft.nl" />
          <BoardMember :role="$t('footer.board.secretary')" name="Nick van Loo" email="secretaris@dwhdelft.nl" />
          <BoardMember :role="$t('footer.board.general')" name="Jelle Vos" email="promotie@dwhdelft.nl" />
          <BoardMember :role="$t('footer.board.treasurer')" name="Quinten Star" email="penningmeester@dwhdelft.nl" />
          <BoardMember :role="$t('footer.board.general')" name="Jeroen Wegdam" email="pand@dwhdelft.nl" />
        </template>
        <template v-slot:newsletter>
          <JoinNewsletter :button-text="$t('footer.newsletter.button')">
            <span v-html="$t('footer.newsletter.description')" />
          </JoinNewsletter>
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
