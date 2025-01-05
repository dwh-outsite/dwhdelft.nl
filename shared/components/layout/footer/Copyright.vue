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
    <hr class="m-0 border-gray-600" />

    <ElementsContainer class="items-center justify-between py-4 lg:flex">
      <div class="lg:flex">
        <div class="flex justify-center lg:justify-start">
          <a v-for="{ url, icon } in socials" :key="url" :href="url" target="_blank">
            <div class="mr-3 size-10 rounded-full bg-white p-2 text-gray-700 hover:bg-gray-300">
              <component :is="icon" class="w-6 fill-current" />
            </div>
          </a>
        </div>
        <div class="mt-4 justify-center text-center sm:flex lg:mt-0 lg:justify-start">
          <a
            v-for="{ url, name } in links"
            :key="url"
            :href="url"
            class="mr-3 inline-flex items-center font-bold text-gray-400 hover:text-white"
          >
            {{ name }}
          </a>
        </div>
      </div>
      <a
        href="https://dwhdelft.nl"
        class="flex items-center justify-center pt-4 text-xs text-gray-400 hover:text-white lg:justify-end lg:pt-0 lg:text-base"
      >
        <slot name="copyright" />
        <DWHLogo class="ml-2 h-8 fill-current" />
      </a>
    </ElementsContainer>
  </div>
</template>
