<template>
  <section class="flex justify-center">
    <div v-if="$i18n.locale == 'en'" class="shadow bg-brand-500 p-4 rounded inline-flex items-center">
      <div
        class="rounded-full w-7 h-7 bg-white mr-2 border-2 border-white flex items-center justify-center overflow-hidden relative"
      >
        <NLFlag class="block h-6 w-8 absolute" />
      </div>
      <div class="text-lg font-semibold text-white">This page is only available in Dutch.</div>
    </div>

    <div v-else-if="$i18n.locale == 'nl'" class="shadow bg-brand-500 p-4 rounded inline-flex items-center">
      <div
        class="rounded-full w-7 h-7 bg-white mr-2 border-2 border-white flex items-center justify-center overflow-hidden relative"
      >
        <GBFlag class="block h-6 w-8 absolute" />
      </div>
      <div class="text-lg font-semibold text-white">Deze pagina is alleen in het Engels beschikbaar.</div>
    </div>
  </section>
</template>

<script>
import GBFlag from '#/assets/images/flags/gb.svg?inline'
import NLFlag from '#/assets/images/flags/nl.svg?inline'

export default {
  components: { GBFlag, NLFlag },
}
</script>
