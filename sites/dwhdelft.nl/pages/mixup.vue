<i18n lang="yaml">
en:
  title: MIXUP
  titles:
    about: MIXUP, dans night on Saturdays!
    something: 'more titles!'
    highlights: 'Highlights'
    activities: Our activities
    contact: Contact
  content:
    intro:
      - 'MIXUP is really cool and something.'
    about:
      - 'Wow more text! Or maybe not?'
    something: 'another thing?'
    invitation: 'Come by during one of our bar nights:<br> <strong>Every Saturday starting at {0}</strong>'
    contact: For more info, email mixup@dwhdelft.nl or check our Instagram!
nl:
  title: MIXUP
  titles:
    about: MIXUP, dansavond op zaterdag!
    something: 'meer titels!'
    highlights: 'Highlights'
    activities: Onze activiteiten
    contact: Contact
  content:
    intro: 'MIXUP is sinds 2022 onze nieuwe dansavond op de zaterdag! Met regelmatig bands, themas, DJs en activiteiten, is dit dé zaterdag in Delft!'
    about:
      - 'Wow meer text! Of misschien niet?'
    something: 'nog wat?'
    invitation: 'Kom gerust langs op onze baravond: <br> <strong>Elke zaterdag vanaf {0}</strong>'
    contact: Mail even lekker naar mixup@dwhdelft.nl of ga maar gewoon naar Insta ofzo.
</i18n>

<template>
  <div>
    <SmallHeader bg="bg-[#0A0910]">
      {{ $t('title') }}
    </SmallHeader>

    <div class="bg-mixup w-full py-6 bg-[#0A0910]">
      <PageIntroText bg="bg-inherit" text="text-white">
        <p v-html="$t('content.intro')" />
      </PageIntroText>
      <!-- <section class="container mx-auto pb-12 text-xl md:text-2xl leading-normal text-white">
        <div class="mx-4 py-8 center:true xl:w-2/3 xl:mx-auto">
          <p v-html="$t('content.intro')" />
        </div>
      </section> -->
      <section class="container px-4 mx-auto space-y-6">
        <div class="md:flex md:space-x-12 space-y-6 md:space-y-0">
          <img src="../../../assets/images/photos/mixup/mixup_banner.png" class="w-full" />
        </div>
        <div class="md:flex md:space-x-12 space-y-6 md:space-y-0">
          <div class="flex-1">
            <div class="md:w-5/6 md:-mt-12 z-50 relative">
              <h2 class="text-white font-semibold text-4xl mb-2 pl-6" v-html="$t('titles.about')" />
              <div class="bg-[#E71D73] text-white shadow-xl rounded-3xl p-6 w-full text-lg">
                <p v-for="paragraph in $t('content.about')" :key="paragraph" v-html="paragraph" />
              </div>
            </div>
          </div>
        </div>
        <div class="md:flex md:space-x-12 space-y-6 md:space-y-0">
          <div class="flex-1">
            <div class="md:w-5/6 ml-auto">
              <h2 class="text-white font-semibold text-4xl mb-2 pl-6" v-html="$t('titles.meetings')" />
              <div class="bg-[#E71D73] text-white shadow-xl rounded-3xl p-6 w-full text-lg space-y-4">
                <p v-for="paragraph in $t('content.something')" :key="paragraph" v-html="paragraph" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="-mt-24">
        <h2 class="text-white font-semibold text-4xl mb-2 pl-6" v-html="$t('titles.activities')" />
        <div class="container mx-auto px-4 pt-12 pb-16">
          <InstagramWidget :widget-id="instagramChannels[0].widgetId" />
        </div>
        <!-- <SkewedSection content-class="bg-brand-800" triangle-class="border-brand-800" :bottom="false">
          <div class="container mx-auto px-4 pt-12 pb-16">
            <InstagramChannels class="text-white" :brands="instagramChannels" />
          </div>
        </SkewedSection> -->
      </section>
      <section>
        <div class="md:w-5/6 md:-mt-12 z-50 relative">
          <h2 class="text-white font-semibold text-4xl mb-2 pl-6" v-html="$t('titles.contact')" />
          <div class="bg-white shadow-xl rounded-3xl p-6 w-full text-lg space-y-4">
            <p v-html="$t('content.contact')" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, app }) {
    return {
      barOpeningHours: (await $content(`opening_hours`).fetch()).events.filter(
        (event) => event.day.en === 'Saturday'
      )[0],
    }
  },
  data() {
    return {
      instagramChannels: [
        {
          name: 'MIXUP',
          subtitle: { nl: 'Zaterdagen', en: 'Saturdays' },
          widgetId: '219aedf13a4355fe95c6e27ed1f7386c',
          instagram: 'mixupdelft',
        },
      ],
    }
  },
}
</script>
