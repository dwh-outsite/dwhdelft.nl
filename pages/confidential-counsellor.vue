<template>
  <div>
    <header>
      <Header small="true">
        <h1 class="text-4xl text-white font-normal">
          {{ $t('confidential_counsellor.title') }}
        </h1>
      </Header>
    </header>

    <section class="container mx-auto pb-4 text-xl md:text-2xl leading-normal text-gray-800">
      <div class="md:w-2/3 mx-4 md:mx-auto">
        <p class="mt-8 mb-4 md:mt-0 md:mb-12" v-html="$t('confidential_counsellor.description')" />
      </div>
    </section>

    <section class="bg-gray-200 py-4 md:pt-12 md:pb-24">
      <div class="mx-auto container px-4 flex justify-center">
        <div class="bg-white rounded shadow-lg p-8 md:pr-48 text-lg">
          <h4 class="font-semibold text-xl">Andreas Zafiropoulos</h4>
          <span class="text-gray-700">{{ $t('confidential_counsellor.title') }} Outsite</span>
          <span class="mt-8 block flex">
            <div class="rounded-full w-8 h-8 p-2 bg-gray-700 text-white">
              <Zondicon icon="envelope" class="fill-current w-4" />
            </div>
            <div class="ml-3">
              vertrouwenspersoon@outsite.nl
            </div>
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'
import Header from '~/components/Header'

export default {
  components: {
    Header,
    Zondicon
  }
}
</script>
