<i18n lang="yaml">
en:
  title: Testimonials
nl:
  title: Ervaringen
</i18n>

<script setup>
const { t, locale } = useT()

const { data: testimonials } = await useAsyncData(() => queryContent('testimonials').find())

const { image } = useDynamicImages(import.meta.glob('~/assets/images/photos/testimonials/*', { eager: true }))

const imageOrDefault = (name) => image(name.toLowerCase()) || image('default')
</script>

<template>
  <LayoutSmallHeader bg="bg-brand-100">{{ t('title') }}</LayoutSmallHeader>

  <section class="bg-brand-100 pt-8 pb-16">
    <ElementsContainer class="space-y-8">
      <ElementsActionCard
        v-for="(testimonial, index) in testimonials"
        :key="testimonial.name"
        headerClass="overflow-hidden"
        :headerPosition="index % 2 == 0 ? 'left' : 'right'"
        :title="testimonial.name" 
        class="bg-white bg-hero-falling-triangles"
        contentClass="px-16"
      >
        <template #header>
          <img
            :src="imageOrDefault(testimonial.title)"
            class="object-cover w-full h-80 md:h-full md:w-60 object-top"
          />
        </template>

        <div class="bg-white-gradient-vertical">
          {{testimonial[`text_${locale}`]}}
        </div>
      </ElementsActionCard>
    </ElementsContainer>
  </section>
</template>

<style scoped>
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
