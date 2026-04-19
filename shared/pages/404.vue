<script setup>
import SadPanda from '~/assets/images/sad_panda.svg'

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="h-full w-screen bg-white">
    <ElementsContainer class="flex-row-reverse items-center justify-center py-12 md:flex">
      <div>
        <h2 class="mb-6 text-4xl font-semibold">Oops, there's nothing here!</h2>
        <ElementsPrimaryButton class="block" @click="handleError">
          &laquo; Go back to the homepage
        </ElementsPrimaryButton>
      </div>
      <SadPanda class="m-4 block h-64" />
    </ElementsContainer>
  </div>
</template>
