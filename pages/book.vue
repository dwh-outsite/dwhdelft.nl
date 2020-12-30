<i18n lang="yaml">
en:
  title: Reservations
  title_label: Events
  canceled: Your reservation is cancelled. If you want, you can make a new reservation down below.
nl:
  title: Reserveren
  title_label: Events
  canceled: Je reservering is geannuleerd. Indien gewenst kun je hieronder een nieuwe reservering plaatsen.
</i18n>

<template>
  <div>
    <Header small="true">
      <div class="bg-white rounded-lg px-2 py-1 text-xs uppercase tracking-wider inline" v-text="$t('title_label')" />
      <h1 class="text-4xl text-white font-normal mt-2" v-text="$t('title')" />
    </Header>

    <section class="container mx-auto relative pt-12 md:pt-6 px-4">
      <div class="pb-16 m-auto">
        <div v-show="$route.query.canceled" class="bg-purple-100 rounded p-4 text-lg flex items-center mb-12">
          <div class="rounded-full w-16 h-16 p-3 bg-purple-500 text-white">
            <Zondicon icon="information-outline" class="fill-current w-10" />
          </div>
          <div class="ml-4">
            <h4 class="text-xl leading-tight" v-text="$t('canceled')" />
          </div>
        </div>

        <nuxt-content
          class="text-xl md:text-2xl leading-normal text-gray-800 md:mb-12 content intro-content"
          :document="intro"
        />
      </div>
    </section>

    <section class="booking-form-section relative pb-16 lg:pb-24">
      <div class="mx-auto container px-4 lg:flex flex-row-reverse">
        <div class="flex-1 pt-16 lg:pl-16">
          <nuxt-content class="booking-rules-content text-white text-xl" :document="bookingRules" />
        </div>
        <div class="lg:w-1/2 pt-8 lg:pt-40">
          <BookingForm />
        </div>
      </div>
    </section>

    <section class="container mx-auto relative px-4 mt-12 mb-2 md:mt-32 md:pb-12">
      <CoronaRules class="flex flex-wrap -mx-2" />
    </section>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  components: { Zondicon },
  async asyncData({ $content, params, app }) {
    return {
      intro: await $content(`bookings/intro.${app.i18n.locale}`).fetch(),
      bookingRules: await $content(`bookings/booking_rules.${app.i18n.locale}`).fetch(),
    }
  },
}
</script>

<style>
.booking-form-section::before {
  @apply bg-purple-500 absolute w-full;
  height: 100%;
  transform: skewY(-7deg);
  content: '';
  z-index: -1;
  top: 0px;
}

.intro-content h1 {
  @apply text-purple-400 leading-none text-5xl mb-6 md:mb-12 md:text-6xl font-normal;
}

.booking-rules-content h1 {
  @apply leading-none text-5xl mb-6 md:text-6xl;
}

.booking-rules-content ul {
  @apply my-4 text-xl;
}

.booking-rules-content ul li {
  @apply bg-purple-400 text-white rounded p-4 mb-2;
}

.booking-rules-content blockquote {
  @apply text-sm;
}
</style>
