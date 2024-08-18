<i18n lang="yaml">
en:
  title: Confidential Counsellors
  main_text:
    - The confidential counsellors of DWH provide support and advice to members and visitors who have had to deal with
      inappropriate behaviour or unequal treatment at DWH. This encompasses bullying, discrimination, stalking,
      (sexual) intimidation, abuse of power and violence.
    - The confidential counsellor
  task_list:
    - Provides a safe space for people who have had to deal with inappropriate behaviour
    - Offers a sympathetic ear
    - Discusses with you what options are available
    - Will, if you want, look for informal solutions
    - Can also refer you to other aid agencies or healthcare professionals
    - Can also help you with a complaint, report or report
    - Accompanies you there, but only if you wish
    - Has a duty of confidentiality
    - Is a volunteer and is not available without limits
    - Can refuse a request, for example if they are personally involved
  outro_text:
    Don't be afraid to contact the confidential counsellor about something. The confidential counsellor will take
    every issue seriously, and they're there to help you.
  role_title: Confidential Counsellor
nl:
  title: Vertrouwenspersonen
  main_text:
    - De vertrouwenspersonen van DWH geven steun en advies aan leden en bezoekers die te maken krijgen met ongewenst
      gedrag of ongelijke behandeling bij DWH. Denk bijvoorbeeld aan pesten, discriminatie, stalking, (seksuele)
      intimidatie, machtsmisbruik en geweld.
    - De vertrouwenspersoon
  task_list:
    - Zorgt voor opvang van personen die te maken hebben met ongewenst gedrag
    - Biedt een luisterend oor
    - Bespreekt met jou welke opties er zijn
    - Kijkt indien gewenst naar mogelijke oplossingen in de informele sfeer
    - Kan je ook wijzen op andere hulpverlenende instanties of zorgprofessionals
    - Kan je ook helpen met een klacht, melding of aangifte
    - Begeleidt je, maar alleen wanneer jij dit wenst
    - Heeft geheimhoudingsplicht
    - Is een vrijwilliger en niet altijd of onbeperkt beschikbaar
    - Kan een vraag weigeren, bijvoorbeeld als ze er persoonlijk te betrokken bij zijn
  outro_text:
    Wees niet bang om contact op te nemen. De vertrouwenspersoon zal elke kwestie serieus behandelen en is er om je te
    helpen.
  role_title: Vertrouwenspersoon
</i18n>

<script setup>
import BusinessCard from '#shared/components/BusinessCard.vue'

const { t } = useT()

const counsellors = [
  { name: 'Andreas Zafiropoulos', email: 'vertrouwenspersoon-andreas@dwhdelft.nl' },
  { name: 'Bernard Schendstok', email: 'vertrouwenspersoon-bernard@dwhdelft.nl' },
  { name: 'Enri Mammana', email: 'vertrouwenspersoon-enri@dwhdelft.nl' },
  { name: 'Niamh Henssen', email: 'vertrouwenspersoon-niamh@dwhdelft.nl' },
]
</script>

<template>
  <LayoutSmallHeader>{{ t('title') }}</LayoutSmallHeader>

  <LayoutPageIntroText>
    <p v-for="text in t('main_text')" :key="text" v-html="text" />
    <ul class="list-disc list-inside">
      <li v-for="text in t('task_list')" :key="text" class="mb-2" v-html="text" />
    </ul>
    <p>{{ t('outro_text') }}</p>
  </LayoutPageIntroText>

  <LayoutStraightSection contentBackgroundClass="!bg-gray-200" contentClass="grid grid-cols-2 gap-8">
    <BusinessCard
      v-for="counsellor in counsellors"
      :key="counsellor.name"
      :name="counsellor.name"
      :email="counsellor.email"
      :role="t('role_title')"
    />
  </LayoutStraightSection>
</template>
