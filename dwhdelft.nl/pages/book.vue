<i18n lang="yaml">
en:
  title: Reservations
  intro:
    title: Welcome!
    body: |
      For some of our activities, we kindly ask you to make a reservation.
      On this page, you can book a spot at one of our events.
      We will confirm your reservation by email.
      In case you're not able to join the event, please cancel the reservation through the cancelation link in the confirmation email.
  title_label: Events
  canceled: Your reservation is cancelled. If you want, you can make a new reservation down below.
nl:
  title: Reserveren
  intro:
    title: Welkom!
    body: |
      Voor sommige van onze activiteiten vragen we je vooraf te reserveren.
      Op deze pagina kun je je reservering maken.
      Je krijgt per e-mail een bevestiging van je reservering.
      Mocht je onverhoopt toch niet kunnen komen, dan vragen we je je vriendelijk je reservering weer te annuleren via de link in de bevestigingsmail.
  title_label: Events
  canceled: Je reservering is geannuleerd. Indien gewenst kun je hieronder een nieuwe reservering plaatsen.
</i18n>

<script setup>
import { IconInformationOutline } from '@iconify-prerendered/vue-zondicons'

const { t } = useT()

const route = useRoute()

onMounted(() => {
  window.addEventListener('message', (event) => {
    if (event.data.source === 'size_alert') {
      const asd = document.querySelector('iframe')
      asd.height = event.data.height
      asd.width = event.data.width
    }
  })
})
</script>

<template>
  <LayoutSmallHeader bg="bg-brand-450">{{ t('title') }}</LayoutSmallHeader>

  <section class="relative bg-brand-450">
    <ElementsContainer class="py-8 lg:flex">
      <div class="flex-1 lg:pr-16">
        <div v-if="route.query.canceled" class="mb-6 flex items-center space-x-4 rounded bg-brand-100 p-4 text-lg">
          <ElementsIconCircle class="p-5">
            <IconInformationOutline class="size-6" />
          </ElementsIconCircle>
          <h4 class="text-xl leading-tight" v-text="t('canceled')" />
        </div>

        <h1 class="mb-6 text-6xl font-bold text-white" v-text="t('intro.title')" />
        <p class="text-lg leading-normal text-white" v-text="t('intro.body')" />
      </div>

      <div class="lg:w-1/2">
        <iframe class="w-full lg:-mt-72" src="http://localhost:5173" />
      </div>
    </ElementsContainer>
  </section>
</template>
