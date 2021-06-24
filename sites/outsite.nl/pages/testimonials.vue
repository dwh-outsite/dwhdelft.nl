<i18n lang="yaml">
en:
  title: Testimonials
nl:
  title: Ervaringen
</i18n>

<template>
  <div>
    <header>
      <Header small="true" bg="bg-brand-100">
        <h1 class="text-4xl text-white font-normal">
          {{ $t('title') }}
        </h1>
      </Header>
    </header>

    <section class="bg-brand-100 pt-8">
      <div class="container mx-auto px-4 pb-10 flex flex-wrap justify-center">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="md:w-1/2 mb-8">
          <div class="md:mx-4 h-full bg-white relative rounded-lg bg-hero-falling-triangles py-6 shadow-xl">
            <div class="w-48 h-48 rounded-full overflow-hidden mx-auto">
              <img :src="requireImage(testimonial.name)" class="object-cover h-full" />
            </div>
            <div class="bg-white-gradient-vertical">
              <div class="text-center py-6 text-xl">
                <div class="uppercase tracking-wide font-bold text-brand-400 mr-1" v-text="testimonial.name" />
                <div class="text-gray-500 italic" v-text="testimonial[`author_description_${$i18n.locale}`]" />
              </div>
              <div class="flex px-8 md:px-12 pb-6 leading-snug">
                <div class="absolute text-mega text-brand-100 -ml-8 -mt-20 pt-2 z-0">“</div>
                <div class="text-xl z-20 pt-2" v-text="testimonial[`text_${$i18n.locale}`]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, app }) {
    return { testimonials: await $content('testimonials').fetch() }
  },
  methods: {
    requireImage(name) {
      try {
        return require(`#/assets/images/photos/testimonials/${name.toLowerCase()}.png`)
      } catch (e) {
        return require(`#/assets/images/photos/testimonials/default.png`)
      }
    },
  },
}
</script>

<style scoped>
.page-ender::before {
  @apply bg-gray-200 absolute w-full;
  height: 40rem;
  transform: skewY(-7deg);
  content: '';
  z-index: -1;
  bottom: 0px;
}

.bg-white-gradient-vertical {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 15%,
    rgba(255, 255, 255, 1) 80%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
