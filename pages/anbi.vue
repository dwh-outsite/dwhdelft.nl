<template>
  <div>
    <header>
      <Header small="true">
        <h1 class="text-4xl text-white font-normal">
          {{ $t('anbi.title') }}
        </h1>
      </Header>
    </header>

    <section class="container mx-auto  text-xl md:text-2xl leading-normal text-gray-800">
      <div class="md:w-2/3 mx-4 md:mx-auto">
        <div v-if="$i18n.locale == 'en'" class="shadow bg-purple-300 p-4 rounded mb-8 inline-flex items-center">
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
        <div class="mt-8 md:mt-0 mb-8" v-html="$t('anbi.main_text')" />
        <div class="mb-4" v-html="$t('anbi.annual_report')" />
        <FilesList folderId="1SEhPdLmDC-MxwcqiRnaMlAcvoPgnq16a" />
        <div class="mb-4" v-html="$t('anbi.annual_plan')" />
        <FilesList folderId="1Y_3eX7L6RKOnFMCi1m3YP4Dkwc9Ibw2Y" />
        <div class="mb-4" v-html="$t('anbi.financial')" />
        <FilesList folderId="1wOt93uBOFba4lHrf6In1YZJPzT4L9Doi" />
      </div>
    </section>
  </div>
</template>

<script>
import Header from '~/components/Header'
import FilesList from '~/components/FilesList'
import GBFlag from '@/assets/images/flags/gb.svg'

export default {
  components: {
    Header,
    FilesList,
    GBFlag
  }
}
</script>
