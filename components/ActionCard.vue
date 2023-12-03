<template>
  <div class="bg-white rounded-xl shadow p-6">
    <div class="flex justify-between items-center mb-4">
      <!-- removed h-12 -->
      <div class="flex items-center">
        <slot name="icon"></slot>
        <h2 class="text-2xl font-bold text-brand-450 uppercase tracking-wider" v-text="title" />
      </div>
      <div class="hidden md:block">
        <slot name="button"></slot>
      </div>
    </div>
    <div class="text-lg">
      <slot></slot>
    </div>
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
