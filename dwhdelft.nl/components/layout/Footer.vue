<script setup>
import ExternalLinkIcon from '#shared/assets/images/layout/heroicon_external_link.svg'
import InstagramIcon from '#shared/assets/images/social/instagram.svg'
import YouTubeIcon from '#shared/assets/images/social/youtube.svg'
import GitHubIcon from '#shared/assets/images/social/github.svg'

const { tt } = useT()
const localePath = useLocalePath()

const socials = [
  { url: 'https://instagram.com/dwh_delft', icon: InstagramIcon },
  { url: 'https://www.youtube.com/@dwhdelft', icon: YouTubeIcon },
  { url: 'https://github.com/dwh-outsite/dwhdelft.nl', icon: GitHubIcon },
]

const year = new Date().getFullYear()

const linkCategories = (await useAsyncData(() => queryContent('footer_links').findOne())).data.value.categories

const links = linkCategories.map((category) => ({
  ...category,
  items: category.items.map((item) => ({
    ...item,
    url: item.url.startsWith('http') ? item.url : localePath(item.url),
    external: item.url.startsWith('http'),
  })),
}))
</script>

<template>
  <ElementsContainer class="text-white py-8 md:flex space-y-8 md:space-y-0 md:space-x-8 xl:space-x-16 justify-center">
    <div v-for="category in links" :key="category.name">
      <h3 class="text-xl text-gray-300 font-bold mb-4 uppercase tracking-wider" v-text="tt(category.name)" />
      <div class="space-y-2">
        <nuxt-link
          v-for="{ url, name, external } in category.items"
          :key="url"
          :to="url"
          class="font-semibold block items-center text-gray-400 hover:text-white"
          :target="external ? '_blank' : '_self'"
        >
          {{ tt(name) }}
          <ExternalLinkIcon v-if="external" class="inline w-4 ml-1" />
        </nuxt-link>
      </div>
    </div>
  </ElementsContainer>

  <LayoutFooterCopyright :socials="socials" :links="[]">
    <template #copyright> &copy; DWH {{ year }} </template>
  </LayoutFooterCopyright>
</template>
