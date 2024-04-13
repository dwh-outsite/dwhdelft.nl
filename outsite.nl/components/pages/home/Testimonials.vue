<i18n lang="yaml">
en:
  read_more: Read more
nl:
  read_more: Lees meer
</i18n>

<script setup>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel/dist/carousel.es.js'

const { t, locale } = useT()

const { data: testimonials } = await useAsyncData(() => queryContent('testimonials').find())

const { image } = useDynamicImages(import.meta.glob('~/assets/images/photos/testimonials/*', { eager: true }))

const imageOrDefault = (name) => image(name.toLowerCase()) || image('default')
</script>

<template>
  <ElementsActionCard class="md:!rounded-full bg-hero-falling-triangles w-5/6 xl:w-2/3" contentClass="p-0">
    <Carousel :autoplay="5000" :wrapAround="true">
      <Slide v-for="testimonial in testimonials" :key="testimonial.title">
          <div class="md:flex text-left">
            <div class="w-32 h-32 rounded-full mx-auto mt-5 md:m-6 md:mr-5 overflow-hidden">
              <img :src="imageOrDefault(testimonial.title)" class="object-cover h-full w-full" />
            </div>
            <div class="flex-1 flex items-center bg-white-gradient md:mr-12">
              <div class="flex flex-col justify-between relative px-8 pb-12 pt-0 md:p-3">
                <div class="absolute text-[10rem] text-brand-100 -ml-6 mt-8 z-0">“</div>
                <div class="text-lg leading-snug z-10 pt-4 mb-4 md:mb-1">
                  {{ testimonial[`quote_${locale}`] }}
                </div>
                <div class="flex flex-col md:flex-row leading-none">
                  <span class="uppercase tracking-wide font-bold text-brand-450 mr-1" v-text="testimonial.name" />
                  <span class="uppercase tracking-wide text-gray-500 text-sm font-semibold mr-6" v-text="testimonial[`pronouns_${locale}`]" />
                </div>
              </div>
            </div>
          </div>
      </Slide>

      <template #addons>
        <div class="relative">
          <div class="absolute right-6 md:right-16 bottom-4 md:bottom-7 z-10 flex items-center space-x-2">
            <Pagination class="!m-0" />
            <a :href="localePath('testimonials')" class="block text-brand-400 font-bold tracking-wide uppercase text-sm"> {{ t('read_more') }} &raquo; </a>
          </div>
        </div>
      </template>
    </Carousel>
  </ElementsActionCard>
</template>


<style scoped>
.bg-white-gradient {
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
