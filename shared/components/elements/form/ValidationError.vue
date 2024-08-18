<script setup>
const props = defineProps({
  errors: { type: Object, required: true },
  name: { type: String, required: true },
})

const hasErrors = computed(() => props.name in props.errors.value)
</script>

<template>
  <div v-if="hasErrors">
    <div
      v-for="error in errors.value[name]"
      :key="name + error"
      class="text-red-800 bg-red-100 px-4 py-1 rounded-lg text-sm mt-1"
      v-text="error"
    />
  </div>
</template>
