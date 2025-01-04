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

const { t } = useT()

const showForm = ref(false)

const form = useReMemberForm('whatsapp', {
  name: '',
  phone_number: '',
  date_of_birth: '',
})
</script>

<template>
  <div class="container relative mx-auto">
    <div class="-top-14 z-50 w-full p-4 text-center lg:absolute lg:h-28">
      <form
        class="size-full items-center justify-between overflow-hidden rounded-lg bg-white shadow-xl lg:inline-flex lg:rounded-full xl:w-5/6"
        @submit.prevent="form.submit()"
      >
        <div class="flex flex-1 items-center px-8 py-4 text-2xl">
          <WhatsAppLogo class="mr-4 h-32 fill-current text-green-400 md:h-20 lg:h-12" />

          <div v-if="!showForm">
            <Markdown :content="t('description')" class="-mb-4" />
          </div>

          <template v-if="showForm">
            <div v-if="form.state.value !== 'success'" class="w-full items-end text-left text-base md:flex">
              <p class="md:mx-2 md:flex-1">
                <label class="mb-1 block text-sm font-semibold uppercase tracking-wide">
                  {{ $t('forms.label.name') }}
                </label>
                <input
                  v-model="form.fields.name"
                  :placeholder="$t('forms.placeholder.name')"
                  type="text"
                  class="mb-1 block w-full rounded-lg bg-gray-200 px-3 py-1"
                  required
                />
                <ElementsFormValidationError :errors="form.validationErrors" name="name" />
              </p>
              <p class="md:mx-2 md:flex-1">
                <label class="mb-1 block text-sm font-semibold uppercase tracking-wide">
                  {{ $t('forms.label.phone_number') }}
                </label>
                <input
                  v-model="form.fields.phone_number"
                  :placeholder="$t('forms.placeholder.phone_number')"
                  type="text"
                  class="mb-1 block w-full rounded-lg bg-gray-200 px-3 py-1"
                  required
                />
                <ElementsFormValidationError :errors="form.validationErrors" name="phone_number" />
              </p>
              <p class="md:ml-2 md:flex-1">
                <label class="mb-1 block text-sm font-semibold uppercase tracking-wide">
                  {{ $t('forms.label.date_of_birth') }}
                </label>
                <input
                  v-model="form.fields.date_of_birth"
                  :placeholder="$t('forms.placeholder.date_of_birth')"
                  type="text"
                  class="mb-1 block w-full rounded-lg bg-gray-200 px-3 py-1"
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
          class="flex size-full items-center justify-center rounded-b bg-green-400 px-8 py-2 text-xl font-bold uppercase tracking-wider text-white lg:w-auto lg:rounded-b-none lg:rounded-r"
          @click="showForm = true"
        >
          <div>{{ t('button') }}</div>
        </button>
        <button
          v-else-if="form.state.value !== 'success'"
          :disabled="form.state.value === 'loading'"
          type="submit"
          class="flex size-full items-center justify-center rounded-b bg-green-400 px-8 py-2 text-xl font-bold uppercase tracking-wider text-white disabled:bg-green-300 lg:w-auto lg:rounded-b-none lg:rounded-r"
        >
          {{ form.state.value === 'loading' ? $t('forms.buttons.loading') : $t('forms.buttons.sign_up') }}
          <IconArrowThinRight class="ml-2 w-4" />
        </button>
      </form>
    </div>
  </div>
</template>
