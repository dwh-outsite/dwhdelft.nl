<template>
  <div
    class="flex-1 rounded shadow-xl bg-brand-450 text-lg md:text-xl text-white p-4 relative w-full z-20 md:w-auto md:inline-flex items-center"
  >
    <div class="rounded-full w-16 h-16 p-4 bg-white text-brand-450 shadow md:shadow-none absolute -top-8 md:static">
      <Zondicon icon="explore" class="fill-current" />
    </div>
    <div class="pt-6 md:pt-0 md:pl-4" v-html="content" />
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  components: { Zondicon },
  props: ['content'],
}
</script>
