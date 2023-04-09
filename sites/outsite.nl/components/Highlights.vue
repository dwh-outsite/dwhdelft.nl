<i18n lang="yaml">
en:
  title_homepage: Our <strong>Highlights</strong>
  more: More highlights
  read_more: Read more about this activity
nl:
  title_homepage: Onze <strong>Hoogtepunten</strong>
  more: Meer hoogtepunten
  read_more: Lees meer over deze activiteit
</i18n>

<template>
  <div class="pt-16 mx-auto pb-0">
    <div v-show="excerpts" class="container mx-auto px-4 flex mb-8 items-center">
      <h1 class="text-brand-500 font-medium text-5xl leading-none flex-1" v-html="$t('title_homepage')" />
      <a :href="localePath('highlights')" class="hidden md:block">
        <button
          class="bg-brand-500 rounded-full px-6 py-3 text-white shadow-lg font-semibold flex items-center hover:bg-brand-400 text-lg mt-2 your-style"
        >
          {{ $t('more') }}
          <Zondicon icon="arrow-right" class="fill-current w-3 h-3 ml-2" />
        </button>
      </a>
    </div>

    <div class="container mx-auto px-4">
      <div
        v-for="(highlight, index) in highlights"
        :key="highlight.title_en"
        :class="[index % 2 == 0 ? '' : 'flex-row-reverse', excerpts ? 'mb-10' : 'mb-16']"
        class="bg-white md:flex rounded-lg overflow-hidden shadow-xl"
      >
        <div class="xl:h-64 md:w-1/3 overflow-hidden">
          <img
            :src="require(`#/assets/images/photos/highlights/${highlight.image}.jpg`)"
            class="object-cover w-full h-full"
          />
        </div>
        <div class="flex-1 p-8 flex flex-col justify-between">
          <div>
            <h2
              class="text-brand-400 uppercase tracking-wide font-bold text-2xl mb-4"
              v-text="highlight[`title_${$i18n.locale}`]"
            />
            <p
              class="text-xl text-gray-800 mb-4"
              v-text="excerpts ? highlight[`excerpt_${$i18n.locale}`] : highlight[`description_${$i18n.locale}`]"
            />
          </div>
          <div v-show="excerpts">
            <a :href="localePath('highlights')" class="text-brand-200 text-lg hover:text-brand-500">
              {{ $t('read_more') }} &raquo;
            </a>
          </div>
        </div>
      </div>

      <a v-show="excerpts" :href="localePath('highlights')" class="md:hidden">
        <button
          class="bg-brand-500 rounded-full px-6 py-3 text-white shadow-lg font-semibold flex items-center hover:bg-brand-400 text-lg mt-2 mx-auto"
        >
          {{ $t('more') }}
          <Zondicon icon="arrow-right" class="fill-current w-3 h-3 ml-2" />
        </button>
      </a>
    </div>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  components: { Zondicon },
  props: ['excerpts', 'rawHighlights'],
  data() {
    return {
      highlights: [],
    }
  },
  async fetch() {
    this.highlights = await this.$content(`highlights`).fetch()

    if (this.excerpts) {
      this.highlights = this.highlights.slice(0, 3)
    }
  },
}
</script>

<style scoped>
.overlay-gradient-right::after {
  background: linear-gradient(90deg, rgba(237, 242, 247, 0) 40%, theme('colors.gray.200') 90%);
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.overlay-gradient-left::after {
  background: linear-gradient(90deg, theme('colors.pink.100') 10%, rgba(237, 242, 247, 0) 60%);
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
