<i18n lang="yaml">
en:
  title: Ready to check out **Outsite**?
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
  membership:
    title: Become an Outsite member
    description:
      Outsite is open to everyone up to 28 who identifies as LGBTQ+. A variety of activities are organized by members,
      from weekly drinks on Thursday evenings, to big dance parties every quarter or going out in other cities. Make
      sure to sign up to always get updates about the latest events!
    button: Sign up now
    advantages:
      - icon: IconFactory
        title: Weekly Drinks
        description: Every Thursday we come together cozy bar night or
          fun activity.
      - icon: IconTablet
        title: Fun WhatsApp Groups
        description: We have fun WhatsApp groups where you can chat with
          other members.
      - icon: IconTravelWalk
        title: Cool Activities
        description: Our members organise many activities throughout the
          year.
      - icon: IconLocationFood
        title: Weekly Dinner
        description: Every Monday we enjoy a meal prepared by one of our
          members.
      - icon: IconLayers
        title: No Obligations
        description: No obligations, no hazing, and easy to combine with
          studies.
      - icon: IconTarget
        title: Personal Development
        description: Improve you own skills by joining a committee or maybe
          even the board?
nl:
  title: Kennismaken met **Outsite**?
  kmg:
    title: 'Kennismakingsgroepen (KMG)'
    description: Twee keer per jaar organiseert Outsite de KMG. In een kennismakingsgroep maak je onder begeleiding
      van twee ervaren leden kennis met de vereniging maar vooral ook met elkaar. Op negen donderdagavonden deel je
      met elkaar je coming-out verhalen (als je dat wil), je gaat langs een gay feest en nog veel meer!
    action: Doe mee aan de KMG
    sign_up: Aanmelden voor de KMG
  bar_buddy:
    title: Barbuddies
    description: Wil jij een keertje langskomen op een baravond maar ben je nog niet bekend met de vereniging? Meld
      je dan aan voor een barbuddy! Een barbuddy is iemand die van tevoren met je afspreekt zodat je samen naar de
      baravond kunt gaan. Die kan je voorstellen aan de andere bezoekers en alles vertellen wat je maar wilt weten
      over Outsite.
    action: Vind een barbuddy
    sign_up: Aanmelden voor een barbuddy
  membership:
    title: Lid worden bij Outsite
    description: Outsite is er voor iedereen tot en met 28 jaar die zich identificeert als LHBT+. Er worden allerlei
      activiteiten georganiseerd, van wekelijkse borrels op de donderdagavond, tot grote dansfeesten en uitgaan in
      andere steden. Schrijf je in zodat je altijd op de hoogte bent van alle activiteiten!
    button: Schrijf je nu in
    advantages:
      - icon: IconFactory
        title: Wekelijkse Borrel
        description: Elke donderdag komen we samen voor een gezellige
          borrel of leuke activiteit.
      - icon: IconTablet
        title: Gezellige Appgroepen
        description: We hebben leuke WhatsAppgroepen waar je gezellig kan
          chatten.
      - icon: IconTravelWalk
        title: Leuke activiteiten
        description: Onze leden organiseren vele leuke activiteiten door
          het jaar heen.
      - icon: IconLocationFood
        title: Wekelijkse Eettafel
        description: Iedere maandag eten wij gezamenlijk een maaltijd bereid
          door een lid.
      - icon: IconLayers
        title: Geen verplichtingen
        description: Geen verplichtingen, geen ontgroening, en te combineren
          met studie.
      - icon: IconTarget
        title: Ontwikkeling
        description: Werk aan jezelf door een commissie te joinen of misschien
          wel het bestuur?
</i18n>

<script setup>
import { IconCompose, IconArrowRight, IconFactory, IconTablet, IconTravelWalk, IconLocationFood, IconLayers, IconTarget, IconUserGroup, IconBeverage } from '@iconify-prerendered/vue-zondicons'

const { t } = useT()

const membershipIcons = {
  IconFactory,
  IconTablet,
  IconTravelWalk,
  IconLocationFood,
  IconLayers,
  IconTarget,
}
</script>

<template>
  <ElementsContainer class="py-12">

    <h1 class="text-center text-white font-medium text-5xl mb-8"><Markdown :content="t('title')" /></h1>

    <div class="lg:flex justify-center space-y-6 lg:space-y-0 lg:space-x-4">
      <ElementsActionCard :title="t('membership.title')" class="flex-1 fade-corners !bg-brand-400" contentClass="p-8" titleClass="text-white">
        <template #icon>
          <ElementsIconCircle class="mb-6 lg:mb-0" inverted>
            <IconCompose class="w-6 h-6 m-5" />
          </ElementsIconCircle>
        </template>

        <p class="text-white text-lg lg:text-xl font-semibold mb-6" v-text="t('membership.description')" />

        <a href="https://my.dwhdelft.nl/signup">
          <ElementsSecondaryButton class="flex items-center !text-brand-400 hover:!bg-brand-100">
            {{ t('membership.button') }}
            <IconArrowRight class="w-3 h-3 ml-2" />
          </ElementsSecondaryButton>
        </a>

        <div class="-mx-8 -mb-8 mt-6 p-8 bg-[#ffaadf]">
          <div class="grid md:grid-cols-2 gap-4">
            <ElementsActionCard v-for="advantage in t('membership.advantages')" :key="advantage.title" :title="advantage.title" class="!rounded-lg" contentClass="!p-3 !pr-4" titleClass="text-lg">
              <template #icon>
                <ElementsIconCircle>
                  <Component :is="membershipIcons[advantage.icon]" class="w-4 h-4 m-2" />
                </ElementsIconCircle>
              </template>

              <p class="-mt-4 pl-12 text-sm lg:text-base leading-tight" v-text="advantage.description" />
            </ElementsActionCard>
          </div>
        </div>
      </ElementsActionCard>

      <div class="flex-1 space-y-6 lg:space-y-4">
        <ElementsActionCard :title="t('kmg.title')" contentClass="p-8">
          <template #icon>
            <ElementsIconCircle class="mb-6 lg:mb-0">
              <IconUserGroup class="w-8 h-8 m-4" />
            </ElementsIconCircle>
          </template>

          <p class="mb-6 text-lg lg:text-xl" v-text="t('kmg.description')" />

          <nuxt-link :to="localePath('kmg')" class="text-base">
            <ElementsPrimaryButton>{{ t('kmg.action') }}</ElementsPrimaryButton>
          </nuxt-link>
        </ElementsActionCard>

        <ElementsActionCard :title="t('bar_buddy.title')" contentClass="p-8">
          <template #icon>
            <ElementsIconCircle class="mb-6 lg:mb-0">
              <IconBeverage class="w-8 h-8 m-4" />
            </ElementsIconCircle>
          </template>

          <p class="mb-6 text-lg lg:text-xl" v-text="t('bar_buddy.description')" />

          <nuxt-link :to="localePath('barbuddy')" class="text-base">
            <ElementsPrimaryButton>{{ t('bar_buddy.action') }}</ElementsPrimaryButton>
          </nuxt-link>
        </ElementsActionCard>
      </div>
    </div>
  </ElementsContainer>
</template>

<style scoped>
.fade-corners {
  box-shadow: 0 0 20px #ffaadf;
}
</style>
