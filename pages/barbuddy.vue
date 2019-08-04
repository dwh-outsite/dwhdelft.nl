<template>
  <div>
    <header>
      <Header small="true">
        <h1 class="text-4xl text-white font-normal">
          {{ $t('ways_to_join.bar_buddy.title') }}
        </h1>
      </Header>
    </header>

    <section class="container mx-auto text-center pb-20 text-2xl leading-normatext-grey-darkest">
      <p class="px-64 mb-8">{{ $t('ways_to_join.bar_buddy.description') }}</p>
    </section>

    <section class="bg-gray-200 pt-12 pb-12">
      <div class="mx-auto container">
        <h2 class="tracking-wide font-semibold uppercase text-2xl mx-2 text-center">Aanmelden voor een barbuddy</h2>
        <form
          class="w-2/3 mx-auto my-12"
          name="barbuddy"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <p class="hidden">
            <label>
              Don’t fill this out if you're human:
              <input name="bot-field" />
            </label>
          </p>
          <p class="form-element">
            <label class="required">Naam</label>
            <input type="text" name="name" placeholder="Naam" required />
          </p>
          <p class="form-element">
            <label class="required">E-mailadres</label>
            <input type="email" name="email" placeholder="E-mailadres" required />
          </p>
          <p class="form-element">
            <label class="required">Taal</label>
            <label class="radio">
              <input type="radio" name="language" value="dutch" checked />
              Nederlands
            </label>
            <label class="radio">
              <input type="radio" name="language" value="english" />
              Engels
            </label>
            <label class="radio">
              <input type="radio" name="language" value="no_preference" />
              Geen voorkeur
            </label>
          </p>
          <p class="form-element">
            <label>Heb je verder nog vragen?</label>
            <textarea name="remarks" placeholder="Opmerkingen of vragen"></textarea>
          </p>
          <p class="my-8 text-right">
            <button type="submit" class="button-pink">
              Aanmelden
            </button>
          </p>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  }
}
</script>

<style>
.form-element {
  @apply mb-4;
}

.form-element label:not(.radio) {
  @apply uppercase text-sm tracking-wide font-semibold block mb-1;
}

.form-element label.radio {
  @apply block mb-2;
}

.form-element label.radio input {
  @apply mr-1;
}

.form-element input:not([type='radio']),
.form-element textarea {
  @apply bg-white rounded-lg block px-4 py-3 w-full;
}

.required::after {
  @apply text-red-600;
  content: '*';
}
</style>
