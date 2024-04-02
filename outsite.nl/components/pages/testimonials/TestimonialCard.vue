<script setup>
defineProps({
  image: { type: String, required: true },
  name: { type: String, required: true },
  authorDescription: { type: String, required: true },
})
</script>

<template>
  <div class="h-full bg-white relative rounded-lg bg-hero-falling-triangles py-6 shadow-xl">
    <div class="w-48 h-48 rounded-full overflow-hidden mx-auto">
      <img :src="image" class="object-cover h-full" />
    </div>
    <div class="bg-white-gradient-vertical">
      <div class="text-center py-6 text-xl">
        <div class="uppercase tracking-wide font-bold text-brand-400 mr-1" v-text="name" />
        <div class="text-gray-500 italic" v-text="authorDescription" />
      </div>
      <div class="flex px-8 md:px-12 pb-6 leading-snug">
        <div class="absolute text-mega text-brand-100 -ml-8 -mt-20 pt-2 z-0">“</div>
        <div class="text-xl z-20 pt-2">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-white-gradient-vertical {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 15%,
    rgba(255, 255, 255, 1) 80%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
