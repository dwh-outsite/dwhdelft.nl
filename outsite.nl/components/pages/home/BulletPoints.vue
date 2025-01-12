<i18n lang="yaml">
en:
  bulletPoints:
    - title: Drinks
      description: 'We have drinks together every week. Whether it’s a gin and tonic, a beer, or something else
        it’s always fun!'
      image: drinks
    - title: Parties
      description: 'Be there or be square, every so often we transform the bar and organise a big party.'
      image: parties
    - title: Activities
      description: 'Throughout the year we organise a lot of activities, such as a karaoke, game
        night, or a cocktail workshop.'
      image: activities
    - title: Social Contacts
      description: 'We’re one big family, you get to meet a lot of new people with diverse interests.
        So lots of people to talk to!'
      image: social
nl:
  bulletPoints:
    - title: Borrels
      description: Elke week borrelen we met plezier met z’n allen. Of het nou een gin tonic is, een biertje, of
        een frisje, het is altijd gezellig.
      image: drinks
    - title: Feesten
      description: Wees bij of wees vierkant, af en toe transformeren wij de bar en organiseren wij een groots
        feest in ons pand.
      image: parties
    - title: Activiteiten
      description: Door het jaar heen organiseren we allerlei activiteiten, zoals een karaoke,
        spelletjesavond, of cocktailworkshop.
      image: activities
    - title: Sociale Contacten
      description: Uiteindelijk zijn wij een grote familie, je leert in korte tijd vele mensen kennen, altijd wel
        iemand om mee te praten dus!
      image: social
</i18n>

<script setup>
const { t } = useT()

const { image } = useDynamicImages(import.meta.glob('~/assets/images/photos/bullets/*', { eager: true }))
const bulletImage = (img) => image(`bullet_${img}`)
</script>

<template>
  <BulletPoints :bulletPoints="t('bulletPoints')" :image="bulletImage" />
</template>
