<template>
  <div class="mx-auto container relative">
    <div class="md:h-28 md:absolute -top-14 p-4 w-full text-center">
      <div class="bg-white rounded shadow-xl h-full md:inline-flex justify-between items-center">
        <div class="text-2xl py-4 px-8 flex items-center">
          <WhatsAppLogo class="fill-current text-green-400 h-32 md:h-12 mr-4" />
          <div><slot></slot></div>
        </div>
        <a
          :href="buttonTarget"
          target="_blank"
          class="
            bg-green-400 h-full block px-8 text-white text-xl font-bold tracking-wider uppercase
            flex items-center justify-center py-2 rounded-b md:rounded-b-none md:rounded-r 
          "
        >
          <div>{{ buttonText }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import WhatsAppLogo from '@/assets/images/whatsapp_logo.svg'

export default {
  props: ['button-text', 'button-target'],
  components: {
    WhatsAppLogo
  }
}
</script>
