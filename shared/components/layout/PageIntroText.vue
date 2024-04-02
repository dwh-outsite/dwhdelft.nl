<template>
  <section class="container mx-auto pb-12 text-xl md:text-2xl leading-normal text-gray-800">
    <div class="mx-4 py-8" :class="center && 'xl:w-2/3 xl:mx-auto'">
      <slot></slot>
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
