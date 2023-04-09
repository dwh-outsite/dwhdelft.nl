<i18n lang="yaml">
en:
  title: Contact
  titles:
    opening_hours: Opening Hours
    board: Board
  my: Are you a DWH member? Update your personal details and check your open payments at
nl:
  title: Contact
  titles:
    opening_hours: Openingstijden
    board: Bestuur
  my: Lid van DWH? Pas je gegevens aan en check je betalingen op
</i18n>

<template>
  <div>
    <SmallHeader>{{ $t('title') }}</SmallHeader>

    <section class="container mx-auto px-4 py-12 md:flex items-start">
      <div class="flex-1 mb-6 md:mb-0">
        <ContactForm />
      </div>
      <div class="md:w-1/3 md:border-l md:pl-6 md:ml-6">
        <ContactOptions email="bestuur@dwhdelft.nl" :dark="true" />
        <a href="https://my.dwhdelft.nl">
          <Announcement class="xl:w-2/3">
            {{ $t('my') }}
            <span class="text-xl font-bold block">my.dwhdelft.nl</span>
          </Announcement>
        </a>
      </div>
    </section>

    <SkewedSection content-class="bg-purple-100 py-12" triangle-class="border-purple-100">
      <div class="container px-4 mx-auto md:flex md:space-x-16 relative z-10">
        <div class="md:pt-16 mb-12 md:mb-0">
          <h2 class="font-semibold text-4xl mb-6" v-text="$t('titles.opening_hours')" />
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
                        class="bg-brand-200 px-2 rounded-lg text-xs uppercase tracking-wider inline-flex items-center"
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
        <div class="flex-1 md:-mt-10 pb-16 md:pb-0">
          <Map class="rounded shadow-xl" />
        </div>
      </div>
    </SkewedSection>

    <SkewedSection content-class="bg-purple-800" triangle-class="border-purple-800" :connect="true" :bottom="false">
      <div class="container mx-auto px-4 pt-12 pb-4 md:pb-12">
        <h1 class="text-white font-medium text-5xl mb-12" v-html="$t('titles.board')" />
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <div
            v-for="member in boardMembers"
            :key="member.name"
            class="md:flex rounded-lg shadow bg-white overflow-hidden p-6 md:p-0 md:h-40"
          >
            <div
              class="bg-purple-450 w-32 md:w-36 h-32 md:h-full rounded-full md:rounded-none mb-4 md:mb-0 overflow-hidden"
            >
              <img :src="requireImage(member.name)" class="object-cover h-full w-full" />
            </div>
            <div class="md:p-6">
              <div class="mb-4 md:mb-8">
                <div class="font-bold text-xl text-purple-450" v-text="member.name" />
                <span v-text="$tt(member.description)" />
              </div>
              <div class="bg-purple-100 rounded-full inline-flex items-center pl-3 pr-4 py-1 text-purple-450 space-x-2">
                <Zondicon icon="envelope" class="fill-current w-4" />
                <a :href="`mailto:${member.email}`" class="text-purple-450 hover:underline" v-text="member.email" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SkewedSection>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  components: { Zondicon },
  async asyncData({ $content }) {
    return {
      openingHours: (await $content('opening_hours').fetch()).events,
      boardMembers: (await $content('board_members_dwh').fetch()).board,
    }
  },
  methods: {
    requireImage(name) {
      try {
        return require(`#/assets/images/photos/dwh_board/${name.toLowerCase().replace(' ', '_')}.jpg`)
      } catch (e) {
        return undefined
      }
    },
  },
}
</script>
