<template>
  <a href="https://kunstwerk.dwhdelft.nl/" class="block bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="shadow-lg pb-2">
      <ArtpieceBannerNL v-show="$i18n.locale == 'nl'" />
      <ArtpieceBannerEN v-show="$i18n.locale == 'en'" />
    </div>
    <div class="p-4 bg-purple-100 flex justify-center">
      <button class="button-pink">
        {{ $i18n.locale == 'nl' ? 'Stuur jouw idee in' : 'Submit your idea' }}
        &raquo;
      </button>
    </div>
  </a>
</template>

<script>
import ArtpieceBannerNL from '@/assets/images/artpiece_banner_nl.svg'
import ArtpieceBannerEN from '@/assets/images/artpiece_banner_en.svg'

export default {
  components: {
    ArtpieceBannerNL,
    ArtpieceBannerEN
  }
}
</script>
