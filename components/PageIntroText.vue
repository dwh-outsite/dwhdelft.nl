<template>
  <section :class="'container mx-auto pb-12 text-xl md:text-2xl leading-normal ' + bg + ' ' + text">
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
    bg: {
      type: String,
      default: "#000000"
    },
    text: {
      type: String,
      default: "text-gray-800"
    }
  },
}
</script>
