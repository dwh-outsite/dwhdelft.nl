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
        spelletjesavond, of cocktailworkshop
      image: activities
    - title: Sociale Contacten
      description: Uiteindelijk zijn wij een grote familie, je leert in korte tijd vele mensen kennen, altijd wel
        iemand om mee te praten dus!
      image: social
</i18n>

<template>
  <div class="container mx-auto px-4">
    <div class="md:flex -mx-3">
      <div
        v-for="point in $t('bulletPoints')"
        :key="point.title"
        class="flex-1 rounded-md bg-white mx-3 mb-4 shadow-lg"
      >
        <div class="">
          <div class="w-full h-40 rounded-t overflow-hidden mx-auto">
            <img
              :src="require(`#/assets/images/photos/bullets/bullet_${point.image}.png`)"
              class="object-cover w-full"
            />
          </div>
        </div>
        <div class="w-full p-6 pt-3">
          <div class="uppercase mx-auto font-bold tracking-wider text-2xl text-brand-400 mb-1">
            {{ point.title }}
          </div>
          <div class="text-gray-600 text-lg leading-snug">
            {{ point.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
