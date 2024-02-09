<i18n lang="yaml">
en:
  boardTitle: Board
  contactTitle: Contact
nl:
  boardTitle: Bestuur
  contactTitle: Contact
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
      <template #copyright>&copy; DWH {{ year }}</template>
    </BaseFooter>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'
import dayjs from 'dayjs'
import InstagramIcon from '#/assets/images/social/instagram.svg?inline'

import YouTubeIcon from '#/assets/images/social/youtube.svg?inline'
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
      { url: 'https://www.youtube.com/@dwhdelft', icon: YouTubeIcon },
      { url: 'https://github.com/dwh-outsite/dwhdelft.nl', icon: GitHubIcon },
    ],
  },
}
</script>
