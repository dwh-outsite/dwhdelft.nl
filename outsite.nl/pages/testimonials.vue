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

  <LayoutStraightSection contentBackgroundClass="!bg-brand-100" contentClass="pt-8 pb-16 space-y-8">
    <ElementsActionCard
      v-for="(testimonial, index) in testimonials"
      :key="testimonial.name"
      :title="testimonial.name"
      class="bg-white bg-hero-falling-triangles"
      :headerPosition="index % 2 == 0 ? 'left' : 'right'"
      contentClass="px-16 testimonial-bg-white-gradient-vertical"
    >
      <template #header>
        <img :src="imageOrDefault(testimonial.title)" class="object-cover w-full h-80 md:h-full md:w-60 object-top" />
      </template>

      {{ testimonial[`text_${locale}`] }}
    </ElementsActionCard>
  </LayoutStraightSection>
</template>

<style>
.testimonial-bg-white-gradient-vertical {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 35%,
    rgba(255, 255, 255, 1) 75%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
