<template>
  <div>
    <header>
      <Header small="true">
        <h1 class="text-4xl text-white font-normal">
          {{ $t('anbi.title') }}
        </h1>
      </Header>
    </header>

    <section class="container mx-auto pb-12 text-xl md:text-2xl leading-normal text-gray-800">
      <div class="md:w-2/3 mx-4 md:mx-auto">
        <p class="mt-8 md:mt-0 mb-8" v-html="$t('anbi.main_text')" />
        <p class="mb-4" v-html="$t('anbi.annual_report')" />
        <div class="shadow-xl p-4 rounded mb-12">
          <iframe
            src="https://drive.google.com/embeddedfolderview?id=1SEhPdLmDC-MxwcqiRnaMlAcvoPgnq16a"
            class="w-full"
            height="450"
          />
        </div>
        <p class="mb-4" v-html="$t('anbi.annual_plan')" />
        <div class="shadow-xl p-4 rounded mb-12">
          <iframe
            src="https://drive.google.com/embeddedfolderview?id=1Y_3eX7L6RKOnFMCi1m3YP4Dkwc9Ibw2Y"
            class="w-full"
            height="450"
          />
        </div>
        <p class="mb-4" v-html="$t('anbi.financial')" />
        <div class="shadow-xl p-4 rounded mb-12">
          <iframe
            src="https://drive.google.com/embeddedfolderview?id=1wOt93uBOFba4lHrf6In1YZJPzT4L9Doi"
            class="w-full"
            height="450"
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
