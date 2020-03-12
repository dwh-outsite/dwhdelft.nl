<template>
  <div class="">
    <div class="xl:h-32 w-full">
      <div class="bg-white rounded-lg shadow-xl h-full xl:inline-flex items-center">
        <div
          class="
            bg-blue-400 h-full block px-8 text-white text-xl font-bold tracking-wider uppercase
            flex items-center justify-center py-2 rounded-t-lg xl:rounded-t-none xl:rounded-l-lg
          "
        >
          <Zondicon icon="envelope" class="fill-current text-white h-16" />
        </div>
        <form
          id="mc-embedded-subscribe-form"
          @submit="submitForm()"
          action="https://dwhdelft.us3.list-manage.com/subscribe/post?u=8c9a6403988df86ce2cfd009e&amp;id=275d74c087"
          method="post"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div class="py-4 px-8 flex items-center justify-center text-black">
            <div>
              <div class="text-2xl mb-3"><slot></slot></div>
              <div class="flex justify-center">
                <input
                  v-model="email"
                  :placeholder="$t('forms.placeholder.email')"
                  type="email"
                  name="EMAIL"
                  class="bg-gray-200 rounded-lg block px-4 py-2 w-full mr-4"
                  required
                />
                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                  <input type="text" name="b_8c9a6403988df86ce2cfd009e_275d74c087" tabindex="-1" value="" />
                </div>
                <button class="bg-blue-400 px-4 py-2 rounded-lg text-white uppercase font-semibold tracking-wider">
                  {{ buttonText }}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  components: {
    Zondicon
  },
  props: ['buttonText', 'buttonTarget'],
  data() {
    return {
      email: ''
    }
  },
  methods: {
    submitForm() {
      setTimeout(() => {
        this.email = ''
      }, 3000)
    }
  }
}
</script>
