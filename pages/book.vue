<template>
  <div>
    <header>
      <Header small="true">
        <div
          v-text="$t('bookings.title_label')"
          class="bg-white rounded-lg px-2 py-1 text-xs uppercase tracking-wider inline"
        />
        <h1 v-text="$t('bookings.title')" class="text-4xl text-white font-normal mt-2" />
      </Header>
    </header>

    <section class="container mx-auto relative pt-12 md:pt-6 px-4">
      <div class="pb-16 m-auto">
        <div v-show="$route.query.canceled" class="bg-purple-100 rounded p-4 text-lg flex items-center mb-12">
          <div class="rounded-full w-16 h-16 p-3 bg-purple-500 text-white">
            <Zondicon icon="information-outline" class="fill-current w-10" />
          </div>
          <div class="ml-4">
            <h4 v-text="$t('bookings.canceled')" class="text-xl leading-tight" />
          </div>
        </div>
        <h2
          v-html="$t('bookings.description_title')"
          class="text-purple-400 leading-none text-5xl mb-6 md:mb-12 md:text-6xl"
        />
        <p v-html="$t('bookings.description')" class="text-xl md:text-2xl leading-normal text-gray-800 md:mb-12" />
      </div>
    </section>

    <section class="information relative pb-12 md:pb-20">
      <div class="mx-auto container px-4 md:flex flex-row-reverse">
        <div class="flex-1 pt-16 md:pl-16">
          <h2
            v-html="$t('bookings.form_information.title')"
            class="text-white leading-none text-5xl mb-6 md:text-6xl"
          />
          <p v-text="$t('bookings.form_information.description')" class="text-white text-xl" />
          <div class="my-4 text-xl">
            <div
              v-for="rule in $t('bookings.form_information.rules')"
              :key="rule"
              v-html="rule"
              class="bg-purple-400 text-white rounded p-4 mb-2"
            />
          </div>
          <div v-text="$t('bookings.form_information.rules_disclaimer')" class="text-sm text-white" />
        </div>
        <div class="md:w-1/2 pt-8 md:pt-40"></div>
      </div>
    </section>

    <section class="container mx-auto relative px-4 mt-12 mb-2 md:mt-32 md:mb-12">
      <div class="flex flex-wrap -mx-2">
        <CoronaRule :text="$t('bookings.general_rules[0]')">
          <WashHandsIcon class="h-20 w-20 mr-4 text-purple-600 fill-current" />
        </CoronaRule>
        <CoronaRule :text="$t('bookings.general_rules[1]')">
          <CoughIcon class="h-20 w-20 mr-4 text-purple-600 fill-current" />
        </CoronaRule>
        <CoronaRule :text="$t('bookings.general_rules[2]')">
          <ContactLessIcon class="h-20 w-20 mr-4 text-purple-600 fill-current" />
        </CoronaRule>
        <CoronaRule :text="$t('bookings.general_rules[3]')">
          <HandshakeIcon class="h-20 w-20 mr-4 text-purple-600 fill-current" />
        </CoronaRule>
        <CoronaRule :text="$t('bookings.general_rules[4]')">
          <DistanceIcon class="h-20 w-20 mr-4 text-purple-600 fill-current" />
        </CoronaRule>
        <CoronaRule :text="$t('bookings.general_rules[5]')">
          <HomeIcon class="h-20 w-20 mr-4 text-purple-600 fill-current" />
        </CoronaRule>
      </div>
    </section>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

import ContactLessIcon from '@/assets/images/corona/contactless.svg'
import CoughIcon from '@/assets/images/corona/cough.svg'
import DistanceIcon from '@/assets/images/corona/distance.svg'
import HandshakeIcon from '@/assets/images/corona/handshake.svg'
import HomeIcon from '@/assets/images/corona/home.svg'
import WashHandsIcon from '@/assets/images/corona/wash-hands.svg'

import Header from '~/components/Header'
import CoronaRule from '~/components/CoronaRule'

export default {
  components: {
    Zondicon,
    Header,
    CoronaRule,
    ContactLessIcon,
    CoughIcon,
    DistanceIcon,
    HandshakeIcon,
    HomeIcon,
    WashHandsIcon
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
