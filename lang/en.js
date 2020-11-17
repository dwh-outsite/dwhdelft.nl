import barbuddies from '~/lang/en_barbuddies.js'
import chatGroups from '~/lang/en_chat_groups.js'

export default {
  menu: [
    { title: 'Home', url: localePath => localePath('index') },
    { title: 'Join DWH', url: localePath => localePath('index') + '#join-dwh' },
    { title: 'Reservations', url: localePath => localePath('book') },
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
    invitation: `We are <strong>temporarily closed</strong> due to COVID-19.`
  },
  activities: {
    title: 'Upcoming activities',
    defaults: {
      bar: {
        banner_title: 'Weekly bar night',
        banner_subtitle: 'Open for everyone',
        title: 'Bar Night',
        date: 'Every Saturday from 7pm'
      },
      eating_out: {
        banner_title: 'Weekly dinner',
        banner_subtitle: 'Members only, registration required',
        title: 'EatingOUT',
        date: 'Every Tuesday at 6.30pm'
      }
    }
  },
  ways_to_join: {
    title: 'Ready to check out <strong>DWH</strong>?',
    description: `You're always welcome on a Saturday night during a bar night. Do you think this is too exciting or
    frightening? Then you can make use of our bar buddy system!`,
    outsite_hint: `Are you 28 years or younger? Take a look at
      <a href="https://outsite.nl/" class="font-bold">Outsite</a>, the youth division of our association.`,
    bar_buddy: {
      title: 'Bar Buddy System',
      description: `If you are looking to come by on a Saturday night but you are not yet familiar with the society you
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
    button: {
      title: `<strong>Book a table</strong> for one of our activities`,
      note: `Bookings are mandatory due to COVID-19`
    },
    closed_notice: {
      title: `We are <strong>temporarily closed</strong> due to COVID-19.`
    },
    events: [
      {
        name: 'EatingOUT',
        note: 'Members only',
        day: 'Tuesday',
        time: '----',
        description: `On Tuesdays we gather around the dinner table to enjoy a delicious meal cooked by one of our
          members, sometimes with an activity afterwards.`,
        buttonText: 'Sign Up',
        buttonLink: 'https://dwhdelft.nl/eatingout'
      },
      {
        name: 'Fillum',
        day: 'Wednesday',
        time: '----',
        description: `The one and only gay movie night in Delft: Come by and watch both newly released movies as well as
          old classics.`,
        buttonText: 'Programme <small>(For Members)</small>',
        buttonLink: 'http://homodelft.nl/films/'
      },
      {
        name: 'Outsite',
        note: 'Max. 28 years old',
        day: 'Thursday',
        time: '----',
        description: `Our bar night for everyone 28 and under. Come have a drink at the bar, and check our Outsite
          website for upcoming events and more.`,
        buttonText: 'Head to Outsite.nl',
        buttonLink: 'https://outsite.nl/en'
      },
      {
        name: 'Open Bar Night',
        day: 'Saturday',
        time: '----',
        description: `Saturday night is thé queer bar night of Delft. Meet new people, come dance at our regular
          parties, and join one of our many events!`
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
      submit: 'Submit',
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
  chatgroups: {
    title: 'Chat groups',
    join: 'Join',
    main_text: `
      Talking to each other doesn't stop outside our bar nights, and for all the many interests and goals we have a
      whole lot of chat groups. Because they're not obvious to find otherwise we've created this absolutely fabulous
      overview!<br /><br />
      Want to join a group but don't see a link? Send a message to the
      <a href="https://api.whatsapp.com/send?phone=+31637560270" target="_blank" class="text-purple-500">
      association phone (+31 6 3756 0270)</a> with the chats you'd like to join.
    `,
    categories: chatGroups
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
      bullying. In high schools, the word gay is unfortunately too often used as a term of abuse. This shows that young
      people often don’t have a grasp of what constitutes homosexuality, which sometimes can result in incomprehension
      and harassment.<br />
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
  },
  steunons: {
    title: 'Support us',
    volunteering: `<strong>Volunteers</strong><br />
      DWH is fully dependent on its volunteers. Every year there are more than a 100
      volunteers active in the DWH. Our volunteers organize a lot of activities, are
      bartending, giving education in schools, and so much more. Would you like to be a
      volunteer? Approach us in the bar or send us a mail to
      <a href="mailto:bestuur@dwhdelft.nl" class="text-purple-500">bestuur@dwhdelft.nl</a>.`,
    membership_title: '<strong>Membership</strong>',
    membership_post: `More information and signup form can be found by following this
      <a href="https://dwhdelft.nl/en/signup/" class="text-purple-500">link</a>.`,
    donate: `<strong>Donating</strong><br />
      By donating you can support the DWH financially. Extra funds could always be put to
      good use to organize more activities for the LGBT+ community, offering a meeting
      place for LGBT+ people, giving education on schools and so much more.<br />
      <br />
      You can donate by transferring money to IBAN: NL75 INGB 0003 2492 37 t.n.v.
      DWH ledenadministratie. If you want to gift yearly and put it on paper you can
      fill in the form below and send it to
      <a href="mailto:penningmeester@dwhdelft.nl" class="text-purple-500">
      penningmeester@dwhdelft.nl</a> By also filling out the direct debit (incasso)
      form the donation can be done automatically every year.<br />
      <br />
      <strong>Tax deduction</strong><br />
      The Delftse Werkgroep Homoseksualiteit (DWH) has an
      <a href="https://dwhdelft.nl/en/anbi/" class="text-purple-500">ANBI
      (public benefit institution) status</a>. Under certain conditions your donation might
      be tax deductible. For the exact conditions for which this tax deduction applies we
      refer to the 
      <a href="https://www.belastingdienst.nl/wps/wcm/connect/nl/aftrek-en-kortingen/content/gift-aftrekken"
      class="text-purple-500">website of the Dutch tax authorities</a><br />
      <br />
      For any further questions about donating to the DWH please send us a mail to
      <a href="mailto:penningmeester@dwhdelft.nl" class="text-purple-500">
      penningmeester@dwhdelft.nl</a>`,
    andersblad_ads: `<strong>Adverteren in het Andersblad</strong><br />
      The <a href="https://dwhdelft.nl/en/andersblad" class="text-purple-500">
      Andersblad</a> is the magazine of the DWH. It has 3 issues every year (at the end
      of April, Agusust and December). The Andersblad is always full of great articles,
      opinion pieces, photo’s and much more. The magazine is distributed among all our
      members and our many partners. There are always more than 300 copies produced for
      every issue.<br />
      <br />
      There are opportunities for you to advertise in our magazine. Send a mail to
      <a href="mailto:penningmeester@dwhdelft.nl" class="text-purple-500">
      penningmeester@dwhdelft.nl</a> for the current rates and options.`,
    sponsorkliks: `<strong>Sponsorkliks</strong><br />
      By ordering goods online through our Sponsorkliks link
      <a href="https://dwhdelft.nl/sponsorkliks" class="text-purple-500">
      dwhdelft.nl/sponsorkliks</a> you can sponsor the DWH for free! For every purchase
      through our link we will get a small commission fee. Money that we get through
      Sponsorkliks is directly added to one of our (rotating) committees. This way you
      can help us in an easy way to realize our goals and organize more activities.`
  },
  bookings: {
    title: 'Reservations',
    title_label: 'Events',
    description_title: '<strong>Welcome back</strong> at DWH',
    description: `
      We are happy to welcome you again in these times of corona! Although it will be different than usual,
      you can enjoy a fun bar evening, a cool movie or a nice meal with your friends at our building.
      <br />
      <br />
      We ask you to pay special attention to a few matters. First of all, we appreciate if you make a
      <strong>table booking</strong>, you can do so below. Bookings are individual and upon entrance you can
      choose your seat at one of our tables for 2-4 persons (everybody will sit 1.5 metres apart). Are you
      visiting with somebody from your own household? Then we have several seats for two persons available,
      where you are allowed to stay within 1.5 metres of each other. You are also welcome without a booking,
      in that case we will make a booking for you <strong>on the spot</strong>.
      <br />
      <br />
      Upon entrance we ask you to desinfect your hands, afterwards you can choose the seat you would like to
      sit. At the barevening you will be served at your table, with this measure we want to prevent you from
      walking too much and crossing paths with other visitors. Aside from this, we ask you to not keep the
      aisles occupied when it's not necessary: you are not suppose to have conversations at other tables.
      This way, we can keep it <strong>safe and responsible</strong> for everybody.
      <br />
      <br />
      Do you have questions or a nice suggestion? Contact us via the information at the bottom of this page.
    `,
    form_information: {
      title: '<strong>Book a table</strong> in times of COVID-19',
      description: `
      On the left you can make a reservation for a seat during one of our events. To keep it as safe and fair as
      possible for everybody, we apply the following measures.
      `,
      rules: [
        'The reservation expires 1 hour after the start of the timeslot',
        `There is a limit of one open booking for the Thursday and Saturday nights. Once the evening has finished,
        you can immediately make a new booking. This way we give everyone the opportunity to visit us`,
        'Moving a reservation is possible by cancelling via the confirmation mail and making a new reservation',
        'Two-seaters are meant for people from the same household',
        `If there are no two-seaters available anymore and you want to come with two persons, you can make two
        individual reservations. If it is possible, you can still sit together.`
      ],
      rules_disclaimer: `
        We understand that these measures may not be the most ideal measures for everybody. When possible and if
        necessary, we will adjust the measures to keep it as fun as possible for everybody. Any suggestions are
        always welcome via the contact details below.
      `
    },
    form: {
      title: 'Reservation',
      ggd_consent: `
        I consent to share my information with the municipal health service (GGD) to support contact tracing if
        requested.
      `,
      seats: {
        one_person_seat: 'Individual seat',
        two_person_seat: 'Two-person seat',
        within_distance: '(within 1.5 metre)',
        unavailable: 'No longer available'
      },
      time_slot: `Timeslot`,
      seat_type: `Type of Seat`,
      soon: `
        It will soon be possible to book a table via this page. Hope to see you soon!
      `,
      thank_you: `
        Thank you for making a reservation! You will receive an e-mail with your proof of reservation. If you need to
        cancel, you can do so via the e-mail you will receive.
      `,
      disclaimer: `
      By submitting this form you allow DWH to save your information and to process it. Your information will only be
      used to check reservations and for the possibility to get in touch with you. If you have more questions, please
      contact us via the information below.
      `,
      oops: 'Oops.',
      validation: {
        A_guest_can_only_have_one_open_booking: `
          You already have an active reservation for the coming days. You can only have one open booking at a time.
        `
      }
    },
    canceled: `
      Your reservation is cancelled. If you want, you can make a new reservation down below.
    `,
    general_rules: [
      'Wash your hands regularly',
      'Cough and sneeze in your elbow',
      'Pay contactless with your phone of card',
      "Don't shake hands and say no to hugs",
      'Keep a distance of 1.5 metres from others',
      'Do you have health complaints? Stay home!'
    ]
  },
  remembrance_day: {
    title: 'DWH Wreath-Laying',
    title_label: 'Remembrance Day 2020',
    description: `
      On Remembrance Day we commemorate all victims of wars together. This year is different from other years. Maybe you
      visit, like many of us, the local commemoration of Remembrance Day with your family or friends every year. This
      year however, it’s not safe to physically be together. This is why we want to remember via this website all Dutch
      victims of World War II and military conflicts and peacekeeping missions after this. We ask you to commemorate
      together with us, by joining our virtual wreath-laying below.<br />
      <br />
      In particular we want to remember the oppression and persecution of LGBT+ people across the world, during and
      after the second World War. The war played a large role in it. Though few LGBT+ people in the Netherlands were
      directly persecuted, the first steps forward LGBT+ emancipation had made were unmade. The first transgender clinic
      of the world, in Berlin, was destroyed and its archives burned. The world would have to wait until the seventies
      for the second one.<br />
      <br />
      Remembering our history also spurs us on to stay vigilant. We are proud of all the progress made in this country,
      but we must remember that progress and emancipation are not a given. It can halt or relapse if our attention
      lapses.<br />
      <br />
      In this, we cannot be selfish. Our freedom to be who we are and love whom we love is, as history tells us,
      entwined with the rights of others to be themselves in their way. Freedom kept is freedom shared. The same goes in
      the current crisis: no single group can stop it, only shared responsibility can. Let us remember the past and the
      present, and not forget this lesson after this crisis either.
    `,
    wreath_laying: {
      title: 'Lay a wreath together with us',
      description: `
        This year we do not have the possibility to lay a phisical wreath, therefore we ask you to lay a virtual wreath,
        together with us. Below you find the virtual wreath-layers so far.
      `,
      board_label_dwh: 'DWH Board',
      board_label_outsite: 'Outsite Board'
    },
    form: {
      title: 'Lay a virtual wreath',
      thank_you: 'Thank you! It is no longer possible to participate.',
      disclaimer: `
        By submitting this form, you agree to give DWH the permission to publicly publish your name on this page. Your
        data will be removed when this page is taken down. In case of any questions, please contact us via the contact
        details below.
      `
    },
    video_description: `
      Last year, in 2019, former DWH president Michel Fleur and former Outsite president Casper Boone laid flowers on
      behalf of DWH during the commemoration of Remembrance Day in Delft.
    `
  }
}
