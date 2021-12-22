<i18n lang="yaml">
en:
  boardTitle: Board
  contactTitle: Contact
  board:
    - name: Rory Baart
      role: President
      email: voorzitter@dwhdelft.nl
    - name: Charlie Verboom
      role: Secretary
      email: secretaris@dwhdelft.nl
    - name: Dries Stuij
      role: Treasurer
      email: penningmeester@dwhdelft.nl
    - name: Aydin Karadag
      role: Board Member
      email: aydin.karadag@dwhdelft.nl
nl:
  boardTitle: Bestuur
  contactTitle: Contact
  board:
    - name: Rory Baart
      role: Voorzitter
      email: voorzitter@dwhdelft.nl
    - name: Charlie Verboom
      role: Secretaris
      email: secretaris@dwhdelft.nl
    - name: Dries Stuij
      role: Penningmeester
      email: penningmeester@dwhdelft.nl
    - name: Aydin Karadag
      role: Algemeen Bestuurslid
      email: aydin.karadag@dwhdelft.nl
</i18n>

<template>
  <div>
    <div
      class="container px-4 mx-auto text-white py-8 md:flex space-y-8 md:space-y-0 md:space-x-8 xl:space-x-16 justify-center"
    >
      <div v-for="category in links" :key="category.name">
        <h3 class="text-xl text-gray-300 font-bold mb-4 uppercase tracking-wider" v-text="$tt(category.name)" />
        <div class="space-y-2">
          <a
            v-for="{ url, name, external } in category.items"
            :key="url"
            :href="url"
            class="font-semibold block items-center text-gray-400 hover:text-white"
            :target="external ? '_blank' : '_self'"
          >
            {{ $tt(name) }}
            <Zondicon v-if="external" icon="link" class="inline w-4 fill-current ml-1" />
          </a>
        </div>
      </div>
    </div>
    <BaseFooter :socials="socials()" :links="[]">
      <template #copyright>&copy; Delftse Werkgroep Homoseksualiteit (D.W.H.) {{ year }}</template>
    </BaseFooter>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'
import dayjs from 'dayjs'
import InstagramIcon from '#/assets/images/social/instagram.svg?inline'
import FacebookIcon from '#/assets/images/social/facebook.svg?inline'
import GitHubIcon from '#/assets/images/social/github.svg?inline'

export default {
  components: { Zondicon },
  data() {
    return {
      year: dayjs().format('YYYY'),
      links: [],
    }
  },
  async fetch() {
    this.links = (await this.$content(`footer_links_dwh`).fetch()).categories.map((category) => ({
      ...category,
      items: category.items.map((item) => ({
        ...item,
        url: item.url.startsWith('http') ? item.url : this.localePath(item.url),
        external: item.url.startsWith('http'),
      })),
    }))
  },
  methods: {
    socials: () => [
      { url: 'https://instagram.com/dwh_delft', icon: InstagramIcon },
      { url: 'https://facebook.com/DWHDelft', icon: FacebookIcon },
      { url: 'https://github.com/dwh-outsite/dwhdelft.nl', icon: GitHubIcon },
    ],
  },
}
</script>
