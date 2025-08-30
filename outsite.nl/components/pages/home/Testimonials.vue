<i18n lang="yaml">
en:
  read_more: Read more
nl:
  read_more: Lees meer
</i18n>

<script setup>
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const { t, locale } = useT()

const { data: testimonials } = await useAsyncData(() => queryContent('testimonials').find())

const { image } = useDynamicImages(import.meta.glob('~/assets/images/photos/testimonials/*', { eager: true }))

const imageOrDefault = (name) => image(name.toLowerCase()) || image('default')
</script>

<template>
  <ElementsActionCard class="w-5/6 bg-hero-falling-triangles md:rounded-full xl:w-2/3" contentClass="p-0">
    <Carousel :autoplay="5000" :wrapAround="true">
      <Slide v-for="testimonial in testimonials" :key="testimonial.title">
        <div class="text-left md:flex">
          <div class="mx-auto mt-5 size-32 overflow-hidden rounded-full md:m-6 md:mr-5">
            <img :src="imageOrDefault(testimonial.title)" class="size-full object-cover" />
          </div>
          <div class="c-bg-white-gradient flex flex-1 items-center md:mr-12">
            <div class="relative flex flex-col justify-between px-8 pb-12 pt-0 md:p-3">
              <div class="absolute z-0 -ml-6 mt-8 text-[10rem] text-brand-100">“</div>
              <div class="z-10 mb-4 pt-4 text-lg leading-snug md:mb-1">
                {{ testimonial[`quote_${locale}`] }}
              </div>
              <div class="flex flex-col leading-none md:flex-row">
                <span class="mr-1 font-bold uppercase tracking-wide text-brand-450" v-text="testimonial.name" />
                <span
                  class="mr-6 text-sm font-semibold uppercase tracking-wide text-gray-500"
                  v-text="testimonial[`pronouns_${locale}`]"
                />
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <div class="relative">
          <div class="absolute bottom-4 right-6 z-10 flex items-center space-x-2 md:bottom-7 md:right-16">
            <Pagination class="!m-0" />
            <a
              :href="$localePath('testimonials')"
              class="block text-sm font-bold uppercase tracking-wide text-brand-400"
            >
              {{ t('read_more') }} &raquo;
            </a>
          </div>
        </div>
      </template>
    </Carousel>
  </ElementsActionCard>
</template>

<style scoped>
.c-bg-white-gradient {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 10%,
    rgba(255, 255, 255, 1) 90%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
