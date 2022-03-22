<i18n lang="yaml">
en:
  hero:
    title: LGBT+ association since 1968
    subtitle: For everyone in the Delft area!
    leftButton: Check out DWH
    rightButton: Opening Hours
  description:
    text:
      - "DWH is the independent LGBT+ association of Delft and surroundings. We're two things: a meeting place for
        LGBT+ people and their friends and a group that actively pushes for greater LGBT+ rights and acceptance. As the
        latter, we give lectures at schools, have introduction groups for newly out people and organise public events
        arounds dates like coming out day."
      - 'As a meeting place we are open regularly on four nights a week with a weekly dinner, movie night and two bar
        nights. We also organise all sorts of activities throughout the year: queer dance parties every other month,
        beer tastings, workshops, pub crawls and even vacations. See our upcoming events below!'
    invitation: 'Come by during one of our bar nights:<br> <strong>Every Saturday starting at {0}</strong>'
nl:
  hero:
    title: LHBT+ vereniging sinds 1968
    subtitle: Voor iedereen in Delft en omgeving!
    leftButton: Kom naar DWH
    rightButton: Openingstijden
  description:
    text:
      - "DWH is dé onafhankelijke LHBT+ vereniging van Delft en omgeving. We zijn twee dingen: een ontmoetingsplek
        voor LHBT+ mensen en hun vrienden en een groep die actief strijdt voor meer LHBT+ rechten en acceptatie. In die
        tweede rol organiseren we voorlichtingen op scholen, introductiegroepen voor jongeren die net uit de kast zijn en
        allerlei openbare events rond dagen als coming out dag."
      - 'Als ontmoetingsplek zijn we vier dagen per week geopend, met een wekelijkse eettafel, filmavond en twee
        baravonden. Daarnaast hebben we allerlei activiteiten door het jaar heen: queer dansfeesten om de maand,
        bierproeverijen, workshops, pub crawls en zelfs vakanties. Zie onze aankomende events hieronder!'
    invitation: 'Kom gerust langs op onze baravond: <br> <strong>Elke zaterdag vanaf {0}</strong>'
</i18n>

<template>
  <div>
    <Header>
      <h1 class="text-4xl text-white font-normal" v-text="$t('hero.title')" />
      <h2 class="text-2xl text-white mt-2 font-light" v-text="$t('hero.subtitle')" />
      <div class="mt-8 flex">
        <a href="#join-dwh">
          <button class="block button-pink" v-text="$t('hero.leftButton')" />
        </a>
        <a href="#recurring_events">
          <button class="block ml-4 button-white" v-text="$t('hero.rightButton')" />
        </a>
      </div>
    </Header>

    <section class="introduction overflow-x-hidden">
      <div class="container mx-auto pt-12 pb-24 md:flex">
        <div class="flex-1 px-4 lg:pr-32">
          <p
            v-for="paragraph in $t('description.text')"
            :key="paragraph"
            class="text-lg md:text-xl md:leading-relaxed text-gray-800 mb-4"
            v-html="paragraph"
          />
          <Invitation :content="$t('description.invitation', [barOpeningHours.start_time])" />
        </div>
        <div class="hidden lg:block">
          <div class="bg-white p-4 border rotate shadow-lg relative z-50 mr-8 -mt-7">
            <img src="../../../assets/images/photos/building.jpg" class="w-96" />
          </div>
        </div>
      </div>
    </section>

    <section class="information relative pt-12">
      <div class="z-10 relative">
        <Activities />
      </div>
    </section>

    <section id="join-dwh" class="bg-brand-500 relative z-10">
      <JoinOptions />
    </section>

    <section id="recurring_events" class="bg-white relative z-10">
      <RecurringEvents />
    </section>

    <section id="eatingout" class="bg-gray-200">
      <EatingOut />
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, app }) {
    return {
      barOpeningHours: (await $content(`opening_hours`).fetch()).events.filter(
        (event) => event.day.en === 'Saturday'
      )[0],
    }
  },
}
</script>

<style scoped>
.information::before {
  @apply bg-brand-100 absolute w-full;
  height: 250%;
  transform: skewY(-7deg);
  content: '';
  z-index: 0;
  top: 0px;
}

.panda {
  z-index: -2;

  width: 100%;
  height: inherit;

  bottom: 0rem;
  left: 5rem;
}

.introduction {
  margin-bottom: -10rem;
}

.rotate {
  transform: rotate(5deg);
}
</style>
