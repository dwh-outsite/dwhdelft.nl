<script setup>
import { IconEnvelope } from '@iconify-prerendered/vue-zondicons'

defineProps({
  name: { type: String, required: true },
  pronouns: { type: Object, required: true },
  role: { type: String, default: null },
  email: { type: String, required: true },
  photo: { type: String, default: null },
})
</script>

<template>
  <ElementsActionCard
    :title="name"
    headerPosition="left"
    :headerClass="photo && 'bg-brand-450 md:w-36 overflow-hidden'"
    contentClass="text-base"
  >
    <template #header>
      <div
        v-if="photo"
        class="mx-auto my-4 size-32 overflow-hidden rounded-full border-4 border-white md:my-0 md:size-full md:rounded-none md:border-0"
      >
        <img :src="photo" class="size-full object-cover" />
      </div>
    </template>
    <template #subtitle>
      <div class="ml-2 text-gray-500">{{ pronouns }}</div>
    </template>

    <div v-if="role" class="-mt-4 mb-8 text-gray-600">{{ role }}</div>

    <div v-if="$slots.bio" class="-mt-6 mb-4 text-sm text-gray-500">
      <slot name="bio" />
    </div>

    <div v-if="email" class="flex items-center space-x-3">
      <ElementsIconCircle class="p-2">
        <IconEnvelope class="w-4" />
      </ElementsIconCircle>
      <a :href="`mailto:${email}`" class="text-brand-450 hover:underline" v-text="email" />
    </div>
  </ElementsActionCard>
</template>
