<template>
  <div>
    <div class="flex items-center mb-4">
      <div :class="`rounded-full w-8 h-8 p-2 ${iconClasses}`">
        <Zondicon icon="envelope" class="fill-current w-4" />
      </div>
      <div class="ml-3">{{ email }}</div>
    </div>
    <div class="flex items-center mb-4">
      <div :class="`rounded-full w-8 h-8 p-2 ${iconClasses}`">
        <Zondicon icon="map" class="fill-current w-4" />
      </div>
      <div class="ml-3 leading-tight">
        Lange Geer 22<br />
        2611PV Delft
      </div>
    </div>
    <div class="flex items-center mb-4">
      <div :class="`rounded-full w-8 h-8 p-2 ${iconClasses}`">
        <Zondicon icon="box" class="fill-current w-4" />
      </div>
      <div class="ml-3 leading-tight">
        KvK: 40398035<br />
        RSIN: 807864250
      </div>
    </div>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  components: {
    Zondicon,
  },
  props: ['email', 'dark'],
  computed: {
    iconClasses() {
      return this.dark ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'
    },
  },
}
</script>
