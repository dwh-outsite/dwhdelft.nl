<i18n lang="yaml">
en:
  success: We will contact you as soon as possible.
  cancel: Go back
nl:
  success: We nemen zo snel mogelijk contact met je op.
  cancel: Terug
</i18n>

<script setup>
const { t } = useT()

const form = useReMemberForm('jongenout', {
  name: '',
  email: '',
  phone_number: '',
  pronouns: '',
})
</script>

<template>
  <div v-if="form.state.value === 'success'" class="space-y-4">
    <ElementsFormSuccessMessage :title="$t('forms.success.heading')" :subtitle="t('success')" />

    <a class="underline cursor-pointer block" @click="$emit('cancel')">&laquo; {{ t('cancel') }}</a>
  </div>

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
      <ElementsFormTextInput v-model="form.fields.email"  />
    </ElementsFormElement>


    <ElementsFormElement name="phone_number" :errors="form.validationErrors" required>
      <ElementsFormTextInput v-model="form.fields.phone_number" />
    </ElementsFormElement>

    <div class="flex justify-between items-center mt-8">
      <a class="underline cursor-pointer" @click="$emit('cancel')">&laquo; {{ t('cancel') }}</a>
      <ElementsPrimaryButton type="submit" :disabled="form.state.value === 'loading'">
        {{ $t('forms.buttons.sign_up') }}
      </ElementsPrimaryButton>
    </div>
  </form>
</template>
