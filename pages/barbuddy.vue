<template>
  <div>
    <header>
      <Header small="true">
        <h1 class="text-4xl text-white font-normal">
          {{ $t('ways_to_join.bar_buddy.title') }}
        </h1>
      </Header>
    </header>

    <section class="container mx-auto pb-4 text-xl md:text-2xl leading-normal text-gray-800">
      <div class="md:w-2/3 mx-4 md:mx-auto">
        <p class="mt-8 mb-4 md:mt-0 md:mb-12" v-html="$t('ways_to_join.bar_buddy.description')" />
      </div>
    </section>

    <section class="bg-gray-200 pt-12 pb-12">
      <div class="mx-auto container">
        <h2 class="tracking-wide font-semibold uppercase text-2xl mx-2 text-center">
          {{ $t('ways_to_join.bar_buddy.sign_up') }}
        </h2>
        <form
          class="md:w-2/3 mx-4 md:mx-auto mt-8 md:my-12"
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
            <label class="required">{{ $t('forms.label.name') }}</label>
            <input type="text" name="name" :placeholder="$t('forms.placeholder.name')" required />
          </p>
          <p class="form-element">
            <label class="required">{{ $t('forms.label.email') }}</label>
            <input type="email" name="email" :placeholder="$t('forms.placeholder.email')" required />
          </p>
          <p class="form-element">
            <label class="required">{{ $t('forms.label.language') }}</label>
            <label class="radio">
              <input type="radio" name="language" value="dutch" :checked="$i18n.locale == 'nl'" />
              {{ $t('forms.label.languages.dutch') }}
            </label>
            <label class="radio">
              <input type="radio" name="language" value="english" :checked="$i18n.locale == 'en'" />
              {{ $t('forms.label.languages.english') }}
            </label>
            <label class="radio">
              <input type="radio" name="language" value="no_preference" />
              {{ $t('forms.label.languages.no_preference') }}
            </label>
          </p>
          <p class="form-element">
            <label>{{ $t('forms.label.remarks') }}</label>
            <textarea name="remarks" :placeholder="$t('forms.placeholder.remarks')"></textarea>
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
import Header from '~/components/Header'

export default {
  components: {
    Header
  }
}
</script>
