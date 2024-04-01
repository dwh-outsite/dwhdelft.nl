<script setup>
defineProps({
  contentClass: { type: String, default: '' },
  triangleClass: { type: String, default: '' },
  connect: { type: Boolean, default: false },
  top: { type: Boolean, default: true },
  bottom: { type: Boolean, default: true },
})
</script>

<template>
  <div :class="top && (connect ? 'mt-[-10.55vw]' : 'mt-[-6vw]')">
    <div v-if="top" class="triangle-top" :class="triangleClass"></div>
    <section :class="contentClass">
      <slot></slot>
    </section>
    <div v-if="bottom" class="triangle-bottom" :class="triangleClass"></div>
  </div>
</template>

<style scoped>
.triangle-top {
  border-bottom-width: 10.555vw; /* 38deg / 360deg * 100vw = 10.555 */
  border-left: 100vw solid transparent;
}

.triangle-bottom {
  border-top-width: 10.555vw;
  border-right: 100vw solid transparent;
}
</style>
