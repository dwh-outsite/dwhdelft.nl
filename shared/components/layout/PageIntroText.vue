<template>
  <section class="container mx-auto pb-12 text-xl leading-normal text-gray-800 md:text-2xl">
    <div class="mx-4 space-y-8 py-8" :class="center && 'xl:w-2/3 xl:mx-auto'">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    center: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
