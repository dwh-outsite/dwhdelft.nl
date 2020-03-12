import barbuddies from '~/lang/en_barbuddies.js'

export default {
  menu: [
    { title: 'Home', url: localePath => localePath('index') },
    { title: 'Join DWH', url: localePath => localePath('index') + '#join-dwh' },
    { title: 'EatingOUT', url: localePath => localePath('index') + '#eatingout' },
    { title: 'Education', url: localePath => localePath('education') },
    { title: 'Andersblad', url: localePath => localePath('andersblad') },
    { title: 'Contact', url: () => '#contact' }
  ],
  hero: {
    title: 'LGBT+ association since 1968',
    subtitle: 'For everyone in the Delft area!',
    leftButton: 'Check out DWH',
    rightButton: 'Opening Hours'
  },
  description: {
    text: `DWH is the independent LGBT+ association of Delft and surroundings. We're two things, a meeting place for
      LGBT+ people and their friends and a group that actively pushes for greater LGBT+ rights and acceptance. As the
      latter, we give lectures at schools, have introduction groups for newly out people and organise public events
      arounds dates like coming out day.
      <br>
      <br>
      As a meeting place we are open regularly on four nights a week with a weekly dinner, movie night and two bar
      nights. We also organise all sorts of activities throughout the year: queer dance parties every other month,
      beer tastings, workshops, pub crawls and even vacations. See our upcoming events below!`,
    invitation: 'Come by during one of our bar nights:<br> <strong>Every Friday starting at 22:00</strong>'
  },
  activities: {
    title: 'Upcoming activities',
    defaults: {
      bar: {
        banner_title: 'Weekly bar night',
        banner_subtitle: 'Open for everyone',
        title: 'Bar Night',
        date: 'Every Friday from 10pm'
      },
      eating_out: {
        banner_title: 'Weekly dinner',
        banner_subtitle: 'Members only, registration required',
        title: 'EatingOUT',
        date: 'Every Tuesday at 7pm'
      }
    }
  },
  ways_to_join: {
    title: 'Ready to check out <strong>DWH</strong>?',
    description: `You're always welcome on a Friday night during a bar night. Do you think this is too exciting or
    frightening? Then you can make use of our bar buddy system!`,
    outsite_hint: `Are you 28 years or younger? Take a look at
      <a href="https://outsite.nl/" class="font-bold">Outsite</a>, the youth division of our association.`,
    bar_buddy: {
      title: 'Bar Buddy System',
      description: `If you are looking to come by on a Friday night but you are not yet familiar with the society you
        can make use of the bar buddy system! A bar buddy is someone who can not only tell you all there is to know
        about DWH but they can also introduce you to new people.`,
      thursday_note: `28 years or younger? Check <a href="https://outsite.nl/barbuddy" class="underline">Outsite</a> to
        visit us on a Thursday`,
      sign_up: 'Sign up for a bar buddy',
      action: 'Find a bar buddy',
      meet_up_with: 'Meet up with',
      barbuddies_title: 'Our <strong>Bar Buddies</strong>',
      read_more: 'Read more',
      read_less: 'Collapse'
    }
  },
  recurring_events: {
    announcement: '<strong>DWH</strong> is open 4 nights a week',
    saturday: {
      title: `<strong>Soon</strong> we will also opened on <strong>Saturdays</strong> from
        <strong>9pm</strong>!`,
      note: `Open for everyone`
    },
    events: [
      {
        name: 'EatingOUT',
        note: 'Members only',
        day: 'Tuesday',
        time: '19:00',
        description: `On Tuesdays we gather around the dinner table to enjoy a delicious meal cooked by one of our
          members, sometimes with an activity afterwards.`,
        buttonText: 'Sign Up',
        buttonLink: '/eatingout'
      },
      {
        name: 'Fillum',
        day: 'Wednesday',
        time: '21:15',
        description: `The one and only gay movie night in Delft: Come by and watch both newly released movies as well as
          old classics.`,
        buttonText: 'Programme <small>(For Members)</small>',
        buttonLink: 'http://homodelft.nl/films/'
      },
      {
        name: 'Outsite',
        note: 'Max. 28 years old',
        day: 'Thursday',
        time: '22:00',
        description: `Our bar night for everyone 28 and under. Come have a drink at the bar, and check our Outsite
          website for upcoming events and more.`,
        buttonText: 'Head to Outsite.nl',
        buttonLink: 'https://outsite.nl/en'
      },
      {
        name: 'Open Bar Night',
        day: 'Friday',
        time: '22:00',
        description: `Friday night is thé queer bar night of Delft. Meet new people, come dance at our regular parties,
          and join one of our many events!`
      }
    ]
  },
  eating_out: {
    title: 'EatingOUT: Our weekly dinner',
    subtitle: 'Every Tuesday, for just 4 euros',
    button: 'Sign up for the next EatingOUT now',
    notes: ['Members only', 'Sign-up required']
  },
  forms: {
    label: {
      name: 'How should we call you?',
      firstname: 'First Name',
      lastname: 'Last Name',
      initials: 'Initials',
      email: 'Email address',
      language: 'Language',
      languages: {
        dutch: 'Dutch',
        english: 'English',
        no_preference: 'No preference'
      },
      remarks: 'Do you have any further questions?',
      date_of_birth: 'Date of birth',
      phone_number: 'Phone number',
      residence: 'City of residence',
      address: 'Address',
      postal_code: 'Postal Code',
      pronouns: 'Pronouns',
      barbuddy: 'Who would you like to meet?',
      membership_fee: 'Membership Fee (see below)',
      iban: 'IBAN number for payment by direct debit'
    },
    placeholder: {
      name: 'Name',
      firstname: 'First name',
      lastname: 'Last name',
      initials: 'Initials (for example Q.B.)',
      email: 'Email address',
      remarks: 'Remarks or questions',
      date_of_birth: 'Date of birth',
      phone_number: 'Phone number',
      residence: 'City name',
      address: 'Address',
      postal_code: 'Postal code (for example 2611PV)',
      pronouns: 'e.g. she/her, he/him, they/them',
      iban: 'IBAN number'
    },
    buttons: {
      sign_up: 'Sign up',
      loading: 'Loading'
    },
    success: {
      heading: 'The form has been submitted successfully',
      barbuddy: 'The bar buddy you selected will contact you as soon as possible.',
      membership: 'We will send you an e-mail soon to confirm your membership.'
    }
  },
  footer: {
    newsletter: {
      description: 'Stay up to date, subscribe to the <strong>DWH newsletter</strong>',
      button: 'Subscribe'
    },
    leftTitle: 'Board',
    rightTitle: 'Contact',
    board: {
      president: 'President',
      secretary: 'Secretary',
      treasurer: 'Treasurer',
      youth: 'Commissioner Youth',
      general: 'Comissioner'
    }
  },
  barbuddies,
  andersblad: {
    title: 'Andersblad',
    main_text: `
      The association magazine of DWH is published several times a year. Earlier editions can be seen here in PDF
      format. The magazine is (partly) in Dutch.
    `,
    list_title: 'Editions'
  },
  anbi: {
    title: 'ANBI',
    main_text: `
      DWH has been designated a public benefit institution (in Dutch: algemeen nut beogende instelling or ANBI) by the
      tax authority. An ANBI should have certain information available on their website. For convenience, we have
      collected them all on this page. This English version is provided as an extra convenience, the official version is
      the Dutch page.<br />
      <br />
      <strong>Name</strong><br />
      Delftse Werkgroep Homoseksualiteit (D.W.H.)<br />
      The shortened name of the association is DWH.<br />
      <br />
      <strong>Rechtspersonen Samenwerkingsverbanden Informatie Nummer</strong><br />
      RSIN: 807864250<br />
      <br />
      <strong>Goal</strong><br />
      DWH is thé association by and for LGBT+ people in Delft that looks out for the LGBT+ community and their needs in
      this city and independently promotes the emancipation and awareness of LGBT+ people. DWH does this as much as
      possible in collaboration with other organisations at a local, national and international level.<br />
      <br />
      The vision of the association is as follows:<br />
      <ul class="list-disc ml-8">
        <li>DWH fights hetero normativity and promotes the acceptation and itegration of LGBT+ lifestyles;</li>
        <li>DWH stimulates societal discussion, awareness and change on issues of homosexuality, bisexuality and
            transgenders;</li>
        <li>DWH creates a friendly and safe environment as a basis for LGBT+ emancipation;</li>
        <li>DWH involves as many people as possible, inside and outside the association, with participation and
            organisation of its activities;</li>
        <li>DWH connects people. Specifically also the various subgroups in the association.</li>
      </ul>
      <br />
      <strong>Recompense policy</strong><br />
      The board members as well as other volunteers at DWH are unpaid. The board does have the means to provide
      compensation to members and volunteers for costs they incurred because of the association, which is done in
      accordance with the budget and reasonable bounds of good faith and fair dealing as it is commonly done in broader
      society. In practice only expenses claims pertaining to tasks performed in service of DWH are compensated.
      By the statutes of DWH the consent of the general assembly is required for starting, changing or terminating
      employment contracts.
    `,
    annual_report: `
      <strong>Report of past activities</strong><br />
      For a report of past activities we refer the reader to our annual report. Each year DWH creates and approves an
      annual report which contains among other things an account of completed activities over the preceding year.
      The most recent such report can be found here:
    `,
    annual_plan: `
      <strong>Policy plan</strong><br />
      For the policy plan we refer the reader to the annual plan. The most recent annual plan can be found here:
    `,
    financial: `
      <strong>Financial account</strong><br />
      For a financial account we refer the reader to the annual account. Each year DWH creates and approves the annual
      account in which the financial report and account of the preceding year is recorded.
    `
  },
  education: {
    title: 'Education',
    main_text: `
      Who doesn’t remember puberty? A period with many changes… Hair begins to grow in places, you start being
      independent from your parents and you fall in love for the first time! But what if you fall in love with someone
      of the same gender?<br />
      <br />
      Many LGBT youngsters can’t cope with this and don’t dare to come out because they fear they might be victims of
      bullying. In high schools, the word gay is unfortunately too often used as a term of abuse. When asked about what
      homosexuality means, the stereotypes, the most creative words for sex, and even pedophilia come up. This shows
      that young people don’t often have a grasp of what constitutes homosexuality, which sometimes can result in
      incomprehension and harassment.<br />
      <br />
      Through education we can show the young people that homosexuality is not that strange. By breaking stereotypes and
      explaining the sexual diversity terms, we get the youth to think actively about homosexuality and its meaning for
      themselves. Experience shows that after being informed, young people have more respect for sexual diversity and
      more importantly, for each other!<br />
      <br />
      DWH characterizes itself for having a predominantly young and enthusiastic team of educators. Through this small
      age difference with the high school students it is often easy for them to relate and identify to our educators.
      Do you want DWH to come to your school? Send us an email at
      <a href="mailto:voorlichting@dwhdelft.nl" class="text-purple-500">voorlichting@dwhdelft.nl</a>.<br />
      <br />
      See you soon!<br />
      Jeroen en Justin<br />
      Education Coordinators<br />
      <br />
      P.S. Are you a member of DWH and would you like to become an educator? Send us an email!
    `
  },
  signup: {
    title: 'Membership Signup',
    main_text: `
      By becoming a member you support us in the things that we find important, like the introduction groups, education
      at secondary schools, the movie night, the bar nights and all other activities at DWH.<br />
      <br />
      As a member you receive the magazine from DWH: the Andersblad, and you can join the EatingOUT where you can enjoy
      a cheap and delicious meal.
    `,
    fee_description: `
      The contribution fee of DWH is a minimum of € 48,50 / € 25,00  per year. A higher amount is of course very
      welcome.<br />
      <br />
      In a general assembly meeting, it was decided that the price differentiation for the membership fee is based on
      the ability to pay. In order not to make it too complicated, we use the following rule of thumb: For people aged
      under 25 or from pension age, the reduced fee of at least € 25,00 is applied.
      All other members pay the standard fee of € 48,50.<br />
      <br />
      There are exceptions:
      <ul class="list-disc ml-8">
        <li>People who would get the reduced rate but earn enough to pay for the standard rate, should pay the standard
            rate.</li>
        <li>People who would not get the reduced rate but can’t financially cope with paying the standard rate can
            contact the treasurer.</li>
        <li>When there is a change in the situation that would effect any of the above exceptions, it should be reported
            to the treasurer.</li>
      </ul>
    `,
    fees: {
      full: 'Regular (€ 48,50)',
      discounted: 'Reduced (€ 25,00)'
    }
  }
}
