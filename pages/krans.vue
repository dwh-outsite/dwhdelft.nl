<template>
  <div>
    <header>
      <Header small="true">
        <div
          v-text="$t('remembrance_day.title_label')"
          class="bg-white rounded-lg px-2 py-1 text-xs uppercase tracking-wider inline"
        />
        <h1 v-text="$t('remembrance_day.title')" class="text-4xl text-white font-normal mt-2" />
      </Header>
    </header>

    <section class="container mx-auto relative px-4">
      <div class="pb-16 md:w-2/3 m-auto">
        <Krans class="w-4/5 md:w-1/2 mx-auto mt-4 md:mt-0 mb-8" />
        <p
          v-html="$t('remembrance_day.description')"
          class="text-xl md:text-center leading-normal text-gray-800 mb-12"
        />
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
          <h2
            v-text="$t('remembrance_day.wreath_laying.title')"
            class="text-white leading-none text-center md:text-left text-5xl mb-6 md:text-6xl menu-title"
          />
          <p v-text="$t('remembrance_day.wreath_laying.description')" class="text-white text-xl" />
          <div class="mt-2">
            <div class="flex flex-wrap justify-center md:justify-start">
              <div v-for="name in dwhBoard" :key="name" class="bg-white rounded tracking-wider mt-2 mr-2">
                <div class="px-3 flex items-center">
                  <Zondicon icon="user" class="fill-current h-4 inline mr-2 text-purple-500" />
                  <div v-text="name" class="flex-1 py-2" />
                </div>
                <div
                  v-text="$t('remembrance_day.wreath_laying.board_label_dwh')"
                  class="text-center bg-purple-200 text-xs rounded-b"
                />
              </div>
              <div v-for="name in outsiteBoard" :key="name" class="bg-white rounded tracking-wider mt-2 mr-2">
                <div class="px-3 flex items-center">
                  <Zondicon icon="user" class="fill-current h-4 inline mr-2 text-purple-500" />
                  <div v-text="name" class="flex-1 py-2" />
                </div>
                <div
                  v-text="$t('remembrance_day.wreath_laying.board_label_outsite')"
                  class="text-center bg-purple-200 text-xs rounded-b"
                />
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
        <p
          v-text="$t('remembrance_day.video_description')"
          class="md:w-2/3 mx-auto text-xl leading-normal md:text-center mb-4 md:mb-8"
        />
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
