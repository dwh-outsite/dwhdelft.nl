<template>
  <div>
    <header>
      <Header small="true">
        <h1 class="text-4xl text-white font-normal">
          {{ $t('ways_to_join.kmg.title') }}
        </h1>
      </Header>
    </header>

    <section class="container mx-auto text-center pb-20 text-2xl leading-normatext-grey-darkest">
      <p class="px-64 mb-8">{{ $t('ways_to_join.kmg.description') }}</p>
      <p class="px-64">De volgende KMG start in: <strong>september 2019</strong></p>
    </section>

    <section class="bg-gray-200 pt-12 pb-12">
      <div class="mx-auto container">
        <h2 class="tracking-wide font-semibold uppercase text-2xl mx-2 text-center">Aanmelden voor de KMG</h2>
        <form class="w-2/3 mx-auto my-12" name="kmg" method="POST" data-netlify="true">
          <p class="form-element">
            <label class="required">Naam</label>
            <input type="text" name="name" placeholder="Naam" required />
          </p>
          <p class="form-element">
            <label class="required">E-mailadres</label>
            <input type="email" name="email" placeholder="E-mailadres" required />
          </p>
          <p class="form-element">
            <label class="required">Geboortedatum</label>
            <input type="text" name="dateofbirth" placeholder="Geboortedatum" required />
          </p>
          <p class="form-element">
            <label>Telefoonnummer</label>
            <input type="text" name="phonenumber" placeholder="Telefoonnummer" />
          </p>
          <p class="form-element">
            <label>Woonplaats</label>
            <input type="text" name="city" placeholder="Woonplaats" />
          </p>
          <p class="form-element">
            <label>Heb je verder nog vragen?</label>
            <textarea name="remarks" placeholder="Opmerkingen of vragen"></textarea>
          </p>
          <p class="my-8 text-right">
            <button
              class="
                bg-pink-400 hover:bg-pink-200 px-4 py-2 rounded text-white uppercase font-semibold tracking-wider shadow
              "
            >
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

.form-element label {
  @apply uppercase text-sm tracking-wide font-semibold block mb-1;
}

.form-element input,
.form-element textarea {
  @apply bg-white rounded-lg block px-4 py-3 w-full;
}

.required::after {
  @apply text-red-600;
  content: '*';
}
</style>
