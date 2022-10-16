<i18n lang="yaml">
en:
  title: Ready to check out <strong>Outsite</strong>?
  kmg:
    title: Introduction Group
    description: Twice a year we organise our introduction groups. These groups are a chance to not only get to know
      the association but also to become close to other LGBT+ youth, all under supervision of two experienced Outsite
      members. During nine Thursday evenings, you will share coming out stories (if you want to), visit queer parties
      together and much more!
    action: Join the introduction group
    sign_up: Sign up for the introduction group
  bar_buddy:
    title: Bar Buddies
    description: If you are looking to come by on a bar night but you are not yet familiar with the association
      you can make use of our bar buddy system! A bar buddy is someone who will meet up with you before the bar night
      starts and go there with you together. They can introduce you to the people there and tell you anything you want
      to know about Outsite.
    sign_up: Sign up for a bar buddy
    action: Find a bar buddy
    meet_up_with: Meet up with
    barbuddies_title: Our <strong>Bar Buddies</strong>
    read_more: Read more
    read_less: Collapse
  membership:
    title: Become an Outsite member
    description:
      Outsite is open to everyone up to 28 who identifies as LGBTQ+. A variety of activities are organized by members,
      from weekly drinks on Thursday evenings, to big dance parties every quarter or going out in other cities. Make
      sure to sign up to always get updates about the latest events!
    button: Sign up now
    advantages:
      - icon: factory
        title: Wekelijkse Borrel
        description: Every Thursday we come together cozy bar night or
          fun activity.
      - icon: tablet
        title: Fun WhatsApp Groups
        description: We have fun WhatsApp groups where you can chat with
          other members.
      - icon: travel-walk
        title: Cool Activities
        description: Our members organise many activities throughout the
          year.
      - icon: location-food
        title: Weekly Dinner
        description: Every Tuesday we enjoy a meal prepared by one of our
          members.
      - icon: layers
        title: No Obligations
        description: No obligations, no hazing, and easy to combine with
          studies.
      - icon: target
        title: Personal Development
        description: Improve you own skills by joining a committee or maybe
          even the board?
nl:
  title: Kennismaken met <strong>Outsite</strong>?
  kmg:
    title: "Kennismakingsgroepen (KMG)"
    description: Twee keer per jaar organiseert Outsite de KMG. In een kennismakingsgroep maak je onder begeleiding
      van twee ervaren leden kennis met de vereniging maar vooral ook met elkaar. Op negen donderdagavonden deel je
      met elkaar je coming-out verhalen (als je dat wil), je gaat langs een gay feest en nog veel meer!
    action: Doe mee aan de KMG
    sign_up: Aanmelden voor de KMG
  bar_buddy:
    title: "Barbuddy's"
    description: Wil jij een keertje langskomen op een baravond maar ben je nog niet bekend met de vereniging? Meld
      je dan aan voor een barbuddy! Een barbuddy is iemand die van tevoren met je afspreekt zodat je samen naar de
      baravond kunt gaan. Die kan je voorstellen aan de andere bezoekers en alles vertellen wat je maar wilt weten
      over Outsite.
    action: Vind een barbuddy
    sign_up: Aanmelden voor een barbuddy
    meet_up_with: Afspreken met
    barbuddies_title: Onze <strong>Barbuddies</strong>
    read_more: Lees meer
    read_less: Inklappen
  membership:
    title: Lid worden bij Outsite
    description: Outsite is er voor iedereen tot en met 28 jaar die zich identificeert als LHBT+. Er worden allerlei
      activiteiten georganiseerd, van wekelijkse borrels op de donderdagavond, tot grote dansfeesten en uitgaan in
      andere steden. Schrijf je in zodat je altijd op de hoogte bent van alle activiteiten!
    button: Schrijf je nu in
    advantages:
      - icon: factory
        title: Wekelijkse Borrel
        description: Iedere donderdag komen we samen voor een gezellige
          borrel of leuke activiteit.
      - icon: tablet
        title: Gezellige WhatsAppgroepen
        description: We hebben leuke WhatsAppgroepen waar je gezellig kan
          chatten.
      - icon: travel-walk
        title: Leuke activiteiten
        description: Onze leden organiseren vele leuke activiteiten door
          het jaar heen.
      - icon: location-food
        title: Wekelijkse Eettafel
        description: Iedere dinsdag eten wij gezamenlijk een maaltijd bereid
          door een lid.
      - icon: layers
        title: Geen verplichtingen
        description: Geen verplichtingen, geen ontgroening, en te combineren
          met studie.
      - icon: target
        title: Persoonlijke ontwikkeling
        description: Werk aan jezelf door een commissie te joinen of misschien
          wel het bestuur?
