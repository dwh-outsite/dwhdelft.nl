<script setup>
defineProps({
  bulletPoints: { type: Array, required: true },
  image: { type: Function, required: true },
  cardClass: { type: String, default: '' },
  descriptionClass: { type: String, default: 'text-gray-600' },
})
</script>

<template>
  <ElementsContainer>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
      <ElementsActionCard v-for="point in bulletPoints" :key="point.title" :title="point.title" :class="cardClass">
        <template #header>
          <div class="w-full h-40 overflow-hidden mx-auto">
            <img :src="image(point.image)" class="object-cover w-full h-full" />
          </div>
        </template>
        <p :class="descriptionClass" class="-mt-3 text-lg leading-snug" v-text="point.description" />
      </ElementsActionCard>
    </div>
  </ElementsContainer>
</template>
