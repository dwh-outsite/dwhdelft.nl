<i18n lang="yaml">
en:
  boardTitle: Board
  contactTitle: Contact
  board:
    - name: Feline (she/her)
      role: President
      email: voorzitter
    - name: Chai (they/them)
      role: Vice President
      email: vicevoorzitter
    - name: Alin (he/they)
      role: Secretary
      email: secretaris
    - name: Nick (he/him)
      role: Treasurer
      email: penningmeester
    - name: Jaye (any/all)
      role: External Affairs
      email: extern
    - name: Lucia (they/them)
      role: Internal Affairs
      email: intern
  confidential_counsellors: Confidential Counsellors
  copyright: Outsite is a part of
  links:
    my_dwh: 'My DWH: Log in as a member'
    sign_up: Join DWH as a member
nl:
  boardTitle: Bestuur
  contactTitle: Contact
  board:
    - name: Feline (zij/haar)
      role: Voorzitter
      email: voorzitter
    - name: Chai (die/hun)
      role: Vicevoorzitter
      email: vicevoorzitter
    - name: Alin (hij/die)
      role: Secretaris
      email: secretaris
    - name: Nick (hij/hem)
      role: Penningmeester
      email: penningmeester
    - name: Jaye (die/hun)
      role: Commissaris Extern
      email: extern
    - name: Lucia (die/hun)
      role: Commissaris Intern
      email: intern
  confidential_counsellors: Vertrouwenspersonen
  copyright: Outsite is onderdeel van
  links:
    my_dwh: 'My DWH: Inloggen als lid'
    sign_up: Inschrijven als DWH lid
</i18n>

<script setup>
import InstagramIcon from '#shared/assets/images/social/instagram.svg'
import YouTubeIcon from '#shared/assets/images/social/youtube.svg'
import GitHubIcon from '#shared/assets/images/social/github.svg'

const { t } = useT()

const socials = [
  { url: 'https://instagram.com/outsite_delft', icon: InstagramIcon },
  { url: 'https://www.youtube.com/@dwhdelft', icon: YouTubeIcon },
  { url: 'https://github.com/dwh-outsite/dwhdelft.nl', icon: GitHubIcon },
]

const links = [
  { name: 'Privacy', url: 'https://dwhdelft.nl/privacy' },
  { name: t('links.my_dwh'), url: 'https://my.dwhdelft.nl' },
]
</script>

<template>
  <div>
    <ElementsContainer class="text-white">
      <div class="md:flex">
        <div class="md:w-2/3 md:border-r border-gray-600 py-8">
          <h3 class="text-xl font-bold mb-4 uppercase tracking-wider" v-text="t('boardTitle')" />

          <div class="md:flex">
            <div class="flex-1 grid xl:grid-cols-2 auto-rows-min gap-6">
              <LayoutFooterBoardMember
                v-for="member in t('board')"
                :key="member.name"
                :role="member.role"
                :name="member.name"
                :email="`${member.email}@outsite.nl`"
              />
            </div>
            <div>
              <img
                src="~/assets/images/photos/boards/board23.jpg"
                class="w-full md:w-auto md:h-56 lg:h-64 xl:h-80 shadow-xl mt-8 md:mx-8 md:-mt-8"
              />
            </div>
          </div>
        </div>

        <div class="md:ml-4 xl:ml-10 pt-8 pb-8">
          <h3 class="text-xl font-bold mb-4 uppercase tracking-wider" v-text="t('contactTitle')" />

          <ContactOptions email="bestuur@outsite.nl" />

          <div class="mb-2 space-y-4">
            <LayoutFooterExternalLink href="https://my.dwhdelft.nl/signup">
              {{ t('links.sign_up') }}
            </LayoutFooterExternalLink>
            <LayoutFooterExternalLink href="https://dwhdelft.nl/lets-talk">
              {{ t('confidential_counsellors') }}
            </LayoutFooterExternalLink>
          </div>
        </div>
      </div>
    </ElementsContainer>

    <LayoutFooterCopyright :socials="socials" :links="links">
      <template #copyright>
        {{ t('copyright') }}
      </template>
    </LayoutFooterCopyright>
  </div>
</template>
