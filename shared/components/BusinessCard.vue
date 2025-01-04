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
        class="w-32 md:w-full h-32 md:h-full rounded-full md:rounded-none overflow-hidden mx-auto my-4 md:my-0 border-4 md:border-0 border-white"
      >
        <img :src="photo" class="object-cover h-full w-full" />
      </div>
    </template>
    <template #subtitle>
      <div class="text-gray-500 ml-2">{{ pronouns }}</div>
    </template>

    <div v-if="role" class="text-gray-600 -mt-4 mb-8">{{ role }}</div>

    <div v-if="$slots.bio" class="text-gray-500 text-sm -mt-6 mb-4">
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
