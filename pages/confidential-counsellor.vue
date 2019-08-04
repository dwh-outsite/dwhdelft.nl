<template>
  <div>
    <header>
      <Header small="true">
        <h1 class="text-4xl text-white font-normal">
          {{ $t('confidential_counsellor.title') }}
        </h1>
      </Header>
    </header>

    <section class="container mx-auto text-center pb-12 text-xl leading-normatext-grey-darkest">
      <p class="px-64" v-html="$t('confidential_counsellor.description')" />
    </section>

    <section class="bg-gray-200 pt-12 pb-24">
      <div class="mx-auto container flex justify-center">
        <div class="bg-white rounded shadow-lg p-8 pr-48 text-lg">
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
