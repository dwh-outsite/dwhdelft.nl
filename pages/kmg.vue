<template>
  <div>
    <header>
      <Header small="true">
        <h1 class="text-4xl text-white font-normal">
          {{ $t('ways_to_join.kmg.title') }}
        </h1>
      </Header>
    </header>

    <section class="container mx-auto pb-4 text-xl md:text-2xl leading-normal text-gray-800">
      <div class="w-2/3 mx-auto">
        <p class="my-12 mb-8 mt-12 md:mt-0">{{ $t('ways_to_join.kmg.description') }}</p>
        <p class="my-12" v-html="$t('ways_to_join.kmg.next')"></p>
      </div>
    </section>

    <section class="bg-gray-200 pt-12 pb-12">
      <div class="mx-auto container">
        <h2 class="tracking-wide font-semibold uppercase text-2xl mx-2 text-center">
          {{ $t('ways_to_join.kmg.sign_up') }}
        </h2>
        <form class="w-2/3 mx-auto my-12" name="kmg" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <p class="hidden">
            <label>
              Don’t fill this out if you're human:
              <input name="bot-field" />
            </label>
          </p>
          <p class="form-element">
            <label class="required">{{ $t('forms.label.name') }}</label>
            <input type="text" name="name" :placeholder="$t('forms.placeholder.name')" required />
          </p>
          <p class="form-element">
            <label class="required">{{ $t('forms.label.email') }}</label>
            <input type="email" name="email" :placeholder="$t('forms.placeholder.email')" required />
          </p>
          <p class="form-element">
            <label class="required">{{ $t('forms.label.date_of_birth') }}</label>
            <input type="text" name="dateofbirth" :placeholder="$t('forms.placeholder.date_of_birth')" required />
          </p>
          <p class="form-element">
            <label>{{ $t('forms.label.phone_number') }}</label>
            <input type="text" name="phonenumber" :placeholder="$t('forms.placeholder.phone_number')" />
          </p>
          <p class="form-element">
            <label>{{ $t('forms.label.residence') }}</label>
            <input type="text" name="city" :placeholder="$t('forms.placeholder.residence')" />
          </p>
          <p class="form-element">
            <label>{{ $t('forms.label.remarks') }}</label>
            <textarea name="remarks" :placeholder="$t('forms.placeholder.remarks')"></textarea>
          </p>
          <p class="my-8 text-right">
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
import Header from '~/components/Header'

export default {
  components: {
    Header
  }
}
</script>
