<script setup>
const props = defineProps({
  title: { type: String, required: true },
  titleClass: { type: String, default: '' },
  headerClass: { type: String, default: '' },
  headerPosition: { type: String, default: 'top' },
  contentClass: { type: String, default: '' },
})

const containerClass = {
  'flex-col': props.headerPosition === 'top',
  'flex-col md:flex-row': props.headerPosition === 'left',
  'flex-col md:flex-row-reverse': props.headerPosition === 'right',
}

const positionBasedHeaderClass = {
  '-mb-3': props.headerPosition === 'top',
  '-mb-3 md:mb-0': props.headerPosition === 'left' || props.headerPosition === 'right',
}

const slots = useSlots()
</script>

<template>
  <div class="bg-white rounded-xl shadow-md overflow-hidden flex" :class="containerClass">
    <div v-if="slots.header" :class="[positionBasedHeaderClass, headerClass]">
      <slot name="header"></slot>
    </div>
    <div class="flex-1 flex flex-col p-6 text-lg text-gray-700" :class="contentClass">
      <div v-if="title || slots.button" class="flex justify-between items-center mb-4">
        <div class="flex items-center space-x-4">
          <slot name="icon"></slot>
          <h2 class="text-2xl font-bold text-brand-450 uppercase tracking-wider" :class="titleClass" v-text="title" />
        </div>
        <div class="hidden md:block">
          <slot name="button"></slot>
        </div>
      </div>
      <slot></slot>
      <div v-if="slots.button" class="mt-4 md:hidden">
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>
