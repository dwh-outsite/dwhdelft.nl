<template>
  <div>
    <header>
      <Header>
        <h1 class="text-4xl text-white font-normal">
          {{ $t('hero.title') }}
        </h1>
        <h2 class="text-2xl text-white mt-2 w-1/2 font-light">
          {{ $t('hero.subtitle') }}
        </h2>
        <div class="mt-8 flex">
          <button class="block bg-pink-400 px-4 py-2 rounded text-white uppercase font-semibold tracking-wider shadow">
            Join Outsite
          </button>
          <button
            class="block ml-4 bg-white px-4 py-2 rounded text-gray-700 uppercase tracking-wider shadow font-semibold"
          >
            Watch video
          </button>
        </div>
      </Header>
    </header>

    <section>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name:
            <input type="text" name="name" class="border" />
          </label>
        </p>
        <p>
          <label>
            Your Email:
            <input type="email" name="email" class="border" />
          </label>
        </p>
        <p>
          <label>
            Your Role:
            <select name="role[]" multiple class="border">
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>Message: <textarea name="message" class="border"></textarea></label>
        </p>
        <p>
          <button type="submit" class="border">Send</button>
        </p>
      </form>
    </section>

    <footer class="bg-gray-700">
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
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import BoardMember from '~/components/BoardMember'
import JoinWhatsApp from '~/components/JoinWhatsApp'

export default {
  components: {
    Header,
    Footer,
    BoardMember,
    JoinWhatsApp
  }
}
</script>

<style>
.information {
  @apply relative;
}

.information::before {
  @apply bg-gray-200 absolute w-full;
  height: 250%;
  transform: skewY(-13deg);
  content: '';
  z-index: -1;
  top: 0px;
}
</style>
