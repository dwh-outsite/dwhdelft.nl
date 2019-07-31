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

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
