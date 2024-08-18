<script setup>
const educators = (await useAsyncData(() => queryContent('educators').find())).data

const { image } = useDynamicImages(import.meta.glob('~/assets/images/photos/educators/*', { eager: true }))
const requireImage = (name) => image(name.toLowerCase())
</script>

<template>
  <div class="grid xl:grid-cols-2 gap-6 text-base">
    <div v-for="educator in educators" :key="educator.name">
      <div class="md:flex items-center md:space-x-6 bg-white rounded-md md:rounded-full p-4 shadow-lg">
        <div class="w-32 h-32 rounded-full overflow-hidden mx-auto">
          <img :src="requireImage(educator.name)" class="object-cover h-full" />
        </div>
        <div class="flex-1 flex flex-col justify-between relative p-3">
          <div class="absolute text-[10rem] text-brand-100 -ml-6 pt-6 z-0">“</div>
          <div class="text-xl z-10 pt-2">
            {{ educator.quote }}
          </div>
          <div>
            <span class="uppercase tracking-wide font-bold text-brand-400 mr-1" v-text="educator.name" />
            <span class="text-gray-500 italic" v-text="educator[`pronouns_${$i18n.locale}`]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
