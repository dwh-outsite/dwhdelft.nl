<i18n lang="yaml">
en:
  title: Confidential Counsellors
  main_text:
    - Outsite has confidential counsellors who you can approach if you want to talk about any issues you have,
      personal or related to the association and its activities and members.
    - All contact with the counsellor is strictly confidential and they operate independently from the board of
      Outsite and that of DWH. Only if the situation requires it, and then only with explicit permission from you,
      shall issues be communicated to them.
    - Don’t be afraid to contact the confidential counsellor about something. The confidential counsellor will take
      every issue seriously, and they're there to help you.
  role_title: Confidential Counsellor
nl:
  title: Vertrouwenspersonen
  main_text:
    - Outsite heeft vertrouwenspersonen met wie je contact kunt opnemen om over vereniging-gerelateerde en
      persoonlijke problemen te praten indien je daar behoefte aan hebt.
    - Alles wat besproken wordt met de vertrouwenspersoon is strikt vertrouwelijk. De vertrouwenspersoon opereert volledig
      onafhankelijk van het Outsite en DWH bestuur. Alleen als de situatie het noodzaakt, en dan alleen met expliciete
      persoonlijke toestemming, worden kwesties aan hen voorgelegd.
    - Wees niet bang om contact op te nemen. De vertrouwenspersoon zal elke kwestie serieus behandelen en is er om je te
      helpen.
  role_title: Vertrouwenspersoon
</i18n>

<template>
  <div>
    <SmallHeader>
      <h1 class="text-4xl text-white font-normal">
        {{ $t('title') }}
      </h1>
    </SmallHeader>

    <PageIntroText>
      <p v-for="text in $t('main_text')" :key="text" class="mb-4" v-html="text" />
    </PageIntroText>

    <section class="bg-gray-200 py-4 md:pt-12 md:pb-24">
      <div class="mx-auto container px-4 flex justify-center">
        <div class="space-y-12">
          <div
            v-for="counsellor in counsellors"
            :key="counsellor.name"
            class="bg-white rounded shadow-lg p-8 md:pr-48 text-lg"
          >
            <h4 class="font-semibold text-xl" v-text="counsellor.name" />
            <span class="text-gray-700">{{ $t('role_title') }} Outsite</span>
            <span class="mt-8 flex">
              <div class="rounded-full w-8 h-8 p-2 bg-gray-700 text-white">
                <Zondicon icon="envelope" class="fill-current w-4" />
              </div>
              <div class="ml-3" v-text="counsellor.email" />
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'

export default {
  components: { Zondicon },
  data() {
    return {
      counsellors: [
        { name: 'Andreas Zafiropoulos', email: 'vertrouwenspersoon-andreas@outsite.nl' },
      ],
    }
  },
}
</script>
