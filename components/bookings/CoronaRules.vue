<i18n lang="yaml">
en:
  rules:
    - Wash your hands regularly
    - Cough and sneeze in your elbow
    - Pay contactless with your phone of card
    - Don't shake hands and say no to hugs
    - Keep a distance of 1.5 metres from others
    - Do you have health complaints? Stay home!
nl:
  rules:
    - Was regelmatig je handen
    - Hoest en nies in je elleboog
    - Betaal contactloos met je telefoon of pinpas
    - Schud geen handen en sla de knuffels over
    - Houd 1,5 meter afstand tot anderen
    - Heb je klachten? Blijf thuis!
</i18n>

<template>
  <div>
    <CoronaRule :text="$t('rules[0]')">
      <WashHandsIcon class="h-20 w-20 mr-4 text-purple-600 fill-current" />
    </CoronaRule>
    <CoronaRule :text="$t('rules[1]')">
      <CoughIcon class="h-20 w-20 mr-4 text-purple-600 fill-current" />
    </CoronaRule>
    <CoronaRule :text="$t('rules[2]')">
      <ContactLessIcon class="h-20 w-20 mr-4 text-purple-600 fill-current" />
    </CoronaRule>
    <CoronaRule :text="$t('rules[3]')">
      <HandshakeIcon class="h-20 w-20 mr-4 text-purple-600 fill-current" />
    </CoronaRule>
    <CoronaRule :text="$t('rules[4]')">
      <DistanceIcon class="h-20 w-20 mr-4 text-purple-600 fill-current" />
    </CoronaRule>
    <CoronaRule :text="$t('rules[5]')">
      <HomeIcon class="h-20 w-20 mr-4 text-purple-600 fill-current" />
    </CoronaRule>
  </div>
</template>

<script>
import ContactLessIcon from '@/assets/images/corona/contactless.svg'
import CoughIcon from '@/assets/images/corona/cough.svg'
import DistanceIcon from '@/assets/images/corona/distance.svg'
import HandshakeIcon from '@/assets/images/corona/handshake.svg'
import HomeIcon from '@/assets/images/corona/home.svg'
import WashHandsIcon from '@/assets/images/corona/wash-hands.svg'

export default {
  components: {
    ContactLessIcon,
    CoughIcon,
    DistanceIcon,
    HandshakeIcon,
    HomeIcon,
    WashHandsIcon,
  },
}
</script>
