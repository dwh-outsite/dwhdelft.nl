<template>
  <div class="w-1/3">
    <div class="bg-purple-200 rounded-lg p-6 m-3 flex items-center">
      <slot></slot>
      <div v-text="text" class="flex-1 text-2xl" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>
