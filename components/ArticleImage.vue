<template>
  <img :src="imgSrc()" :alt="alt" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: null,
    },
  },
  methods: {
    imgSrc() {
      try {
        return require(`#/assets/images/${this.src}`)
      } catch (error) {
        return null
      }
    },
  },
}
</script>
