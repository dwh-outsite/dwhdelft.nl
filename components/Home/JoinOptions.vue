<i18n lang="yaml">
en:
  title: Ready to check out <strong>DWH</strong>?
  description: |-
    You're always welcome on a Saturday night during a bar night. Do you think this is too exciting or
    frightening? Then you can make use of our bar buddy system!
  outsite_hint: |-
    Are you 28 years or younger? Take a look at
    <a href="https://outsite.nl/" class="font-bold">Outsite</a>, the youth division of our association.
  bar_buddy:
    title: Bar Buddies
    description: |-
      If you are looking to come by on a Saturday night but you are not yet familiar with the society you
      can make use of the bar buddy system! A bar buddy is someone who can not only tell you all there is to know
      about DWH but they can also introduce you to new people.
    action: Find a bar buddy
nl:
  title: Kennismaken met <strong>DWH</strong>?
  description: |-
    Je bent altijd welkom op een zaterdagavond tijdens een baravond. Vind je dit spannend? Dan kun je
    gebruik maken van ons barbuddysysteem!
  outsite_hint: |-
    Ben je 28 jaar of jonger? Kijk dan ook eens bij
    <a href="https://outsite.nl/" class="font-bold">Outsite</a>, het jongerendeel van de vereniging.
  bar_buddy:
    title: Barbuddies
    description: |-
      Wil jij een keertje langskomen op een baravond maar ben je bang dat je je niet meteen op je gemak
      voelt? Meld je dan aan voor een barbuddy! Een barbuddy is iemand die jou de ins en outs kan vertellen over de
      vereniging, maar ook iemand die jou voor kan stellen aan nieuwe mensen.
    action: Vind een barbuddy
</i18n>

<template>
  <div class="container px-4 mx-auto pt-8 md:pt-0 pb-12 md:pb-8">
    <div class="md:flex justify-center">
      <div class="flex-1 mx-2 flex items-end mt-4">
        <div class="text-white">
          <h1 class="font-medium leading-none text-5xl mb-4" v-html="$t('title')"></h1>
          <p class="text-lg md:pr-40 mb-4" v-html="$t('description')" />
          <p class="text-lg md:pr-40" v-html="$t('outsite_hint')" />
        </div>
      </div>
      <div class="bg-white rounded-lg md:rounded-t-none p-8 flex-1 mx-2 flex flex-col justify-between mt-6 md:mt-0">
        <div class="flex-1">
          <div class="rounded-full w-16 h-16 p-5 bg-purple-500 mb-8 text-white">
            <Zondicon icon="beverage" class="fill-current" />
          </div>
          <h2 class="text-xl font-bold mb-4 text-purple-500 uppercase tracking-wider" v-text="$t('bar_buddy.title')" />
          <p class="mb-8 text-lg" v-text="$t('bar_buddy.description')" />
        </div>
        <div>
          <a :href="localePath('barbuddy')">
            <button class="block button-pink" v-text="$t('bar_buddy.action')" />
          </a>
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
