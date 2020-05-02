<template>
  <div>
    <header>
      <Header small="true">
        <div
          class="bg-white rounded-lg px-2 py-1 text-xs uppercase tracking-wider inline"
          v-text="'dodenherdenking 2020'"
        />
        <h1 class="text-4xl text-white font-normal mt-2">
          DWH Kranslegging
        </h1>
      </Header>
    </header>

    <section class="container mx-auto relative px-4">
      <div class="pb-16 md:w-2/3 m-auto">
        <p class="text-xl md:text-2xl md:text-center leading-normal text-gray-800 mb-12">
          <Krans class="w-4/5 md:w-1/2 mx-auto mt-4 md:mt-0 mb-8" />

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut dolor sed diam accumsan congue. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse eu lectus
          placerat nulla vehicula sollicitudin eget vitae mi.<br />
          <br />
          Duis rhoncus erat ut nisi aliquam ultricies. Phasellus vitae dui eu lorem lacinia viverra. Phasellus convallis
          bibendum diam, ac tincidunt augue fermentum auctor. Vestibulum consequat est augue, quis volutpat elit
          facilisis a. Sed vitae justo auctor sem laoreet scelerisque. Phasellus ultricies pharetra odio non rhoncus.
          Proin ipsum est, feugiat in purus at, aliquam vulputate neque.<br />
          <br />
          Nunc venenatis cursus efficitur. Cras odio quam, cursus id porta nec, elementum vitae nisi. Sed efficitur erat
          quis gravida facilisis. Sed laoreet felis id eleifend sodales. In hac habitasse platea dictumst. Proin feugiat
          dolor ac neque maximus placerat.
        </p>
        <div class="flex md:justify-center mb-4">
          <div class="bg-purple-100 rounded px-3 mr-2 tracking-wider flex items-center border border-purple-100">
            <Zondicon icon="user" class="fill-current h-4 inline mr-2 text-purple-500" />
            <div class="flex-1 py-2">
              Robert Baart
            </div>
          </div>
          <div class="bg-purple-100 rounded px-3 tracking-wider flex items-center border border-purple-100">
            <Zondicon icon="user" class="fill-current h-4 inline mr-2 text-purple-500" />
            <div class="flex-1 py-2">
              Niv Bharos
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="information relative pb-12 md:pb-20">
      <div class="mx-auto container px-4 md:flex flex-row-reverse">
        <div class="flex-1 pt-16 md:pl-16">
          <h2 class="text-white leading-none text-center md:text-left text-5xl mb-6 md:text-6xl menu-title">
            Leg samen een virtuele krans
          </h2>
          <p class="text-white text-xl">
            Dit jaar hebben wij niet de mogelijkheid om een fysieke krans te leggen, daarom vragen we jou om samen met
            ons een virtuele krans te leggen. Hieronder zie je de virtuele kransleggers waar jij je bij aansluit.
          </p>
          <div class="mt-2">
            <div class="flex flex-wrap justify-center md:justify-start">
              <div v-for="name in dwhBoard" :key="name" class="bg-white rounded tracking-wider mt-2 mr-2">
                <div class="px-3 flex items-center">
                  <Zondicon icon="user" class="fill-current h-4 inline mr-2 text-purple-500" />
                  <div v-text="name" class="flex-1 py-2" />
                </div>
                <div class="text-center bg-purple-200 text-xs rounded-b">Bestuur DWH</div>
              </div>
              <div v-for="name in outsiteBoard" :key="name" class="bg-white rounded tracking-wider mt-2 mr-2">
                <div class="px-3 flex items-center">
                  <Zondicon icon="user" class="fill-current h-4 inline mr-2 text-purple-500" />
                  <div v-text="name" class="flex-1 py-2" />
                </div>
                <div class="text-center bg-purple-200 text-xs rounded-b">Bestuur Outsite</div>
              </div>
            </div>
            <div class="flex flex-wrap justify-center md:justify-start">
              <div
                v-for="name in participants"
                :key="name"
                class="bg-white rounded px-3 tracking-wider flex items-center mt-2 mr-2"
              >
                <Zondicon icon="user" class="fill-current h-4 inline mr-2 text-purple-500" />
                <div v-text="name" class="flex-1 py-2" />
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-1/3 pt-8 md:pt-40">
          <KransForm />
        </div>
      </div>
    </section>

    <section class="my-12 md:mt-32 md:mb-24">
      <div class="container mx-auto px-4">
        <p class="md:w-2/3 mx-auto text-xl leading-normal md:text-center mb-4 md:mb-8">
          Vorig jaar, in 2019, legden toenmalig DWH voorzitter Michel Fleur en toenmalig Outsite voorzitter Casper Boone
          bloemen tijdens dodenherdenking in Delft namens DWH.
        </p>
        <div class="mx-auto bg-black rounded shadow-xl md:w-2/3">
          <div class="embed-responsive aspect-ratio-16/9">
            <iframe
              src="https://www.youtube.com/embed/hAlvDB_IUoU?start=42"
              class="embed-responsive-item rounded"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

import readFromFirebase from '~/modules/firebase-reader'

import Header from '~/components/Header'
import KransForm from '~/components/KransForm'

import Krans from '@/assets/images/krans.svg'

export default {
  components: {
    Zondicon,
    Header,
    KransForm,
    Krans
  },
  data() {
    return {
      eventDetails: this.$t('recurring_events.events').find(event => event.name === 'EatingOUT'),
      dwhBoard: ['Robert Baart', 'Nick van Loo', 'Quinten Star', 'Casper Boone', 'Jelle Vos', 'Jeroen'],
      outsiteBoard: ['Niv Bharos', 'Ivo Brands', 'Bouke Stoelinga', 'Eva Pelk'],
      participants: []
    }
  },
  mounted() {
    readFromFirebase('krans2020', participants => {
      this.participants = Object.values(participants).map(participant => participant.data['0_name'])
    })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Parisienne&display=swap');

.menu-title {
  font-family: 'Parisienne', cursive;
}

.information::before {
  @apply bg-purple-500 absolute w-full;
  height: 100%;
  transform: skewY(-7deg);
  content: '';
  z-index: -1;
  top: 0px;
}
</style>
