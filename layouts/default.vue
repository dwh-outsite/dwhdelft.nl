<template>
  <div>
    <nuxt class="bg-white" />

    <footer>
      <JoinWhatsApp />
      <Footer
        left-title="Bestuur"
        link-title="Vertrouwenspersoon"
        link-destination="#"
        right-title="Contact"
        contact-email="bestuur@outsite.nl"
        contact-address="Lange Geer 22<br />2611PV Delft"
        dwh-description="Outsite is onderdeel van"
      >
        <template v-slot:board-members>
          <BoardMember name="Casper Boone" role="Voorzitter" email="voorzitter@outsite.nl" />
          <BoardMember name="Daan Verrer" role="Secretaris" email="secretaris@outsite.nl" />
          <BoardMember name="Joël Abrahams" role="Penningmeester" email="penningmeester@outsite.nl" />
        </template>
      </Footer>
    </footer>
  </div>
</template>

<script>
import Footer from '~/components/Footer'
import BoardMember from '~/components/BoardMember'
import JoinWhatsApp from '~/components/JoinWhatsApp'

export default {
  components: {
    Footer,
    BoardMember,
    JoinWhatsApp
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
  background-color: #464044;
}

.button-pink {
  @apply bg-pink-400 px-4 py-2 rounded text-white uppercase font-semibold tracking-wider shadow;
}

.button-pink:hover {
  @apply bg-pink-200;
}
</style>
