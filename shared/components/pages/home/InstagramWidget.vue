<!-- eslint-disable tailwindcss/no-custom-classname -->
<script setup>
defineProps({
  widgetId: { type: String, required: true },
})

useHead({
  script: [{ src: 'https://cdn.lightwidget.com/widgets/lightwidget.js' }],
})
</script>

<template>
  <!-- eslint-disable-next-line tailwindcss/no-custom-classname -->
  <iframe
    :src="`//lightwidget.com/widgets/${widgetId}.html`"
    scrolling="no"
    allowtransparency="true"
    class="w-full overflow-hidden border-none"
  />
</template>
