<script setup>
defineProps({
  title: { type: String, default: null },
  titleClass: { type: String, default: '' },
  contentClass: { type: String, default: '' },
  contentBackgroundClass: { type: String, default: '' },
})

const slots = useSlots()
</script>

<template>
  <section>
    <ElementsContainer v-if="title || slots.title" class="mb-6">
      <h1 class="text-5xl font-medium text-brand-500" :class="titleClass">
        <slot name="title">
          {{ title }}
        </slot>
      </h1>
    </ElementsContainer>
    <div class="bg-brand-500" :class="contentBackgroundClass">
      <ElementsContainer class="py-8" :class="contentClass">
        <slot />
      </ElementsContainer>
    </div>
  </section>
</template>
