<script setup>
import DWHLogo from '#shared/assets/images/dwh_logo.svg'

defineProps({
  contactEmail: String,
  socials: Array,
  links: Array,
})
</script>

<template>
  <div>
    <hr class="border-gray-600 m-0" />

    <ElementsContainer class="py-4 lg:flex justify-between items-center">
      <div class="lg:flex">
        <div class="flex justify-center lg:justify-start">
          <a v-for="{ url, icon } in socials" :key="url" :href="url" target="_blank">
            <div class="rounded-full w-10 h-10 p-2 bg-white text-gray-700 mr-3 hover:bg-gray-300">
              <component :is="icon" class="fill-current w-6" />
            </div>
          </a>
        </div>
        <div class="sm:flex justify-center text-center lg:justify-start mt-4 lg:mt-0">
          <a
            v-for="{ url, name } in links"
            :key="url"
            :href="url"
            class="font-bold inline-flex items-center text-gray-400 hover:text-white mr-3"
          >
            {{ name }}
          </a>
        </div>
      </div>
      <a
        href="https://dwhdelft.nl"
        class="text-gray-400 hover:text-white text-xs lg:text-base flex items-center justify-center lg:justify-end pt-4 lg:pt-0"
      >
        <slot name="copyright" />
        <DWHLogo class="h-8 ml-2 fill-current" />
      </a>
    </ElementsContainer>
  </div>
</template>
