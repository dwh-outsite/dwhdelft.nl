<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: Object, required: true },
})
</script>

<template>
  <div class="rounded-xl overflow-hidden shadow-lg group">
    <div class="w-full h-80 overflow-hidden mx-auto relative">
      <div
        class="absolute z-50 top-0 left-0 p-6 uppercase font-bold tracking-wider text-2xl text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.45)]"
      >
        {{ title }}
      </div>
      <img :src="image" class="object-cover h-full w-full" />
      <div class="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-b from-black/50 group-hover:from-black/30" />
      <div
        class="absolute bottom-0 left-0 flex flex-col justify-end w-full h-2/3 bg-gradient-to-t from-black/95 group-hover:from-black/80 p-6"
      >
        <p class="text-white text-lg leading-snug">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
