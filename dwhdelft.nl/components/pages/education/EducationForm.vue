<i18n lang="yaml">
en:
  form_success: We will contact you as soon as possible.
nl:
  form_success: We nemen zo snel mogelijk contact met je op.
</i18n>

<script setup>
const { t } = useT()

const form = useReMemberForm('education', {
  name: '',
  email: '',
  pronouns: '',
  school: '',
  message: '',
})
</script>

<template>
  <div>
    <ElementsFormSuccessMessage v-if="form.state.value === 'success'" class="!bg-brand-100" :title="$t('forms.success.heading')" :subtitle="t('form_success')" />

    <form v-else ref="formElement" @submit.prevent="form.submit">
      <ElementsFormValidationErrorMessage :errors="form.validationErrors" />

      <div class="md:flex md:space-x-4">
        <ElementsFormElement name="name" :errors="form.validationErrors" required class="md:w-2/3">
          <ElementsFormTextInput v-model="form.fields.name" />
        </ElementsFormElement>

        <ElementsFormElement name="pronouns" :errors="form.validationErrors" class="flex-1">
          <ElementsFormTextInput v-model="form.fields.pronouns" />
        </ElementsFormElement>
      </div>

      <ElementsFormElement name="email" :errors="form.validationErrors" required>
        <ElementsFormTextInput v-model="form.fields.email" type="email" />
      </ElementsFormElement>

      <ElementsFormElement name="school" :errors="form.validationErrors" required>
        <ElementsFormTextInput v-model="form.fields.school" />
      </ElementsFormElement>

      <ElementsFormElement name="message" :errors="form.validationErrors">
        <ElementsFormTextInput v-model="form.fields.message" type="textarea" />
      </ElementsFormElement>

      <ElementsPrimaryButton type="submit" :disabled="form.state.value === 'loading'">
        {{ $t('forms.buttons.sign_up') }}
      </ElementsPrimaryButton>
    </form>
  </div>
</template>
