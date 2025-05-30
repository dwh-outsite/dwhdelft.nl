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
  <ElementsContainer class="justify-center space-y-8 py-8 text-white md:flex md:space-x-8 md:space-y-0 xl:space-x-16">
    <div v-for="category in links" :key="category.name">
      <h3 class="mb-4 text-xl font-bold uppercase tracking-wider text-gray-300" v-text="tt(category.name)" />
      <div class="space-y-2">
        <nuxt-link
          v-for="{ url, name, external } in category.items"
          :key="url"
          :to="url"
          class="block items-center font-semibold text-gray-400 hover:text-white transition-colors duration-200"
          :target="external ? '_blank' : '_self'"
        >
          {{ tt(name) }}
          <ExternalLinkIcon v-if="external" class="ml-1 inline w-4" />
        </nuxt-link>
      </div>
    </div>
  </ElementsContainer>

  <LayoutFooterCopyright :socials="socials" :links="[]">
    <template #copyright> &copy; DWH {{ year }} </template>
  </LayoutFooterCopyright>
</template>
