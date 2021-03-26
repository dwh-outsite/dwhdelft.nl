<i18n lang="yaml">
en:
  form_success: The bar buddy you selected will contact you as soon as possible.
nl:
  form_success: Je barbuddy neemt zo snel mogelijk contact met je op.
</i18n>

<template>
  <div>
    <div v-if="formStatus === 'finished'" class="my-8 flex justify-center">
      <FormCompleted class="md:pr-48" :title="$t('forms.success.heading')" :subtitle="$t('form_success')" />
    </div>

    <form v-if="formStatus !== 'finished'" class="md:w-2/3 mx-4 md:mx-auto mt-8 md:my-12" @submit="submit">
      <FormValidationMessage :errors="validationErrors" />
      <FormElement :label="$t('forms.label.name')" required="true">
        <FormInput v-model="form.name" :placeholder="$t('forms.placeholder.name')" />
        <FormValidation name="name" :errors="validationErrors" />
      </FormElement>
      <FormElement :label="$t('forms.label.language')" required="true">
        <FormRadio v-model="form.language" :label="$t('forms.label.languages.dutch')" option="dutch" />
        <FormRadio v-model="form.language" :label="$t('forms.label.languages.english')" option="english" />
        <FormRadio v-model="form.language" :label="$t('forms.label.languages.no_preference')" option="no_preference" />
        <FormValidation name="language" :errors="validationErrors" />
      </FormElement>
      <FormElement :label="$t('forms.label.email')" required="true">
        <FormInput v-model="form.email" :placeholder="$t('forms.placeholder.email')" type="email" />
        <FormValidation name="email" :errors="validationErrors" />
      </FormElement>
      <FormElement :label="$t('forms.label.phone_number')">
        <FormInput v-model="form.phone_number" :placeholder="$t('forms.placeholder.phone_number')" />
        <FormValidation name="phone_number" :errors="validationErrors" />
      </FormElement>
      <FormElement :label="$t('forms.label.pronouns')">
        <FormInput v-model="form.pronouns" :placeholder="$t('forms.placeholder.pronouns')" />
        <FormValidation name="pronouns" :errors="validationErrors" />
      </FormElement>
      <FormElement :label="$t('forms.label.barbuddy')" required="true">
        <FormRadio v-model="form.barbuddy" :label="$t('forms.label.languages.no_preference')" option="no_preference" />
        <FormRadio
          v-for="buddy in barBuddies"
          :key="buddy.name"
          v-model="form.barbuddy"
          :label="buddy.name"
          :option="buddy.name"
        />
        <FormValidation name="barbuddy" :errors="validationErrors" />
      </FormElement>
      <FormElement :label="$t('forms.label.remarks')">
        <FormInput v-model="form.remarks" :placeholder="$t('forms.placeholder.remarks')" type="textarea" />
        <FormValidation name="remarks" :errors="validationErrors" />
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
import ReMemberForm from '../../src/ReMemberForm'

export default {
  props: ['barBuddies', 'selected'],
  data() {
    return {
      form: {
        name: '',
        language: this.$i18n.locale === 'nl' ? 'dutch' : 'english',
        email: '',
        phone_number: '',
        pronouns: '',
        barbuddy: 'no_preference',
        remarks: '',
      },
      validationErrors: {},
      formStatus: 'start',
    }
  },
  watch: {
    selected() {
      this.form.barbuddy = this.selected.name
    },
  },
  methods: {
    submit(event) {
      event.preventDefault()

      this.formStatus = 'loading'

      new ReMemberForm('barbuddy')
        .submit(this.form)
        .then(() => {
          this.formStatus = 'finished'
          window.scrollTo({ top: document.getElementById('form').offsetTop, behavior: 'smooth' })
        })
        .catch((validationError) => {
          this.formStatus = 'validation-error'
          this.validationErrors = validationError.errors()
          window.scrollTo({ top: document.getElementById('form').offsetTop, behavior: 'smooth' })
        })
    },
  },
}
</script>
