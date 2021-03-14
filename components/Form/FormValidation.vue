<template>
  <div v-if="name in errors">
    <div
      v-for="error in errors[name]"
      :key="name + error"
      class="text-red-800 bg-red-100 px-4 py-1 rounded-lg text-sm mt-1"
      v-text="error"
    />
  </div>
</template>

<script>
export default {
  props: {
    errors: Object,
    name: String,
  },
}
</script>
