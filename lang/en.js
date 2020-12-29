import chatGroups from '~/lang/en_chat_groups.js'

export default {
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
        no_preference: 'No preference',
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
      iban: 'IBAN number for payment by direct debit',
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
      iban: 'IBAN number',
    },
    buttons: {
      sign_up: 'Sign up',
      submit: 'Submit',
      loading: 'Loading',
    },
    success: {
      heading: 'The form has been submitted successfully',
      membership: 'We will send you an e-mail soon to confirm your membership.',
    },
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
    categories: chatGroups,
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
      discounted: 'Reduced (€ 25,00)',
    },
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
        individual reservations. If it is possible, you can still sit together.`,
      ],
      rules_disclaimer: `
        We understand that these measures may not be the most ideal measures for everybody. When possible and if
        necessary, we will adjust the measures to keep it as fun as possible for everybody. Any suggestions are
        always welcome via the contact details below.
      `,
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
        unavailable: 'No longer available',
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
        `,
      },
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
      'Do you have health complaints? Stay home!',
    ],
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
      board_label_outsite: 'Outsite Board',
    },
    form: {
      title: 'Lay a virtual wreath',
      thank_you: 'Thank you! It is no longer possible to participate.',
      disclaimer: `
        By submitting this form, you agree to give DWH the permission to publicly publish your name on this page. Your
        data will be removed when this page is taken down. In case of any questions, please contact us via the contact
        details below.
      `,
    },
    video_description: `
      Last year, in 2019, former DWH president Michel Fleur and former Outsite president Casper Boone laid flowers on
      behalf of DWH during the commemoration of Remembrance Day in Delft.
    `,
  },
}
