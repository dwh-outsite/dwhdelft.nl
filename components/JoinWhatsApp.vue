<template>
  <div class="mx-auto container relative pb-16">
    <div class="h-32 absolute -top-16 w-full p-4">
      <div class="bg-white rounded shadow-xl w-full h-full flex justify-between items-center">
        <div class="text-2xl px-8 ">
          <WhatsAppLogo class="fill-current text-green-400 h-12 inline mr-4" />
          Stay up to date, join the <strong>Outsite Announcements</strong> WhatsApp group
        </div>
        <button class="bg-green-400 h-full block rounded-r px-8 text-white text-xl font-bold tracking-wider uppercase">
          Join Now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import WhatsAppLogo from '@/assets/images/whatsapp_logo.svg'

export default {
  components: {
    WhatsAppLogo
  }
}
</script>
