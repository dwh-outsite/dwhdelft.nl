<script setup>
const educators = (await useAsyncData(() => queryContent('educators').find())).data

const { image } = useDynamicImages(import.meta.glob('~/assets/images/photos/educators/*', { eager: true }))
const requireImage = (name) => image(name.toLowerCase())
</script>

<template>
  <div class="grid gap-6 text-base xl:grid-cols-2">
    <div v-for="educator in educators" :key="educator.name">
      <div class="items-center rounded-md bg-white p-4 shadow-lg md:flex md:space-x-6 md:rounded-full">
        <div class="mx-auto size-32 overflow-hidden rounded-full">
          <img :src="requireImage(educator.name)" class="h-full object-cover" />
        </div>
        <div class="relative flex flex-1 flex-col justify-between p-3">
          <div class="absolute z-0 -ml-6 pt-6 text-[10rem] text-brand-100">“</div>
          <div class="z-10 pt-2 text-xl">
            {{ educator.quote }}
          </div>
          <div>
            <span class="mr-1 font-bold uppercase tracking-wide text-brand-400" v-text="educator.name" />
            <span class="italic text-gray-500" v-text="educator[`pronouns_${$i18n.locale}`]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