</i18n>

<template>
  <div class="container px-4 mx-auto pt-8 pb-12">
    <div class="text-center">
      <h1 class="text-white font-medium text-5xl" v-html="$t('title')"></h1>
    </div>
    <div class="md:flex justify-center mt-4">
      <div class="flex-1 mb-8 md:mb-0 md:mr-2 fade-corners rounded-lg text-white">
        <div class="bg-brand-400 rounded-t-lg pb-6 pt-8 px-8">
          <div class="md:flex items-center mb-6">
            <div class="rounded-full w-16 h-16 p-5 bg-white mr-4 text-brand-400 mb-6 md:mb-0">
              <Zondicon icon="compose" class="fill-current" />
            </div>
            <h2 class="text-xl font-bold uppercase tracking-wider">
              {{ $t('membership.title') }}
            </h2>
          </div>

          <p class="text-lg md:text-xl text-white font-semibold mb-6">
            {{ $t('membership.description') }}
          </p>

          <a href="https://my.dwhdelft.nl/signup">
            <button
              class="bg-white rounded-full px-6 py-3 text-brand-400 shadow-lg font-semibold flex items-center hover:bg-brand-100"
            >
              {{ $t('membership.button') }}
              <Zondicon icon="arrow-right" class="fill-current w-3 h-3 ml-2" />
            </button>
          </a>
        </div>
        <div class="flex flex-wrap -mx-2 pt-6 px-8">
          <div v-for="advantage in $t('membership.advantages')" :key="advantage.title" class="mb-4 md:w-1/2">
            <div class="h-full bg-white rounded-lg p-3 pr-4 items-center text-gray-900 mx-2 leading-snug shadow-md">
              <div class="flex items-center mb-1">
                <div class="rounded-full w-8 h-8 p-2 bg-brand-400 mr-3 text-white">
                  <Zondicon :icon="advantage.icon" class="fill-current" />
                </div>
                <div class="flex-1 leading-none">
                  <div class="font-bold text-brand-400 uppercase tracking-wider" v-text="advantage.title" />
                </div>
              </div>
              <div class="flex">
                <div class="pl-8 mr-3" />
                <p class="text-sm md:text-base leading-tight" v-text="advantage.description" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 md:ml-2">
        <div class="bg-white rounded-lg shadow p-8 flex-1 flex flex-col justify-between">
          <div class="flex-1">
            <div class="md:flex items-center mb-6">
              <div class="rounded-full w-16 h-16 p-4 bg-brand-400 mr-4 text-white mb-6 md:mb-0">
                <Zondicon icon="user-group" class="fill-current" />
              </div>
              <h2 class="text-xl font-bold text-brand-400 uppercase tracking-wider">
                {{ $t('kmg.title') }}
              </h2>
            </div>
            <p class="mb-6 text-lg md:text-xl">
              {{ $t('kmg.description') }}
            </p>
          </div>
          <div>
            <a :href="localePath('kmg')">
              <button class="block button-pink">
                {{ $t('kmg.action') }}
              </button>
            </a>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow p-8 flex-1 flex flex-col justify-between mt-6 md:mt-4">
          <div class="flex-1">
            <div class="md:flex items-center mb-6">
              <div class="rounded-full w-16 h-16 p-5 bg-brand-400 mr-4 text-white mb-6 md:mb-0">
                <Zondicon icon="beverage" class="fill-current" />
              </div>
              <h2 class="text-xl font-bold text-brand-400 uppercase tracking-wider">
                {{ $t('bar_buddy.title') }}
              </h2>
            </div>
            <p class="mb-6 text-lg md:text-xl">
              {{ $t('bar_buddy.description') }}
            </p>
          </div>
          <div>
            <a :href="localePath('barbuddy')">
              <button class="block button-pink">
                {{ $t('bar_buddy.action') }}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  components: { Zondicon },
}
</script>

<style scoped>
.fade-corners {
  background: #ffaadf;
  box-shadow: 0 0 20px #ffaadf;
}
</style>
