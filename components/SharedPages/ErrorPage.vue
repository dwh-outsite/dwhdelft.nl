<template>
  <div>
    <SmallHeader>{{ error.message }}</SmallHeader>

    <div class="container px-4 mx-auto md:flex justify-center flex-row-reverse items-center py-12">
      <div>
        <h2 class="font-semibold text-4xl mb-6">Oops, there's nothing here!</h2>
        <a href="/">
          <button class="block button-pink">&laquo; Go back to the homepage</button>
        </a>
      </div>
      <SadPanda class="max-w-full" />
    </div>
  </div>
</template>

<script>
import SadPanda from '#/assets/images/sad_panda.svg?inline'

export default {
  components: { SadPanda },
  props: ['error'],
}
</script>
