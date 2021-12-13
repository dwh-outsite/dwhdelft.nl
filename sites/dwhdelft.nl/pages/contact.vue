<i18n lang="yaml">
en:
  title: Contact
nl:
  title: Contact
</i18n>

<template>
  <div>
    <SmallHeader>{{ $t('title') }}</SmallHeader>

    <PageIntroText>
      <p v-for="text in $t('main_text')" :key="text" class="mb-4" v-html="text" />
    </PageIntroText>

    <section class="relative info pt-48 md:py-32 text-gray-800">
      <div class="container px-4 mx-auto flex space-x-16">
        <div class="md:pt-16">
          <h2 class="font-semibold text-4xl mb-6">Openingstijden</h2>
          <ul class="space-y-4 leading-snug">
            <li v-for="event in openingHours" :key="event.name" class="flex items-top">
              <div class="w-32">
                <div class="uppercase font-bold tracking-wide" v-text="$tt(event.day)" />
                {{ event.name }}
              </div>
              <div>
                <div class="flex space-x-2">
                  <div>{{ event.start_time }} - {{ event.end_time }}</div>
                  <div v-if="event.restrictions">
                    <div v-for="restriction in event.restrictions" :key="restriction">
                      <div
                        class="inline bg-brand-200 px-2 rounded-lg text-xs uppercase tracking-wider inline-flex items-center"
                        v-text="$tt(restriction)"
                      />
                    </div>
                  </div>
                </div>
                <div v-if="event.link">
                  <a
                    :href="event.link.url"
                    class="text-sm text-gray-500 hover:underline"
                    v-html="'&raquo; ' + $tt(event.link.name)"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="flex-1 -mt-10">
          <Map class="rounded shadow-xl" />
        </div>
      </div>
    </section>

    <PageIntroText>
      <p v-for="text in $t('main_text')" :key="text" class="mb-4" v-html="text" />
    </PageIntroText>
  </div>
</template>

<script>
// import Zondicon from 'vue-zondicons'

export default {
  // components: { Zondicon },
  async asyncData({ $content }) {
    return {
      openingHours: (await $content('opening_hours').fetch()).events,
    }
  },
  methods: {
    $tt(languageOptions) {
      return languageOptions[this.$i18n.locale]
    },
  },
}
</script>

<style scoped>
.info::before {
  @apply bg-gray-200 absolute w-full;
  height: 100%;
  transform: skewY(-7deg);
  content: '';
  z-index: -1;
  top: 0px;
}
</style>
