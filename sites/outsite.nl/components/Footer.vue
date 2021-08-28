<i18n lang="yaml">
en:
  board:
    - name: Charlie Verboom
      role: President
      email: voorzitter@outsite.nl
    - name: Owen de Waal
      role: Secretary
      email: secretaris@outsite.nl
    - name: Outsite Treasurer
      role: Treasurer
      email: penningmeester@outsite.nl
    - name: Ward Peeters
      role: Commissioner of External Affairs
      email: penningmeester@outsite.nl
  confidential_counsellors: Confidential Counsellors
  copyright: Outsite is a part of
nl:
  board:
    - name: Charlie Verboom
      role: Voorzitter
      email: voorzitter@outsite.nl
    - name: Owen de Waal
      role: Secretaris
      email: secretaris@outsite.nl
    - name: Outsite Penningmeester
      role: Penningmeester
      email: penningmeester@outsite.nl
    - name: Ward Peeters
      role: Commissaris Extern
      email: extern@outsite.nl
  confidential_counsellors: Vertrouwenspersonen
  copyright: Outsite is onderdeel van
</i18n>

<template>
  <BaseFooter contact-email="bestuur@outsite.nl" :socials="socials" :links="links" class="md:pt-8">
    <template #board-members>
      <div class="flex-1">
        <BoardMember
          v-for="member in $t('board')"
          :key="member.name"
          :role="member.role"
          :name="member.name"
          :email="member.email"
        />
        <nuxt-link
          :to="localePath('confidential-counsellor')"
          class="text-white font-bold inline-flex items-center border-b border-white border-dashed"
        >
          {{ $t('confidential_counsellors') }}
          <Zondicon icon="arrow-thin-right" class="fill-current w-4 ml-1" />
        </nuxt-link>
      </div>
      <div>
        <img
          src="../../../assets/images/boards/outsite_board19.jpg"
          class="w-full md:w-auto md:h-56 lg:h-64 xl:h-80 shadow-xl my-8 md:mx-8 md:-mt-8"
        />
      </div>
    </template>
    <template #copyright>
      {{ $t('copyright') }}
    </template>
  </BaseFooter>
</template>

<script>
import Zondicon from 'vue-zondicons'
import InstagramIcon from '#/assets/images/social/instagram.svg?inline'
import FacebookIcon from '#/assets/images/social/facebook.svg?inline'
import YouTubeIcon from '#/assets/images/social/youtube.svg?inline'
import GitHubIcon from '#/assets/images/social/github.svg?inline'

export default {
  components: { Zondicon },
  data() {
    return {
      socials: [
        { url: 'https://instagram.com/outsite_delft', icon: InstagramIcon },
        { url: 'https://facebook.com/outsite', icon: FacebookIcon },
        { url: 'https://youtube.com/channel/UCtsabdS5sH7EA-DjLkBPLfQ', icon: YouTubeIcon },
        { url: 'https://github.com/dwh-outsite/outsite.nl', icon: GitHubIcon },
      ],
      links: [{ name: 'Privacy', url: this.localePath('/privacy') }],
    }
  },
}
</script>
