<i18n lang="yaml">
nl:
  title: Politiek
  list_title: Verkiezingen 2022
  main_text: |-
    <br/>
    Geachte programmacommissie,<br/>
    <br/>
    Een gemeente hoort voor alle inwoners en bezoekers een veilige plek te zijn. Iedereen kan zijn wie hij, zij of hen 
    is, ongeacht hun seksualiteit of gender. COC Haaglanden en DWH werken graag mee dit tot stand te brengen en bieden 
    daarom deze handreiking met hoofdlijnen en specifieke actiepunten, die door partijen kunnen worden opgenomen in de 
    programma’s voor de gemeenteraadsverkiezingen van 2022.<br/>
    We gebruiken de afkorting LHBTI+, hieronder vallen homo– en biseksuele, transgender en intersekse personen, maar 
    ook andere groepen mensen die door hun relaties of identiteit niet binnen de ouderwetse man-vrouw norm vallen. Ook 
    de term queer wordt vaak gebruikt om deze groep aan te duiden, maar de intentie is dezelfde. Iedereen mag zichzelf 
    duiden zoals hij/zij/hen dat zelf wil.<br/>
    <br/>
    <strong>COVID herstel</strong><br/>
    Veel LHBTI+beleid steunt op de inzet van vrijwilligers vanuit betrokken gemeenschappen van mensen die samen kunnen 
    komen. Daarom zien we gezellige en veilige ontmoetingsplekken als de basis voor LHBTI+emancipatie. Gelijkgestemden 
    leren kennen, samen activiteiten ontplooien, zichtbaar zijn in de samenleving, dat is wat 
    LHBTI+belangenverenigingen zoals COC en DWH heel direct op lokaal niveau bijdragen.<br/>
    15 maanden Corona restricties hebben hier een flinke deuk in geslagen, want als het om ontmoeten gaat is online 
    maar een beperkt alternatief. Heel veel zaken moeten weer opstarten, een flinke opgave waar we keihard mee aan de 
    slag zullen gaan.<br/>
    Daarom is juist nu de steun van de gemeente extra nodig! Alleen dan kan de continuïteit van het lokale 
    LHBTI+beleid worden gewaarborgd.<br/>
    <br/>
    We bedanken u bij voorbaat hartelijk voor uw inzet voor LHBTI+ personen in uw gemeente.<br/>
    <br/>
    Met vriendelijke groet,<br/>
    <br/>
    Werkgroep Politiek<br/>
    COC Haaglanden en DWH
en:
  title: Politiek
  list_title: Verkiezingen 2022
  main_text: |-
    <br/>
    Geachte programmacommissie,<br/>
    <br/>
    Een gemeente hoort voor alle inwoners en bezoekers een veilige plek te zijn. Iedereen kan zijn wie hij, zij of hen 
    is, ongeacht hun seksualiteit of gender. COC Haaglanden en DWH werken graag mee dit tot stand te brengen en bieden 
    daarom deze handreiking met hoofdlijnen en specifieke actiepunten, die door partijen kunnen worden opgenomen in de 
    programma’s voor de gemeenteraadsverkiezingen van 2022.<br/>
    We gebruiken de afkorting LHBTI+, hieronder vallen homo– en biseksuele, transgender en intersekse personen, maar 
    ook andere groepen mensen die door hun relaties of identiteit niet binnen de ouderwetse man-vrouw norm vallen. Ook 
    de term queer wordt vaak gebruikt om deze groep aan te duiden, maar de intentie is dezelfde. Iedereen mag zichzelf 
    duiden zoals hij/zij/hen dat zelf wil.<br/>
    <br/>
    <strong>COVID herstel</strong><br/>
    Veel LHBTI+beleid steunt op de inzet van vrijwilligers vanuit betrokken gemeenschappen van mensen die samen kunnen 
    komen. Daarom zien we gezellige en veilige ontmoetingsplekken als de basis voor LHBTI+emancipatie. Gelijkgestemden 
    leren kennen, samen activiteiten ontplooien, zichtbaar zijn in de samenleving, dat is wat 
    LHBTI+belangenverenigingen zoals COC en DWH heel direct op lokaal niveau bijdragen.<br/>
    15 maanden Corona restricties hebben hier een flinke deuk in geslagen, want als het om ontmoeten gaat is online 
    maar een beperkt alternatief. Heel veel zaken moeten weer opstarten, een flinke opgave waar we keihard mee aan de 
    slag zullen gaan.<br/>
    Daarom is juist nu de steun van de gemeente extra nodig! Alleen dan kan de continuïteit van het lokale 
    LHBTI+beleid worden gewaarborgd.<br/>
    <br/>
    We bedanken u bij voorbaat hartelijk voor uw inzet voor LHBTI+ personen in uw gemeente.<br/>
    <br/>
    Met vriendelijke groet,<br/>
    <br/>
    Werkgroep Politiek<br/>
    COC Haaglanden en DWH
</i18n>

<template>
  <div>
    <SmallHeader>{{ $t('title') }}</SmallHeader>

    <PageIntroText>
      <h1 class="font-medium text-5xl" v-html="$t('list_title')" />
      <p v-html="$t('main_text')" />
    </PageIntroText>

    <section v-if="editions.length > 0" class="bg-purple-400">
      <div class="container px-4 mx-auto pt-8 pb-12">
        <div class="flex flex-wrap justify-center">
          <div v-for="edition in editions" :key="edition.id" class="md:w-1/2 xl:w-1/3 p-4">
            <a :href="edition.webViewLink" target="_blank">
              <div class="shadow-xl p-6 rounded-lg bg-white hover:bg-purple-100 hover:text-purple-500 flex">
                <div>
                  <img :src="edition.thumbnailLink" class="h-48" />
                </div>
                <div class="flex-1 ml-4 flex flex-col justify-center">
                  <h3 class="text-2xl font-semibold">{{ edition.name }}</h3>
                  <h4 class="text-xl">{{ edition.title }}</h4>
                  <p class="text-lg text-gray-600">{{ edition.publishDate }}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import GoogleDrive from '#/src/GoogleDrive'

export default {
  data() {
    return {
      editions: [],
    }
  },
  mounted() {
    GoogleDrive.listFiles('1I_FijqO8UD8Gl_pIZpifQ5ggGmIgItpR').then((files) => {
      this.editions = files.map((file) => {
        return {
          ...file,
          name: file.name.substr(0, file.name.indexOf(',')),
          title: file.name.slice(file.name.indexOf(', ') + 2, file.name.lastIndexOf(',')),
          publishDate: file.name.slice(file.name.lastIndexOf(', ') + 2),
        }
      })
    })
  },
}
</script>
