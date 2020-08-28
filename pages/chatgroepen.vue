<template>
  <div>
    <header>
      <Header small="true">
        <h1 class="text-4xl text-white font-normal">
          {{ $t('chatgroepen.title') }}
        </h1>
      </Header>
    </header>

    <section class="container mx-auto mb-12 text-xl md:text-2xl leading-normal text-gray-800">
      <div class="md:w-2/3 mx-4 md:mx-auto">
        <p v-html="$t('chatgroepen.main_text')" class="mt-8 md:mt-0 mb-8" />
      </div>
    </section>

    <section class="bg-purple-400">
      <div class="container px-4 mx-auto pt-8 pb-12">
        <div class="text-center mb-6">
          <h1 v-html="$t('chatgroepen.general_title')" class="text-white font-medium text-5xl" />
        </div>
        <div class="flex flex-wrap justify-center"></div>

        <div class="text-center mb-6">
          <h1 v-html="$t('chatgroepen.volunteer_title')" class="text-white font-medium text-5xl" />
        </div>
        <div class="flex flex-wrap justify-center"></div>

        <div class="text-center mb-6">
          <h1 v-html="$t('chatgroepen.interests_title')" class="text-white font-medium text-5xl" />
        </div>
        <div class="flex flex-wrap justify-center"></div>
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
