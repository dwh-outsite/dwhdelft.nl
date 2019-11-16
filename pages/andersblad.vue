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

    <section class="bg-purple-400" v-if="editions.length > 0">
      <div class="container px-4 mx-auto pt-8 pb-12">
        <div class="text-center mb-6">
          <h1 class="text-white font-medium text-5xl" v-html="$t('andersblad.list_title')" />
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
import GoogleDrive from '~/src/GoogleDrive'
import Header from '~/components/Header'

export default {
  components: {
    Header
  },
  data() {
    return {
      editions: []
    }
  },
  mounted() {
    GoogleDrive.listFiles('1z_V_JSdyxX9jGH8CmC1ahMCtRk4tlzfM').then(files => {
      this.editions = files.map(file => {
        return {
          ...file,
          name: file.name.substr(0, file.name.indexOf(',')),
          title: file.name.slice(file.name.indexOf(', ') + 2, file.name.lastIndexOf(',')),
          publishDate: file.name.slice(file.name.lastIndexOf(', ') + 2)
        }
      })
    })
  }
}
</script>
