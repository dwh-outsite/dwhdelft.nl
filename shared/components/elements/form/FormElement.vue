<script setup>
defineProps({
  label: { type: String, required: false },
  name: { type: String, required: true },
  errors: { type: Object, required: false },
  required: { type: Boolean, default: false },
})
</script>

<template>
  <div class="mb-4">
    <label :for="name" class="mb-1 block text-sm font-semibold uppercase tracking-wide">
      {{ label || $t(`forms.label.${name}`) }}<span v-if="required" class="text-red-600">*</span>
    </label>
    <slot />
    <ElementsFormValidationError v-if="errors" :errors="errors" :name="name" />
  </div>
</template>
