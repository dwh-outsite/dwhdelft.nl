<script setup>
const props = defineProps({
  label: String,
  options: Array,
  modelValue: Array
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <h3 class="font-semibold mb-2">{{ label }}</h3>
    <div class="space-y-1">
      <label v-for="opt in options" :key="opt.value" class="flex items-center space-x-2">
        <input
          type="checkbox"
          class="accent-brand-400"
          :value="opt.value"
          :checked="modelValue.includes(opt.value)"
          @change="val => {
            const newVal = [...modelValue]
            if (newVal.includes(opt.value)) newVal.splice(newVal.indexOf(opt.value), 1)
            else newVal.push(opt.value)
            emit('update:modelValue', newVal)
          }"
        >
        <span>{{ opt.label }}</span>
      </label>
    </div>
  </div>
</template>
