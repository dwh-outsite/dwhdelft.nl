<template>
  <Header small="true" :bg="bg">
    <h1 class="text-4xl text-white font-normal">
      <slot></slot>
    </h1>
  </Header>
</template>

<script>
export default {
  props: ['bg'],
}
</script>
