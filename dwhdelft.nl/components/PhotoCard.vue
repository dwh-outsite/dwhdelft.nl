<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
})
</script>

<template>
  <div class="group overflow-hidden rounded-xl shadow-lg">
    <div class="relative mx-auto h-80 w-full overflow-hidden">
      <div
        class="absolute left-0 top-0 z-50 p-6 text-2xl font-bold uppercase tracking-wider text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.45)]"
      >
        {{ title }}
      </div>
      <img :src="image" class="size-full object-cover" />
      <div class="absolute left-0 top-0 h-2/3 w-full bg-gradient-to-b from-black/50 group-hover:from-black/30" />
      <div
        class="absolute bottom-0 left-0 flex h-2/3 w-full flex-col justify-end bg-gradient-to-t from-black/95 p-6 group-hover:from-black/80"
      >
        <p class="text-lg leading-snug text-white">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
