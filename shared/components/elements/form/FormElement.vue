<script setup>
defineProps({
  label: { type: String, required: false },
  name: { type: String, required: true },
  errors: { type: Object, required: false },
  required: { type: Boolean, default: false },
})
</script>

<template>
  <div class="form-element mb-4">
    <label :for="name" class="uppercase text-sm tracking-wide font-semibold block mb-1">
      {{ label || $t(`forms.label.${name}`) }}<span v-if="required" class="text-red-600">*</span>
    </label>
    <slot />
    <ElementsFormValidationError v-if="errors" :errors="errors" :name="name" />
  </div>
</template>
