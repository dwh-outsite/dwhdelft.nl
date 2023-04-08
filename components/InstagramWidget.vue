<template>
  <div>
    <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
    <iframe
      :src="`//lightwidget.com/widgets/${widgetId}.html`"
      scrolling="no"
      allowtransparency="true"
      class="lightwidget-widget"
      style="width: 100%; border: 0; overflow: hidden"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ['widgetId'],
}
</script>
