<i18n lang="yaml">
en:
  success: We will contact you as soon as possible.
nl:
  success: We nemen zo snel mogelijk contact met je op.
</i18n>


<script setup>
const { t, locale } = useT()

const props = defineProps({
  barBuddies: { type: Array, required: true },
})

const form = useReMemberForm('contact-dwh', {
  name: '',
  email: '',
  pronouns: '',
  message: '',
})
</script>

<template>
  <ElementsFormSuccessMessage v-if="form.state.value === 'success'" class="md:pr-48 !bg-brand-50" :title="$t('forms.success.heading')" :subtitle="t('success')" />

  <form v-else ref="formElement" @submit.prevent="form.submit">
    <ElementsFormValidationErrorMessage :errors="form.validationErrors" />

    <div class="md:flex md:space-x-4">
      <ElementsFormElement name="name" :errors="form.validationErrors" required class="md:w-2/3">
        <ElementsFormTextInput v-model="form.fields.name" gray />
      </ElementsFormElement>

      <ElementsFormElement name="pronouns" :errors="form.validationErrors" class="flex-1">
        <ElementsFormTextInput v-model="form.fields.pronouns" gray />
      </ElementsFormElement>
    </div>

    <ElementsFormElement name="email" :errors="form.validationErrors" required>
      <ElementsFormTextInput v-model="form.fields.email" type="email" gray />
    </ElementsFormElement>

    <ElementsFormElement name="message" :errors="form.validationErrors">
      <ElementsFormTextInput v-model="form.fields.message" type="textarea" gray />
    </ElementsFormElement>

    <ElementsPrimaryButton type="submit" :disabled="form.state.value === 'loading'">
      {{ $t('forms.buttons.sign_up') }}
    </ElementsPrimaryButton>
  </form>
</template>
