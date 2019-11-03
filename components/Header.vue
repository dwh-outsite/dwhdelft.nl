<template>
  <div id="header" :class="[small ? 'header-small' : '', 'relative overflow-hidden bg-gray-700']">
    <nav class="absolute z-50 w-full mt-8">
      <div class="container px-4 mx-auto flex justify-between items-center">
        <a :href="localePath('index')">
          <DWHLogo class="h-16 fill-current text-white" />
        </a>
        <div class="hidden md:block">
          <a :href="localePath('index')" class="text-white text-xl font-semibold no-underline mr-4">
            Home
          </a>
          <a :href="localePath('index') + '#join-outsite'" class="text-white text-xl font-semibold no-underline mr-4">
            Join DWH
          </a>
          <a :href="localePath('index') + '#eatingout'" class="text-white text-xl font-semibold no-underline mr-4">
            EatingOUT
          </a>
          <a href="#contact" class="text-white text-xl font-semibold no-underline mr-4">
            Contact
          </a>
        </div>
        <div class="flex items-center">
          <div
            class="
              rounded-full w-7 h-7 bg-white mr-1 md:mr-4 border-2 border-white
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
        </div>
      </div>
    </nav>
    <div class="hero"></div>
    <div class="relative flex items-center h-full">
      <div class="container px-4 mx-auto my-40">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import DWHLogo from '@/assets/images/dwh_logo.svg'
import NLFlag from '@/assets/images/flags/nl.svg'
import GBFlag from '@/assets/images/flags/gb.svg'

export default {
  props: ['small'],
  components: {
    DWHLogo,
    NLFlag,
    GBFlag
  },
  mounted() {
    window.addEventListener('load', () => {
      document.getElementById('headervid').play()
    })
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
}
</style>
