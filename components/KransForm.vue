<template>
  <div class="bg-white p-8 rounded-lg shadow-xl">
    <div class="rounded-full w-16 h-16 p-5 bg-purple-500 mb-8 text-white">
      <Zondicon icon="badge" class="fill-current" />
    </div>

    <h2 class="text-xl font-bold mb-4 text-purple-500 uppercase tracking-wider">
      Virtuele krans leggen
    </h2>

    <div v-if="state === 'present' || state === 'finished'">
      <div class="bg-purple-100 rounded p-4 text-lg flex items-center">
        <div class="rounded-full w-16 h-16 p-3 bg-purple-500 text-white">
          <Zondicon icon="checkmark-outline" class="fill-current w-10" />
        </div>
        <div class="ml-4">
          <h4 class="text-xl leading-tight">
            Bedankt! Je bent één van de kransleggers.
          </h4>
        </div>
      </div>
    </div>

    <form v-if="state == 'start' || state == 'loading'" @submit="submit">
      <p class="form-element-gray">
        <label class="required">{{ $t('forms.label.name') }}</label>
        <input v-model="form.name" :placeholder="$t('forms.placeholder.name')" type="text" required />
      </p>

      <p class="text-xs mb-4">
        Bij het verzenden van dit formulier geef je DWH toestemming om je naam op deze pagina te publiceren. Na afloop
        van de actie zullen je gegevens worden verwijderd. Neem voor vragen contact op via onderstaande gegevens.
      </p>

      <button :disabled="state === 'loading'" type="submit" class="button-pink">
        {{ state === 'loading' ? $t('forms.buttons.loading') : $t('forms.buttons.sign_up') }}
      </button>
    </form>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

import submitFormToFirebase from '~/modules/firebase-submitter'

export default {
  components: { Zondicon },
  data() {
    return {
      form: {
        name: ''
      },
      state: 'start'
    }
  },
  mounted() {
    this.state = window.localStorage.getItem('krans') ? 'present' : this.state
  },
  methods: {
    submit(event) {
      event.preventDefault()

      this.state = 'loading'

      submitFormToFirebase('-', 'krans2020', this.form)
        .then(() => {
          this.state = 'finished'
          localStorage.setItem('krans', true)
        })
        .catch(() => {
          alert('An error occurred. If this keeps happening, please send us an email.')
        })
    }
  }
}
</script>
