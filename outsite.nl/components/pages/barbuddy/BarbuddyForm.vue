<i18n lang="yaml">
en:
  success: The bar buddy you selected will contact you as soon as possible.
nl:
  success: Je barbuddy neemt zo snel mogelijk contact met je op.
</i18n>

<script setup>
const { t, locale } = useT()

const props = defineProps({
  barBuddies: { type: Array, required: true },
})

const form = useReMemberForm('barbuddy', {
  name: '',
  age: '',
  language: locale.value === 'nl' ? 'dutch' : 'english',
  email: '',
  phone_number: '',
  pronouns: '',
  barbuddy: 'no_preference',
  remarks: '',
})

const formElement = ref(null)
const submit = async () => {
  await form.submit()
  window.scrollTo({ top: formElement.value.offsetTop, behavior: 'smooth' })
}

const barBuddyOptions = Object.fromEntries(props.barBuddies.map((buddy) => [buddy.name, buddy.name]))
</script>

<template>
  <ElementsFormSuccessMessage v-if="form.state.value === 'success'" class="md:pr-48" :title="$t('forms.success.heading')" :subtitle="t('success')" />

  <form v-else ref="formElement" @submit.prevent="submit">
    <ElementsFormValidationErrorMessage :errors="form.validationErrors" />

    <ElementsFormElement name="name" :errors="form.validationErrors" required>
      <ElementsFormTextInput v-model="form.fields.name" />
    </ElementsFormElement>

    <ElementsFormElement name="age" :errors="form.validationErrors" required>
      <ElementsFormTextInput v-model="form.fields.age" />
    </ElementsFormElement>

    <ElementsFormElement name="email" :errors="form.validationErrors" required>
      <ElementsFormTextInput v-model="form.fields.email" type="email" />
    </ElementsFormElement>

    <ElementsFormElement name="phone_number" :errors="form.validationErrors">
      <ElementsFormTextInput v-model="form.fields.phone_number" />
    </ElementsFormElement>

    <ElementsFormElement name="language" :errors="form.validationErrors">
      <ElementsFormRadioInput
        v-model="form.fields.language"
        :options="{
          dutch: $t('forms.label.languages.dutch'),
          english: $t('forms.label.languages.english'),
          no_preference: $t('forms.label.languages.no_preference'),
        }"
      />
    </ElementsFormElement>

    <ElementsFormElement name="pronouns" :errors="form.validationErrors">
      <ElementsFormTextInput v-model="form.fields.pronouns" />
    </ElementsFormElement>

    <ElementsFormElement name="barbuddy" :errors="form.validationErrors">
      <ElementsFormRadioInput
        v-model="form.fields.barbuddy"
        :options="{
          no_preference: $t('forms.label.languages.no_preference'),
          ...barBuddyOptions,
        }"
      />
    </ElementsFormElement>

    <ElementsFormElement name="remarks" :errors="form.validationErrors">
      <ElementsFormTextInput v-model="form.fields.remarks" type="textarea" />
    </ElementsFormElement>

    <ElementsPrimaryButton type="submit" class="block ml-auto">
      {{ $t('forms.buttons.sign_up') }}
    </ElementsPrimaryButton>
  </form>
</template>
