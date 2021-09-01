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
    <Header small="true" bg="bg-brand-450">
      <div class="bg-white rounded-lg px-2 py-1 text-xs uppercase tracking-wider inline" v-text="$t('title_label')" />
      <h1 class="text-4xl text-white font-normal mt-2" v-text="$t('title')" />
    </Header>

    <section class="bg-brand-450 relative pb-16">
      <div class="mx-auto container px-4 lg:flex">
        <div class="flex-1 pt-6 lg:pt-0 lg:pr-16">
          <div v-show="$route.query.canceled" class="bg-brand-100 rounded p-4 text-lg flex items-center mb-12">
            <div class="rounded-full w-16 h-16 p-3 bg-brand-450 text-white">
              <Zondicon icon="information-outline" class="fill-current w-10" />
            </div>
            <div class="ml-4">
              <h4 class="text-xl leading-tight" v-text="$t('canceled')" />
            </div>
          </div>
          <nuxt-content class="text-lg leading-normal text-white content intro-content" :document="intro" />
          <nuxt-content class="booking-rules-content text-white text-xl" :document="bookingRules" />
        </div>
        <div class="lg:w-1/2">
          <BookingForm class="lg:-mt-72" />
        </div>
      </div>
    </section>

    <section class="container mx-auto relative px-4 py-12">
      <CoronaRules class="flex flex-wrap -mx-2" />
    </section>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  components: { Zondicon },
  props: ['intro', 'bookingRules'],
}
</script>

<style>
.intro-content h1 {
  @apply leading-none text-5xl mb-6 md:text-6xl font-normal;
}

.booking-rules-content h1 {
  @apply leading-none text-xl mb-6;
}

.booking-rules-content ul {
  @apply my-4 text-lg;
}

.booking-rules-content ul li {
  @apply bg-white bg-opacity-20 text-white rounded px-4 py-2 mb-1;
}

.booking-rules-content blockquote {
  @apply text-sm;
}
</style>
