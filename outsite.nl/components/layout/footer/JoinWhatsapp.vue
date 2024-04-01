<i18n lang="yaml">
en:
  description: Stay up to date, join the **Outsite Announcements** WhatsApp group
  button: Join now
  success: We'll add you to the group as soon as possible!
nl:
  description: Blijf op de hoogte, join de **Outsite Announcements** WhatsApp groep
  button: Deelnemen
  success: We voegen je zo snel mogelijk toe aan de groep!
</i18n>

<script setup>
import { IconArrowThinRight } from '@iconify-prerendered/vue-zondicons'
import WhatsAppLogo from '#shared/assets/images/social/whatsapp_logo.svg'

defineProps({
  buttonText: { type: String, required: true },
  buttonTarget: { type: String, required: true },
})

const { t } = useT()

const showForm = ref(false)

const form = useReMemberForm('whatsapp', {
  name: '',
  phone_number: '',
  date_of_birth: '',
})
</script>

<template>
  <div class="mx-auto container relative">
    <div class="lg:h-28 lg:absolute z-50 -top-14 p-4 w-full text-center">
      <form
        class="bg-white rounded-lg lg:rounded-full shadow-xl overflow-hidden h-full lg:inline-flex justify-between items-center w-full xl:w-5/6"
        @submit.prevent="form.submit()"
      >
        <div class="text-2xl py-4 px-8 flex-1 flex items-center">
          <WhatsAppLogo class="fill-current text-green-400 h-32 md:h-20 lg:h-12 mr-4" />

          <div v-if="!showForm">
            <Markdown :content="t('description')" />
          </div>

          <template v-if="showForm">
            <div v-if="form.state.value !== 'success'" class="md:flex items-end text-base text-left w-full">
              <p class="md:flex-1 md:mx-2">
                <label class="uppercase text-sm tracking-wide font-semibold block mb-1 required">
                  {{ $t('forms.label.name') }}
                </label>
                <input
                  v-model="form.fields.name"
                  :placeholder="$t('forms.placeholder.name')"
                  type="text"
                  class="bg-gray-200 rounded-lg block px-3 py-1 w-full mb-1"
                  required
                />
                <ElementsFormValidationError :errors="form.validationErrors" name="name" />
              </p>
              <p class="md:flex-1 md:mx-2">
                <label class="uppercase text-sm tracking-wide font-semibold block mb-1 required">
                  {{ $t('forms.label.phone_number') }}
                </label>
                <input
                  v-model="form.fields.phone_number"
                  :placeholder="$t('forms.placeholder.phone_number')"
                  type="text"
                  class="bg-gray-200 rounded-lg block px-3 py-1 w-full mb-1"
                  required
                />
                <ElementsFormValidationError :errors="form.validationErrors" name="phone_number" />
              </p>
              <p class="md:flex-1 md:ml-2">
                <label class="uppercase text-sm tracking-wide font-semibold block mb-1 required">
                  {{ $t('forms.label.date_of_birth') }}
                </label>
                <input
                  v-model="form.fields.date_of_birth"
                  :placeholder="$t('forms.placeholder.date_of_birth')"
                  type="text"
                  class="bg-gray-200 rounded-lg block px-3 py-1 w-full mb-1"
                  required
                />
                <ElementsFormValidationError :errors="form.validationErrors" name="date_of_birth" />
              </p>
            </div>

            <div v-if="form.state.value == 'success'" class="text-left">
              <span class="block leading-tight">{{ $t('forms.success.heading') }}</span>
              <span class="block text-base" v-text="t('success')" />
            </div>
          </template>
        </div>
        <button
          v-if="!showForm"
          type="button"
          class="bg-green-400 h-full px-8 text-white text-xl font-bold tracking-wider uppercase flex items-center justify-center py-2 rounded-b lg:rounded-b-none lg:rounded-r w-full lg:w-auto"
          @click="showForm = true"
        >
          <div>{{ t('button') }}</div>
        </button>
        <button
          v-else-if="form.state.value !== 'success'"
          :disabled="form.state.value === 'loading'"
          type="submit"
          class="bg-green-400 h-full px-8 text-white text-xl font-bold tracking-wider uppercase flex items-center justify-center py-2 rounded-b lg:rounded-b-none lg:rounded-r w-full lg:w-auto disabled:bg-green-300"
        >
          {{ form.state.value === 'loading' ? $t('forms.buttons.loading') : $t('forms.buttons.sign_up') }}
          <IconArrowThinRight class="w-4 ml-2" />
        </button>
      </form>
    </div>
  </div>
</template>
