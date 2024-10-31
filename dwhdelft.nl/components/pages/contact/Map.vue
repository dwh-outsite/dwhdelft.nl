<script setup>
const googleKey = useRuntimeConfig().public.googleKey
const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${googleKey}&q=DWH, Delft`
</script>

<template>
  <iframe width="100%" height="550" style="border: 0" loading="lazy" allowfullscreen :src="mapUrl" />
</template>
