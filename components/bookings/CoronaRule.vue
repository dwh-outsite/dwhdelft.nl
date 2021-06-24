<template>
  <div class="w-full md:w-1/2 lg:w-1/3">
    <div class="bg-brand-200 rounded-lg p-6 m-3 flex items-center">
      <slot></slot>
      <div class="flex-1 text-2xl" v-text="text" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['text'],
}
</script>
