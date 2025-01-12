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
      <h1 :class="cn(`text-brand-500 font-medium text-5xl`, titleClass)">
        <slot name="title">
          {{ title }}
        </slot>
      </h1>
    </ElementsContainer>
    <div :class="cn(`bg-brand-500`, contentBackgroundClass)">
      <ElementsContainer :class="cn(`py-8`, contentClass)">
        <slot />
      </ElementsContainer>
    </div>
  </section>
</template>
