<script setup>
defineProps({
  title: { type: String, default: null },
})

const slots = useSlots()
</script>

<template>
  <section>
    <ElementsContainer v-if="title || slots.title" class="mb-6">
      <h1 class="text-brand-500 font-medium text-5xl">
        <slot name="title">
          {{ title }}
        </slot>
      </h1>
    </ElementsContainer>
    <div class="bg-brand-500">
      <ElementsContainer class="py-8">
        <slot />
      </ElementsContainer>
    </div>
  </section>
</template>
