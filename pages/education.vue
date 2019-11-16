<template>
  <div>
    <header>
      <Header small="true">
        <h1 class="text-4xl text-white font-normal">
          {{ $t('education.title') }}
        </h1>
      </Header>
    </header>

    <section class="container mx-auto  text-xl md:text-2xl leading-normal text-gray-800">
      <div class="md:w-2/3 mx-4 md:mx-auto">
        <p class="mt-8 md:mt-0 mb-8" v-html="$t('education.main_text')" />
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
