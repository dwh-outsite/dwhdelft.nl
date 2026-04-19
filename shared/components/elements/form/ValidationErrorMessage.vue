<i18n lang="yaml">
en:
  message: You did not completely or correctly fill out the form. Please check if everything makes sense.
nl:
  message: Je hebt het formulier niet volledig (correct) ingevuld. Check nog even goed of alles klopt.
</i18n>

<script setup>
defineProps({
  errors: { type: Object, required: true },
})

const { t } = useT()
</script>

<template>
  <div v-if="Object.keys(errors.value).length > 0" class="mb-4 rounded-lg bg-red-100 p-4 text-red-800">
    {{ t('message') }}
  </div>
</template>
