<i18n lang="yaml">
en:
  title: Membership Signup
  main_text:
    - By becoming a member you support us in the things that we find important, like the introduction groups, education
      at secondary schools, the movie night, the bar nights and all other activities at DWH.
    - 'As a member you receive the magazine from DWH: the Andersblad, and you can join the EatingOUT where you can enjoy
      a cheap and delicious meal.'
  form_success: We will send you an e-mail soon to confirm your membership.
nl:
  title: Inschrijven als DWH lid
  main_text:
    - Door lid te worden steun je ons in díe dingen die we zo belangrijk vinden, zoals de kennismakingsgroep,
      voorlichting op middelbare scholen, filmavond, baravonden en alle andere activiteiten bij DWH.
    - 'Als lid ontvang je het blad van DWH: het Andersblad en mag je bij de EatingOUT aanschuiven waar je lekker,
      gezellig en goedkoop kunt eten.'
  form_success: We sturen je binnenkort een bevestiging van je lidmaatschap.
</i18n>

<template>
  <div>
    <SmallHeader>{{ $t('title') }}</SmallHeader>

    <PageIntroText>
      <p v-for="text in $t('main_text')" :key="text" class="mb-4" v-html="text" />
    </PageIntroText>

    <section id="form" class="bg-gray-200 pt-12 pb-12">
      <div class="mx-auto container">
        <h2 class="tracking-wide font-semibold uppercase text-2xl mx-2 text-center">
          {{ $t('title') }}
        </h2>

        <div v-if="formStatus === 'finished'" class="my-8 flex justify-center">
          <FormCompleted class="md:pr-48" :title="$t('forms.success.heading')" :subtitle="$t('form_success')" />
        </div>

        <form v-if="formStatus !== 'finished'" class="md:w-2/3 mx-4 md:mx-auto mt-8 md:my-12" @submit="submit">
          <FormElement :label="$t('forms.label.firstname')" required="true">
            <FormInput v-model="form.firstname" :placeholder="$t('forms.placeholder.firstname')" />
          </FormElement>
          <FormElement :label="$t('forms.label.initials')" required="true">
            <FormInput v-model="form.initials" :placeholder="$t('forms.placeholder.initials')" />
          </FormElement>
          <FormElement :label="$t('forms.label.lastname')" required="true">
            <FormInput v-model="form.lastname" :placeholder="$t('forms.placeholder.lastname')" />
          </FormElement>
          <FormElement :label="$t('forms.label.language')" required="true">
            <FormRadio v-model="form.language" :label="$t('forms.label.languages.dutch')" option="dutch" />
            <FormRadio v-model="form.language" :label="$t('forms.label.languages.english')" option="english" />
          </FormElement>
          <FormElement :label="$t('forms.label.date_of_birth')" required="true">
            <FormInput v-model="form.date_of_birth" :placeholder="$t('forms.placeholder.date_of_birth')" />
          </FormElement>
          <FormElement :label="$t('forms.label.address')" required="true">
            <FormInput v-model="form.address" :placeholder="$t('forms.placeholder.address')" />
          </FormElement>
          <FormElement :label="$t('forms.label.postal_code')" required="true">
            <FormInput v-model="form.postal_code" :placeholder="$t('forms.placeholder.postal_code')" />
          </FormElement>
          <FormElement :label="$t('forms.label.residence')" required="true">
            <FormInput v-model="form.residence" :placeholder="$t('forms.placeholder.residence')" />
          </FormElement>
          <FormElement :label="$t('forms.label.email')" required="true">
            <FormInput v-model="form.email" :placeholder="$t('forms.placeholder.email')" type="email" />
          </FormElement>
          <FormElement :label="$t('forms.label.phone_number')" required="true">
            <FormInput v-model="form.phone_number" :placeholder="$t('forms.placeholder.phone_number')" />
          </FormElement>
          <FormElement :label="$t('forms.label.pronouns')">
            <FormInput v-model="form.pronouns" :placeholder="$t('forms.placeholder.pronouns')" />
          </FormElement>
          <FormElement :label="$t('forms.label.membership_fee')" required="true">
            <FormRadio
              v-for="(fee, key) in feesInformation.fees"
              :key="key"
              v-model="form.membership_fee"
              :label="fee"
              :option="key"
            />
          </FormElement>
          <FormElement :label="$t('forms.label.iban')" required="true">
            <FormInput v-model="form.iban" :placeholder="$t('forms.placeholder.iban')" />
          </FormElement>
          <FormElement :label="$t('forms.label.remarks')">
            <FormInput v-model="form.remarks" :placeholder="$t('forms.placeholder.remarks')" type="textarea" />
          </FormElement>
          <p class="mt-8 md:my-8 text-right">
            <PrimaryButton :disabled="formStatus === 'loading'" type="submit">
              {{ formStatus === 'loading' ? $t('forms.buttons.loading') : $t('forms.buttons.sign_up') }}
            </PrimaryButton>
          </p>
          <nuxt-content class="content mt-12" :document="feesInformation" />
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import Firebase from '~/src/Firebase'

export default {
  async asyncData({ $content, params, app, error }) {
    return { feesInformation: await $content(`signup/fees.${app.i18n.locale}`).fetch() }
  },
  data() {
    return {
      form: {
        firstname: '',
        lastname: '',
        initials: '',
        language: this.$i18n.locale === 'nl' ? 'dutch' : 'english',
        date_of_birth: '',
        address: '',
        postal_code: '',
        residence: '',
        email: '',
        phoneNumber: '',
        pronouns: '',
        membership_fee: 'full',
        iban: '',
        remarks: '',
      },
      formStatus: 'start',
    }
  },
  methods: {
    submit(event) {
      event.preventDefault()

      this.formStatus = 'loading'

      new Firebase()
        .submitAndSendEmail('mail@casperboone.nl', 'membership', this.form)
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
