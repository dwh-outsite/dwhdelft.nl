<i18n lang="yaml">
en:
  form_success: We will contact you as soon as possible.
nl:
  form_success: We nemen zo snel mogelijk contact met je op.
</i18n>

<template>
  <div>
    <div v-if="formStatus === 'finished'" class="my-8 flex justify-center">
      <FormCompleted
        class="md:pr-48 bg-brand-100"
        :title="$t('forms.success.heading')"
        :subtitle="$t('form_success')"
      />
    </div>

    <form v-if="formStatus !== 'finished'" @submit="submit">
      <FormValidationMessage :errors="validationErrors" />
      <div class="md:flex md:space-x-4">
        <FormElement :label="$t('forms.label.name')" class="form-element-gray md:w-2/3" required="true">
          <FormInput v-model="form.name" :placeholder="$t('forms.placeholder.name')" />
          <FormValidation name="name" :errors="validationErrors" />
        </FormElement>
        <FormElement :label="$t('forms.label.pronouns')" class="form-element-gray flex-1">
          <FormInput v-model="form.pronouns" :placeholder="$t('forms.placeholder.pronouns')" />
          <FormValidation name="pronouns" :errors="validationErrors" />
        </FormElement>
      </div>
      <FormElement :label="$t('forms.label.email')" class="form-element-gray" required="true">
        <FormInput v-model="form.email" :placeholder="$t('forms.placeholder.email')" type="email" />
        <FormValidation name="email" :errors="validationErrors" />
      </FormElement>
      <FormElement :label="$t('forms.label.message')" class="form-element-gray" required="true">
        <FormInput v-model="form.message" :placeholder="$t('forms.placeholder.message')" type="textarea" :rows="4" />
        <FormValidation name="message" :errors="validationErrors" />
      </FormElement>
      <PrimaryButton :disabled="formStatus === 'loading'" type="submit">
        {{ formStatus === 'loading' ? $t('forms.buttons.loading') : $t('forms.buttons.submit') }}
      </PrimaryButton>
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

      new ReMemberForm('contact-dwh')
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
