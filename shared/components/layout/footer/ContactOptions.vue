<script setup>
import { IconMap, IconEnvelope, IconBox } from '@iconify-prerendered/vue-zondicons'

const props = defineProps({
  email: { type: String, required: true },
  dark: { type: Boolean, default: false },
})

const iconClass = {
  'bg-gray-700 text-white': props.dark,
  'bg-white text-gray-700': !props.dark,
}
</script>

<template>
  <div>
    <div class="flex items-center mb-4">
      <div :class="['rounded-full w-8 h-8 p-2', iconClass]">
        <IconEnvelope class="w-4" />
      </div>
      <div class="ml-3">{{ email }}</div>
    </div>
    <div class="flex items-center mb-4">
      <div :class="['rounded-full w-8 h-8 p-2', iconClass]">
        <IconMap class="w-4" />
      </div>
      <div class="ml-3 leading-tight">
        Lange Geer 22<br />
        2611PV Delft
      </div>
    </div>
    <div class="flex items-center mb-4">
      <div :class="['rounded-full w-8 h-8 p-2', iconClass]">
        <IconBox class="w-4" />
      </div>
      <div class="ml-3 leading-tight">
        KvK: 40398035<br />
        RSIN: 807864250
      </div>
    </div>
  </div>
</template>
