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
                  <p class="text-lg">{{ edition.publishDate }}</p>
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
import axios from 'axios'
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
    axios
      .get(
        `https://www.googleapis.com/drive/v3/files` +
          `?orderBy=name desc` +
          `&q='1z_V_JSdyxX9jGH8CmC1ahMCtRk4tlzfM'%20in%20parents` +
          `&fields=files(id, name, webContentLink, webViewLink, thumbnailLink)` +
          `&key=AIzaSyDwi_l2R3qDWkh2HN8_AmIpy7mk8Ij7nk8`
      )
      .then(response => {
        this.editions = response.data.files.map(file => {
          return {
            ...file,
            filename: file.name,
            name: file.name.substr(0, file.name.indexOf(',')),
            title: file.name.slice(file.name.indexOf(', ') + 2, file.name.lastIndexOf(',')),
            publishDate: file.name.slice(file.name.lastIndexOf(',') + 1, -4)
          }
        })
      })
  }
}
</script>
