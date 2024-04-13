<script setup>
import { ref } from 'vue'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { IconCheckmark } from '@iconify-prerendered/vue-zondicons'


defineProps({
  options: { type: Object, required: false },
})
const model = defineModel()
</script>

<template>
  <Listbox v-model="model" multiple>
    <div class="flex flex-wrap space-x-2">
      <ListboxOption v-slot="{ selected }" v-for="[value, description] in Object.entries(options)" :key="value"
        :value="value" as="template">
        <button type="button" class="rounded-lg px-4 py-3 flex items-center transition-colors my-1"
          :class="selected ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 hover:bg-gray-300'">
          {{ description }}
          <div v-if="selected"
            class="ml-2 w-5 h-5 rounded-full bg-white text-gray-800 flex items-center justify-center">
            <IconCheckmark class="w-2 h-2" />
          </div>
        </button>
      </ListboxOption>
    </div>
  </Listbox>
</template>
