<i18n lang="yaml">
en:
  boardTitle: Board
  contactTitle: Contact
  board:
    - name: Alexandru
      role: President
      email: voorzitter@outsite.nl
    - name: Robin
      role: Secretary
      email: secretaris@outsite.nl
    - name: Rob
      role: Treasurer
      email: penningmeester@outsite.nl
    - name: Cas
      role: Internal Affairs
      email: intern@outsite.nl
    - name: Wieke
      role: External Affairs
      email: extern@outsite.nl
    - name: Anna
      role: Public Relations
      email: pr@outsite.nl
  confidential_counsellors: Confidential Counsellors
  copyright: Outsite is a part of
  links:
    my_dwh: 'My DWH: Log in as a member'
    sign_up: Join DWH as a member
nl:
  boardTitle: Bestuur
  contactTitle: Contact
  board:
    - name: Alexandru
      role: Voorzitter
      email: voorzitter@outsite.nl
    - name: Robin
      role: Secretaris
      email: secretaris@outsite.nl
    - name: Rob
      role: Penningmeester
      email: penningmeester@outsite.nl
    - name: Cas
      role: Commissaris Intern
      email: intern@outsite.nl
    - name: Wieke
      role: Commissaris Extern
      email: extern@outsite.nl
    - name: Anna
      role: Commisaris Public Relations
      email: pr@outsite.nl
  confidential_counsellors: Vertrouwenspersonen
  copyright: Outsite is onderdeel van
  links:
    my_dwh: 'My DWH: Inloggen als lid'
    sign_up: Inschrijven als DWH lid
</i18n>

<template>
  <div>
    <div class="container px-4 mx-auto text-white">
      <div class="md:flex">
        <div class="md:w-2/3 md:border-r border-gray-600 py-8">
          <h3 class="text-xl font-bold mb-4 uppercase tracking-wider" v-text="$t('boardTitle')" />

          <div class="md:flex">
            <div class="flex-1 grid xl:grid-cols-2 auto-rows-min gap-6">
              <BoardMember
                v-for="member in $t('board')"
                :key="member.name"
                :role="member.role"
                :name="member.name"
                :email="member.email"
              />
            </div>
            <div>
              <img
                src="../../../assets/images/photos/outsite_board/board22.jpg"
                class="w-full md:w-auto md:h-56 lg:h-64 xl:h-80 shadow-xl mt-8 md:mx-8 md:-mt-8"
              />
            </div>
          </div>
        </div>

        <div class="md:ml-4 xl:ml-10 pt-8 pb-8">
          <h3 class="text-xl font-bold mb-4 uppercase tracking-wider" v-text="$t('contactTitle')" />
          <ContactOptions email="bestuur@outsite.nl" />
          <div class="mb-2 space-y-4">
            <div>
              <a
                href="https://my.dwhdelft.nl/signup"
                class="text-white font-bold inline-flex items-center border-b border-white border-dashed"
              >
                {{ $t('links.sign_up') }}
                <Zondicon icon="arrow-thin-right" class="fill-current w-4 ml-1" />
              </a>
            </div>
            <div>
              <a
                href="https://dwhdelft.nl/lets-talk"
                class="text-white font-bold inline-flex items-center border-b border-white border-dashed"
              >
                {{ $t('confidential_counsellors') }}
                <Zondicon icon="arrow-thin-right" class="fill-current w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BaseFooter :socials="socials" :links="links">
      <template #copyright>
        {{ $t('copyright') }}
      </template>
    </BaseFooter>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'
import InstagramIcon from '#/assets/images/social/instagram.svg?inline'
import YouTubeIcon from '#/assets/images/social/youtube.svg?inline'
import GitHubIcon from '#/assets/images/social/github.svg?inline'

export default {
  components: { Zondicon },
  data() {
    return {
      socials: [
        { url: 'https://instagram.com/outsite_delft', icon: InstagramIcon },
        { url: 'https://www.youtube.com/@dwhdelft', icon: YouTubeIcon },
        { url: 'https://github.com/dwh-outsite/dwhdelft.nl', icon: GitHubIcon },
      ],
      links: [
        { name: 'Privacy', url: this.localePath('/privacy') },
        { name: this.$t('links.my_dwh'), url: 'https:////my.dwhdelft.nl' },
      ],
    }
  },
}
</script>
