<template>
  <div>
    <header>
      <Header small="true">
        <h1 class="text-4xl text-white font-normal">
          {{ $t('andersblad.title') }}
        </h1>
      </Header>
    </header>

    <section class="container mx-auto mb-12 text-xl md:text-2xl leading-normal text-gray-800">
      <div class="md:w-2/3 mx-4 md:mx-auto">
        <p class="mt-8 md:mt-0 mb-8" v-html="$t('andersblad.main_text')" />
      </div>
    </section>

    <section class="bg-purple-400">
      <div class="container px-4 mx-auto pt-8 pb-12">
        <div class="text-center mb-6">
          <h1 class="text-white font-medium text-5xl" v-html="$t('andersblad.list_title')" />
        </div>
        <div class="shadow-xl p-6 rounded-lg bg-white md:w-2/3 mx-auto">
          <iframe
            src="https://drive.google.com/embeddedfolderview?id=1z_V_JSdyxX9jGH8CmC1ahMCtRk4tlzfM"
            class="w-full"
            height="800"
          />
        </div>
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
