<script setup>
defineProps({
  bg: { type: String },
})
</script>

<template>
  <LayoutHeader small="true" :bg="bg">
    <h1 class="text-4xl text-white font-normal">
      <slot></slot>
    </h1>
  </LayoutHeader>
</template>
