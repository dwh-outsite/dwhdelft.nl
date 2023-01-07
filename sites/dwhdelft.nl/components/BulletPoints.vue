<i18n lang="yaml">
en:
  bulletPoints:
    - title: Activism
      description: 'We are fighting for LGBT+ acceptance in the region of Delft, we do this by giving education at school and being in talks with the local and national government.'
      image: activism
    - title: Activities
      description: 'From eating with other members every monday to barnights on Saturday, DWH is a social gathering place for LGBT+ people.'
      image: activities
    - title: Events
      description: 'Throughout the year we organise a lot a big events, like purple friday, coming out day and since recently Delft Pride. These big events promote LHBT+ for greater audiences then ourselves.'
      image: bigevents
    - title: Social Contacts
      description: 'We’re one big family, you get to meet a lot of new people with diverse interests.
        So lots of people to talk to!'
      image: socialcontacts
nl:
  bulletPoints:
    - title: Activisme
      description: 'Wij zijn voorverchters voor LHBT+ rechten in Delft en omgeving, we doen dit door voorlichting te geven op scholen en in gesprek te zijn met de lokale en landelijke overheid.'
      image: activism
    - title: Activiteiten
      description: 'Van het samen eten met andere leden elke maandag tot de standaard barnachten op zaterdag, DWH is een sociale ontmoetingsplaats voor LHBT+ mensen.'
      image: activities
    - title: Evenementen
      description: 'Door het jaar heen organizeren we ook een tal grote activiteiten zoals paarse vrijdag, coming out day en sinds kort Delft Pride. Deze grote events promoten LHBT+ onder het grotere publiek dan alleen onszelf.'
      image: bigevents
    - title: Sociale Contacten
      description: 'Uiteindelijk zijn wij een grote familie, je leert in korte tijd vele mensen kennen, altijd wel
        iemand om mee te praten dus!'
      image: socialcontacts
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
