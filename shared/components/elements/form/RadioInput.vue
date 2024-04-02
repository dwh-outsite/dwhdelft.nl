<script setup>
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
} from '@headlessui/vue'

import { IconCheckmark } from '@iconify-prerendered/vue-zondicons'

defineProps({
  options: { type: Object, required: true },
})
const model = defineModel()
</script>

<template>
  <RadioGroup v-model="model">
    <div class="flex space-x-2">
      <RadioGroupOption
        v-for="[value, description] in Object.entries(options)"
        :key="value"
        :value="value"
        v-slot="{ checked }"
      >
        <button
          type="button"
          class="rounded-lg px-4 py-3 flex items-center transition-colors"
          :class="checked ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 hover:bg-gray-300'"
        >
          {{ description }}
          <div v-if="checked" class="ml-2 w-5 h-5 rounded-full bg-white text-gray-800 flex items-center justify-center">
            <IconCheckmark class="w-2 h-2" />
          </div>
        </button>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>
