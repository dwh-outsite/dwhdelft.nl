<script setup>
import { IconEnvelope } from '@iconify-prerendered/vue-zondicons'

defineProps({
  name: { type: String, required: true },
  role: { type: String, required: true },
  email: { type: String, required: true },
  photo: { type: String, default: null },
})
</script>

<template>
  <ElementsActionCard :title="name" headerPosition="left" :headerClass="photo && 'bg-brand-450 w-36 overflow-hidden'" contentClass="!text-base">
    <template #header>
      <img
        v-if="photo"
        :src="photo"
        class="w-full h-full object-cover hidden md:block"
      />
    </template>

    <div class="text-gray-600 -mt-4 mb-8">{{ role }}</div>

    <div v-if="email" class="flex items-center space-x-3">
      <ElementsIconCircle class="p-2">
        <IconEnvelope class="w-4" />
      </ElementsIconCircle>
      <a :href="`mailto:${email}`" class="text-brand-450 hover:underline" v-text="email" />
    </div>
  </ElementsActionCard>
</template>
