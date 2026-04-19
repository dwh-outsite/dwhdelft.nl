<script setup>
const props = defineProps({
  inverted: { type: Boolean, default: false },
})

const classes = computed(() => ({
  'bg-white text-brand-450': props.inverted,
  'bg-brand-450 text-white': !props.inverted,
}))
</script>

<template>
  <div class="rounded-full" :class="classes">
    <slot />
  </div>
</template>
