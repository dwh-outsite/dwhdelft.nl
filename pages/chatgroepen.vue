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
        <div class="flex flex-wrap justify-center">
          <div v-for="edition in editions" :key="edition.id" class="md:w-1/3 p-4">
            <a :href="edition.webViewLink" target="_blank">
              <div class="shadow-xl p-6 rounded-lg bg-white hover:bg-purple-100 hover:text-purple-500 flex">
                <div>
                  <img :src="edition.thumbnailLink" class="h-48" />
                </div>
                <div class="flex-1 ml-4 flex flex-col justify-center">
                  <h3 class="text-2xl font-semibold">{{ edition.name }}</h3>
                  <h4 class="text-xl">{{ edition.title }}</h4>
                  <p class="text-lg text-gray-600">{{ edition.publishDate }}</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="text-center mb-6">
          <h1 v-html="$t('chatgroepen.volunteer_title')" class="text-white font-medium text-5xl" />
        </div>
        <div class="flex flex-wrap justify-center">
          <div v-for="edition in editions" :key="edition.id" class="md:w-1/3 p-4">
            <a :href="edition.webViewLink" target="_blank">
              <div class="shadow-xl p-6 rounded-lg bg-white hover:bg-purple-100 hover:text-purple-500 flex">
                <div>
                  <img :src="edition.thumbnailLink" class="h-48" />
                </div>
                <div class="flex-1 ml-4 flex flex-col justify-center">
                  <h3 class="text-2xl font-semibold">{{ edition.name }}</h3>
                  <h4 class="text-xl">{{ edition.title }}</h4>
                  <p class="text-lg text-gray-600">{{ edition.publishDate }}</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="text-center mb-6">
          <h1 v-html="$t('chatgroepen.interests_title')" class="text-white font-medium text-5xl" />
        </div>
        <div class="flex flex-wrap justify-center">
          <div v-for="edition in editions" :key="edition.id" class="md:w-1/3 p-4">
            <a :href="edition.webViewLink" target="_blank">
              <div class="shadow-xl p-6 rounded-lg bg-white hover:bg-purple-100 hover:text-purple-500 flex">
                <div>
                  <img :src="edition.thumbnailLink" class="h-48" />
                </div>
                <div class="flex-1 ml-4 flex flex-col justify-center">
                  <h3 class="text-2xl font-semibold">{{ edition.name }}</h3>
                  <h4 class="text-xl">{{ edition.title }}</h4>
                  <p class="text-lg text-gray-600">{{ edition.publishDate }}</p>
                </div>
              </div>
            </a>
          </div>
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
