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
        <div v-html="$t('anbi.main_text')" class="mt-8 md:mt-0 mb-8" />
        <div v-html="$t('anbi.annual_report')" class="mb-4" />
        <FilesList folder-id="1SEhPdLmDC-MxwcqiRnaMlAcvoPgnq16a" />
        <div v-html="$t('anbi.annual_plan')" class="mb-4" />
        <FilesList folder-id="1Y_3eX7L6RKOnFMCi1m3YP4Dkwc9Ibw2Y" />
        <div v-html="$t('anbi.financial')" class="mb-4" />
        <FilesList folder-id="1wOt93uBOFba4lHrf6In1YZJPzT4L9Doi" />
      </div>
    </section>
  </div>
</template>

<script>
import Header from '~/components/Header'
import FilesList from '~/components/FilesList'

export default {
  components: {
    Header,
    FilesList
  }
}
</script>
