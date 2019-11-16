<template>
  <div id="header" :class="[small ? 'header-small' : '', 'relative overflow-hidden bg-gray-700']">
    <nav class="absolute z-50 w-full mt-8">
      <div class="container px-4 mx-auto flex justify-between items-center">
        <a :href="localePath('index')">
          <DWHLogo class="h-16 fill-current text-white" />
        </a>
        <div v-if="showMenu" class="md:hidden absolute top-16 bg-white w-full -ml-4 p-4 text-xl font-semibold">
          <a v-for="item in menu" :key="item.url" :href="item.url" class="block md:inline no-underline mr-4 my-2">
            {{ item.title }}
          </a>
        </div>
        <div class="hidden md:block text-xl font-semibold text-white">
          <a v-for="item in menu" :key="item.url" :href="item.url" class="block md:inline no-underline mr-4 my-2">
            {{ item.title }}
          </a>
        </div>
        <div class="flex">
          <div
            class="
              rounded-full w-7 h-7 bg-white mr-3 md:mr-4 border-2 border-white
              flex items-center justify-center 
              overflow-hidden relative 
            "
          >
            <a v-if="$i18n.locale == 'nl'" :href="switchLocalePath('en')" class="block h-6 w-8 absolute">
              <GBFlag />
            </a>
            <a v-if="$i18n.locale == 'en'" :href="switchLocalePath('nl')" class="block h-6 w-8 absolute">
              <NLFlag />
            </a>
          </div>
          <div
            class="
              rounded-full w-7 h-7 p-1 bg-white mr-1 md:mr-4 border-2 border-white
              flex items-center justify-center md:hidden
              overflow-hidden relative
            "
            @click="showMenu = !showMenu"
          >
            <Zondicon v-if="!showMenu" icon="menu" class="fill-current w-full" />
            <Zondicon v-if="showMenu" icon="close" class="fill-current w-full" />
          </div>
        </div>
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
  props: ['small'],
  components: {
    DWHLogo,
    NLFlag,
    GBFlag,
    Zondicon
  },
  data() {
    return {
      showMenu: false,
      menu: [
        { title: 'Home', url: this.localePath('index') },
        { title: 'Join DWH', url: this.localePath('index') + '#join-dwh' },
        { title: 'EatingOUT', url: this.localePath('index') + '#eatingout' },
        { title: 'Voorlichting', url: this.localePath('education') },
        { title: 'Andersblad', url: this.localePath('andersblad') },
        { title: 'Contact', url: '#contact' }
      ]
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
