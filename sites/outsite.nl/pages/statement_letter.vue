<i18n lang="yaml">
en:
  title: Letter from the board
nl:
  title: Brief van het bestuur
</i18n>

<template>
  <div>
    <header>
      <SmallHeader>
        <h1 class="text-4xl text-white font-normal">
          {{ $t('title') }}
        </h1>
      </SmallHeader>
    </header>

    <section class="container mx-auto pb-4 text-xl md:text-2xl leading-normal text-gray-800">
      <div class="md:w-2/3 mx-4 md:mx-auto">
        <form v-if="formStatus !== 'finished'" class="md:w-2/3 mx-4 md:mx-auto mt-8 md:my-12" @submit="submit">
          <p>Dear Outsite members,</p>
          <br />
          <p>Here is an announcement about safe and responsible alcohol consumption, please read it carefully.</p>
          <br />
          <p>
            To our regret, we have noticed an increased amount of incidents caused by alcohol consumption, both during
            our barnights as well independent activities organised by our members.
          </p>
          <p>
            We as board take these matters very seriously. We care about our members and their safety, especially for
            activities where mostly Outsite folks are participating, may this be officially organised by Outiste or not.
            For this reason, we want to open a conversation on what we can improve as an association, as well as
            individual members, to create a safer space and avoid accidents as much as possible. Do you have any ideas,
            is there something you would like to talk about?
          </p>
          <br />
          <FormElement :label="'Do you have any questions or remarks?'">
            <FormInput v-model="form.remarks_question_1" :placeholder="form.placeholder" type="textarea" />
            <FormValidation name="remarks" :errors="validationErrors" />
          </FormElement>
          <br />
          <p>
            Additionally, we always want to create a space where people feel welcome and accepted, and that also means
            not feeling the need to consume alcohol in order to blend in and socialise. When we attend the barnights, we
            have the responsibility of being aware of people who cannot or choose not to consume alcoholic beverages: be
            respectful, welcoming and do not create uncomfortable situations. And maybe let's ask ourselves: do I feel
            pressured to drink to be able to socialise?
          </p>
          <br />
          <FormElement :label="'Do you have any questions or remarks?'">
            <FormInput v-model="form.remarks_question_2" :placeholder="form.placeholder" type="textarea" />
            <FormValidation name="remarks" :errors="validationErrors" />
          </FormElement>
          <br />
          <p>
            If you are struggling with alcohol consumption, peer /social pressure, uncomfortable situations, incidents,
            or anything else related to alcohol, please contact one of the board members or one of our confidential
            persons.
          </p>
          <br />
          <p>We are now asking ourselves the following questions:</p>
          <p>
            How do you prevent alcohol intoxication? When do you know it's time to stop? How can you most effectively
            look out for your fellows? How do you refuse alcohol from and to your friends? How do you prevent spiking?
            What do you do if your drink has been spiked? What do you do when you or someone with you is sick or
            unresponsive because of alcohol or other substances? When is it time to call an ambulance? When is it not
            safe to leave someone alone?
          </p>
          <br />
          <FormElement :label="'Do you have any questions or remarks?'">
            <FormInput v-model="form.remarks_question_3" :placeholder="form.placeholder" type="textarea" />
            <FormValidation name="remarks" :errors="validationErrors" />
          </FormElement>
          <br />
          <p>I invite you to think along with us and see if we can find an answer to all of these.</p>
          <br />
          <p>Yours truly,</p>
          <br />
          <p>Enri | Outsite secretary</p>
          <p>on behalf of the board of Outsite</p>
          <div class="flex justify-end mt-8">
            <PrimaryButton :disabled="formStatus === 'loading'" type="submit">
              {{ formStatus === 'loading' ? 'Loading' : 'Submit' }}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import ReMemberForm from '#/src/ReMemberForm'

export default {
  props: ['statementLetter', 'selected'],
  data() {
    return {
      form: {
        language: this.$i18n.locale === 'nl' ? 'dutch' : 'english',
        remarks_question_1: '',
        remarks_question_2: '',
        remarks_question_3: '',
        placeholder: 'Questions or remarks',
      },
      validationErrors: {},
      formStatus: 'start',
    }
  },
  watch: {
    selected() {
      this.form.statementLetter = this.selected.name
    },
  },
  methods: {
    submit(event) {
      event.preventDefault()

      this.formStatus = 'loading'

      new ReMemberForm('statementLetter')
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
