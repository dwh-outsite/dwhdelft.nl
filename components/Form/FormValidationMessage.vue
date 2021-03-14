<i18n lang="yaml">
en:
  message: You did not completely or correctly fill out the form. Please check if everything makes sense.
nl:
  message: Je hebt het formulier niet volledig (correct) ingevuld. Check nog even goed of alles klopt.
</i18n>

<template>
  <div v-if="Object.keys(errors).length > 0" class="text-red-800 bg-red-100 p-4 rounded-lg mb-4">
    {{ $t('message') }}
  </div>
</template>

<script>
export default {
  props: {
    errors: Object,
  },
}
</script>
