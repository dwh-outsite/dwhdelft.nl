<template>
  <img :src="loadImage()" :alt="alt" />
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
      required: true,
    },
  },
  methods: {
    loadImage() {
      try {
        return require(`#/assets/images/${this.src}`)
      } catch (error) {
        return null
      }
    },
  },
}
</script>
