<i18n lang="yaml">
en:
  description: Stay up to date, join the <strong>Outsite Announcements</strong> WhatsApp group
  button: Join now
  success: We'll add you to the group as soon as possible!
nl:
  description: Blijf op de hoogte, join de <strong>Outsite Announcements</strong> WhatsApp groep
  button: Deelnemen
  success: We voegen je zo snel mogelijk toe aan de groep!
</i18n>

<template>
  <div class="mx-auto container relative">
    <div class="xl:h-28 xl:absolute z-50 -top-14 p-4 w-full text-center">
      <form
        class="bg-white rounded shadow-xl h-full xl:inline-flex justify-between items-center xl:w-5/6"
        @submit="submitForm"
      >
        <div class="text-2xl py-4 px-8 flex-1 flex items-center">
          <WhatsAppLogo class="fill-current text-green-400 h-32 md:h-20 xl:h-12 mr-4" />

          <div v-if="state == 'cta'" v-html="$t('description')" />

          <div v-if="state == 'form'" class="md:flex items-end text-base text-left w-full">
            <p class="md:flex-1 md:mx-2">
              <label class="uppercase text-sm tracking-wide font-semibold block mb-1 required">
                {{ $t('forms.label.name') }}
              </label>
              <input
                v-model="form.name"
                :placeholder="$t('forms.placeholder.name')"
                type="text"
                class="bg-gray-200 rounded-lg block px-3 py-1 w-full mb-1"
                required
              />
              <FormValidation :errors="validationErrors" name="name" />
            </p>
            <p class="md:flex-1 md:mx-2">
              <label class="uppercase text-sm tracking-wide font-semibold block mb-1 required">
                {{ $t('forms.label.phone_number') }}
              </label>
              <input
                v-model="form.phone_number"
                :placeholder="$t('forms.placeholder.phone_number')"
                type="text"
                class="bg-gray-200 rounded-lg block px-3 py-1 w-full mb-1"
                required
              />
              <FormValidation :errors="validationErrors" name="phone_number" />
            </p>
            <p class="md:flex-1 md:ml-2">
              <label class="uppercase text-sm tracking-wide font-semibold block mb-1 required">
                {{ $t('forms.label.date_of_birth') }}
              </label>
              <input
                v-model="form.date_of_birth"
                :placeholder="$t('forms.placeholder.date_of_birth')"
                type="text"
                class="bg-gray-200 rounded-lg block px-3 py-1 w-full mb-1"
                required
              />
              <FormValidation :errors="validationErrors" name="date_of_birth" />
            </p>
          </div>

          <div v-if="state == 'success'" class="text-left">
            <span class="block leading-tight">{{ $t('forms.success.heading') }}</span>
            <span class="block text-base" v-text="$t('success')" />
          </div>
        </div>
        <button
          v-if="state == 'cta'"
          type="button"
          class="bg-green-400 h-full px-8 text-white text-xl font-bold tracking-wider uppercase flex items-center justify-center py-2 rounded-b xl:rounded-b-none xl:rounded-r w-full xl:w-auto"
          @click="state = 'form'"
        >
          <div>{{ $t('button') }}</div>
        </button>
        <button
          v-if="state == 'form'"
          :disabled="formStatus === 'loading'"
          type="submit"
          class="bg-green-400 h-full px-8 text-white text-xl font-bold tracking-wider uppercase flex items-center justify-center py-2 rounded-b xl:rounded-b-none xl:rounded-r w-full xl:w-auto disabled:bg-green-300"
        >
          {{ formStatus === 'loading' ? $t('forms.buttons.loading') : $t('forms.buttons.sign_up') }}
          <Zondicon icon="arrow-thin-right" class="w-4 ml-2 fill-current" />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'
import WhatsAppLogo from '#/assets/images/social/whatsapp_logo.svg?inline'
import ReMemberForm from '#/src/ReMemberForm'
import FormValidation from '#/components/Form/FormValidation'

export default {
  components: {
    WhatsAppLogo,
    Zondicon,
    FormValidation,
  },
  props: ['buttonText', 'buttonTarget'],
  data() {
    return {
      state: 'cta',
      formStatus: 'ready',
      form: {
        name: '',
        phone_number: '',
        date_of_birth: '',
      },
      validationErrors: {},
    }
  },
  methods: {
    submitForm(event) {
      event.preventDefault()

      this.formStatus = 'loading'

      new ReMemberForm('whatsapp')
        .submit(this.form)
        .then(() => {
          this.state = 'success'
        })
        .catch((validationError) => {
          this.validationErrors = validationError.errors()
        })
        .finally(() => {
          this.formStatus = 'ready'
        })
    },
  },
}
</script>
