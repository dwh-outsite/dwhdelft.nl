import barbuddies from '~/lang/en_barbuddies.js'

export default {
  hero: {
    title: 'DWH LGBT+ society',
    subtitle: "Delft's society for queer people",
    leftButton: 'Join DWH',
    rightButton: 'Watch video'
  },
  description: {
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ultrices mauris, at congue lectus. Sed
      sagittis, risus in rhoncus pretium, risus ex suscipit nisl, vitae finibus metus dui vel dui. Morbi iaculis, ex at
      blandit suscipit, nulla quam tincidunt urna, id consectetur nulla risus non erat. Fusce pretium nisl a tristique
      interdum.
      <br>
      <br>
      Vivamus ipsum risus, gravida eu porta auctor, tincidunt eget risus. Vestibulum imperdiet luctus leo, a vestibulum 
      massa ullamcorper sit amet. Suspendisse potenti. Quisque laoreet convallis diam, nec sollicitudin eros vestibulum 
      eget. In est nulla, mollis quis posuere sed, lobortis vitae metus.`,
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
    kmg: {
      title: 'Introduction Group (in dutch: KMG)',
      description: `It is twice a year that DWH organizes the introduction groups. These groups are a chance to not
      get to know the society but also to become close to other LGBT+ youth, all under supervision of two experienced
      DWH members. It is a chance to share your coming out stories in a close group and to visit queer parties
      amongst others.`,
      action: 'Join the KMG',
      sign_up: 'Sign up for the KMG',
      next: `<strong>The Introduction Group of September is full</strong>, but don’t worry! In February there will be
      another Introduction Group starting. You can already register for that one, please let us know in the comments
      that you would like to join that one. In the mean time you are ofcourse very welcome every Friday from 10pm at
      the regular bar evenings! You can also ask for a <a href="/en/barbuddy" class="text-purple-500">barbuddy</a> who
      can show you around and introduce you to some people.`
    },
    bar_buddy: {
      title: 'Bar Buddy System',
      description: `If you are looking to come by on a Friday night but you are not yet familiar with the society you
        can make use of the bar buddy system! A bar buddy is someone who can not only tell you all there is to know
        about DWH but they can also introduce you to new people.`,
      sign_up: 'Sign up for a bar buddy',
      action: 'Find a bar buddy',
      meet_up_with: 'Meet up with',
      barbuddies_title: 'Our <strong>Bar Buddies</strong>',
      read_more: 'Read more',
      read_less: 'Collapse'
    }
  },
  video: {
    title: '<strong>DWH</strong> in 120 seconds'
  },
  forms: {
    label: {
      name: 'How should we call you?',
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
      pronouns: 'Pronouns',
      barbuddy: 'Who would you like to meet?'
    },
    placeholder: {
      name: 'Name',
      email: 'Email address',
      remarks: 'Remarks or questions',
      date_of_birth: 'Date of birth',
      phone_number: 'Phone number',
      residence: 'City name',
      pronouns: 'e.g. she/her, he/him, they/them'
    },
    buttons: {
      sign_up: 'Sign up',
      loading: 'Loading'
    },
    success: {
      heading: 'The form has been submitted successfully',
      barbuddy: 'The bar buddy you selected will contact you as soon as possible.'
    }
  },
  footer: {
    newsletter: {
      description: 'Stay up to date, subscribe to the <strong>DWH newsletter</strong>',
      button: 'Subscribe now'
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
  barbuddies
}
