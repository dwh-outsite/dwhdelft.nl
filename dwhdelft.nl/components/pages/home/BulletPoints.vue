<i18n lang="yaml">
en:
  bullet_points:
    - title: Activism
      description: We are fighting for LGBT+ acceptance in the region of Delft, we do this by speaking to local governments and organisations about their policy, and we participate with national actions for better trans care for LGBT+ refugees.
      image: activism
    - title: Community
      description: From eating with other members to barnights and parties, DWH is the place to be for the queer community to meet each other. Come visit a few times and quickly you know some people.
      image: community
    - title: Events
      description: Throughout the year we organise a lot a big events. Karoake's, drag shows and LAN parties for ourselves, but also Purple Friday or Coming Out Day, to promote the LGBT+ acceptance under the greater public.
      image: events
    - title: Support
      description: Next to all the fun activities, we are here to support each other. In our introductory group, young people can safely talk about their coming out stories, in the chats people can exchange advice about dating or their transition.
      image: support
nl:
  bullet_points:
    - title: Activisme
      description: Wij zijn voorvechters van LHBT+ rechten in onze regio. We spreken de lokale overheden en organisaties over hun beleid, en doen mee met landelijke acties voor betere trans zorg of opvang van LHBT+ vluchtelingen.
      image: activism
    - title: Community
      description: Van samen eten en board games tot baravonden en feesten, DWH is de place to be om als queer community elkaar te ontmoeten. Kom een paar keer langs en al snel is er altijd wel iemand die je kent.
      image: community
    - title: Evenementen
      description: Door het jaar heen organiseren we tal van activiteiten. Karaoke's, drag shows en LAN parties voor onszelf, maar ook Paarse Vrijdag of Coming-Outdag. Zo promoten we LHBT+ acceptatie onder het grotere publiek.
      image: events
    - title: Support
      description: Naast alle leuke activiteiten, zijn we er voor elkaar. In onze kennismakingsgroep praten jongeren veilig over hun coming out, en in de chatgroepen kan men advies uitwisselen over daten of hun transitie.
      image: support
</i18n>

<script setup>
const { t } = useT()

const { image } = useDynamicImages(import.meta.glob('~/assets/images/photos/bullets/*', { eager: true }))
const requireImage = (name) => image(`bullet_${name}`)
</script>

<template>
  <ElementsContainer>
    <div class="grid md:grid-cols-2 gap-6">
      <div v-for="point in t('bullet_points')" :key="point.title" class="flex-1 rounded-xl overflow-hidden shadow-lg">
        <div class="w-full h-80 overflow-hidden mx-auto relative">
          <div
            class="absolute z-50 top-0 left-0 p-6 uppercase font-bold tracking-wider text-2xl text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.45)]"
          >
            {{ point.title }}
          </div>
          <img :src="requireImage(point.image)" class="object-cover h-full w-full" />
          <div
            class="absolute bottom-0 left-0 flex flex-col justify-end w-full h-full md:h-2/3 bg-gradient-to-t from-gray-900 p-6"
          >
            <p class="text-white text-lg leading-snug">
              {{ point.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </ElementsContainer>
</template>
