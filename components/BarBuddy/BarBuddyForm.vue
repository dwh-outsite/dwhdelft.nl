<i18n lang="yaml">
en:
  form_success: The bar buddy you selected will contact you as soon as possible.
nl:
  form_success: Je barbuddy neemt zo snel mogelijk contact met je op.
</i18n>

<template>
  <div>
    <div v-if="formStatus === 'finished'" class="my-8 flex justify-center">
      <FormCompleted :title="$t('forms.success.heading')" :subtitle="$t('form_success')" />
    </div>

    <form v-if="formStatus !== 'finished'" class="md:w-2/3 mx-4 md:mx-auto mt-8 md:my-12" @submit="submit">
      <FormElement :label="$t('forms.label.name')" required="true">
        <FormInput v-model="form.name" :placeholder="$t('forms.placeholder.name')" />
      </FormElement>
      <FormElement :label="$t('forms.label.language')" required="true">
        <FormRadio v-model="form.language" :label="$t('forms.label.languages.dutch')" option="dutch" />
        <FormRadio v-model="form.language" :label="$t('forms.label.languages.english')" option="english" />
        <FormRadio v-model="form.language" :label="$t('forms.label.languages.no_preference')" option="no_preference" />
      </FormElement>
      <FormElement :label="$t('forms.label.email')" required="true">
        <FormInput v-model="form.email" :placeholder="$t('forms.placeholder.email')" type="email" />
      </FormElement>
      <FormElement :label="$t('forms.label.phone_number')">
        <FormInput v-model="form.phoneNumber" :placeholder="$t('forms.placeholder.phone_number')" />
      </FormElement>
      <FormElement :label="$t('forms.label.pronouns')">
        <FormInput v-model="form.pronouns" :placeholder="$t('forms.placeholder.pronouns')" />
      </FormElement>
      <FormElement :label="$t('forms.label.barbuddy')" required="true">
        <FormRadio v-model="form.barBuddy" :label="$t('forms.label.languages.no_preference')" option="no_preference" />
        <FormRadio
          v-for="buddy in barBuddies"
          :key="buddy.name"
          v-model="form.barBuddy"
          :label="buddy.name"
          :option="buddy.name"
        />
      </FormElement>
      <FormElement :label="$t('forms.label.remarks')">
        <FormInput v-model="form.remarks" :placeholder="$t('forms.placeholder.remarks')" type="textarea" />
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
import Firebase from '~/src/Firebase'

export default {
  props: ['barBuddies', 'selected'],
  data() {
    return {
      form: {
        name: '',
        language: this.$i18n.locale === 'nl' ? 'dutch' : 'english',
        email: '',
        phoneNumber: '',
        pronouns: '',
        barBuddy: 'no_preference',
        remarks: '',
      },
      formStatus: 'start',
    }
  },
  watch: {
    selected() {
      this.form.barBuddy = this.selected.name
    },
  },
  methods: {
    submit(event) {
      event.preventDefault()

      this.formStatus = 'loading'

      new Firebase()
        .submitAndSendEmail('mail@casperboone.nl', 'barbuddy', this.form)
        .then(() => {
          this.formStatus = 'finished'
          window.scrollTo({ top: document.getElementById('form').offsetTop, behavior: 'smooth' })
        })
        .catch(() => {
          alert('An error occurred. If this keeps happening, please send us an email.')
        })
    },
  },
}
</script>
