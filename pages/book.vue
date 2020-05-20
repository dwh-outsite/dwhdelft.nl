<template>
  <div>
    <header>
      <Header small="true">
        <div
          v-text="$t('bookings.title_label')"
          class="bg-white rounded-lg px-2 py-1 text-xs uppercase tracking-wider inline"
        />
        <h1 v-text="$t('bookings.title')" class="text-4xl text-white font-normal mt-2" />
      </Header>
    </header>

    <section class="container mx-auto relative px-4">
      <div class="pb-16 md:w-2/3 m-auto">
        <div v-if="$route.query.canceled" class="bg-purple-100 rounded p-4 text-lg flex items-center mb-12">
          <div class="rounded-full w-16 h-16 p-3 bg-purple-500 text-white">
            <Zondicon icon="information-outline" class="fill-current w-10" />
          </div>
          <div class="ml-4">
            <h4 v-text="$t('bookings.canceled')" class="text-xl leading-tight" />
          </div>
        </div>
        <p v-text="$t('bookings.description')" class="text-xl md:text-center leading-normal text-gray-800 mb-12" />
      </div>
    </section>

    <section class="information relative pb-12 md:pb-20">
      <div class="mx-auto container px-4 md:flex">
        <div class="md:w-1/2 pt-8 md:pt-40">
          <BookingForm />
        </div>
        <div class="flex-1 pt-16 md:pl-16">
          <h2
            v-text="$t('bookings.form_information.title')"
            class="text-white leading-none text-center md:text-left text-5xl mb-6 md:text-6xl"
          />
          <p v-text="$t('bookings.form_information.description')" class="text-white text-xl" />
          <div class="my-4 text-xl">
            <div
              v-for="rule in $t('bookings.form_information.rules')"
              :key="rule"
              v-text="rule"
              class="bg-purple-400 text-white rounded p-4 mb-2"
            />
          </div>
          <div v-text="$t('bookings.form_information.rules_disclaimer')" class="text-sm text-white" />
        </div>
      </div>
    </section>

    <section class="container mx-auto relative px-4 my-12 md:mt-32">
      <div class="pb-16 md:w-2/3 m-auto">
        <p v-text="$t('bookings.information')" class="text-xl md:text-center leading-normal text-gray-800 mb-12" />
      </div>
    </section>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'
import Header from '~/components/Header'
import BookingForm from '~/components/BookingForm'

export default {
  components: {
    Zondicon,
    Header,
    BookingForm
  },
  data() {
    return {
      dwhBoard: ['Robert Baart', 'Nick van Loo', 'Quinten Star', 'Casper Boone', 'Jelle Vos', 'Jeroen Wegdam']
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Parisienne&display=swap');

.menu-title {
  font-family: 'Parisienne', cursive;
}

.information::before {
  @apply bg-purple-500 absolute w-full;
  height: 100%;
  transform: skewY(-7deg);
  content: '';
  z-index: -1;
  top: 0px;
}
</style>
