<script setup>
defineProps({
  widgetId: { type: String, required: true },
})

useHead({
  script: [{ src: 'https://cdn.lightwidget.com/widgets/lightwidget.js' }],
})
</script>

<template>
  <iframe
    :src="`//lightwidget.com/widgets/${widgetId}.html`"
    scrolling="no"
    allowtransparency="true"
    class="lightwidget-widget w-full overflow-hidden border-none"
  />
</template>
