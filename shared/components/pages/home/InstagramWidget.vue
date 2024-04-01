<script setup>
defineProps({
  widgetId: { type: String, required: true }
})

useHead({
  script: [{ src: 'https://cdn.lightwidget.com/widgets/lightwidget.js' }]
}
)
</script>

<template>
  <div>
    <iframe
      :src="`//lightwidget.com/widgets/${widgetId}.html`"
      scrolling="no"
      allowtransparency="true"
      class="lightwidget-widget w-full border-none overflow-hidden"
    />
  </div>
</template>
