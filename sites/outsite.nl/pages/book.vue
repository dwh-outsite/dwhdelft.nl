<template>
  <BookPage :intro="intro" :bookingRules="bookingRules" />
</template>

<script>
export default {
  async asyncData({ $content, params, app }) {
    return {
      intro: await $content(`bookings/intro.${app.i18n.locale}`).fetch(),
      bookingRules: await $content(`bookings/booking_rules.${app.i18n.locale}`).fetch(),
    }
  },
}
</script>
