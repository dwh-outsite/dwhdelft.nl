<i18n lang="yaml">
en:
  hero:
    title: "Delft's LGBT+ Youth Association"
    subtitle: for everyone up to 28 years
    leftButton: Join Outsite
    rightButton: Watch Video
  description:
    text:
      - 'Outsite is here for everybody 28 and under who identifies as LGBT+. Outsite organises all kinds of
        activities, ranging from drinks every Thursday night and quarterly LGBT+ parties to trips to other cities where
        we go out together. Outsite is a part of <a href="https://www.dwhdelft.nl" class="text-brand-400">DWH</a>, the
        LGBT+ association of Delft.'
      - 'These activities are all organized by our fantastic committees and members! The best way to become acquainted with
        Outsite is to take part in the introduction groups (which we call KMGs) or through the use of the bar buddy
        system: Where we will make sure there is someone ready to show you around and who could introduce you to others.'
    invitation: 'Come by during one of our bar nights:<br> <strong>Every Thursday starting at {0}</strong>'
  video:
    title: <strong>Outsite</strong> in 120 seconds
  instagram:
    title: Updates and upcoming activities
nl:
  hero:
    title: 'Delftse LHBT+ jongerenvereniging'
    subtitle: voor iedereen t/m 28 jaar
    leftButton: Kom naar Outsite
    rightButton: Bekijk Video
  description:
    text:
      - 'Outsite is er voor iedereen tot en met 28 jaar die zich identificeert als LHBT+. Er worden allerlei
        activiteiten georganiseerd door vrijwilligers: van een borrel elke donderdagavond en grote LHBT+ feesten elk
        kwartaal tot gezamenlijk uitgaan in andere steden. Outsite is onderdeel van
        <a href="https://www.dwhdelft.nl" class="text-brand-400">DWH</a>, de LHBT+ vereniging van Delft.'
      - 'Al deze activiteiten worden mogelijk gemaakt door onze fantastische commissies en leden! De voornaamste manier om
        kennis te maken met de vereniging is door deel te nemen aan de KennisMakingsGroepen (KMG) of door gebruik te maken
        van de barbuddies: Wij zorgen er dan voor dat er iemand klaar staat wanneer jij langskomt.'
    invitation: 'Kom gerust langs op onze baravond: <br> <strong>Elke donderdag vanaf {0}</strong>'
  video:
    title: <strong>Outsite</strong> in 120 seconden
  instagram:
    title: Updates en aankomende activiteiten
</i18n>

<template>
  <div>
    <Header>
      <h1 class="text-4xl text-white font-normal" v-text="$t('hero.title')" />
      <h2 class="text-2xl text-white mt-2 font-light" v-text="$t('hero.subtitle')" />
      <div class="mt-8 flex">
        <a href="#join-outsite">
          <button class="block button-pink" v-text="$t('hero.leftButton')" />
        </a>
        <a href="#video">
          <button class="block ml-4 button-white" v-text="$t('hero.rightButton')" />
        </a>
      </div>
    </Header>

    <section class="introduction overflow-x-hidden overflow-y-visible pt-48 -mt-48">
      <div class="container mx-auto pt-12 sm:pt-16 pb-24 md:flex md:justify-between">
        <div class="md:w-1/2 px-4">
          <p
            v-for="paragraph in $t('description.text')"
            :key="paragraph"
            class="text-lg md:text-xl md:leading-relaxed text-gray-800 mb-4"
            v-html="paragraph"
          />
          <p
            v-if="barOpeningHours.announcement"
            class="mb-4 text-brand-500"
            v-text="$tt(barOpeningHours.announcement)"
          />
          <Invitation :content="$t('description.invitation', [barOpeningHours.start_time])" />
        </div>
        <div class="md:w-2/5 overflow-hidden md:overflow-visible relative">
          <Panda class="panda relative md:absolute" />
        </div>
      </div>
    </section>

    <section class="relative">
      <div class="information bg-gray-400 relative -mb-48">
        <div class="information-content -mt-48">
          <div class="pb-48 pt-48">
            <BulletPoints class="relative x-50 z-20 pt-20 md:pt-40 pb-12 md:pb-16" />
          </div>
          <div class="image-container blur-sm">
            <img :src="require(`#/assets/images/photos/cover.jpg`)" class="opacity-50" />
          </div>
        </div>
      </div>
    </section>

    <section id="join-outsite" class="bg-brand-200 relative z-20 bg-hero-falling-triangles">
      <JoinOptions />
    </section>

    <section class="relative t2">
      <Highlights class="relative z-10" :excerpts="true" />
    </section>

    <section id="video" class="pb-16 mb-24">
      <Video :title="$t('video.title')" url="https://www.youtube-nocookie.com/embed/zWWvERxW5rM" />
      <a href="https://www.youtube.com/watch?v=zMjnI6Ql3js" target="_blank">
        <button class="button-pink tracking-normal text-lg normal-case font-semibold flex items-center mx-auto mt-8">
          Check ook de Outsite documentaire
          <Zondicon icon="arrow-right" class="fill-current w-3 h-3 ml-2" />
        </button>
      </a>
    </section>

    <section id="activities" class="relative page-ender pt-48 md:pt-20 pb-16">
      <Testimonial class="absolute left-0 right-0 -mt-64 md:-mt-40" />
      <div class="container mx-auto px-4 relative z-10 mt-12">
        <InstagramChannels class="xl:w-2/3 mx-auto" :brands="instagramChannels">
          <template #title>
            <h1 class="tracking-wide font-semibold uppercase text-2xl mt-6 mb-10 text-center">
              {{ $t('instagram.title') }}
            </h1>
          </template>
        </InstagramChannels>
      </div>
    </section>
  </div>
</template>

<script>
import Zondicon from 'vue-zondicons'
import Panda from '#/assets/images/outsite_panda_cropped.svg?inline'

export default {
  components: {
    Zondicon,
    Panda,
  },
  async asyncData({ $content, app }) {
    return {
      barOpeningHours: (await $content(`opening_hours`).fetch()).events.filter(
        (event) => event.day.en === 'Thursday'
      )[0],
    }
  },
  data() {
    return {
      instagramChannels: [
        {
          name: 'Outsite',
          subtitle: { nl: 'Donderdagen', en: 'Thursdays' },
          widgetId: '624d8645cce75e45bae0a87c9c761cd6',
          instagram: 'outsite_delft',
        },
      ],
    }
  },
}
</script>

<style scoped>
.information {
  @apply w-full overflow-hidden;
  transform: skewY(-7deg);
  z-index: 1;
}

.information-content {
  transform: skewY(7deg);
}

.t2::before {
  @apply bg-gray-200 absolute w-full;
  height: 100%;
  transform: skewY(-7deg);
  transform-origin: bottom left;
  content: '';
  z-index: 0;
  top: 0px;
}

.t2 {
  @apply relative z-10;
}

.page-ender::before {
  @apply bg-gray-200 absolute w-full;
  height: 150%;
  transform: skewY(-7deg);
  content: '';
  z-index: 0;
  top: 0px;
}

.panda {
  z-index: 0;

  width: 100%;
  height: inherit;

  bottom: 0rem;
  left: 5rem;
}

.introduction {
  margin-bottom: -10rem;
}

.image-container {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
