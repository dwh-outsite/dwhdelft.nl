<script setup>
import GBFlag from '#shared/assets/images/layout/flags/gb.svg'

const { locale } = useT()
</script>

<template>
  <section v-if="locale == 'en'" class="flex justify-center">
    <Announcement class="flex items-center space-x-2">
      <div
        class="relative flex size-7 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white"
      >
        <GBFlag class="absolute block h-6 w-8" />
      </div>
      <div class="text-lg font-semibold text-white">This page is only available in Dutch.</div>
    </Announcement>
  </section>
</template>
