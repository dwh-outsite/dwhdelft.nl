<i18n lang="yaml">
en:
  title: Testimonials
nl:
  title: Ervaringen
</i18n>

<script setup>
const { t } = useT()

const { data: testimonials } = await useAsyncData(() => queryContent('testimonials').find())

const { image } = useDynamicImages(import.meta.glob('~/assets/images/photos/testimonials/*', { eager: true }))

const imageOrDefault = (name) => image(name.toLowerCase()) || image('default')
</script>

<template>
  <LayoutSmallHeader bg="bg-brand-100">{{ t('title') }}</LayoutSmallHeader>

  <section class="bg-brand-100 pt-8 pb-16">
    <ElementsContainer class="grid md:grid-cols-2 gap-8">
      <PagesTestimonialsTestimonialCard
        v-for="(testimonial, index) in testimonials"
        :key="testimonial.name"
        :image="imageOrDefault(testimonial.name)"
        :name="testimonial.name"
        :authorDescription="testimonial[`author_description_${$i18n.locale}`]"
      >
        {{ testimonial[`text_${$i18n.locale}`] }}
      </PagesTestimonialsTestimonialCard>
    </ElementsContainer>
  </section>
</template>
