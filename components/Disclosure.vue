<template>
  <div class="rounded overflow-hidden">
    <div
      class="font-bold py-2 px-3 rounded hover:bg-white hover:bg-opacity-25 cursor-pointer flex justify-between"
      @click="open = !open"
    >
      {{ title }}
      <Zondicon v-if="!open" icon="cheveron-down" class="w-6 h-6 fill-current" />
      <Zondicon v-if="open" icon="cheveron-up" class="w-6 h-6 fill-current" />
    </div>
    <div v-if="open" class="py-2 px-3 bg-white m-1 text-gray-800">
      <slot />
    </div>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  components: { Zondicon },
  props: ['title'],
  data() {
    return {
      open: false,
    }
  },
}
</script>
