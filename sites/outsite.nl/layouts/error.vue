<template>
  <ErrorPage :error="error" />
</template>

<script>
export default {
  props: ['error'],
}
</script>
