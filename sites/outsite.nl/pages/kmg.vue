<i18n lang="yaml">
en:
  title: Introduction Group
  description: Twice a year we organise our introduction groups. These groups are a chance to not only get to know
    the association but also to become close to other LGBT+ youth, all under supervision of two experienced Outsite
    members. During nine Thursday evenings, you will share coming out stories (if you want to), visit queer parties
    together and much more!
  sign_up: Sign up for the introduction group
  next: <strong>The next Introduction Group will start in March</strong>.
  form:
    availability: I'm available on
    availability_options:
      thursdays: Thursdays
      saturdays: Saturdays
      both: Both Thursdays and Saturdays
    success: We will contact you as soon as possible.
nl:
  title: Kennismakingsgroepen (KMG)
  description: Twee keer per jaar organiseert Outsite de KMG. In een kennismakingsgroep maak je onder begeleiding
    van twee ervaren leden kennis met de vereniging maar vooral ook met elkaar. Op negen donderdagavonden deel je
    met elkaar je coming-out verhalen (als je dat wil), je gaat langs een gay feest en nog veel meer!
  sign_up: Aanmelden voor de KMG
  next: <strong>De volgende KennisMakingsGroep start in maart</strong>.
  form:
    availability: Ik ben beschikbaar op
    availability_options:
      thursdays: Donderdagen
      saturdays: Zaterdagen
      both: Zowel donderdagen en zaterdagen
    success: We nemen zo snel mogelijk contact met je op!
</i18n>

<template>
  <div>
    <header>
      <Header small="true">
        <h1 class="text-4xl text-white font-normal">
          {{ $t('title') }}
        </h1>
      </Header>
    </header>

    <section class="container mx-auto pb-4 text-xl md:text-2xl leading-normal text-gray-800">
      <div class="md:w-2/3 mx-4 md:mx-auto">
        <p class="my-8 md:mt-0 md:mb-12">{{ $t('description') }}</p>
        <p class="mb-4 md:my-12" v-html="$t('next')"></p>
      </div>
    </section>

    <section id="form" class="bg-gray-200 pt-12 pb-12">
      <div class="mx-auto container">
        <h2 class="tracking-wide font-semibold uppercase text-2xl mx-2 text-center">
          {{ $t('sign_up') }}
        </h2>
        <div v-if="formStatus === 'finished'">
          <div class="mx-auto container px-4 my-8 flex justify-center">
            <div class="bg-white rounded shadow-lg p-8 md:pr-48 text-lg flex items-center">
              <div class="rounded-full w-16 h-16 p-3 bg-brand-400 text-white">
                <Zondicon icon="checkmark-outline" class="fill-current w-10" />
              </div>
              <div class="ml-4">
                <h4 class="font-semibold text-xl">{{ $t('forms.success.heading') }}</h4>
                <span class="text-gray-700">{{ $t('form.success') }}</span>
              </div>
            </div>
          </div>
        </div>
        <form v-if="formStatus !== 'finished'" class="md:w-2/3 mx-4 md:mx-auto mt-8 md:my-12" @submit="submit">
          <FormValidationMessage :errors="validationErrors" />
          <p class="form-element">
            <label class="required">{{ $t('forms.label.name') }}</label>
            <input v-model="form.name" :placeholder="$t('forms.placeholder.name')" type="text" required />
            <FormValidation :errors="validationErrors" name="name" />
          </p>
          <p class="form-element">
            <label class="required">{{ $t('forms.label.email') }}</label>
            <input v-model="form.email" :placeholder="$t('forms.placeholder.email')" type="email" required />
            <FormValidation :errors="validationErrors" name="email" />
          </p>
          <p class="form-element">
            <label class="required">{{ $t('forms.label.date_of_birth') }}</label>
            <input
              v-model="form.date_of_birth"
              :placeholder="$t('forms.placeholder.date_of_birth')"
              type="text"
              required
            />
            <FormValidation :errors="validationErrors" name="date_of_birth" />
          </p>
          <p class="form-element">
            <label>{{ $t('forms.label.phone_number') }}</label>
            <input v-model="form.phone_number" :placeholder="$t('forms.placeholder.phone_number')" type="text" />
            <FormValidation :errors="validationErrors" name="phone_number" />
          </p>
          <p class="form-element">
            <label>{{ $t('forms.label.residence') }}</label>
            <input v-model="form.city" :placeholder="$t('forms.placeholder.residence')" type="text" />
            <FormValidation :errors="validationErrors" name="residence" />
          </p>
          <p class="form-element">
            <label class="required">{{ $t('forms.label.language') }}</label>
            <label class="radio">
              <input v-model="form.language" type="radio" value="dutch" />
              {{ $t('forms.label.languages.dutch') }}
            </label>
            <label class="radio">
              <input v-model="form.language" type="radio" value="english" />
              {{ $t('forms.label.languages.english') }}
            </label>
            <label class="radio">
              <input v-model="form.language" type="radio" value="no_preference" />
              {{ $t('forms.label.languages.no_preference') }}
            </label>
            <FormValidation :errors="validationErrors" name="language" />
          </p>
          <p class="form-element">
            <label>{{ $t('forms.label.pronouns') }}</label>
            <input v-model="form.pronouns" :placeholder="$t('forms.placeholder.pronouns')" type="text" />
            <FormValidation :errors="validationErrors" name="pronouns" />
          </p>
          <p class="form-element">
            <label class="required">{{ $t('form.availability') }}</label>
            <label class="radio">
              <input v-model="form.availability" type="radio" value="thursdays" />
              {{ $t('form.availability_options.thursdays') }}
            </label>
            <label class="radio">
              <input v-model="form.availability" type="radio" value="saturdays" />
              {{ $t('form.availability_options.saturdays') }}
            </label>
            <label class="radio">
              <input v-model="form.availability" type="radio" value="both" />
              {{ $t('form.availability_options.both') }}
            </label>
            <FormValidation :errors="validationErrors" name="availability" />
          </p>
          <p class="form-element">
            <label>{{ $t('forms.label.remarks') }}</label>
            <textarea v-model="form.remarks" :placeholder="$t('forms.placeholder.remarks')"></textarea>
            <FormValidation :errors="validationErrors" name="remarks" />
          </p>
          <p class="mt-8 md:my-8 text-right">
            <button type="submit" class="button-pink">
              {{ $t('forms.buttons.sign_up') }}
            </button>
          </p>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

import ReMemberForm from '#/src/ReMemberForm'

export default {
  components: { Zondicon },
  data() {
    return {
      form: {
        name: '',
        email: '',
        date_of_birth: '',
        phone_number: '',
        city: '',
        language: this.$i18n.locale === 'nl' ? 'dutch' : 'english',
        pronouns: '',
        availability: 'both',
        remarks: '',
      },
      validationErrors: {},
      formStatus: 'start',
    }
  },
  methods: {
    submit(event) {
      event.preventDefault()

      this.formStatus = 'loading'

      new ReMemberForm('kmg')
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
