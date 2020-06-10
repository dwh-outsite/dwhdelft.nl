<template>
  <div id="header" :class="[small ? 'header-small' : '', 'relative overflow-hidden bg-gray-700']">
    <nav class="absolute z-50 w-full mt-8">
      <div class="container px-4 mx-auto flex justify-between items-center">
        <a :href="localePath('index')">
          <DWHLogo class="h-16 fill-current text-white" />
        </a>
      </div>
    </nav>
    <div class="image-container">
      <img src="~/assets/images/cover.jpg" class="opacity-50" />
    </div>
    <div class="hero"></div>
    <div class="relative flex items-center h-full">
      <div class="container px-4 mx-auto mt-40 mb-48">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'
import DWHLogo from '@/assets/images/dwh_logo.svg'
import NLFlag from '@/assets/images/flags/nl.svg'
import GBFlag from '@/assets/images/flags/gb.svg'

export default {
  components: {
    DWHLogo,
    NLFlag,
    GBFlag,
    Zondicon
  },
  props: ['small'],
  data() {
    return {
      showMenu: false,
      menu: this.$t('menu').map(item => {
        return { title: item.title, url: item.url(this.localePath) }
      })
    }
  }
}
</script>

<style>
@screen md {
  #header {
    height: calc(190px * 4);
  }

  #header.header-small {
    height: calc(120px * 4);
  }
}

@media (min-width: 1900px) {
  #header {
    height: calc(240px * 4);
  }

  #header.header-small {
    height: calc(120px * 4);
  }
}

.hero {
  @apply bg-white absolute w-full;
  transform: skewY(-7deg);
  transform-origin: 0;
  height: 100rem;
  bottom: -100rem;
  z-index: 0;
}

.image-container {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
