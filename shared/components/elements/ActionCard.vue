<script setup>
defineProps({
  title: { type: String, required: true },
  titleClass: { type: String, default: '' },
})

const slots = useSlots()
</script>

<template>
  <div class="bg-white rounded-xl shadow-md p-6 overflow-hidden">
    <div v-if="slots.header" class="-mt-6 -mx-6 mb-3">
      <slot name="header"></slot>
    </div>
    <div class="flex justify-between items-center mb-4">
      <div class="flex items-center space-x-4">
        <slot name="icon"></slot>
        <h2 class="text-2xl font-bold text-brand-450 uppercase tracking-wider" :class="titleClass" v-text="title" />
      </div>
      <div class="hidden md:block">
        <slot name="button"></slot>
      </div>
    </div>
    <div class="text-lg text-gray-700">
      <slot></slot>
    </div>
    <div v-if="slots.button" class="mt-4 md:hidden">
      <slot name="button"></slot>
    </div>
  </div>
</template>
