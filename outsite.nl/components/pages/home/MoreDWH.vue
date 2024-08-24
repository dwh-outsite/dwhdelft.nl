<i18n lang="yaml">
en:
  menu:
    - title: Home
      url: index
    - title: Bar Buddy
      url: barbuddy
    - title: Education
      url: /education
    - title: Jong&Out
      url: /jongenout
    - title: EatingOUT
      url: book
    - title: Andersblad
      url: andersblad
    - title: Contact
      url: '/contact'
nl:
  description: |
    Outsite is het jongerenonderdeel van DWH, de LHBT+ vereniging van Delft en omstreken.
    Naast Outsite organiseert DWH ook activiteiten voor alle leeftijden.
    Denk aan baravonden, voorlichtingen, feesten, eetgroepen en nog veel meer.
    Voor jongeren onder de 18 jaar organiseert DWH Jong&Out meetings.
  more: Check de DWH website
  activities:
    - title: Jong&Out
      description: |
        Jong&Out is de LHBT+ jongerenorganisatie voor jongeren tot en met 18 jaar. Elke maand
        organiseren we een meeting in Delft.
      link: https://jongenoutdelft.nl
      image: jongenout
    - title: MIXUP
      description: |
        MIXUP is dé queer baravond van Delft. Ontmoet nieuwe mensen, kom dansen bij een van onze
        feesten en doe mee met een van onze vele events!
      link: https://mixupdelft.nl
      image: mixup
    - title: Voorlichting
      description: |
        DWH geeft voorlichtingen over seksuele diversiteit en genderidentiteit op scholen en
        bij andere organisaties.
      link: https://dwhdelft.nl/education
      image: education
    - title: EatingOUT
      description: |
        Elke maandagavond zitten we gezellig rond de eettafel om van een maaltijd te genieten, bereid door
        één van onze leden, met soms een activiteit achteraf.
      link: https://dwhdelft.nl/book
      image: eatingout
</i18n>

<script setup>
import DWHLogo from '#shared/assets/images/dwh_logo.svg'

const { t } = useT()

const goToLink = (link) => {
  window.open(link, '_blank')
}

const { image: requireImage } = useDynamicImages(import.meta.glob('~/assets/images/photos/more-dwh/*', { eager: true }))
</script>

<template>
  <div class="md:flex md:space-x-16 space-y-6 md:space-y-0 -mb-8 md:mb-0">
    <div class="md:w-1/3 md:py-12 text-center md:text-left">
      <DWHLogo class="h-24 fill-current text-white mb-4 md:mb-10 mx-auto md:mx-0" />
      <p class="text-white text-xl mb-4 md:mb-12">{{ t('description') }}</p>
      <a href="https://dwhdelft.nl" class="block mx-auto">
        <ElementsSecondaryButton class="mx-auto md:mx-0" arrow>{{ t('more') }}</ElementsSecondaryButton>
      </a>
    </div>
    <div class="flex-1 grid md:grid-cols-2 gap-6">
      <ElementsActionCard
        v-for="activity in t('activities')"
        :key="activity.title"
        :title="activity.title"
        headerClass="h-40"
        clickable
        @click="goToLink(activity.link)"
      >
        <template #header>
          <img :src="requireImage(activity.image)" class="w-full h-full object-cover" />
        </template>
        <p class="-mt-3 text-gray-600 text-lg leading-snug">{{ activity.description }}</p>
      </ElementsActionCard>
    </div>
  </div>
</template>
