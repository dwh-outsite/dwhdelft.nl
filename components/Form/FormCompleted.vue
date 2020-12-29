<template>
  <div class="bg-white rounded-lg shadow-lg p-6 md:pr-48 text-lg flex items-center">
    <div class="rounded-full w-16 h-16 p-3 bg-purple-500 text-white">
      <Zondicon icon="checkmark-outline" class="fill-current w-10" />
    </div>
    <div class="ml-4">
      <h4 class="font-semibold text-xl" v-text="title" />
      <span class="text-gray-700" v-text="subtitle" />
    </div>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  components: { Zondicon },
  props: ['title', 'subtitle'],
}
</script>
