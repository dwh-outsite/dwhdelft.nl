<script setup>
import SadPanda from '~/assets/images/sad_panda.svg'

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="bg-white h-full w-screen">
    <ElementsContainer class="md:flex justify-center flex-row-reverse items-center py-12">
      <div>
        <h2 class="font-semibold text-4xl mb-6">Oops, there's nothing here!</h2>
        <ElementsPrimaryButton class="block" @click="handleError">
          &laquo; Go back to the homepage
        </ElementsPrimaryButton>
      </div>
      <SadPanda class="h-64 m-4 block" />
    </ElementsContainer>
  </div>
</template>
