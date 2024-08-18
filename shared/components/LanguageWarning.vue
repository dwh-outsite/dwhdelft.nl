<script setup>
import GBFlag from '#shared/assets/images/layout/flags/gb.svg'

const { locale } = useT()
</script>

<template>
  <section v-if="locale == 'en'" class="flex justify-center">
    <Announcement class="flex items-center space-x-2">
      <div
        class="rounded-full w-7 h-7 bg-white border-2 border-white flex items-center justify-center overflow-hidden relative"
      >
        <GBFlag class="block h-6 w-8 absolute" />
      </div>
      <div class="text-lg font-semibold text-white">This page is only available in Dutch.</div>
    </Announcement>
  </section>
</template>
