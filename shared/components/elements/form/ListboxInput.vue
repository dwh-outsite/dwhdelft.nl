<script setup>
import { Listbox, ListboxOption } from '@headlessui/vue'

import { IconCheckmark } from '@iconify-prerendered/vue-zondicons'

defineProps({
  options: { type: Object, required: true },
})
const model = defineModel()
</script>

<template>
  <Listbox v-model="model" multiple>
    <div class="flex flex-wrap space-x-2">
      <ListboxOption
        v-for="[value, description] in Object.entries(options)"
        :key="value"
        v-slot="{ selected }"
        :value="value"
        as="template"
      >
        <button
          type="button"
          class="my-1 flex items-center rounded-lg px-4 py-3 transition-colors"
          :class="selected ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 hover:bg-gray-300'"
        >
          {{ description }}

          <div v-if="selected" class="ml-2 flex size-5 items-center justify-center rounded-full bg-white text-gray-800">
            <IconCheckmark class="size-2" />
          </div>
        </button>
      </ListboxOption>
    </div>
  </Listbox>
</template>
