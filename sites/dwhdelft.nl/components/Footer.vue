<i18n lang="yaml">
en:
  boardTitle: Board
  contactTitle: Contact
  board:
    - name: Rory Baart
      role: President
      email: voorzitter@dwhdelft.nl
    - name: Charlie Verboom
      role: Secretary
      email: secretaris@dwhdelft.nl
    - name: Dries Stuij
      role: Treasurer
      email: penningmeester@dwhdelft.nl
    - name: Aydin Karadag
      role: Board Member
      email: aydin.karadag@dwhdelft.nl
  links:
    support_us: Support Us
    my_dwh: 'My DWH: Log in as a member'
nl:
  boardTitle: Bestuur
  contactTitle: Contact
  board:
    - name: Rory Baart
      role: Voorzitter
      email: voorzitter@dwhdelft.nl
    - name: Charlie Verboom
      role: Secretaris
      email: secretaris@dwhdelft.nl
    - name: Dries Stuij
      role: Penningmeester
      email: penningmeester@dwhdelft.nl
    - name: Aydin Karadag
      role: Algemeen Bestuurslid
      email: aydin.karadag@dwhdelft.nl
  links:
    support_us: Steun Ons
    my_dwh: 'My DWH: Inloggen als lid'
</i18n>

<template>
  <BaseFooter contact-email="bestuur@dwhdelft.nl" :socials="socials" :links="links">
    <template #board-members>
      <div v-for="member in $t('board')" :key="member.name" class="md:w-1/2">
        <BoardMember :role="member.role" :name="member.name" :email="member.email" />
      </div>
    </template>
    <template #copyright>&copy; Delftse Werkgroep Homoseksualiteit (D.W.H.) {{ year }}</template>
  </BaseFooter>
</template>

<script>
import dayjs from 'dayjs'
import InstagramIcon from '#/assets/images/social/instagram.svg?inline'
import FacebookIcon from '#/assets/images/social/facebook.svg?inline'
import GitHubIcon from '#/assets/images/social/github.svg?inline'

export default {
  data() {
    return {
      socials: [
        { url: 'https://instagram.com/dwh_delft', icon: InstagramIcon },
        { url: 'https://facebook.com/DWHDelft', icon: FacebookIcon },
        { url: 'https://github.com/dwh-outsite/dwhdelft.nl', icon: GitHubIcon },
      ],
      links: [
        { name: 'ANBI', url: this.localePath('/anbi') },
        { name: 'Privacy', url: this.localePath('/privacy') },
        { name: this.$t('links.support_us'), url: this.localePath('/support-us') },
        { name: this.$t('links.my_dwh'), url: 'https:////my.dwhdelft.nl' },
      ],
      year: dayjs().format('YYYY'),
    }
  },
}
</script>
