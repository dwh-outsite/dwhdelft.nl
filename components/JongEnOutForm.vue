<i18n lang="yaml">
en:
  form_success: We will contact you as soon as possible.
nl:
  form_success: We nemen zo snel mogelijk contact met je op.
</i18n>

<template>
  <div>
    <div v-if="formStatus === 'finished'" class="my-8 flex justify-center">
      <FormCompleted class="md:pr-48" :title="$t('forms.success.heading')" :subtitle="$t('form_success')" />
    </div>

    <form v-if="formStatus !== 'finished'" @submit="submit">
      <FormValidationMessage :errors="validationErrors" />
      <FormElement :label="$t('forms.label.name')" required="true">
        <FormInput v-model="form.name" :placeholder="$t('forms.placeholder.name')" />
        <FormValidation name="name" :errors="validationErrors" />
      </FormElement>
      <FormElement :label="$t('forms.label.email')" required="true">
        <FormInput v-model="form.email" :placeholder="$t('forms.placeholder.email')" type="email" />
        <FormValidation name="email" :errors="validationErrors" />
      </FormElement>
      <FormElement :label="$t('forms.label.pronouns')">
        <FormInput v-model="form.pronouns" :placeholder="$t('forms.placeholder.pronouns')" />
        <FormValidation name="pronouns" :errors="validationErrors" />
      </FormElement>
      <div class="flex justify-end mt-8">
        <PrimaryButton :disabled="formStatus === 'loading'" type="submit">
          {{ formStatus === 'loading' ? $t('forms.buttons.loading') : $t('forms.buttons.sign_up') }}
        </PrimaryButton>
      </div>
    </form>
  </div>
</template>

<script>
import ReMemberForm from '#/src/ReMemberForm'

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        pronouns: '',
      },
      validationErrors: {},
      formStatus: 'start',
    }
  },
  methods: {
    submit(event) {
      event.preventDefault()

      this.formStatus = 'loading'

      new ReMemberForm('jongenout')
        .submit(this.form)
        .then(() => {
          this.formStatus = 'finished'
        })
        .catch((validationError) => {
          this.formStatus = 'validation-error'
          this.validationErrors = validationError.errors()
        })
    },
  },
}
</script>
