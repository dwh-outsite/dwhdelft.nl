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
