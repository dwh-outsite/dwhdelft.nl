<i18n lang="yaml">
en:
  form_success: GGD Haaglanden will call you as soon as possible.
  phone_description: |
    After your application, the Centre for Sexual Health will contact you by phone. 
    Please fill in your phone number:
  heard_about: How did you hear about this vaccination campaign?
  man_requirement: I am a man who has sex with men, bisexual, or sexually active in those circles
  location_requirement: I live in the Haaglanden area
  indications: Indications
  indications_description: |
    There is a limited amount of monkeypox vaccines available. For now, vaccines are only given to people 
    with increased risk of infection. Please select all statements that apply to you
  indication_options:
    - I have had an STD in the past six months
    - I have been warned about an STD by a partner in the last six months
    - I have had at least three different sexual partners in the last six months
  consent: |
    I agree that my personal data will be processed according to the privacy statement of DWH.
    I understand my personal data will be sent to GGD Haaglanden.
nl:
  form_success: GGD Haaglanden neemt zo snel mogelijk contact met je op.
  phone_description: |
    Na je aanmelding zal het Centrum Seksuele Gezondheid telefonisch contact opnemen. Geef hiervoor je 
    telefoonnummer op:
  heard_about: Hoe heb je over deze vaccinatie actie gehoord?
  man_requirement: Ik ben een man die seks heeft met mannen, biseksueel, of seksueel actief in die kringen
  location_requirement: Ik ben woonachtig in de regio Haaglanden
  indications: Indicaties
  indications_description: |
    Er is een beperkt aantal apenpokken vaccins beschikbaar, daarom worden voor nu enkel groepen met verhoogd
    risico gevaccineerd. Selecteer alle uitspraken die op jou van toepassing zijn:
  indication_options:
    - Ik heb in het afgelopen halfjaar een SOA gehad
    - Ik ben in het afgelopen halfjaar gewaarschuwd voor een SOA door een partner
    - Ik heb in het afgelopen halfjaar minstens 3 verschillende sekspartners gehad
  consent: |
    Ik ga akkoord met het verwerken van mijn gegevens volgens de privacyvoorwaarden van DWH.
    Ik begrijp dat mijn gegevens worden doorgestuurd naar GGD Haaglanden.
</i18n>

<template>
  <div>
    <div v-if="formStatus === 'finished'" class="my-8 flex justify-center">
      <FormCompleted class="bg-brand-100" :title="$t('forms.success.heading')" :subtitle="$t('form_success')" />
    </div>

    <form v-if="formStatus !== 'finished'" @submit="submit">
      <FormValidationMessage :errors="validationErrors" />

      <div class="md:flex md:space-x-4">
        <FormElement :label="$t('forms.label.name')" class="md:w-2/3" required="true">
          <FormInput v-model="form.name" :placeholder="$t('forms.placeholder.name')" />
          <FormValidation name="name" :errors="validationErrors" />
        </FormElement>
        <FormElement :label="$t('forms.label.pronouns')" class="flex-1">
          <FormInput v-model="form.pronouns" :placeholder="$t('forms.placeholder.pronouns')" />
          <FormValidation name="pronouns" :errors="validationErrors" />
        </FormElement>
      </div>

      <FormElement :label="$t('forms.label.phone_number')" required="true">
        <p class="leading-tight mb-2 text-base">{{ $t('phone_description') }}</p>
        <FormInput v-model="form.phone_number" :placeholder="$t('forms.placeholder.phone_number')" type="text" />
        <FormValidation name="phone_number" :errors="validationErrors" />
      </FormElement>

      <FormElement :label="$t('forms.label.email')" required="true">
        <FormInput v-model="form.email" :placeholder="$t('forms.placeholder.email')" type="email" />
        <FormValidation name="email" :errors="validationErrors" />
      </FormElement>

      <FormElement :label="$t('forms.label.date_of_birth')" required="true">
        <FormInput v-model="form.date_of_birth" :placeholder="$t('forms.placeholder.date_of_birth')" type="text" />
        <FormValidation name="date_of_birth" :errors="validationErrors" />
      </FormElement>

      <FormCheckbox v-model="form.man_requirement" :label="$t('man_requirement')" class="text-sm" />
      <FormValidation name="man_requirement" :errors="validationErrors" />

      <FormCheckbox v-model="form.location_requirement" :label="$t('location_requirement')" class="text-sm" />
      <FormValidation name="location_requirement" :errors="validationErrors" />

      <div class="form-element-gray">
        <label class="required">{{ $t('indications') }}</label>
        <p class="leading-tight mb-2 text-base">{{ $t('indications_description') }}</p>
        <div class="space-y-2">
          <div v-for="indication in $t('indication_options')" :key="indication">
            <div
              :class="[
                indications.includes(indication) ? 'bg-brand-400 text-white' : 'bg-white hover:bg-brand-200',
                'rounded px-3 py-2 flex items-center cursor-pointer shadow',
              ]"
              @click="toggleIndication(indication)"
            >
              {{ indication }}
            </div>
          </div>
        </div>
        <FormValidation name="indications" :errors="validationErrors" />
      </div>

      <FormElement :label="$t('heard_about')">
        <FormInput v-model="form.heard_about" :placeholder="$t('heard_about')" type="textarea" :rows="2" />
        <FormValidation name="heard_about" :errors="validationErrors" />
      </FormElement>

      <FormCheckbox v-model="form.consent" :label="$t('consent')" class="text-sm" />
      <FormValidation name="consent" :errors="validationErrors" />

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
        pronouns: '',
        email: '',
        phone_number: '',
        date_of_birth: '',
        heard_about: '',
        consent: false,
        man_requirement: false,
        location_requirement: false,
      },
      indications: [],
      validationErrors: {},
      formStatus: 'start',
    }
  },
  methods: {
    toggleIndication(indication) {
      if (this.indications.includes(indication)) {
        this.indications.splice(this.indications.indexOf(indication), 1)
      } else {
        this.indications.push(indication)
      }
    },
    submit(event) {
      event.preventDefault()

      this.formStatus = 'loading'

      new ReMemberForm('monkeypox')
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
