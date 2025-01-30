<i18n lang="yaml">
en:
  description: |
    Outsite is the youth department of DWH, the LGBTI+ association of Delft and surroundings.
    Besides Outsite, DWH also organizes activities for all ages.
    Think of bar nights, education, parties, eating groups and much more.
    For youth under 18, DWH organizes Jong&Out meetings.
  more: Check the DWH website
  activities:
    - title: Jong&Out
      description: |
        Jong&Out is the LGBTI+ youth organization for youth up to 18 years old. Every month
        we organize a meeting in Delft.
      link: https://jongenoutdelft.nl
      image: jongenout
    - title: MIXUP
      description: |
        MIXUP is the queer bar night of Delft. Meet new people, come dance at one of our
        parties and join one of our many events!
      link: https://mixupdelft.nl
      image: mixup
    - title: Education
      description: |
        DWH gives education about sexual diversity and gender identity at schools and
        other organizations.
      link: https://dwhdelft.nl/education
      image: education
    - title: EatingOUT
      description: |
        On Mondays we gather around the dinner table to enjoy a delicious meal cooked by one of our
        members, sometimes with an activity afterwards.
      link: https://dwhdelft.nl/eatingout
      image: eatingout
nl:
  description: |
    Outsite is het jongerenonderdeel van DWH, de LHBTI+ vereniging van Delft en omstreken.
    Naast Outsite organiseert DWH ook activiteiten voor alle leeftijden.
    Denk aan baravonden, voorlichtingen, feesten, eetgroepen en nog veel meer.
    Voor jongeren onder de 18 jaar organiseert DWH Jong&Out meetings.
  more: Check de DWH website
  activities:
    - title: Jong&Out
      description: |
        Jong&Out is de LHBTI+ jongerenorganisatie voor jongeren tot en met 18 jaar. Elke maand
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
      link: https://dwhdelft.nl/eatingout
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
  <div class="-mb-8 space-y-6 md:mb-0 md:flex md:space-x-16 md:space-y-0">
    <div class="text-center md:w-1/3 md:py-12 md:text-left">
      <DWHLogo class="mx-auto mb-4 h-24 fill-current text-white md:mx-0 md:mb-10" />
      <p class="mb-4 text-xl text-white md:mb-12">{{ t('description') }}</p>
      <a href="https://dwhdelft.nl" class="mx-auto block">
        <ElementsSecondaryButton class="mx-auto md:mx-0" arrow>{{ t('more') }}</ElementsSecondaryButton>
      </a>
    </div>
    <div class="grid flex-1 gap-6 md:grid-cols-2">
      <ElementsActionCard
        v-for="activity in t('activities')"
        :key="activity.title"
        :title="activity.title"
        headerClass="h-40"
        clickable
        @click="goToLink(activity.link)"
      >
        <template #header>
          <img :src="requireImage(activity.image)" class="size-full object-cover" />
        </template>
        <p class="-mt-3 text-lg leading-snug text-gray-600">{{ activity.description }}</p>
      </ElementsActionCard>
    </div>
  </div>
</template>
