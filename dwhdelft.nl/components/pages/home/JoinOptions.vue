<i18n lang="yaml">
en:
  title: Ready to check out **DWH**?
  description: |-
    The best way to get to know DWH is at one of our activities. Join us at one, or sign up for a
    barbuddy so there'll be someone you know. Are you 28 or younger? Do take a look at
    [Outsite (28-)](https://outsite.nl/) or [Jong&Out Delft (12-18)](/jongenout).
  join: |-
    Enthusiastic and ready to join our community and support our activities? Become a member and
    help us to keep organising them!
  membership_button: Sign up now
  bar_buddy:
    heading: Bar Buddies
    description: |-
      If you are looking to come by on a Saturday night but you are not yet familiar with the society you
      can make use of the bar buddy system! A bar buddy is someone who can not only tell you all there is to know
      about DWH but they can also introduce you to new people.
    action: Find a bar buddy
nl:
  title: Kennismaken met **DWH**?
  description: |-
    De beste manier om DWH te leren kennen is bij één van onze activiteiten. Kom langs, of meld je
    aan voor een barbuddy zodat je gelijk al iemand kent. Ben je 28 of jonger? Kijk dan ook eens bij
    [Outsite (28-)](https://outsite.nl/) of [Jong&Out Delft (12-18)](/jongenout).
  join: |-
    Enthousiast om onze community te joinen en onze activiteiten te steunen? Word lid en help ons
    ze te blijven organiseren!
  membership_button: Schrijf je nu in
  bar_buddy:
    heading: Barbuddies
    description: |-
      Wil jij een keertje langskomen op een baravond maar ben je bang dat je je niet meteen op je gemak
      voelt? Meld je dan aan voor een barbuddy! Een barbuddy is iemand die jou de ins en outs kan vertellen over de
      vereniging, maar ook iemand die jou voor kan stellen aan nieuwe mensen.
    action: Vind een barbuddy
</i18n>

<script setup>
import { IconBeverage } from '@iconify-prerendered/vue-zondicons'

const { t } = useT()
</script>

<template>
  <ElementsContainer class="pb-12 pt-8 md:pb-8 md:pt-0">
    <div class="items-start justify-center md:flex">
      <div class="mx-2 flex flex-1 items-end pt-4 md:pt-12">
        <div class="text-white">
          <h1 class="mb-4 text-5xl font-medium leading-none">
            <Markdown :content="t('title')" />
          </h1>
          <Markdown class="mb-4 text-lg lg:pr-20" :content="t('description')" darkBackground />
          <Markdown class="mb-6 text-lg lg:pr-20" :content="t('join')" />
          <a href="https://my.dwhdelft.nl/signup">
            <ElementsSecondaryButton class="text-brand-600" arrow>
              {{ t('membership_button') }}
            </ElementsSecondaryButton>
          </a>
        </div>
      </div>
      <div
        class="mx-2 mt-6 flex flex-1 flex-col justify-between rounded-lg bg-white p-6 md:mt-0 md:rounded-t-none md:p-8"
      >
        <div class="flex-1">
          <div class="mb-8 size-16 rounded-full bg-brand-500 p-5 text-white">
            <IconBeverage class="size-full" />
          </div>
          <h2 class="mb-4 text-xl font-bold uppercase tracking-wider text-brand-500" v-text="t('bar_buddy.heading')" />
          <p class="mb-6 text-lg" v-text="t('bar_buddy.description')" />
          <nuxt-link :to="$localePath('barbuddy')">
            <ElementsPrimaryButton>{{ t('bar_buddy.action') }}</ElementsPrimaryButton>
          </nuxt-link>
        </div>
      </div>
    </div>
  </ElementsContainer>
</template>
