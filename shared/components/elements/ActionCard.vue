<script setup>
const props = defineProps({
  title: { type: String, required: false },
  titleClass: { type: String, default: '' },
  headerClass: { type: String, default: '' },
  headerPosition: { type: String, default: 'top' },
  contentClass: { type: String, default: '' },
  clickable: { type: Boolean, default: false },
})

const containerClass = {
  'flex-col': props.headerPosition === 'top',
  'flex-col md:flex-row': props.headerPosition === 'left',
  'flex-col md:flex-row-reverse': props.headerPosition === 'right',
  'cursor-pointer group hover:bg-brand-100 transition-colors': props.clickable,
}

const positionBasedHeaderClass = {
  '-mb-3': props.headerPosition === 'top',
  '-mb-3 md:mb-0': props.headerPosition === 'left' || props.headerPosition === 'right',
}

const clickableHeaderClass = {
  'group-hover:opacity-80 transition-opacity': props.clickable,
}

const slots = useSlots()
</script>

<template>
  <div :class="cn(`bg-white rounded-xl shadow-md overflow-hidden flex`, containerClass, $attrs.class)">
    <div v-if="slots.header" :class="cn(positionBasedHeaderClass, headerClass, clickableHeaderClass)">
      <slot name="header" />
    </div>
    <div :class="cn(`flex-1 flex flex-col p-6 text-lg text-gray-700`, contentClass)">
      <div v-if="title || slots.button" class="mb-4 flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <slot name="icon" />
          <div class="flex items-baseline">
            <h2 :class="cn(`text-2xl font-bold text-brand-450 uppercase tracking-wider`, titleClass)" v-text="title" />
            <slot name="subtitle" />
          </div>
        </div>
        <div class="hidden md:block">
          <slot name="button" />
        </div>
      </div>
      <slot />
      <div v-if="slots.button" class="mt-4 md:hidden">
        <slot name="button" />
      </div>
    </div>
  </div>
</template>
