<template>
  <div class="bg-white rounded-lg shadow p-6 md:p-8">
    <div class="flex justify-between items-center h-12 mb-4">
      <div class="flex items-center">
        <slot name="icon"></slot>
        <h2 class="text-2xl font-bold text-purple-500 uppercase tracking-wider" v-text="title" />
      </div>
      <div class="hidden md:block">
        <slot name="button"></slot>
      </div>
    </div>
    <slot></slot>
    <div class="mt-4 md:hidden">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
}
</script>
