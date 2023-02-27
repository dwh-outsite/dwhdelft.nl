<i18n lang="yaml">
en:
  bulletPoints:
    - title: Activism
      description: We are fighting for LGBT+ acceptance in the region of Delft, we do this by speaking to local governments and organisations about their policy, and we participate with national actions for better trans care for LGBT+ refugees.
      image: activism
    - title: Community
      description: From eating with other members to barnights and parties, DWH is the place to be for the queer community to meet each other. Come visit a few times and quickly you know some people.
      image: community
    - title: Events
      description: Throughout the year we organise a lot a big events. Karoake's, drag shows and LAN parties for ourselves, but also Purple Friday and since recently Delft Pride, to promote the LGBT+ acceptance under the greater public.
      image: events
    - title: Support
      description: Next to all the fun activities, we are here to support each other. In our introductory group, young people can safely talk about their coming out stories, in the chats people can exchange advice about dating or their transition.
      image: support
nl:
  bulletPoints:
    - title: Activisme
      description: Wij zijn voorvechters van LHBT+ rechten in onze regio. We spreken de lokale overheden en organisaties over hun beleid, en doen mee met landelijke acties voor betere trans zorg of opvang van LHBT+ vluchtelingen.
      image: activism
    - title: Community
      description: Van samen eten en board games tot baravonden en feesten, DWH is de place to be om als queer community elkaar te ontmoeten. Kom een paar keer langs en al snel is er altijd wel iemand die je kent.
      image: community
    - title: Evenementen
      description: Door het jaar heen organiseren we tal van activiteiten. Karaoke's, drag shows en LAN parties voor onszelf, maar ook Paarse Vrijdag en sinds kort Delft Pride, zo promoten we LHBT+ acceptatie onder het grotere publiek.
      image: events
    - title: Support
      description: Naast alle leuke activiteiten, zijn we er voor elkaar. In onze kennismakingsgroep praten jongeren veilig over hun coming out, en daarnaast in de chatgroepen kan men advies uitwisselen over daten of hun transitie.
      image: support
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
