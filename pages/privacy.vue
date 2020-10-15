<template>
  <div>
    <header>
      <Header small="true">
        <h1 class="text-4xl text-white font-normal">
          Privacyverklaring
        </h1>
      </Header>
    </header>

    <section class="container mx-auto text-xl leading-normal text-gray-800">
      <div class="md:w-2/3 py-8 mx-4 md:mx-auto content">
        <div v-if="$i18n.locale == 'en'" class="shadow bg-purple-500 p-4 rounded mb-8 inline-flex items-center">
          <div
            class="
              rounded-full w-7 h-7 bg-white mr-2 border-2 border-white
              flex items-center justify-center 
              overflow-hidden relative 
            "
          >
            <GBFlag class="block h-6 w-8 absolute" />
          </div>
          <div class="text-lg font-semibold text-white">This page is only available in Dutch.</div>
        </div>

        <div v-html="PrivacyStatementNL" />
      </div>
    </section>
  </div>
</template>

<script>
import GBFlag from '@/assets/images/flags/gb.svg'

import PrivacyStatementNL from '~/assets/content/pages/privacy.nl.md'

import Header from '~/components/Header'

export default {
  components: {
    Header,
    GBFlag
  },
  data() {
    return {
      PrivacyStatementNL
    }
  }
}
</script>

<style>
.content h1 {
  @apply font-bold mt-6 mb-1 text-2xl;
}

.content h2 {
  @apply font-bold mt-2 mb-1 text-xl;
}

.content p {
  @apply mb-4;
}

.content a {
  @apply text-purple-600 underline;
}

.content ul {
  @apply mb-3 -mt-3;
}

.content li {
  @apply list-disc mb-1 ml-6;
}
</style>
