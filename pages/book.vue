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

    <section class="container mx-auto relative pt-12 md:pt-6 px-4">
      <div class="pb-16 m-auto">
        <h2
          v-html="$t('bookings.description_title')"
          class="text-purple-400 leading-none text-5xl mb-6 md:mb-12 md:text-6xl"
        />
        <p v-html="$t('bookings.description')" class="text-xl md:text-2xl leading-normal text-gray-800 md:mb-12" />
      </div>
    </section>

    <section class="information relative pb-12 md:pb-20">
      <div class="mx-auto container px-4 md:flex flex-row-reverse">
        <div class="flex-1 pt-16 md:pl-16">
          <h2
            v-html="$t('bookings.form_information.title')"
            class="text-white leading-none text-5xl mb-6 md:text-6xl"
          />
          <p v-text="$t('bookings.form_information.description')" class="text-white text-xl" />
          <div class="my-4 text-xl">
            <div
              v-for="rule in $t('bookings.form_information.rules')"
              :key="rule"
              v-html="rule"
              class="bg-purple-400 text-white rounded p-4 mb-2"
            />
          </div>
          <div v-text="$t('bookings.form_information.rules_disclaimer')" class="text-sm text-white" />
        </div>
        <div class="md:w-1/2 pt-8 md:pt-40"></div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
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
