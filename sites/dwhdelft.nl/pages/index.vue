<i18n lang="yaml">
en:
  hero:
    title: LGBT+ in Delft and surroundings
    subtitle: DWH is the community for everyone, to meet up with each other, support each other, and to fight for our rights together.
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
    title: LHBT+ in Delft en omgeving
    subtitle: DWH is de community voor iedereen, om elkaar te ontmoeten, elkaar te supporten, en samen voor onze rechten op te komen.
    leftButton: Kom naar DWH
    rightButton: Openingstijden
  description:
    text:
      - 'DWH is dé onafhankelijke LHBT+ vereniging van Delft en omgeving. We zijn twee dingen: een ontmoetingsplek
        voor LHBT+ mensen en hun vrienden en een groep die actief strijdt voor meer LHBT+ rechten en acceptatie. In die
        tweede rol organiseren we voorlichtingen op scholen, introductiegroepen voor jongeren die net uit de kast zijn en
        allerlei openbare events rond dagen als coming out dag.'
      - 'Als ontmoetingsplek zijn we vier dagen per week geopend, met een wekelijkse eettafel, filmavond en twee
        baravonden. Daarnaast hebben we allerlei activiteiten door het jaar heen: queer dansfeesten om de maand,
        bierproeverijen, workshops, pub crawls en zelfs vakanties. Zie onze aankomende events hieronder!'
    invitation: 'Kom gerust langs op onze baravond: <br> <strong>Elke zaterdag vanaf {0}</strong>'
</i18n>

<template>
  <div>
    <Header>
      <h1 class="text-4xl text-white font-normal" v-text="$t('hero.title')" />
      <h2
        class="text-2xl text-white mt-2 font-light md:w-2/3 lg:w-1/2 [text-shadow:0_2px_4px_rgba(0,0,0,0.35)]"
        v-text="$t('hero.subtitle')"
      />
      <div class="mt-8 md:flex space-y-4 md:space-y-0 md:space-x-4">
        <a href="#join-dwh" class="block">
          <button class="button-pink" v-text="$t('hero.leftButton')" />
        </a>
        <a href="#recurring_events" class="block">
          <button class="button-white" v-text="$t('hero.rightButton')" />
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
          <div class="bg-white p-4 border rotate-[5deg] shadow-lg relative z-50 mr-8 -mt-7">
            <img src="../../../assets/images/photos/building.jpg" class="w-96" />
          </div>
        </div>
      </div>
    </section>

    <div class="-mt-64">
      <SkewedSection
        content-class="bg-brand-100 pt-24 md:pt-12 pb-12"
        triangle-class="border-brand-100"
        :bottom="false"
      >
        <BulletPoints />
      </SkewedSection>
    </div>

    <section id="join-dwh" class="bg-brand-500">
      <JoinOptions />
    </section>

    <section id="recurring_events" class="bg-white">
      <RecurringEvents />
    </section>

    <section class="-mt-24">
      <SkewedSection content-class="bg-brand-800" triangle-class="border-brand-800" :bottom="false">
        <div class="container mx-auto px-4 pt-12 pb-16">
          <InstagramChannels class="text-white" :brands="instagramChannels" />
        </div>
      </SkewedSection>
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
  data() {
    return {
      instagramChannels: [
        {
          name: 'DWH',
          subtitle: { nl: 'Organisatie', en: 'Organisation' },
          widgetId: '9555f325abc15974a4a4e4ef0eadfa0a',
          instagram: 'dwh_delft',
        },
        {
          name: 'Outsite',
          subtitle: { nl: 'Donderdagen', en: 'Thursdays' },
          widgetId: '624d8645cce75e45bae0a87c9c761cd6',
          instagram: 'outsite_delft',
        },
        {
          name: 'MIXUP',
          subtitle: { nl: 'Zaterdagen', en: 'Saturdays' },
          widgetId: '219aedf13a4355fe95c6e27ed1f7386c',
          instagram: 'mixupdelft',
        },
      ],
    }
  },
}
</script>
