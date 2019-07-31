<template>
  <div id="header" class="relative">
    <nav class="absolute z-50 w-full mt-8">
      <div class="container mx-auto flex justify-between items-center">
        <OutsiteLogo class="h-16" />
        <div>
          <nuxt-link to="/" class="text-white text-xl font-semibold no-underline mr-4">
            Home
          </nuxt-link>
          <nuxt-link to="/ander" class="text-white text-xl font-semibold no-underline mr-4">
            EatingOUT
          </nuxt-link>
          <nuxt-link to="/ander" class="text-white text-xl font-semibold no-underline mr-4">
            Commissies
          </nuxt-link>
          <nuxt-link to="/ander" class="text-white text-xl font-semibold no-underline mr-4">
            Kennismakingsgroep
          </nuxt-link>
        </div>
        <div>
          <a href="/dwh" class="text-white text-xl font-semibold no-underline mr-4">
            DWH
          </a>
        </div>
      </div>
    </nav>
    <div class="hero">
      <video autoplay muted loop class="w-full opacity-50">
        <source src="/outsite_web_bg.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="relative flex items-center h-full">
      <div class="container mx-auto">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import OutsiteLogo from '@/assets/images/outsite_logo.svg'

export default {
  components: {
    OutsiteLogo
  }
}
</script>

<style>
#header {
  height: calc(190px * 4);
}

.hero {
  @apply bg-gray-700 absolute w-full h-full overflow-hidden;
  transform: skewY(-13deg);
  transform-origin: 0;
}

.hero video {
  transform: skewY(13deg);
  transform-origin: 0;
}
</style>
